import brush from '../../assets/501.jpg';
import book from '../../assets/h1-img-01.png';

const Newsletter = () => {
    return (
        <div className=''>
             <img className='h-[380px] w-full' src={brush} alt="" />
            <div className='flex relative'>
                <div className="w-1/3 absolute bottom-10 left-10"><img className='w-[450px]' src={book} alt="" /></div>
                <div className="w-1/2 absolute bottom-32 right-20">
                    <h2 className='font-bold text-black text-3xl'>FINDING THE PERFECT TRAILS TO HIKE IS EASY WITH <span className='text-lime-700'>NEWSLETTER</span></h2>

                    <div className="join mt-8">
                     <input className="input input-bordered join-item" placeholder="Name"/>
                     <input className="input input-bordered join-item" placeholder="Email"/>
                       <button className="btn btn-primary join-item rounded-r-full">Subscribe</button>
                          </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;