import { useEffect, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import RecentBlogCard from "./RecentBlogCard";


const RecentBlog = () => {
    const [recentBlog, setRecentBlog] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/recentBlog`)
        .then(res => res.json())
        .then(data => setRecentBlog(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className="text-3xl font-bold text-center mb-4">RECENT BLOGS</h2>
                <p className="text-center items-center text-xl mb-8 relative"><FaQuoteLeft className="absolute left-80" />Every journey is a story waiting to be told. Explore the world through<br/> the lens of recent travel blogs and let the adventures inspire your next chapter<FaQuoteRight className="absolute top-6 right-72" /></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
                {
                    recentBlog.map(recent => <RecentBlogCard
                    key={recent._id}
                    recent={recent}
                    ></RecentBlogCard>)
                }
            </div>
        </div>
    );
};

export default RecentBlog;