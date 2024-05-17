import { LuPencilLine } from "react-icons/lu";
import { MdOutlineDateRange } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";



const BlogDetail = () => {

    const recents = useLoaderData();
    const { id } = useParams();
    const recent = recents.find(recent => recent._id === id)
    console.log(recent);
    
    
    return (
        <div className="my-20">
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={recent.image} className="max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl text-green-950 font-bold">{recent.title}</h1>
      <div className="flex justify-between my-4">
        <p className="flex items-center gap-2"><MdOutlineDateRange />{recent.date}</p>
        <p className="flex items-center gap-2"><LuPencilLine />by:{recent.author}</p>
      </div>
      <p>{recent.description}</p>
      <p className="py-6">{recent.long_description}</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BlogDetail;