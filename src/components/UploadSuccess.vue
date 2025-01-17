<template>
  <div class="wrapper">
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm5.244-12.474l-6.057 6.2a.913.913 0 0 1-1.296.01l-2.625-2.6a.894.894 0 0 1 0-1.272.915.915 0 0 1 1.285 0l1.972 1.953 5.415-5.543a.915.915 0 0 1 1.285-.02c.36.345.37.915.021 1.272z"/>
      </svg>
    </div>
    <div class="title">
      🎉 Transfer Finished
    </div>
    <div class="desc">
      {{ finishCount }}/{{ totalCount }} posts have been successfully sent to REDnote. Well Done!
    </div>
  </div>
</template>

<script setup lang="ts">
  import { finishCount, totalCount } from '../store'
</script>

<style scoped>
  .wrapper {
    padding: 16px 12px;
    background: rgba(48, 48, 52, 0.05);
    border-radius: 12px;
  }
  .icon {
    width: 52px;
    height: 52px;
    margin: 0 auto 12px;
  }
  .icon svg {
    fill: #02B940;
  }
  .title {
    color: rgba(0, 0, 0, 0.80);
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
  .desc {
    color: rgba(0, 0, 0, 0.62);
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    margin-top: 8px;
  }
</style>
  