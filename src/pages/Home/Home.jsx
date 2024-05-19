import Banner from "../../shared/Banner/Banner";
import BelowBanner from "../BelowBanner/BelowBanner";
import ExtraSec from "../ExtraSec/ExtraSec";
import Newsletter from "../Newsletter/Newsletter";
import RecentBlog from "../RecentBlog/RecentBlog";
import RecentTopCaption from "../RecentBlog/RecentTopCaption";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BelowBanner></BelowBanner>
            <RecentTopCaption></RecentTopCaption>
            <RecentBlog></RecentBlog>
            <ExtraSec></ExtraSec>
           <Newsletter></Newsletter> 
        </div>
    );
};

export default Home;