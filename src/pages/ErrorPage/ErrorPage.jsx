import { Link } from "react-router-dom";
import notFound from "../../assets/—Pngtree—sun 404 page_5912186.png";
import { Helmet } from "react-helmet-async";



const ErrorPage = () => {
    return (
        <div className="text-3xl text-center">
            <Helmet>
                <title>TravelTime || ErrorPage</title>
            </Helmet>
            <img className="w-1/2 mx-auto items-center -mb-14 -mt-28" src={notFound} alt="" />
            <h2 className="flex gap-2 ml-96 font-bold text-green-900 text-5xl"> <p className="swap-off">🥶</p>Ohooo!!! wrong route</h2>
            <p className="text-3xl font-bold mt-4">We can not found the page!!!</p>
            <Link className="text-red-300" to="/"><button className="btn px-24 bg-fuchsia-800 text-white mt-6 mb-20">Home Page</button></Link>
        </div>
    );
};

export default ErrorPage;