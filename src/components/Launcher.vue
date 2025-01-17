<template>
  <div class="launcher">
    <span class="order">01</span>
    <span class="title">Export Your TikTok Data</span>
    <div class="desc">
      Go to ”Profile” - top right “Settings and Privacy” - “Account” - “Download Your Data”. Follow the instructions and make sure to ONLY check the “Posts” option for downloading.
    </div>
    <div
      class="launch-button"
      @click="launchTiktok"
    >
      Open TikTok app
    </div>
  </div>
</template>

<script setup lang="ts">
  function launchTiktok() {
    window.location.href = 'tiktok://'
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
    margin-left: 30px;
  }
  .launch-button {
    width: calc(100% - 64px);
    margin: 24px auto 0;
    background-color: #000;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    color: #FFF;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
</style>
