<template>
  <n-config-provider
    :theme-overrides="themeOverrides"
    abstract
  >
    <n-message-provider placement="top-right">
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>

<script setup>
import { NConfigProvider, NMessageProvider } from 'naive-ui'

/**
 * @type import('naive-ui').GlobalThemeOverrides
 */
const themeOverrides = {
  common: {
    fontFamily: 'Microsoft JhengHei',
  }
}
</script>

<style>
@import './style.css';
</style>
