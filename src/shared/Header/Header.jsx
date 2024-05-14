import banner from '../../../assets/boyb.jpg';
import banner2 from '../../../assets/Hand.jpg';
import banner3 from '../../../assets/lady.jpg';
import banner4 from '../../../assets/hq720.jpg';
import banner5 from '../../../assets/sadboy.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const Header = () => {
    const sliderStyle = {
        width: "100%",
        padding: "50px 0"
    };

    const slideStyle = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        overflow: "hidden"
    };

    const slideImageStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    };

    const heroContentStyle = {
        position: "relative",
        zIndex: 10,
        left: 10,
        top: 160
    };



    return (
        <div className="hero min-h-screen relative overflow-hidden">
            <Swiper 
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={
                {delay: 2000}
            } 
            loop={true}
            navigation={true}
            pagination={true} 
            style={sliderStyle}
            className="w-full h-full"
            >
                <SwiperSlide style={slideStyle}><img className="w-full h-full object-cover" src={banner} alt="" style={slideImageStyle} /></SwiperSlide>
                <SwiperSlide style={slideStyle}><img className="w-full h-full object-cover" src={banner2} alt="" style={slideImageStyle} /></SwiperSlide>
                <SwiperSlide style={slideStyle}><img className="w-full h-full object-cover" src={banner3} alt="" style={slideImageStyle} /></SwiperSlide>
                <SwiperSlide style={slideStyle}><img className="w-full h-full object-cover" src={banner4} alt="" style={slideImageStyle} /></SwiperSlide>
                <SwiperSlide style={slideStyle}><img className="w-full h-full object-cover" src={banner5} alt="" style={slideImageStyle} /></SwiperSlide>
            </Swiper>

        
            <div className="hero-content text-center text-neutral-content grid grid-cols-1 border-stone-950" style={heroContentStyle}>
                <div className="max-w-8xl bg-yellow-600 p-4 bg-opacity-50 rounded-lg border-x-4">
                    <h1 className="mb-5 text-6xl font-bold text-white space-y-4">Unique Art
                     & Paint <br/> For Sale</h1>
                    
                    <button className="btn bg-[#724c1e] text-white">Discover More +</button>
                </div>

            </div>
        </div>
    );
};

export default Header;
