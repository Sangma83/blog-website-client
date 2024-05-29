// import { useEffect, useState } from "react";
import RecentBlogCard from "./RecentBlogCard";
import { useQuery } from "@tanstack/react-query";

const RecentBlog = ({ displayAll, category }) => {
    // const [recentBlog, setRecentBlog] = useState([]);

    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_API_URL}/recentBlog`)
    //         .then(res => res.json())
    //         .then(data => setRecentBlog(data))
    // }, []);

    const {isPending, data: recentBlog} = useQuery({
        queryKey:['recentBlog'],
        queryFn: async () =>{
            const res = await fetch(`${import.meta.env.VITE_API_URL}/recentBlog`);
            return res.json();
        }
    })

    if(isPending){
        return <span className="loading loading-dots loading-lg"></span>;
    }

    // Filter blogs based on category
    const filteredBlogs = category
        ? recentBlog.filter(blog => blog.category === category)
        : recentBlog;

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
                {displayAll
                    ? filteredBlogs?.map(recent => (
                        <RecentBlogCard
                            key={recent._id}
                            recent={recent}
                        />
                    ))
                    : filteredBlogs?.slice(0, 6).map(recent => (
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
