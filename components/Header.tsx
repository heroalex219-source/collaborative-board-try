import ThemeMenuButton from "./ThemeMenuButton";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { PanelRightOpen, Palette } from "lucide-react";
import RightPanel from "./RightPanel";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full select-none border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
            <Palette className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Draw Together
          </h2>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <ThemeMenuButton />

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="flex h-9 w-9 lg:hidden hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Open right panel"
              >
                <PanelRightOpen size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent className='bg-white dark:bg-gray-900 w-[17rem] border-l border-gray-200 dark:border-gray-700'>
              <RightPanel/>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
