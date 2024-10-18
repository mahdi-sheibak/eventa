<template>
  <footer class="text-center z-10 relative">
    <div class="flex text-center justify-center items-center gap-1">
      <p class="text-sm">{{ $t("footer.build_with") }}</p>
      <NuxtImg
        src="/emojis/red-heart.webp"
        alt="Red Heart"
        width="25"
        height="25"
      />
      <p class="text-sm">{{ $t("footer.open_source") }}</p>
      <a
        href="https://github.com/mahdi-sheibak/eventa"
        target="_blank"
        class="flex items-center"
      >
        <Icon name="hugeicons:github" size="25" />
      </a>
    </div>
  </footer>
</template>
