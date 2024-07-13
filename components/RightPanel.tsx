import ColorPicker from "./ColorPicker";
import LeaveButton from "./LeaveButton";
import MemberList from "./MemberList";
import StrokeWidthSlider from "./StrokeWidthSlider";

export default function RightPanel(){
    return(
        <div className="h-full flex bg-stone-700 justify-center py-5" >
            <div className="h-full flex flex-col gap-6  w-[12.5rem] relative" >
                <ColorPicker/>
                <StrokeWidthSlider/>
                <MemberList/>
                <LeaveButton/>

            </div>

        </div>
    )
}