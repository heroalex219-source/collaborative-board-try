import ColorPicker from "./ColorPicker"
import LeaveButton from "./LeaveButton"
import MemberList from "./MemberList"
import StrokeWidthSlider from "./StrokeWidthSlider"


const SideBar = () => {
  return (
    <aside className='hidden border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-6 py-8 lg:block'>
        <div className='relative flex h-full w-[12.5rem] flex-col gap-8'>
            <ColorPicker/>
            <StrokeWidthSlider/>
            <MemberList/>
            <LeaveButton/>
        </div>
    </aside>
  )
}

export default SideBar