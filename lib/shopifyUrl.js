export function buildShopifyUrl(pathOrUrl) {
  if (!pathOrUrl) return pathOrUrl;

  if (/^https?:\/\//i.test(pathOrUrl) || /^\/\//.test(pathOrUrl)) {
    return pathOrUrl;
  }

  const baseUrl = (process.env.NEXT_PUBLIC_SHOPIFY_BASE_URL || "").replace(/\/$/, "");
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;

  return baseUrl ? `${baseUrl}${path}` : path;
}
