import { useSwiper } from "swiper/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function SwiperNavButtons() {
  const swiper = useSwiper();

  return (
    <div className="flex items-center justify-between mt-5">
      <button onClick={() => swiper.slidePrev()}>
        <LuChevronLeft className="h-8 w-8 text-mainText/20 hover:text-mainText active:scale-50 transition-all duration-300" />
      </button>

      <button onClick={() => swiper.slideNext()}>
        <LuChevronRight className="h-8 w-8 text-mainText/20 hover:text-mainText active:scale-50 transition-all duration-300" />
      </button>
    </div>
  );
}
