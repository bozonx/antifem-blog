// src/.vitepress/config.js
import blogConfigBase from "file:///mnt/disk2/workspace/vitepress-sls-blog-tmpl/src/configs/blogConfigBase.js";
import { loadBlogLocale } from "file:///mnt/disk2/workspace/vitepress-sls-blog-tmpl/src/helpers/blogConfigHelper.js";

// src/.vitepress/props.js
var PROPS = {
  hostname: "https://blog.antifem-move.org",
  repo: "https://github.com/bozonx/antifem-blog",
  siteUrl: "https://antifem-move.org",
  footerCopyright: "Copyright \xA9 2024-present Antifem movement.",
  perPage: 10,
  paginationMaxItems: 7
};

// src/.vitepress/config.js
var __vite_injected_original_filename = "/mnt/disk2/workspace/antifem-blog/src/.vitepress/config.js";
var ru = loadBlogLocale("ru", __vite_injected_original_filename, PROPS);
var en = loadBlogLocale("en", __vite_injected_original_filename, PROPS);
var configBase = blogConfigBase(PROPS, en);
var config_default = {
  ...configBase,
  locales: {
    ...configBase.locales,
    en: { lang: "en-US", ...en },
    ru: { lang: "ru-RU", ...ru }
  },
  head: [
    ...configBase.head,
    // do not recognize telephone numbers on the page
    ["meta", { name: "format-detection", content: "telephone=no" }],
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-W1FK64ZW94"
      }
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);} gtag('js', new Date());
       gtag('config', 'G-W1FK64ZW94');`
    ]
  ]
};
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52aXRlcHJlc3MvY29uZmlnLmpzIiwgInNyYy8udml0ZXByZXNzL3Byb3BzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL21udC9kaXNrMi93b3Jrc3BhY2UvYW50aWZlbS1ibG9nL3NyYy8udml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvbW50L2Rpc2syL3dvcmtzcGFjZS9hbnRpZmVtLWJsb2cvc3JjLy52aXRlcHJlc3MvY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9tbnQvZGlzazIvd29ya3NwYWNlL2FudGlmZW0tYmxvZy9zcmMvLnZpdGVwcmVzcy9jb25maWcuanNcIjtpbXBvcnQgYmxvZ0NvbmZpZ0Jhc2UgZnJvbSBcInZpdGVwcmVzcy1zbHMtYmxvZy10bXBsL2Jsb2dDb25maWdCYXNlLmpzXCI7XG5pbXBvcnQgeyBsb2FkQmxvZ0xvY2FsZSB9IGZyb20gXCJ2aXRlcHJlc3Mtc2xzLWJsb2ctdG1wbC9ibG9nQ29uZmlnSGVscGVyLmpzXCI7XG5pbXBvcnQgeyBQUk9QUyB9IGZyb20gXCIuL3Byb3BzLmpzXCI7XG5cbmNvbnN0IHJ1ID0gbG9hZEJsb2dMb2NhbGUoXCJydVwiLCBfX2ZpbGVuYW1lLCBQUk9QUyk7XG5jb25zdCBlbiA9IGxvYWRCbG9nTG9jYWxlKFwiZW5cIiwgX19maWxlbmFtZSwgUFJPUFMpO1xuY29uc3QgY29uZmlnQmFzZSA9IGJsb2dDb25maWdCYXNlKFBST1BTLCBlbik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLi4uY29uZmlnQmFzZSxcbiAgbG9jYWxlczoge1xuICAgIC4uLmNvbmZpZ0Jhc2UubG9jYWxlcyxcbiAgICBlbjogeyBsYW5nOiBcImVuLVVTXCIsIC4uLmVuIH0sXG4gICAgcnU6IHsgbGFuZzogXCJydS1SVVwiLCAuLi5ydSB9LFxuICB9LFxuXG4gIGhlYWQ6IFtcbiAgICAuLi5jb25maWdCYXNlLmhlYWQsXG4gICAgLy8gZG8gbm90IHJlY29nbml6ZSB0ZWxlcGhvbmUgbnVtYmVycyBvbiB0aGUgcGFnZVxuICAgIFtcIm1ldGFcIiwgeyBuYW1lOiBcImZvcm1hdC1kZXRlY3Rpb25cIiwgY29udGVudDogXCJ0ZWxlcGhvbmU9bm9cIiB9XSxcblxuICAgIFtcbiAgICAgIFwic2NyaXB0XCIsXG4gICAgICB7XG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBzcmM6IFwiaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1HLVcxRks2NFpXOTRcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbXG4gICAgICBcInNjcmlwdFwiLFxuICAgICAge30sXG4gICAgICBgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107ZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fSBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuICAgICAgIGd0YWcoJ2NvbmZpZycsICdHLVcxRks2NFpXOTQnKTtgLFxuICAgIF0sXG4gIF0sXG59O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2Rpc2syL3dvcmtzcGFjZS9hbnRpZmVtLWJsb2cvc3JjLy52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9tbnQvZGlzazIvd29ya3NwYWNlL2FudGlmZW0tYmxvZy9zcmMvLnZpdGVwcmVzcy9wcm9wcy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vbW50L2Rpc2syL3dvcmtzcGFjZS9hbnRpZmVtLWJsb2cvc3JjLy52aXRlcHJlc3MvcHJvcHMuanNcIjtleHBvcnQgY29uc3QgUFJPUFMgPSB7XG4gIGhvc3RuYW1lOiBcImh0dHBzOi8vYmxvZy5hbnRpZmVtLW1vdmUub3JnXCIsXG4gIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL2Jvem9ueC9hbnRpZmVtLWJsb2dcIixcbiAgc2l0ZVVybDogXCJodHRwczovL2FudGlmZW0tbW92ZS5vcmdcIixcbiAgZm9vdGVyQ29weXJpZ2h0OiBcIkNvcHlyaWdodCBcdTAwQTkgMjAyNC1wcmVzZW50IEFudGlmZW0gbW92ZW1lbnQuXCIsXG4gIHBlclBhZ2U6IDEwLFxuICBwYWdpbmF0aW9uTWF4SXRlbXM6IDcsXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3VCxPQUFPLG9CQUFvQjtBQUNuVixTQUFTLHNCQUFzQjs7O0FDRDhSLElBQU0sUUFBUTtBQUFBLEVBQ3pVLFVBQVU7QUFBQSxFQUNWLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxFQUNULGlCQUFpQjtBQUFBLEVBQ2pCLFNBQVM7QUFBQSxFQUNULG9CQUFvQjtBQUN0Qjs7O0FEUDRGLElBQU0sb0NBQW9DO0FBSXRJLElBQU0sS0FBSyxlQUFlLE1BQU0sbUNBQVksS0FBSztBQUNqRCxJQUFNLEtBQUssZUFBZSxNQUFNLG1DQUFZLEtBQUs7QUFDakQsSUFBTSxhQUFhLGVBQWUsT0FBTyxFQUFFO0FBRTNDLElBQU8saUJBQVE7QUFBQSxFQUNiLEdBQUc7QUFBQSxFQUNILFNBQVM7QUFBQSxJQUNQLEdBQUcsV0FBVztBQUFBLElBQ2QsSUFBSSxFQUFFLE1BQU0sU0FBUyxHQUFHLEdBQUc7QUFBQSxJQUMzQixJQUFJLEVBQUUsTUFBTSxTQUFTLEdBQUcsR0FBRztBQUFBLEVBQzdCO0FBQUEsRUFFQSxNQUFNO0FBQUEsSUFDSixHQUFHLFdBQVc7QUFBQTtBQUFBLElBRWQsQ0FBQyxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsU0FBUyxlQUFlLENBQUM7QUFBQSxJQUU5RDtBQUFBLE1BQ0U7QUFBQSxNQUNBO0FBQUEsUUFDRSxPQUFPO0FBQUEsUUFDUCxLQUFLO0FBQUEsTUFDUDtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRTtBQUFBLE1BQ0EsQ0FBQztBQUFBLE1BQ0Q7QUFBQTtBQUFBLElBRUY7QUFBQSxFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
