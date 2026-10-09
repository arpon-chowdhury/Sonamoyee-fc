export function assetPath(path) {
  return path.startsWith('/') && !path.startsWith('//')
    ? `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`
    : path;
}
