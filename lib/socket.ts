import { io } from 'socket.io-client'

const SERVER =
  process.env.NODE_ENV === 'production'
    ? 'http://localhost:8000'
    : 'https://scribble-production-d6c0.up.railway.app'

export const socket = io(SERVER, { transports: ['websocket'] })
