<script setup>
import { onMounted } from "vue";
import { useData, inBrowser } from "vitepress";

const { localeIndex } = useData()

onMounted(() => {
  if (inBrowser) window.location.href = `/${localeIndex.value}/recent/1`;
});
</script>
