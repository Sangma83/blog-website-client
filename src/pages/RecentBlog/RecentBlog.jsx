import { useEffect, useState } from "react";
import RecentBlogCard from "./RecentBlogCard";

const RecentBlog = ({ displayAll, category }) => {
    const [recentBlog, setRecentBlog] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/recentBlog`)
            .then(res => res.json())
            .then(data => setRecentBlog(data))
    }, []);

    // Filter blogs based on category
    const filteredBlogs = category
        ? recentBlog.filter(blog => blog.category === category)
        : recentBlog;

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
                {displayAll
                    ? filteredBlogs.map(recent => (
                        <RecentBlogCard
                            key={recent._id}
                            recent={recent}
                        />
                    ))
                    : filteredBlogs.slice(0, 6).map(recent => (
                        <RecentBlogCard
                            key={recent._id}
                            recent={recent}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default RecentBlog;
