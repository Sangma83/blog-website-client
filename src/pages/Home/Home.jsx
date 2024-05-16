import Banner from "../../shared/Banner/Banner";
import BelowBanner from "../BelowBanner/BelowBanner";
import ExtraSec from "../ExtraSec/ExtraSec";
import Newsletter from "../Newsletter/Newsletter";
import RecentBlog from "../RecentBlog/RecentBlog";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BelowBanner></BelowBanner>
            <RecentBlog></RecentBlog>
            <ExtraSec></ExtraSec>
           <Newsletter></Newsletter> 
        </div>
    );
};

export default Home;