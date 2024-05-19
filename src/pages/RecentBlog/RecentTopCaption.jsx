import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";


const RecentTopCaption = () => {
    return (
        <div>
             <div>
                <h2 className="text-3xl font-bold text-center mb-4">RECENT BLOGS</h2>
                <p className="text-center items-center text-xl mb-8 relative"><FaQuoteLeft className="absolute left-80" />Every journey is a story waiting to be told. Explore the world through<br/> the lens of recent travel blogs and let the adventures inspire your next chapter<FaQuoteRight className="absolute top-6 right-72" /></p>
            </div>
        </div>
    );
};

export default RecentTopCaption;