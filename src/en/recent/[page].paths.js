import { makeRecentParams } from "vitepress-sls-blog-tmpl/makeListParams.js";
import { PROPS } from "../../.vitepress/props.js";
import getCachedPosts from "../cachePosts.js";

export default {
  async paths() {
    return makeRecentParams(await getCachedPosts(), PROPS.perPage);
  },
};
