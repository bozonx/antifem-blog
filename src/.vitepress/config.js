import path from "node:path";
import { defineConfig } from "vitepress";
import { mergeBlogConfig } from "vitepress-sls-blog-tmpl/blogConfigBase.js";
import { loadBlogLocale } from "vitepress-sls-blog-tmpl/blogConfigHelper.js";

export const PER_PAGE = 20;

export default async () => {
  const config = defineConfig({
    srcDir: path.resolve(__dirname, "../"),
    hostname: "https://blog.antifem.org",
    themeConfig: {
      repo: "https://github.com/bozonx/antifem-blog",
      siteUrl: "https://antifem.org",
      perPage: PER_PAGE,
      sidebarLogoSrc: "/img/sidebar-logo.webp",

      googleAnalytics: {
        propertyId: "G-M9CWSVHKYS",
        credentialsPath: null,
      },

      popularPosts: {
        enabled: true,
      },
    },
    head: [
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

  return mergeBlogConfig({
    ...config,
    locales: {
      en: await loadBlogLocale("en", config),
      ru: await loadBlogLocale("ru", config),
    },
  });
};
