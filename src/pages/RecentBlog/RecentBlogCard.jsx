
const RecentBlogCard = ({recent}) => {
    const {title, image, description, category} = recent;
    return (
        
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="relative" src={image} alt="image" /><div className="bg-fuchsia-700 px-16 py-1 text-white absolute top-56 skeleton">{category}</div></figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-neutral">Details</button>
      <button className="btn btn-primary">Wishlist</button>
    </div>
  </div>
</div>
       
    );
};

export default RecentBlogCard;