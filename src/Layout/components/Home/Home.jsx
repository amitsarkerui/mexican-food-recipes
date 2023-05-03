import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaUserGraduate, FaList, FaSmile } from "react-icons/fa";

const Home = () => {
  const chef = useLoaderData();
  //   console.log(chef);
  return (
    <div>
      {/* Hero area/Banner */}
      <div className="bg-[url('https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?w=1480&t=st=1683051760~exp=1683052360~hmac=cab5ee4c18593bfc4dfcdb8b75a2f02b786fe424a3d5dc6cd9380d8848f4f929')] bg-cover py-60">
        <div className="container px-4 md:px-0 mx-auto">
          <h1 className="text-5xl text-white font-bold">
            Explore the Flavors of{" "}
            <span className="text-orange-500">Mexico</span>
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

      {/* Chef area */}
      <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-3 text-center mt-24 mb-10">
        {chef.map((singleChef) => (
          <div className="text-center mb-20">
            <img
              className=" mx-auto rounded-full h-96 w-96 object-cover"
              src={singleChef.chef_picture_url}
              alt=""
            />
            <h1 className="text-3xl font-bold mt-4 text-gray-700">
              {singleChef.chef_name}
            </h1>
            <div className="flex justify-evenly gap-2 mt-4">
              <div className="flex items-center gap-2 font-medium py-2 px-3 bg-blue-50 rounded-xl text-gray-600">
                <FaUserGraduate />
                <span>Ex : {singleChef.experience} </span>
              </div>
              <div className="flex items-center gap-2 font-medium py-2 px-3 bg-blue-50 rounded-xl text-gray-600">
                <FaList />
                <span>Total Recipes : {singleChef.recipes.length} </span>
              </div>
              <div className="flex items-center gap-2 font-medium py-2 px-3 bg-blue-50 rounded-xl text-gray-600">
                <FaSmile />
                <span>Likes : {singleChef.number_of_likes} </span>
              </div>
            </div>
            <h3 className="font-xl font-medium mt-4 text-gray-600">
              {singleChef.short_bio}
            </h3>
            <button className="py-3 px-8 rounded-lg bg-orange-500 font-medium text-white mt-4 hover:bg-gray-800">
              <Link>View All Recipes</Link>
            </button>
          </div>
        ))}
      </div>

      {/* video area */}
      <div className="">
        <h2 className="text-center text-4xl font-bold mb-8">
          Watch our recipes
        </h2>
        <iframe
          className=""
          width="1920"
          height="800"
          src="https://www.youtube.com/embed/hvF5wWChxbk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      {/* Join with us */}
    </div>
  );
};

export default Home;
