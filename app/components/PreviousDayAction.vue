<script setup lang="ts">
import type { DateInfo } from "@/types";
import messages from "~/messages/fa.json";

interface Props {
  dateInfo: DateInfo;
}
const props = defineProps<Props>();
const { month, day } = props.dateInfo;
</script>
<template>
  <NuxtLink :href="`/~/${month}/${day}`" class="btn">
    <Icon name="hugeicons:arrow-right-01" size="20" class="ltr:rotate-180" />
    {{ messages.actions.previousDay }}
  </NuxtLink>
</template>
