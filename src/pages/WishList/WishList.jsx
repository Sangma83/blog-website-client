import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const WishList = () => {
    const { user } = useContext(AuthContext);
    const [wishlistItems, setWishlistItems] = useState([]);
    // const { _id } = recent;

    useEffect(() => {
        const fetchWishlist = async () => {
            if (user) {
                try {
                    const response = await fetch(`${import.meta.env.VITE_API_URL}/wishlist/${user.uid}`);
                    if (response.ok) {
                        const data = await response.json();
                        setWishlistItems(data);
                    } else {
                        console.error('Failed to fetch wishlist items');
                    }
                } catch (error) {
                    console.error('Error fetching wishlist items:', error);
                }
            }
        };
        fetchWishlist();
    }, [user]);

    if (!user) {
        return <p>Please log in to view your wishlist.</p>;
    }



    const handleDelete = async (id) => {
        const proceed = confirm('Are you sure you want to delete?');
        if (proceed) {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/wishlist/${id}`, {
                    method: 'DELETE'
                });
                if (response.ok) {
                    setWishlistItems(wishlistItems.filter(item => item._id !== id));
                } else {
                    console.error('Failed to delete wishlist item');
                }
            } catch (error) {
                console.error('Error deleting wishlist item:', error);
            }
        }
    };

    return (
        <div>
            <h2 className="my-6 text-center font-bold text-2xl text-lime-800">Your Wishlist</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
                {wishlistItems.map(item => (
                    <li key={item._id}>

            <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img className="relative" src={item.image} alt="image" />
                <div className="bg-fuchsia-700 px-16 py-1 text-white absolute top-56 skeleton">
                    {item.category}
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                <Link to={`/blogdetail/${item.blogId}`}><button className="btn btn-neutral">Details</button></Link>
                    <button onClick={() => handleDelete(item._id)} className="btn bg-red-700 text-white">Remove</button>
                </div>
            </div>
        </div>
                       
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WishList;
