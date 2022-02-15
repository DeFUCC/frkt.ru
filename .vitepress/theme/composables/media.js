export function getPath(path) {
  path = path.match(/(^.*[\\\/]|^[^\\\/].*)/i);
  if (path != null) {
    return path[0];
  } else {
    return false;
  }
}

export function getMediaPath(path, file) {
  return "/_media" + getPath(path) + file;
}
