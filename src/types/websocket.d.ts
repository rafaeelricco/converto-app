type Status = 'connecting' | 'connected' | 'in_progress' | 'completed' | 'disconnected'

type Progress = {
   id: string
   file_name?: string
   progress: number
   message: string
}

type FileProgress = {
   id: string
   status: Status
   files: Progress[]
}

export type { FileProgress, Progress, Status }
