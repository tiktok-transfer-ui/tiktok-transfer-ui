<template>
  <div>
    <div
      class="wrapper"
      @click="triggerFileInput"
    >
      <span
        v-if="!modelValue"
        class="empty"
      >
        <svg
          class="upload-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3.43109 12.0755C3.94726 12.0755 4.36569 12.4939 4.36569 13.0101V16.9501C4.36569 18.1545 5.34204 19.1308 6.54642 19.1308H17.4501C18.6545 19.1308 19.6308 18.1545 19.6308 16.9501V13.0101C19.6308 12.4939 20.0492 12.0755 20.5654 12.0755C21.0816 12.0755 21.5 12.4939 21.5 13.0101V16.9501C21.5 19.1868 19.6868 21 17.4501 21L6.54642 21C4.30971 21 2.49649 19.1868 2.49649 16.9501V13.0101C2.49649 12.4939 2.91493 12.0755 3.43109 12.0755ZM12.9329 6.19093L15.4912 8.74923C15.8562 9.11422 16.4479 9.11422 16.8129 8.74923C17.1779 8.38425 17.1779 7.79249 16.8129 7.42751L12.6591 3.27374C12.2941 2.90875 11.7024 2.90875 11.3374 3.27374L7.18363 7.42751C6.81864 7.79249 6.81864 8.38425 7.18363 8.74923C7.54861 9.11422 8.14036 9.11422 8.50535 8.74923L11.0637 6.19091L11.0637 14.0485C11.0637 14.5647 11.4821 14.9831 11.9983 14.9831C12.5144 14.9831 12.9329 14.5647 12.9329 14.0485L12.9329 6.19093Z"
            fill="#3D8AF5"
          />
        </svg>
        <span class="upload-text">Import the Zip File Here</span></span>
      <div
        v-else
        style="width: 100%;"
      >
        <div class="top-wrapper">
          <span class="prompt">Import the Zip File Here</span>
          <span class="re-import">Re-import</span>
        </div>
        <div class="file-name">
          <svg
            style="vertical-align: text-top;"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M12.3668 2.9116C11.2776 1.82243 9.51173 1.82243 8.42256 2.9116L7.61762 3.71655C7.41757 3.9166 7.41757 4.24094 7.61762 4.44099C7.81767 4.64105 8.14202 4.64105 8.34207 4.44099L9.14701 3.63605C9.83608 2.94699 10.9533 2.94699 11.6423 3.63605L12.4473 4.44099C13.1363 5.13006 13.1363 6.24725 12.4473 6.93632L10.8374 8.54621C10.1483 9.23527 9.03114 9.23527 8.34207 8.54621L7.9396 8.14373C7.73955 7.94368 7.4152 7.94368 7.21515 8.14373C7.0151 8.34378 7.0151 8.66813 7.21515 8.86818L7.61762 9.27065C8.70679 10.3598 10.4727 10.3598 11.5618 9.27065L13.1717 7.66077C14.2609 6.5716 14.2609 4.80571 13.1717 3.71655L12.3668 2.9116Z"
              fill="black"
              fill-opacity="0.45"
            />
            <path
              d="M4.27709 12.6112C5.36626 13.7004 7.13215 13.7004 8.22131 12.6112L9.14699 11.6855C9.34705 11.4855 9.34705 11.1611 9.147 10.9611C8.94694 10.761 8.6226 10.761 8.42255 10.9611L7.49687 11.8867C6.8078 12.5758 5.69061 12.5758 5.00154 11.8867L4.1966 11.0818C3.50753 10.3927 3.50753 9.27553 4.1966 8.58647L5.80648 6.97658C6.49555 6.28752 7.61274 6.28752 8.30181 6.97658L8.70428 7.37905C8.90433 7.5791 9.22868 7.5791 9.42873 7.37905C9.62878 7.179 9.62878 6.85466 9.42873 6.6546L9.02626 6.25213C7.93709 5.16297 6.1712 5.16297 5.08204 6.25213L3.47215 7.86202C2.38298 8.95119 2.38298 10.7171 3.47215 11.8062L4.27709 12.6112Z"
              fill="black"
              fill-opacity="0.45"
            />
          </svg>
          {{ modelValue.name }}
        </div>
      </div>
    </div>
    <input
      style="display: none;"
      ref="fileInput"
      type="file"
      :accept="acceptedFormats"
      @change="handleFileUpload"
    >
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'ZipUploader',
    props: {
      modelValue: {
        type: File,
        default: null,
      },
      acceptedFormats: {
        type: String,
        default: '.zip,application/zip',
      },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const fileInput = ref<HTMLInputElement | null>(null)

      const triggerFileInput = () => {
        fileInput.value?.click()
      }

      const handleFileUpload = (event: Event) => {
        const input = event.target as HTMLInputElement
        if (input.files && input.files.length > 0) {
          const file = input.files[0]
          emit('update:modelValue', file)
        }
      }

      return {
        fileInput,
        triggerFileInput,
        handleFileUpload,
      }
    },
  })
</script>

<style scoped>
  .wrapper {
    margin: 0 auto;
    padding: 12px 16px;
    width: calc(100% - 64px);
    height: 86px;
    border-radius: 12px;
    background: rgba(48, 48, 52, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .empty {
    color: #3D8AF5;
    text-align: right;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
  .upload-icon {
    margin-right: 12px;
    vertical-align: text-bottom;
  }
  .top-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  .prompt {
    color: rgba(0, 0, 0, 0.80);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  .re-import {
    color: #3D8AF5;
    text-align: right;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
  .file-name {
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    color: rgba(0, 0, 0, 0.45);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }
  .upload-text {
    line-height: 24px;
  }
</style>
