<template>
  <div class="container">
    <Header />
    <UploadSuccess
      class="upload-status"
      v-if="isPostSuccess"
    />
    <template v-else-if="!isPosting">
      <Launcher class="transfer-step" />
      <Transfer class="transfer-step" />
    </template>
    <UploadProgress
      v-else
      class="upload-status"
      :finish-count="finishCount"
      :total-count="totalCount"
    />
  </div>
</template>

<script setup lang="ts">
  import Header from './components/Header.vue';
  import Launcher from './components/Launcher.vue';
  import Transfer from './components/Transfer.vue';
  import UploadProgress from './components/UploadProgress.vue';
  import UploadSuccess from './components/UploadSuccess.vue';
  import {
    isPosting, 
    isPostSuccess,
    finishCount, 
    totalCount,
  } from './store';
</script>

<style scoped>
  .container {
    padding: 16px;
    width: 100%;
    height: 100vh;
  }
  .transfer-step {
    margin-top: 24px;
  }
  .upload-status {
    margin-top: 80px;
  }
</style>
