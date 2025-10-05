import path from "node:path";
import { defineConfig } from "vitepress";
import { mergeBlogConfig } from "vitepress-sls-blog-tmpl/blogConfigBase.js";
import { loadBlogLocale } from "vitepress-sls-blog-tmpl/blogConfigHelper.js";

export const PER_PAGE = 20;

export default async () => {
  const config = defineConfig({
    srcDir: path.resolve(__dirname, "../"),
    siteUrl: "https://blog.antifem.org",
    repo: "https://github.com/bozonx/antifem-blog",
    themeConfig: {
      perPage: PER_PAGE,
      sidebarLogoSrc: "/img/sidebar-logo.webp",

      // search: { provider: "pagefind" },

      googleAnalytics: {
        propertyId: "500486823",
        credentialsPath:
          "/home/ivan/disk2/workspace/antifem-blog/ga-credentials.json",
      },

      popularPosts: {
        enabled: true,
        sortBy: "pageviews", // 'pageviews', 'uniquePageviews'
      },

      ////// specific to this blog
      ruTgChannel: "https://t.me/antifem_battle",
      ruIvanKYoutubeChannel: "https://www.youtube.com/@ivan-k-freedom",
      ruYoutubeChannel: "https://www.youtube.com/@antifem-move",
      rTgChat: "https://t.me/antifem_battle_chat",
      mainSiteUrl: "https://antifem.org",
    },
    head: [
      // do not recognize telephone numbers on the page
      ["meta", { name: "format-detection", content: "telephone=no" }],

      // google analytics
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

      // pagefind
      ["link", { rel: "stylesheet", href: "/pagefind/pagefind-ui.css" }],
      ["script", { src: "/pagefind/pagefind-ui.js" }],
    ],
  });

  return mergeBlogConfig({
    ...config,
    locales: {
      en: await loadBlogLocale("en", config),
      ru: await loadBlogLocale("ru", config),
    },
  });
};
