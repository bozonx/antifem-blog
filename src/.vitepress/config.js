import { defineConfig } from "vitepress";
import blogConfigBase from "vitepress-sls-blog-tmpl/blogConfigBase.js";
import { loadBlogLocale } from "vitepress-sls-blog-tmpl/blogConfigHelper.js";
import { PROPS } from "./props.js";
// import enCachePosts from "../en/cachePosts.js";
// import ruCachePosts from "../ru/cachePosts.js";

const ru = loadBlogLocale("ru", __filename, PROPS);
const en = loadBlogLocale("en", __filename, PROPS);
const configBase = blogConfigBase(PROPS, en);

export default async () => {
  // const postsEn = await enCachePosts();
  // const postsRu = await ruCachePosts();

  return defineConfig({
    ...configBase,

    // posts: {
    //   en: postsEn,
    //   ru: postsRu,
    // },
    locales: {
      ...configBase.locales,
      en: { lang: "en-US", ...en },
      ru: { lang: "ru-RU", ...ru },
    },
    themeConfig: {
      ...configBase.themeConfig,
      sidebarLogoSrc: "/img/sidebar-logo.webp",
      paginationMaxItems: 7,
    },
    head: [
      ...configBase.head,
      // do not recognize telephone numbers on the page
      ["meta", { name: "format-detection", content: "telephone=no" }],

      [
        "script",
        {
          async: "",
          src: "https://www.googletagmanager.com/gtag/js?id=G-M9CWSVHKYS",
        },
      ],
      [
        "script",
        {},
        `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);} gtag('js', new Date());
       gtag('config', 'G-M9CWSVHKYS');`,
      ],
    ],
  });
};
