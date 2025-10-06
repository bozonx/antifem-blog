<script setup>
  import NavSearchButton from "vitepress-sls-blog-tmpl/NavSearchButton.vue";
  import PageFindSearch from "vitepress-sls-blog-tmpl/PageFindSearch.vue";
  import Theme from "vitepress-sls-blog-tmpl";
  import { provide } from "vue";
  import { data as ruData } from "../../ru/loadPosts.data.js";
  import { data as enData } from "../../en/loadPosts.data.js";

  const posts = {
    ru: ruData.posts,
    en: enData.posts,
  };

  provide("posts", posts);

  const { Layout } = Theme;
</script>

<template>
  <Layout>
    <template #nav-bar-content-before>
      <PageFindSearch>
        <NavSearchButton />
      </PageFindSearch>
    </template>
  </Layout>
</template>
