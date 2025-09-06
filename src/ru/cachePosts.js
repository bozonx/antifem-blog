import path from "path";
import { loadPosts } from "vitepress-sls-blog-tmpl/loadPosts.js";
import { POSTS_DIR } from "vitepress-sls-blog-tmpl/constants.js";

let posts = [];
const postsDir = path.resolve(
  path.dirname(import.meta.url.replace("file://", "")),
  "./",
  POSTS_DIR
);

export default async function (ignoreCache = false) {
  if (posts.length > 0 && !ignoreCache) return posts;

  posts = await loadPosts(postsDir);

  return posts;
}
