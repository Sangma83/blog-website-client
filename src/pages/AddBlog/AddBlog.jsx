import { MdLibraryAdd } from "react-icons/md";
import Swal from "sweetalert2";
import useAuth from "../../providers/useAuth";

const AddBlog = () => {
  const { user } = useAuth() || {};
  
  const handleAddBlog = (event) => {
    event.preventDefault();

    const form = event.target;
    const image = form.image.value;
    const title = form.title.value;
    const category = form.category.value;
    const description = form.description.value;
    const long_description = form.long_description.value;
    const email = user?.email;

    const newBlog = {
      image,
      title,
      category,
      description,
      long_description,
      email,
    };

    fetch(`${import.meta.env.VITE_API_URL}/recentBlog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Blog added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="space-y-10 my-10">
      <div className="bg-[#afefa9] p-24 rounded-lg">
        <h2 className="text-3xl font-extrabold text-center mb-4 relative">
          <MdLibraryAdd className="text-[#0856e6d3] ml-80 absolute left-20" />
          <span className="text-[#084ee6d3]">Add</span> Blog Post
        </h2>
        <form onSubmit={handleAddBlog}>
          {/* form row Image URL and Title */}
          <div className="md:flex gap-8 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="image"
                  className="input input-bordered w-full"
                  placeholder="Image URL"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="title"
                  className="input input-bordered w-full"
                  placeholder="Title"
                />
              </label>
            </div>
          </div>
          {/* form row Category and Short Description */}
          <div className="md:flex gap-8 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <select
                  name="category"
                  className="select select-bordered w-full"
                  required
                >
                  <option value="" disabled selected>
                    Select a category
                  </option>
                  <option value="Tech">Adventure</option>
                  <option value="Health">Hiking</option>
                  <option value="Travel">Travel</option>
                  <option value="Food">Culture</option>
                  <option value="Lifestyle">Wildlife</option>
                </select>
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  className="input input-bordered w-full"
                  placeholder="Short description"
                />
              </label>
            </div>
          </div>
          {/* form row Long Description */}
          <div className="mb-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Long Description</span>
              </label>
              <label className="input-group">
                <textarea
                  name="long_description"
                  className="textarea textarea-bordered w-full"
                  placeholder="Long description"
                  rows="6"
                ></textarea>
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Blog Post"
            className="btn btn-block bg-[#23174e] text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
