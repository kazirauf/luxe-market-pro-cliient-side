
import { useEffect, useState } from "react";
import AboutUs from "../../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import TabsCard from "../Tabs/TabsCard";

import UserComments from "../UserComments/UserComments";

const Home = () => {
    const [tabs, setTabs] = useState([])
    console.log(tabs);
    useEffect(() => {
        fetch('http://localhost:5000/tabsCategory')
        .then(res => res.json())
        .then(data => setTabs(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <TabsCard tabs={tabs}></TabsCard>
            <UserComments></UserComments>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;