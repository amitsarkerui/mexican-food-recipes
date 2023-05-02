import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const chef = useLoaderData();
  console.log(chef);
  return (
    <div>
      {/* Hero area/Banner */}
      <div className="bg-[url('https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?w=1480&t=st=1683051760~exp=1683052360~hmac=cab5ee4c18593bfc4dfcdb8b75a2f02b786fe424a3d5dc6cd9380d8848f4f929')] bg-cover py-48">
        <div className="container px-4 md:px-0 mx-auto">
          <h1 className="text-5xl text-white font-bold">
            Explore the Flavors of Mexico
          </h1>
          <p className="text-white  text-lg mt-7">
            Discover the Vibrant World of Mexican Cuisine with our Collection of
            Traditional <br /> Recipes, Mouthwatering Flavors, and Cultural
            Delights. Immerse Yourself in the Rich <br /> Tapestry of Mexican
            Gastronomy and Unleash Your Inner Chef!
          </p>
          <button className=" mt-10 py-3 px-8 border border-white rounded-md hover:bg-orange-500 text-white hover:border-orange-500 ">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
