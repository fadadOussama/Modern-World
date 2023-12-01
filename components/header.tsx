import Image from "next/image";
import HeaderMobile from "./headerComps/headerMobile";

export default function Header() {
  return (
    <header className="fixed w-full top-6 px-6 sm:px-8 lg:px-10 z-50">
      <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8 rounded-[128px] bg-mainText">
        <div className="flex h-16 items-center justify-between">
          <div>
            <a className="block" href="#home">
              <span className="sr-only">Home</span>
              <Image src="/iconHome.svg" alt="icon" width={40} height={40} sizes="100vw" />
            </a>
          </div>

          <div className="hidden sm:block">
            <nav>
              <ul className="flex items-center gap-6 text-sm">
                <li className="relative group">
                  <a className="hoverLink" href="#architectures">
                    Architectures
                  </a>

                  <span className="hoverLinkDot"></span>
                </li>

                <li className="relative group">
                  <a className="hoverLink" href="#buildings">
                    Buildings
                  </a>

                  <span className="hoverLinkDot"></span>
                </li>

                <li className="relative group">
                  <a className="hoverLink" href="#testimonials">
                    Testimonials
                  </a>

                  <span className="hoverLinkDot"></span>
                </li>
              </ul>
            </nav>
          </div>

          <div className="block sm:hidden">
            <HeaderMobile />
          </div>
        </div>
      </div>
    </header>
  );
}
