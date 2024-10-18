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
    {{ $t("actions.next_day") }}
    <Icon name="hugeicons:arrow-left-01" size="20" class="ltr:rotate-180" />
  </NuxtLinkLocale>
</template>
