<script setup lang="ts">
withDefaults(defineProps<{
  /** Message to be displayed. */
  msg?: string;
}>(), {
  msg: 'hello',
});
</script>

<template>
  <div>
    {{ msg }}
  </div>
</template>