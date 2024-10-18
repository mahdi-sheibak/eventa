<script setup lang="ts">
import type { DateInfo } from "@/types";
interface Props {
  dateInfo: DateInfo;
}
const props = defineProps<Props>();
const { year, month, day } = props.dateInfo;
</script>
<template>
  <NuxtLinkLocale :href="`/~/${year}/${month}/${day}`" class="btn">
    <Icon name="hugeicons:arrow-right-01" size="20" class="ltr:rotate-180" />
    {{ $t("actions.previous_day") }}
  </NuxtLinkLocale>
</template>
