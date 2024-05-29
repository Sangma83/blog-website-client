import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { useEffect, useState } from 'react';

const RecentTopCaption = () => {
    const textArray = [
        "Every journey is a story waiting to be told.",
        "Explore the world through the lens of recent travel blogs",
        "and let the adventures inspire your next chapter"
    ];
    const [currentLineIndex, setCurrentLineIndex] = useState(0);

    useEffect(() => {
        // Start looping through the text
        const intervalId = setInterval(() => {
            setCurrentLineIndex(prevIndex => (prevIndex + 1) % textArray.length);
        }, 3000); 

       
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <div>
                <h2 className="text-3xl font-bold text-center mb-4">RECENT BLOGS</h2>
                <p className="text-center items-center text-xl mb-8 relative">
                    <FaQuoteLeft className="absolute left-80" />
                    <span style={{
                        animation: 'slide-in 3s ease-in-out infinite'
                    }}>{textArray[currentLineIndex]}</span>
                    <FaQuoteRight className="absolute top-6 right-72" />
                </p>
            </div>
        </div>
    );
};

export default RecentTopCaption;
