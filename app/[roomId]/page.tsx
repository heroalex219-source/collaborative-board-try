import DrawingCanvas from '@/components/DrawingCanvas'
import DisconnectedDialog from '@/components/DisconnectedDialogBox'

export default function RoomPage() {
  return (
    <>
      <DisconnectedDialog />

      <DrawingCanvas />
    </>
  )
}
