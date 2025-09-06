import { makeMonthsParams } from "vitepress-sls-blog-tmpl/makeListParams.js";
import getCachedPosts from "../../../cachePosts.js";

export default {
  async paths() {
    return makeMonthsParams(await getCachedPosts());
  },
};
