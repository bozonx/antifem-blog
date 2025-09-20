import { defineConfig } from "vitepress";
import { mergeBlogConfig } from "vitepress-sls-blog-tmpl/blogConfigBase.js";
import { loadBlogLocale } from "vitepress-sls-blog-tmpl/blogConfigHelper.js";

export const PER_PAGE = 20;

export default async () => {
  const config = defineConfig({
    hostname: "https://blog.antifem.org",
    themeConfig: {
      repo: "https://github.com/bozonx/antifem-blog",
      siteUrl: "https://antifem.org",
      perPage: PER_PAGE,
      sidebarLogoSrc: "/img/sidebar-logo.webp",
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

  const ru = await loadBlogLocale("ru", __filename, config);
  const en = await loadBlogLocale("en", __filename, config);

  return mergeBlogConfig({
    ...config,
    locales: { en, ru },
  });
};
