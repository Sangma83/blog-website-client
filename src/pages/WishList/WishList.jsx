import { useEffect, useState } from "react";
import useAuth from "../../providers/useAuth";
import Swal from "sweetalert2";
import { Link, useLoaderData, useParams } from "react-router-dom";

const WishList = () => {
  const recents = useLoaderData();
  const { id } = useParams();
  const recent = recents.find(recent => recent._id === id);
  // const navigate = useNavigate();

  const { user } = useAuth() || {};
  const [list, setList] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`${import.meta.env.VITE_API_URL}/recentBlog/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setList(data);
        });
    }
  }, [user, recents]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/recentBlog/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your art & craft item has been deleted.",
                icon: "success",
              });
              const remaining = list.filter((li) => li._id !== _id);
              setList(remaining);
            }
          });
      }
    });
  };

  const handleSort = (e) => {
    const filterValue = e.target.value;
    let sortedList = [];

    if (filterValue === "Yes") {
      sortedList = list.filter((item) => item.custom === "Yes");
    } else if (filterValue === "No") {
      sortedList = list.filter((item) => item.custom === "No");
    } else {
      sortedList = [...list];
    }

    setList(sortedList);
  };

  return (
    <div>
      <select
        onChange={handleSort}
        className="select select-bordered w-48 my-10"
      >
        <option value="">Sort by Customization</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <div className="grid md:grid-cols-3 gap-12 ml-16 lg:ml-0">
        {list?.map((p) => (
          <div key={p._id} className="card w-96 glass">
            <figure>
              <img src={p.photo} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Subcategory: {p.name}</h2>
              <p>{p.price}</p>
              <p>{p.rating}</p>
              <p>{p.custom}</p>
              <p>{p.stock}</p>
              <div className="card-actions justify-center">
                <button
                  onClick={() => handleDelete(p._id)}
                  className="btn btn-warning"
                >
                  Delete
                </button>
                <Link to={`/updatecraft/${p._id}`}>
                  <button className="btn btn-success">Update</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
