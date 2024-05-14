import stroke from '../../assets/stroke.png';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/baglogo.png';
import logo3 from '../../assets/Untitled-2.png';
import logo4 from '../../assets/Untitled-3.png';

const BelowBanner = () => {
    return (
        <div className="">
  <div className="flex gap-3">
  <div className="">
  <img className='h-[300px]' src={stroke} alt="" />
  <img className='-mt-80 mr-8 w-[330px] transform transition-transform duration-300 hover:scale-110' src={logo1} alt="" />
  </div>
  <div>
  <img className='h-[300px]' src={stroke} alt="" />
  <img className='-mt-80 mr-8 w-[270px] transform transition-transform duration-300 hover:scale-110' src={logo2} alt="" />
  </div>
  <div>
  <img className='h-[300px]' src={stroke} alt="" />
  <img className='-mt-72 mr-8 w-[280px] transform transition-transform duration-300 hover:scale-110' src={logo3} alt="" />
  </div>
  <div>
  <img className='h-[300px]' src={stroke} alt="" />
  <img className='-mt-72 mr-8 w-[270px] transform transition-transform duration-300 hover:scale-110' src={logo4} alt="" />
  </div>
  </div>
    <div className="max-w-md">
      
    </div>
  </div>

    );
};

export default BelowBanner;