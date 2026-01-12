/**
 * Resolves an asset path from the public directory.
 * Prepends the base URL (e.g., /anubha-jain-portfolio/) automatically.
 */
export function getAssetUrl(path: string | undefined): string {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('data:')) return path;
  
  // Get base URL from Vite (default is '/' in dev, '/repo-name/' in prod)
  const baseUrl = import.meta.env.BASE_URL;
  
  // Normalize: ensure base ends with slash and path doesn't start with one
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  
  return `${normalizedBase}${normalizedPath}`;
}
