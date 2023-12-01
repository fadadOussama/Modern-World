import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function HeaderMobile() {
  return (
    <Sheet>
      <SheetTrigger className="text-mainBg">
        <div className="space-y-1 group">
          <span className="block w-4 h-0.5 bg-mainBg rounded-full group-hover:w-8 transition-all duration-300"></span>
          <span className="block w-6 h-0.5 bg-mainBg rounded-full group-hover:w-8 transition-all duration-300"></span>
          <span className="block w-8 h-0.5 bg-mainBg rounded-full"></span>
        </div>
      </SheetTrigger>
      <SheetContent side={"bottom"}>
        <SheetHeader className="mt-[25px]">
          <SheetTitle className={`font-secondFont text-3xl font-medium text-center underline underline-offset-1 decoration-2`}>Navigation</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-y-4 mt-8 pb-5">
          <SheetTrigger asChild>
            <a href="#ArchitecturesSection" className={`text-base text-mainText/60 font-medium text-center`}>
              Architectures
            </a>
          </SheetTrigger>
          <SheetTrigger asChild>
            <a href="#buildingsSection" className={`text-base text-mainText/60 font-medium text-center`}>
              Buildings
            </a>
          </SheetTrigger>
          <SheetTrigger asChild>
            <a href="#TestimonialSection" className={`text-base text-mainText/60 font-medium text-center`}>
              Testimonials
            </a>
          </SheetTrigger>
        </div>
      </SheetContent>
    </Sheet>
  );
}
