import ColorPicker from "./ColorPicker"
import LeaveButton from "./LeaveButton"
import MemberList from "./MemberList"
import StrokeWidthSlider from "./StrokeWidthSlider"


const SideBar = () => {
  return (
    <aside  className='hidden border-l px-6 py-8 lg:block' >
        <div className='relative flex h-full w-[12.5rem] flex-col gap-6'>
            <ColorPicker/>
            <StrokeWidthSlider/>
            <MemberList/>
            <LeaveButton/>
        </div>
    </aside>
  )
}

export default SideBar