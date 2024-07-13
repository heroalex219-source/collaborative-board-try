import { DrawProps } from "@/hooks/useDraw"
import { User } from "@/stores/userStore"

export interface RoomJoinedData {
    user: User
    roomId: string
    members: User[]
  }
  
  export interface Notification {
    title: string
    message: string
  }
  
  export interface DrawOptions extends DrawProps {
    strokeColor: string
    strokeWidth: number[]
    dashGap: number[]
  }
  