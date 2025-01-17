<template>
  <div class="transfer">
    <div>
      <span class="order">02</span>
      <span class="title">Import the File You Downloaded</span>
    </div>
    <div class="desc">
      By tapping “Transfer”, you’re granting permission to transfer your TikTok posts to your REDnote profile.
    </div>
    <ZipUploader
      v-model="fileList"
      class="zip-uploader"
    />
    <div
      class="transfer-button"
      :class="{
        disabled: transferDisabled || !fileList,
      }"
      @click="transfer"
    >
      Transfer now
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import ZipUploader from './ZipUploader.vue'
  import { pollPostTransferProcess } from '../store'

  const fileList = ref<File>()
  const transferDisabled = ref(false)

  async function transfer() {
    if (transferDisabled.value === true || !fileList.value) {
      return
    }
    
    transferDisabled.value = true

    try {
      pollPostTransferProcess()
    } catch {
      alert('Failed to import, retry it again')
    } finally {
      transferDisabled.value = false
    }
  }
</script>

<style scoped>
  .order {
    color: rgba(0, 0, 0, 0.45);
    font-size: 24px;
    font-weight: 1000;
    line-height: 26px;
    margin-right: 8px;
  }
  .title {
    color: #000000D9;
    font-size: 16px;
    font-weight: 510;
    line-height: 26px;
  }
  .desc {
    color: rgba(0, 0, 0, 0.45);
    font-size: 12px;
    font-weight: 510;
    margin-left: 36px;
  }
  .zip-uploader {
    margin-top: 12px;
    margin-bottom: 12px;
  }
  .transfer-button {
    width: calc(100% - 64px);
    background-color: #FF2442;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    margin: 0 auto;
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
  .transfer-button.disabled {
    opacity: 0.4;
  }
</style>
