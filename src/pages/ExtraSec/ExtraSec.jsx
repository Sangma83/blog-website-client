import { FaCampground, FaMapLocationDot, FaPersonWalkingLuggage } from "react-icons/fa6";
import { GiCampfire, GiCaravel } from "react-icons/gi";
import { SlDirections } from "react-icons/sl";


const ExtraSec = () => {
    return (
        <div>
            <div className="flex gap-32 ">
            <div className="text-center">
            <GiCaravel className="text-8xl text-lime-900 transform transition-transform duration-300 hover:scale-110" />
            <p>3 destination</p>
            <h2 className="text-xl font-bold">ADVENTURE</h2>
            </div>
            <div className="text-center">
            <FaMapLocationDot className="text-8xl text-lime-900 transform transition-transform duration-300 hover:scale-110" />
            <p>4 destination</p>
            <h2 className="text-xl font-bold">BEACHES</h2>
            </div>
            <div className="text-center">
            <GiCampfire className="text-8xl text-lime-900 transform transition-transform duration-300 hover:scale-110" />
            <p>5 destination</p>
            <h2 className="text-xl font-bold">CAMPING</h2>
            </div>
            <div className="text-center">
            <FaCampground className="text-8xl text-lime-900 transform transition-transform duration-300 hover:scale-110" />
            <p>1 destination</p>
            <h2 className="text-xl font-bold">FRIENDLY</h2>
            </div>
            <div className="text-center">
            <FaPersonWalkingLuggage className="text-8xl text-lime-900 transform transition-transform duration-300 hover:scale-110" />
            <p>9 destination</p>
            <h2 className="text-xl font-bold">LOW BUDGET</h2>
            </div>
            <div className="text-center">
            <SlDirections className="text-8xl text-lime-900 transform transition-transform duration-300 hover:scale-110" />
            <p>4 destination</p>
            <h2 className="text-xl font-bold">POPULAR</h2>
            </div>
            </div>
        </div>
    );
};

export default ExtraSec;