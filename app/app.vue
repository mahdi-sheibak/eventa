<script setup lang="ts">
import "./styles/globals.css";

const { locale } = useI18n();

useHead({
  htmlAttrs: {
    lang: locale.value,
    dir: locale.value === "fa" ? "rtl" : "ltr",
  },
});
</script>
<template>
  <Head>
    <Title>Eventa</Title>
    <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content="Eventa" />
    <link rel="manifest" href="/site.webmanifest" />
  </Head>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
