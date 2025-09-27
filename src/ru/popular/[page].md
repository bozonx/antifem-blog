---
title: "{{theme.t.popularPosts}}"
layout: util
head:
  - - meta
    - name: robots
      content: noindex
---

<script setup>
import PopularPostsList from 'vitepress-sls-blog-tmpl/PopularPostsList.vue'
import { useData } from 'vitepress'
import { inject } from 'vue'

const { theme, params, localeIndex, frontmatter } = useData()
const posts = inject('posts')
</script>

# {{frontmatter.title}}

<PopularPostsList
  :allPosts="posts[localeIndex]"
  :curPage="params.page"
  :perPage="theme.perPage"
  :paginationMaxItems="theme.paginationMaxItems"
/>
