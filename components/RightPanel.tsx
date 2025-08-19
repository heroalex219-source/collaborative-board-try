import ColorPicker from "./ColorPicker";
import LeaveButton from "./LeaveButton";
import MemberList from "./MemberList";
import StrokeWidthSlider from "./StrokeWidthSlider";

export default function RightPanel(){
    return(
        <div className="h-full flex bg-white dark:bg-gray-900 justify-center py-6">
            <div className="h-full flex flex-col gap-8 w-[12.5rem] relative">
                <ColorPicker/>
                <StrokeWidthSlider/>
                <MemberList/>
                <LeaveButton/>

            </div>

        </div>
    )
}