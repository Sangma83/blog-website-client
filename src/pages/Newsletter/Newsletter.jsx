import { ToastContainer, toast } from 'react-toastify';
import brush from '../../assets/501.jpg';
import book from '../../assets/h1-img-01.png';
import { useState } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const Newsletter = () => {
   const [subscribe, setSubscribe] = useState(false);
   const {text} = useTypewriter({
    loop: {},
    typeSpeed: 120,
    delaySpeed: 80,
   });

    
    const handleSubscribe = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log( name, email);

        if (!subscribe) {
            toast("Thank you for subscribing to our newsletter!");
            setSubscribe(true);
            // Clear form fields after subscribing
            form.name.value = '';
            form.email.value = '';
         }
       
    }
    return (
        <div className=''>
             <img className='h-[380px] w-full' src={brush} alt="" />
            <div className='flex relative'>
                <div className="w-1/3 absolute bottom-10 left-10"><img className='w-[450px]' src={book} alt="" /></div>
                <div className="w-1/2 absolute bottom-32 right-20">
                    <h2 className='font-bold text-black text-3xl'>FINDING THE PERFECT TRAILS TO HIKE IS EASY WITH <span className='text-lime-700'>{text}NEWSLETTER</span> <Cursor></Cursor> </h2>

                    <div className="join mt-8">
                     <input className="input input-bordered join-item" name='name' placeholder="Name"/>
                     <input className="input input-bordered join-item" name='email' placeholder="Email"/>
                       <button onClick={handleSubscribe} className="btn btn-primary join-item rounded-r-full">Subscribe</button>
                          </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Newsletter;