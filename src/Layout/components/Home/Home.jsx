import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaUserGraduate, FaList, FaSmile } from "react-icons/fa";
import LazyLoad from "react-lazy-load";

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
      <div className="container px-4 mx-auto grid grid-cols-1 gap-10 md:grid-cols-3 text-center mt-24 mb-10">
        {chef.map((singleChef) => (
          <div key={singleChef.id} className="text-center mb-20">
            <LazyLoad threshold={0.5}>
              <img
                className=" mx-auto rounded-full h-96 w-96 object-cover"
                src={singleChef.chef_picture_url}
                alt=""
              />
            </LazyLoad>

            <h1 className="text-3xl font-bold mt-4 text-gray-700">
              {singleChef.chef_name}
            </h1>
            <div className="flex text-center flex-col justify-evenly gap-2 mt-4 md:flex-row ">
              <div className="flex items-center gap-2 font-medium py-2 px-3 bg-blue-50 rounded-xl text-gray-600 mx-auto text-center">
                <FaUserGraduate />
                <span>Ex : {singleChef.experience} </span>
              </div>
              <div className="flex items-center gap-2 font-medium py-2 px-3 bg-blue-50 rounded-xl text-gray-600 mx-auto text-center">
                <FaList />
                <span>Total Recipes : {singleChef.recipes.length} </span>
              </div>
              <div className="flex items-center gap-2 font-medium py-2 px-3 bg-blue-50 rounded-xl text-gray-600 mx-auto text-center">
                <FaSmile />
                <span>Likes : {singleChef.number_of_likes} </span>
              </div>
            </div>
            <h3 className="font-xl font-medium mt-4 text-gray-600">
              {singleChef.short_bio}
            </h3>
            <button className="py-3 px-8 rounded-lg bg-orange-500 font-medium text-white mt-4 hover:bg-gray-800">
              <Link to={`/chef/${singleChef.id}`}>View All Recipes</Link>
            </button>
          </div>
        ))}
      </div>

      {/* video area */}
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-8">
          Watch our recipes
        </h2>
        <iframe
          style={{ height: "800px" }}
          className="rounded-lg w-full "
          //   width="1530"
          //   height="800"
          src="https://www.youtube.com/embed/hvF5wWChxbk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      {/* Join with us */}
      <div className="container pl-16 mx-auto p-10 bg-blue-50 rounded-xl grid grid-cols-1 gap-5 md:grid-cols-5 items-center my-24">
        <div className="col-span-3">
          <h6 className=" font-bold text-orange-500 mb-3">JOIN US</h6>
          <h2 className="text-4xl font-bold leading-normal">
            Indulge in the Art of Mexican Cuisine
            <br />
            Begin the Culinary Adventure by Sharing <br /> Your Incredible
            Recipes!
          </h2>
          <button className="py-3 px-8 rounded-lg bg-orange-500 font-medium text-white mt-6 hover:bg-gray-800">
            <Link>Join now</Link>
          </button>
        </div>
        <img
          className="rounded-lg col-span-2"
          src="https://img.freepik.com/free-vector/coloured-chefdesign_1152-72.jpg?w=826&t=st=1683216461~exp=1683217061~hmac=fcce3fc679e68d90996bf6cea8172e1c092e6f9b742bf036a1891defae79db21"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
