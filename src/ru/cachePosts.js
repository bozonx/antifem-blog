import path from "path";
import { getCachedPosts } from "vitepress-sls-blog-tmpl/getCachedPosts.js";
import { POSTS_DIR } from "vitepress-sls-blog-tmpl/constants.js";

const postsDir = path.resolve(
  path.dirname(import.meta.url.replace("file://", "")),
  "./",
  POSTS_DIR
);

export default async function (ignoreCache = false) {
  return getCachedPosts(postsDir, ignoreCache);
}
