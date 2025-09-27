---
title: "{{theme.t.recentPosts}}"
layout: util
head:
  - - meta
    - name: robots
      content: noindex
---

<script setup>
import RecentList from 'vitepress-sls-blog-tmpl/RecentList.vue'
import { useData } from 'vitepress'
import { inject } from 'vue'

const { theme, params, localeIndex, frontmatter } = useData()
const posts = inject('posts')
</script>

<RecentList
  :allPosts="posts[localeIndex]"
  :curPage="params.page"
/>
