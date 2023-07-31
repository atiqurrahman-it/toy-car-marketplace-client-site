import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import "react-tabs/style/react-tabs.css";

import "./ShopByCategory.css";

import { useEffect, useState } from "react";
import ShopByTabCard from "./ShopByTabCard";

const ShopByCategory = () => {
  const [categories, setCategories] = useState([]);
  const [tabCard, setTabCard] = useState([]);

  const [CategoryLoading, setCategoryLoading] = useState(true);

  useEffect(() => {
    fetch("https://toy-car-marketplace-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // default call first category
  useEffect(() => {
    console.log("1 bra coll");
    handelTabCard(categories[0]?.name);
  }, [categories]);

  const handelTabCard = (category_name) => {
    console.log(category_name);
    fetch(
      `https://toy-car-marketplace-server.vercel.app/toys-by-category?category_name=${category_name}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTabCard(data);
        setCategoryLoading(false);
      });
  };

  return (
    <div className="my-10">
      <Tabs>
        <TabList>
          <div className="navbar bg-black text-white">
            {categories.map((category) => (
              <Tab key={category._id}>
                <a onClick={() => handelTabCard(category.name)}>
                  {" "}
                  {category.name}
                </a>
              </Tab>
            ))}
            {/* <Tab> <a className="">sports car</a></Tab>
            <Tab>truck </Tab> */}
          </div>
        </TabList>

        <TabPanel>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {tabCard.slice(0, 10).map((tabPanel) => (
              <ShopByTabCard
                tabPanel={tabPanel}
                key={tabPanel._id}
              ></ShopByTabCard>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {tabCard.slice(0, 10).map((tabPanel) => (
              <ShopByTabCard
                tabPanel={tabPanel}
                key={tabPanel._id}
              ></ShopByTabCard>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {tabCard.slice(0, 10).map((tabPanel) => (
              <ShopByTabCard
                tabPanel={tabPanel}
                key={tabPanel._id}
              ></ShopByTabCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
