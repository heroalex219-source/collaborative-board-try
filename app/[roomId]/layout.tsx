//import Header from '@/components/Header'
//import Sidebar from '@/components/Sidebar'

import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export default function RoomLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header/>

      <div className='h-[calc(100vh-3.8rem)] bg-gray-50 dark:bg-gray-900 lg:grid lg:grid-cols-[minmax(0,1fr)_15.5rem]'>
        <main className='h-full'>{children}</main>
        <SideBar/>


      </div>
    </>
  )
}
