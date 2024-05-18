import { useState, useEffect } from "react";
import { LuPencilLine } from "react-icons/lu";
import { MdOutlineDateRange } from "react-icons/md";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const BlogDetail = () => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState("");
    const [loading, setLoading] = useState(true);

    const recents = useLoaderData();
    const { id } = useParams();
    const recent = recents.find(recent => recent._id === id);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchComments = async () => {
            const response = await fetch(`http://localhost:5000/comments/${id}`);
            const data = await response.json();
            setComments(data);
            setLoading(false);
        };
        fetchComments();
    }, [id]);

    const handleCommentSubmit = async () => {
        if (commentText.trim()) {
            const newComment = {
                text: commentText,
                userName: currentUser.displayName,
                userProfilePic: currentUser.photoURL,
                blogId: id,
            };
            await fetch(`${import.meta.env.VITE_API_URL}/comments`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newComment),
            });
            setCommentText("");
            const response = await fetch(`${import.meta.env.VITE_API_URL}/comments/${id}`);
            const data = await response.json();
            setComments(data);
        }
    };

    const isBlogOwner = recent.authorEmail === currentUser.email;

    return (
        <div className="my-20">
            <div className="hero min-h-screen bg-base-200 rounded-xl shadow-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={recent.image} className="max-w-lg h-[500px] rounded-lg shadow-2xl" alt="Blog" />
                    <div>
                        <h1 className="text-4xl text-green-950 font-bold">{recent.title}</h1>
                        <div className="flex justify-between my-4">
                            <p className="flex items-center gap-2"><MdOutlineDateRange />{recent.date}</p>
                            <p className="flex items-center gap-2"><LuPencilLine />by: {recent.author}</p>
                        </div>
                        <p>{recent.description}</p>
                        <p className="py-6">{recent.long_description}</p>
                        {isBlogOwner && (
                            <button className="btn btn-primary" onClick={() => navigate(`/update/${id}`)}>
                                Update
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className="my-8">
                <h2 className="text-2xl font-bold mb-4">Comments</h2>
                {isBlogOwner ? (
                    <p>Cannot comment on own blog</p>
                ) : (
                    <div className="mb-4">
                        <textarea
                            className="textarea textarea-bordered w-full"
                            placeholder="Add a comment..."
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                        ></textarea>
                        <button className="btn btn-primary mt-2" onClick={handleCommentSubmit}>
                            Submit Comment
                        </button>
                    </div>
                )}
                {loading ? (
                    <p>Loading comments...</p>
                ) : (
                    comments.map(comment => (
                        <div key={comment._id} className="mb-4 p-4 bg-base-200 rounded-lg">
                            <div className="flex items-center mb-2">
                                <img src={comment.userProfilePic} alt={comment.userName} className="w-10 h-10 rounded-full mr-2" />
                                <p className="font-bold">{comment.userName}</p>
                            </div>
                            <p>{comment.text}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default BlogDetail;
