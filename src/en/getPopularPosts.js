import path from "path";
import { loadPopularPosts } from "vitepress-sls-blog-tmpl/loadPopularPosts.js";

const localeDir = path.dirname(import.meta.url.replace("file://", ""));

export default async function (ignoreCache = false) {
  return loadPopularPosts(localeDir, ignoreCache);
}
