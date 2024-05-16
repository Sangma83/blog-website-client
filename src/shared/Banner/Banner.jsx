import banner from '../../assets/friendstand.jpg';
import banner2 from '../../assets/friendzonecamp.jpg';
import banner3 from '../../assets/ladywithcar.jpg';
import banner4 from '../../assets/ladytravel.jpg';
import banner5 from '../../assets/baby.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { MdOutlineDateRange } from 'react-icons/md';
import { LuPencilLine } from 'react-icons/lu';

const Banner = () => {
    const sliderStyle = {
        width: "100%",
        padding: "50px 0"
    };

    const slideStyle = {
        width: "100%",
        height: "100%",
        position: "relative",
        borderRadius: "0.5rem", 
        overflow: "hidden" 
    };

    const slideImageStyle = {
        width: "100%",
        height: "100vh",
        objectFit: "cover",
        borderRadius: "0.7rem" 
    };

    const textStyle = {
        position: "absolute",
        bottom: "20px",
        left: "20px",
        color: "#fff",
        zIndex: 10
        
    };

    const gradientStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(to right, rgba(21, 21, 21, 1.0), rgba(21, 21, 21, 0))",
        zIndex: 1,
        borderRadius: "0.5rem" 
    };

    return (
        <div className="overflow-hidden">
            <Swiper 
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{ delay: 3000 }} 
                loop={true}
                navigation={true}
                pagination={true} 
                style={sliderStyle}
                className="w-full h-1/2"
            >
                <SwiperSlide style={slideStyle}>
                    <div className="relative">
                        <img className="w-full h-full object-cover" src={banner} alt="" style={slideImageStyle} />
                        <div style={gradientStyle}></div>
                        <div className="absolute top-96 ml-56" style={textStyle}>
                            <div className="flex gap-6 text-center mb-6 ml-72">
                                <p className='flex items-center gap-1 text-xl'><MdOutlineDateRange />October 11, 2016 </p>
                                <p className='flex items-center gap-1 ml-14 text-xl'><LuPencilLine />by John Doe</p>
                            </div>
                            <h2 className="text-white font-bold text-5xl">EVERYDAY URBAN CONCRETE JUNGLE</h2>
                            <p className="text-xl mt-5 text-center">Explore the bustling streets and vibrant culture of the city, where every corner holds a new adventure.</p>
                            <button className='btn btn-outline btn-primary btn-wide glass ml-80 mt-10 text-xl'>Read More +</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={slideStyle}>
                    <div className="relative">
                        <img className="w-full h-full object-cover" src={banner2} alt="" style={slideImageStyle} />
                        <div style={gradientStyle}></div>
                        <div className="absolute top-96 ml-40" style={textStyle}>
                            <div className="flex gap-6 text-center mb-6 ml-72">
                                <p className='flex items-center gap-1 text-xl'><MdOutlineDateRange />January 04, 2020 </p>
                                <p className='flex items-center gap-1 ml-14 text-xl'><LuPencilLine />by Patricia Shel</p>
                            </div>
                            <h2 className="text-white font-bold text-5xl">ADVENTURE AWAITS IN THE FRIEND ZONE</h2>
                            <p className="text-xl mt-5 text-center">Embark on an unforgettable journey filled with exciting activities and new friendships at our adventure camp.</p>
                            <button className='btn btn-outline btn-primary btn-wide ml-96 mt-10 glass text-xl'>Read More +</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={slideStyle}>
                    <div className="relative">
                        <img className="w-full h-full object-cover" src={banner3} alt="" style={slideImageStyle} />
                        <div style={gradientStyle}></div>
                        <div className="absolute top-96 ml-40" style={textStyle}>
                            <div className="flex gap-6 text-center mb-6 ml-72">
                                <p className='flex items-center gap-1 text-xl'><MdOutlineDateRange />October 21, 2021 </p>
                                <p className='flex items-center gap-1 ml-14 text-xl'><LuPencilLine />by Mishel Mark</p>
                            </div>
                            <h2 className="text-white font-bold text-5xl">STYLISH RIDES FOR THE MODERN WOMAN</h2>
                            <p className="text-xl mt-5 text-center">Experience the ultimate in comfort and style with our selection of chic vehicles tailored for todays woman.</p>
                            <button className='btn btn-outline btn-primary btn-wide ml-96 mt-10 glass text-xl'>Read More +</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={slideStyle}>
                    <div className="relative">
                        <img className="w-full h-full object-cover" src={banner4} alt="" style={slideImageStyle} />
                        <div style={gradientStyle}></div>
                        <div className="absolute top-96 ml-36" style={textStyle}>
                            <div className="flex gap-6 text-center mb-6 ml-72"> 
                                <p className='flex items-center gap-1 text-xl'><MdOutlineDateRange />November 22, 2023 </p>
                                <p className='flex items-center gap-1 ml-14 text-xl'><LuPencilLine />by Prince Lee</p>
                            </div>
                            <h2 className="text-white font-bold text-5xl">EXPLORING THE WORLD ONE TRIP AT A TIME</h2>
                            <p className="text-xl mt-5 text-center">Embark on a journey of discovery and adventure as you explore the wonders of the world, one trip at a time.</p>
                            <button className='btn btn-outline btn-primary btn-wide ml-96 mt-10 glass text-xl'>Read More +</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={slideStyle}>
                    <div className="relative">
                        <img className="w-full h-full object-cover" src={banner5} alt="" style={slideImageStyle} />
                        <div style={gradientStyle}></div>
                        <div className="absolute top-96 ml-32" style={textStyle}>
                            <div className="flex gap-6 text-center mb-6 ml-72">
                                <p className='flex items-center gap-1 lg:text-xl'><MdOutlineDateRange />December 13, 2024 </p>
                                <p className='flex items-center gap-1 ml-14 text-xl'><LuPencilLine />by Xaviar Marlee</p>
                            </div>
                            <h2 className="text-white font-bold text-5xl">PRECIOUS MOMENTS WITH YOUR LITTLE ONE</h2>
                            <p className="text-xl mt-5 text-center">Cherish the special moments with your little one as you create lasting memories together.</p>
                            <button className='btn btn-outline btn-primary btn-wide ml-96 mt-10 glass text-xl'>Read More +</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;







//  [
//       {
//         "title": "Exploring the Ancient Ruins of Machu Picchu",
//         "image": "https://i.ibb.co/3FzQn7m/eddie-kiszka-r-FESpq5-MMTg-unsplash.jpg",
//         "description": "Embark on a journey to the heart of the Andes Mountains and uncover the mysteries of the legendary Inca citadel.",
//         "category": "Adventure"
//       },
//       {
//         "title": "Safari Adventure: Witnessing the Great Migration in Serengeti",
//         "image": "https://i.ibb.co/hFj96xg/hu-chen-0-Lwfb-Rt-Q-ac-unsplash.jpg",
//         "description": "Experience the awe-inspiring spectacle of millions of wildebeests and zebras crossing the Serengeti plains.",
//         "category": "Wildlife"
//       },
//       {
//         "title": "Island Paradise: Discovering the Beauty of Bali",
//         "image": "https://i.ibb.co/XCwx2qb/alfiano-sutianto-ex-Fd-OWk-YBQw-unsplash.jpg",
//         "description": "Indulge in the tranquil beaches, lush rice terraces, and vibrant culture of Indonesia's most enchanting island.",
//         "category": "Beach"
//       },
//       {
//         "title": "Cityscape Chronicles: Exploring Tokyo's Neon Wonderland",
//         "image": "https://i.ibb.co/x3T0L2v/jezael-melgoza-lay-Mb-SJ3-YOE-unsplash.jpg",
//         "description": "Immerse yourself in the bustling streets, towering skyscrapers, and traditional temples of Japan's dynamic capital.",
//         "category": "City"
//       },
//       {
//         "title": "European Escapade: Uncovering the Charms of Paris",
//         "image": "https://i.ibb.co/k20wfs4/pexels-imagestudio-1488315.jpg",
//         "description": "Stroll along the romantic Seine River, admire iconic landmarks, and savor gourmet delights in the City of Light.",
//         "category": "Culture"
//       },
//       {
//         "title": "Magical Landscapes: Trekking the Inca Trail in Peru",
//         "image": "https://i.ibb.co/WtH8BXX/kal-visuals-UL2zpf-Fkc-WU-unsplash.jpg",
//         "description": "Embark on an unforgettable journey through rugged mountains, cloud forests, and ancient Inca settlements.",
//         "category": "Hiking"
//       }
//     ]
  
  