import { mockData } from '../../mock/mock_post_transfer_process'

export interface ITaskList {
	taskId?: string
	status?: string // init | success | failed
}

export interface IPostTransferProcessResponse {
	total?: number
	taskList?: ITaskList[]
}

let count = 0
let data = [...mockData]

export function postTransferProcess(): Promise<IPostTransferProcessResponse> {
	data = mockData.map((task, index) => {
		if (index === count) {
			task.status = 'success'
		}
		return task
	})

	count+=1

	return Promise.resolve({
		taskList: data,
		total: data.length,
	})
}
