<template>
  <EffectTranquiluxe />
  <main class="flex h-[90dvh] mt-5 justify-center">
    <div
      class="flex flex-col items-center desktop:w-[50%] tablet:w-[70%] mobile:w-[90%] justify-center z-10"
    >
      <div
        class="flex flex-col gap-4 p-3 rounded-lg backdrop-blur-2xl mx-2 tablet:min-w-[500px]"
      >
        <slot />
      </div>
    </div>
  </main>
  <AppFooter />
</template>
