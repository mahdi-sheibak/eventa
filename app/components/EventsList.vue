<script setup lang="ts">
type Event = {
  description: string;
  isHoliday: boolean;
};
interface Props {
  events?: Event[];
}
const props = defineProps<Props>();
const { events } = props;
</script>
<template>
  <div class="text-center px-3 animate-fade">
    <template v-for="(event, index) in events">
      <span :class="{ 'text-yellow-700': event.isHoliday }"
        >{{ event.description }}
        {{ index === Number(events?.length) - 1 ? "" : " - " }}
      </span>
    </template>
  </div>
</template>
