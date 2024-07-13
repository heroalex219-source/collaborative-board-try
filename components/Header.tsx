import ThemeMenuButton from "./ThemeMenuButton";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { PanelRightOpen } from "lucide-react";
import RightPanel from "./RightPanel";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full select-none border-b dark:bg-stone-800 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-3">
        <h2 className="text-lg dark:text-white font-medium">Draw-Together</h2>

        <div className="flex items-center gap-3 md:gap-4">
          <ThemeMenuButton />

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="flex h-9 lg:hidden"
                aria-label="Open right panel"
              >
                <PanelRightOpen size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent className=' bg-stone-700 w-[17rem]'>
              <RightPanel/>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
