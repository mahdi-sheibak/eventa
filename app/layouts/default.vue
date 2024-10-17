<template>
  <main class="flex h-[90dvh] mt-5 justify-center">
    <div
      class="flex flex-col gap-4 items-center desktop:w-[50%] tablet:w-[70%] mobile:w-[90%]"
    >
      <slot />
    </div>
  </main>
  <AppFooter />
</template>
