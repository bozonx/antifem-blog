import fs from "fs/promises";
import path from "path";
import { makePreviewItem } from "vitepress-sls-blog-tmpl/makePreviewItem.js";
import { POSTS_DIR } from "vitepress-sls-blog-tmpl/constants.js";

// Кэш для хранения загруженных постов
let posts = [];
const postsDir = path.resolve(
  path.dirname(import.meta.url.replace("file://", "")),
  "./",
  POSTS_DIR
);

/**
 * Загружает все посты из директории postsDir
 * @param {boolean} ignoreCache - если true, игнорирует кэш и перечитывает посты
 * @returns {Promise<Array>} массив обработанных постов
 */
export async function getCachedPosts(ignoreCache = false) {
  // Если кэш уже заполнен и не требуется игнорировать кэш, возвращаем его
  if (posts.length > 0 && !ignoreCache) {
    return posts;
  }

  try {
    // Читаем все файлы из директории postsDir
    const files = await fs.readdir(postsDir);

    // Фильтруем только .md файлы
    const mdFiles = files.filter((file) => file.endsWith(".md"));

    // Создаем полные пути к файлам
    const fullPaths = mdFiles.map((file) => path.join(postsDir, file));

    // Обрабатываем каждый файл через makePreviewItem
    posts = fullPaths.map((filePath) => makePreviewItem(filePath));

    console.log(`\n...Loaded ${posts.length} posts from ${postsDir}`);

    return posts;
  } catch (error) {
    throw new Error("Error loading posts:", error);
  }
}
