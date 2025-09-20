---
layout: home
---

<script setup>
import HomePageTags from 'vitepress-sls-blog-tmpl/HomePageTags.vue'
import HomeHero from 'vitepress-sls-blog-tmpl/HomeHero.vue'
import UtilPageContent from 'vitepress-sls-blog-tmpl/UtilPageContent.vue'
import { useData } from 'vitepress'
import { data } from './loadPosts.data.js'

const { theme, localeIndex } = useData()

const hero = {
  firstLine: "Блог движения Антифеминизм",
  secondLine: "Статьи, новости&nbsp;движения",
  img: theme.value.mainHeroImg,
  buttons: [
    {
      text: theme.value.t.toBlog,
      href: `${theme.value.recentBaseUrl}/1`,
      primary: true,
    },
/*    {
      text: theme.value.t.links.wiki,
      href: `${PROPS.siteUrl}/${localeIndex.value}/${theme.value.docUrl}`,
      icon: theme.value.docIcon,
    },*/
    {
      text: `Наш Telegram канал`,
      href: "https://t.me/antifem_battle",
      icon: theme.value.telegramIcon,
    },
    {
      text: theme.value.t.links.donate,
      href: `${theme.value.donate.url}`,
      icon: theme.value.donateIcon,
    },
  ],
}
</script>

<HomeHero v-bind="hero" />
<HomePageTags :header="theme.t.tags" :allPosts="data.posts" />

<!-- <UtilPageContent> -->
<!---->
<!-- ## header -->
<!---->
<!-- other text -->
<!---->
<!-- </UtilPageContent> -->
