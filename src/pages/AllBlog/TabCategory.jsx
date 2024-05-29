import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RecentBlog from '../RecentBlog/RecentBlog';
import { Helmet } from 'react-helmet-async';

const TabCategory = ({ recent }) => {
    const categories = ['Adventure', 'Wildlife', 'Hiking']; // List of categories

    return (
        <div className="container px-6 py-10 mx-auto">
             <Helmet>
                <title>TravelTime || All Blog</title>
            </Helmet>
            <div className='flex items-center justify-center'>
                <Tabs>
                    <TabList>
                        {categories.map((category, index) => (
                            <Tab key={index}>{category}</Tab>
                        ))}
                    </TabList>

                    {categories.map((category, index) => (
                        <TabPanel key={index}>
                            <RecentBlog  recent={recent} category={category} />
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </div>
    );
};

export default TabCategory;
