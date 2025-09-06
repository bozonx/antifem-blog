import { makePreviewItem } from "vitepress-sls-blog-tmpl/makePreviewItem.js";
import { POSTS_DIR } from "vitepress-sls-blog-tmpl/constants.js";
import { getPosts } from "./cachePosts.js";

export default {
  watch: [`./${POSTS_DIR}/*.md`],
  async load(watchedFiles) {
    return {
      // posts: watchedFiles.map((item) => makePreviewItem(item)),
      posts: await getPosts(watchedFiles),
    };
  },
};
