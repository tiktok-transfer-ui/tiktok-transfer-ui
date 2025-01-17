<template>
  <div class="wrapper">
    <div class="title">
      In Progress, {{ props.finishCount || 0 }}/{{ props.totalCount || 0 }} Posts Importing...
    </div>

    <div
      class="progress-wrapper"
    >
      <div
        class="progress"
        :style="{ width: `${props.finishCount / props.totalCount * 100}%` }"
      />
    </div>
    <div class="wait">
      waiting...
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    finishCount: number
    totalCount: number
  }>()
</script>

<style scoped>
  .wrapper {
    padding: 16px 12px;
    background: rgba(48, 48, 52, 0.05);
    border-radius: 12px;
  }
  .title {
    color: rgba(0, 0, 0, 0.80);
    font-size: 14px;
    font-weight: 510;
  }
  .wait {
    color: rgba(0, 0, 0, 0.45);
    text-align: center;
    font-size: 14px;
    font-weight: 510;
    margin-top:24px
  }
  .progress-wrapper {
    width: 100%;
    height: 6px;
    border-radius: 20px;
    background: #FFF;
    margin-top: 12px;
  }
  .progress {
    height: 6px;
    background: #FF2442;
    border-radius: 20px;
  }
</style>
  