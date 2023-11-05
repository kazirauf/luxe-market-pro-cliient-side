import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {  Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const TabsCard = () => {
    const [tabs, setTabs] = useState([])
    console.log(tabs);
    useEffect(() => {
        fetch('http://localhost:5000/tabsCategory')
        .then(res => res.json())
        .then(data => setTabs(data))
    }, [])
    return (
        <div className='lg:mx-20 mx-2'>
                  <Tabs className="border-2 border-fuchsia-300 rounded-xl bg-fuchsia-200">
    <TabList>
     <div className='gird lg:flex md:flex grid-cols-1'>
   {
    tabs.map(t =>   <Link to={`/${t._id}`} key={t._id}><Tab  className=" py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">{t.name}</Tab></Link>)
   }
   
      
     </div>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default TabsCard;