import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      const name = form.elements.name.value;
      const email = form.elements.email.value;

      if (!subscribe) {
         // Display toast message
         toast("Thank you for subscribing to our newsletter!", {
            position: "bottom-right",
            autoClose: 5000, // Close after 5 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
         });
         setSubscribe(true);
         // Clear form fields after subscribing
         form.elements.name.value = '';
         form.elements.email.value = '';
      }
   };

   return (
      <div className=''>
         <img className='h-[380px] w-full' src={brush} alt="" />
         <div className='flex relative'>
            <div className="w-1/3 absolute bottom-10 left-10"><img className='w-[450px]' src={book} alt="" /></div>
            <div className="w-1/2 absolute bottom-32 right-20">
               <h2 className='font-bold text-black text-3xl'>FINDING THE PERFECT TRAILS TO HIKE IS EASY WITH <span className='text-lime-700'>{text}NEWSLETTER</span> <Cursor></Cursor> </h2>
               <div className="join mt-8">
                  <form onSubmit={handleSubscribe}>
                     <input className="input input-bordered join-item" name='name' placeholder="Name"/>
                     <input className="input input-bordered join-item" name='email' placeholder="Email"/>
                     <button type="submit" className="btn btn-primary join-item rounded-r-full">Subscribe</button>
                  </form>
               </div>
            </div>
            <ToastContainer />
         </div>
      </div>
   );
};

export default Newsletter;
