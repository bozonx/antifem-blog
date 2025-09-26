import path from "path";
import { POSTS_DIR } from "vitepress-sls-blog-tmpl/constants.js";
import { loadPostsData } from "vitepress-sls-blog-tmpl/loadPosts.js";

const localeDir = path.dirname(import.meta.url.replace("file://", ""));
const config = globalThis.VITEPRESS_CONFIG;

export default {
  watch: [`./${POSTS_DIR}/*.md`],
  load(watchedFiles) {
    return {
      posts: loadPostsData(
        localeDir,
        config,
        process.env.NODE_ENV !== "production"
      ),
    };
  },
};
