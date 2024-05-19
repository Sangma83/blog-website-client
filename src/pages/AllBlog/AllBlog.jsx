import { useEffect, useState } from "react";
import TabCategory from "./TabCategory";
import { useLoaderData } from "react-router-dom";

const AllBlog = () => {
    // Fetching data using useLoaderData hook
    const blogs = useLoaderData();
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    useEffect(() => {
        // Filter blogs based on search term
        const filtered = blogs.filter(blog =>
            blog.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBlogs(filtered);
    }, [blogs, searchTerm]);

    const handleSearch = () => {
        // Filter blogs based on search term when the search button is clicked
        const filtered = blogs.filter(blog =>
            blog.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBlogs(filtered);
    };

    return (
        <div>
            <div className="flex items-center">
                <input
                    className="border-2 rounded-lg p-2 mt-10 w-1/2 ml-10"
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-2 mt-10"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            {/* Pass filtered blogs as props to TabCategory component */}
            <TabCategory displayAll={true} recent={filteredBlogs} />
        </div>
    );
};

export default AllBlog;
