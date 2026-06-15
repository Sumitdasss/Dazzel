import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";

import "swiper/css";
import "swiper/css/navigation";

const FlashSale = ({ products }) => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 my-10">
      <div className="bg-gradient-to-r from-[#E7D4BF] to-[#D89A56] rounded-2xl p-6">

        <div className="flex flex-col lg:flex-row justify-between gap-5 mb-6">

          <h2 className="text-xl lg:text-3xl font-bold leading-tight">
            🔥 Flash Sale ~ Guaranteed Lowest Price |
            Replacement Guarantee | Free Delivery
          </h2>

          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="bg-black text-white px-3 py-2 rounded">14</div>
              <div className="bg-black text-white px-3 py-2 rounded">22</div>
              <div className="bg-black text-white px-3 py-2 rounded">11</div>
              <div className="bg-black text-white px-3 py-2 rounded">57</div>
            </div>

            <button className="bg-white px-5 py-2 rounded-lg font-medium">
              SEE ALL
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={15}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 2.2,
            },
            768: {
              slidesPerView: 3.2,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 6,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default FlashSale;