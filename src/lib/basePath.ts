/**
 * Resolves the correct base path for assets across SSR and client hydration.
 * Ensures assets load reliably on GitHub Pages (/cenlaro-site) and in local development.
 */
export function getAssetUrl(path: string | undefined | null): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }

  // Ensure clean leading slash
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // 1. Build-time / runtime explicit environment variable
  const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (envBasePath) {
    // Avoid double prefixing if path already includes envBasePath
    if (cleanPath.startsWith(envBasePath)) {
      return cleanPath;
    }
    return `${envBasePath}${cleanPath}`;
  }

  // 2. Client-side runtime detection (always accurate in browser)
  if (typeof window !== 'undefined') {
    if (window.location.pathname.startsWith('/cenlaro-site')) {
      if (cleanPath.startsWith('/cenlaro-site')) {
        return cleanPath;
      }
      return `/cenlaro-site${cleanPath}`;
    }
  }

  // 3. Build-time SSR detection for GitHub Actions
  if (typeof process !== 'undefined' && process.env.GITHUB_ACTIONS === 'true') {
    if (cleanPath.startsWith('/cenlaro-site')) {
      return cleanPath;
    }
    return `/cenlaro-site${cleanPath}`;
  }

  return cleanPath;
}
