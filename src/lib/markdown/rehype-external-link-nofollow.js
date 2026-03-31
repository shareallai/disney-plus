function toRelTokens(rel) {
  if (Array.isArray(rel)) {
    return rel.flatMap((value) => String(value).split(/\s+/)).filter(Boolean);
  }

  if (typeof rel === 'string') {
    return rel.split(/\s+/).filter(Boolean);
  }

  return [];
}

function parseHttpUrl(href, siteOrigin) {
  if (typeof href !== 'string' || !/^(https?:)?\/\//i.test(href)) {
    return null;
  }

  try {
    const parsed = new URL(href, siteOrigin);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

function normalizeOrigin(origin) {
  try {
    return new URL(origin).origin;
  } catch {
    return null;
  }
}

function hasRelToken(tokens, token) {
  const lowerToken = token.toLowerCase();
  return tokens.some((value) => String(value).toLowerCase() === lowerToken);
}

function removeRelToken(tokens, token) {
  const lowerToken = token.toLowerCase();
  return tokens.filter((value) => String(value).toLowerCase() !== lowerToken);
}

function visit(node, callback) {
  callback(node);

  if (!node || typeof node !== 'object' || !Array.isArray(node.children)) {
    return;
  }

  for (const child of node.children) {
    visit(child, callback);
  }
}

export function rehypeExternalLinkNofollow({ siteOrigin, followOrigins = [] }) {
  const normalizedSiteOrigin = normalizeOrigin(siteOrigin);
  const allowedFollowOrigins = new Set();

  if (normalizedSiteOrigin) {
    allowedFollowOrigins.add(normalizedSiteOrigin);
  }

  for (const followOrigin of followOrigins) {
    const normalizedFollowOrigin = normalizeOrigin(followOrigin);
    if (normalizedFollowOrigin) {
      allowedFollowOrigins.add(normalizedFollowOrigin);
    }
  }

  return (tree) => {
    visit(tree, (node) => {
      if (node?.type !== 'element' || node.tagName !== 'a') {
        return;
      }

      const href = node.properties?.href;
      const parsedUrl = parseHttpUrl(href, normalizedSiteOrigin);
      if (!parsedUrl) {
        return;
      }

      const relTokens = toRelTokens(node.properties?.rel);
      if (allowedFollowOrigins.has(parsedUrl.origin)) {
        const cleanedRelTokens = removeRelToken(relTokens, 'nofollow');
        node.properties = node.properties ?? {};

        if (cleanedRelTokens.length > 0) {
          node.properties.rel = cleanedRelTokens;
        } else {
          delete node.properties.rel;
        }

        return;
      }

      if (hasRelToken(relTokens, 'nofollow')) {
        return;
      }

      node.properties = node.properties ?? {};
      node.properties.rel = [...relTokens, 'nofollow'];
    });
  };
}
