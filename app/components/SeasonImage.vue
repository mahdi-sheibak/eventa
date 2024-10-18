<script setup lang="ts">
interface Props {
  persianMonth: number;
}
const props = defineProps<Props>();
const { persianMonth } = props;

let imageName = "";

if (persianMonth <= 3) {
  imageName = "spring";
} else if (persianMonth <= 6) {
  imageName = "summer";
} else if (persianMonth <= 9) {
  imageName = "autumn";
} else if (persianMonth <= 12) {
  imageName = "winter";
}
</script>
<template>
  <div class="flex justify-center">
    <NuxtImg
      :src="`/images/${imageName}.png`"
      width="40"
      height="40"
      style="z-index: 100"
    />
  </div>
</template>
