import { ref, computed } from 'vue'
import { ITaskList, postTransferProcess } from './services/post_transfer_process'

const taskList = ref<ITaskList[]>([])
const totalCount = ref(0)
const isPosting = ref(false)
const isPostSuccess = computed(() => taskList.value?.length && taskList.value.every(task => task.status === 'success'))
const finishCount = computed(() => {
  let count = 0
  for (let i = 0; i < taskList.value?.length; i++) {
    if (taskList.value[i].status === 'success') {
      count += 1
    }
  }
  return count
})

async function pollPostTransferProcess() {
  while (!isPostSuccess.value) {
    try {
      const res = await postTransferProcess()
      if ((res?.total || 0) > 0) {
        taskList.value = res?.taskList || []
        totalCount.value = res?.total || 0
        isPosting.value = true
      }
      await new Promise(resolve => setTimeout(resolve, 500))
    } catch (error) {
      console.error('Error during post transfer process:', error)
      break
    }
  }
}

export {
  isPosting,
  isPostSuccess,
  taskList,
  finishCount,
  totalCount,
  pollPostTransferProcess,
}
