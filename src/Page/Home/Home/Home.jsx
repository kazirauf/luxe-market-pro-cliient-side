
import AboutUs from "../../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import TabsCard from "../Tabs/TabsCard";

import UserComments from "../UserComments/UserComments";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TabsCard></TabsCard>
            <UserComments></UserComments>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;