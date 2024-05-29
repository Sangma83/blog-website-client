import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecentBlogCard = ({ recent }) => {
    const { _id, title, image, description, category } = recent;
    const { user } = useContext(AuthContext);

    const addToWishlist = async () => {
        if (!user) {
            toast.error('You need to log in to add to the wishlist.');
            return;
        }

        const wishlistItem = {
            userId: user.uid,
            blogId: _id,
            title,
            image,
            description,
            category
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/wishlist`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(wishlistItem),
            });

            if (response.ok) {
                toast.success('Blog added to wishlist!');
            } else {
                toast.error('Failed to add blog to wishlist.');
            }
        } catch (error) {
            console.error('Error adding to wishlist:', error);
            toast.error('Error adding to wishlist.');
        }
    };

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img className="relative" src={image} alt="image" />
                <div className="bg-fuchsia-700 px-16 py-1 text-white absolute top-56 skeleton">
                    {category}
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/blogdetail/${_id}`}>
                        <button className="btn btn-neutral">Details</button>
                    </Link>
                    <button className="btn btn-primary" onClick={addToWishlist}>
                        Wishlist
                    </button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default RecentBlogCard;
