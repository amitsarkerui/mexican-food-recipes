import React from "react";
import { FaList, FaSmile, FaUserGraduate } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ChefDetails = () => {
  const chefDetails = useLoaderData();
  const {
    chef_name,
    id,
    experience,
    chef_picture_url,
    number_of_likes,
    short_bio,
    recipes,
  } = chefDetails;
  return (
    <div>
      {/* Banner */}
      <div className="bg-[url('https://img.freepik.com/free-photo/top-view-cut-vegetables-wooden-spoons-with-peppers-beans-tomatoes-cinnamons_140725-144750.jpg?w=1380&t=st=1683093530~exp=1683094130~hmac=e5cb121dfd4c816d004b51c22f9c032b59f8eef831facee3710dc5b0f0da3ac4')] bg-cover bg-no-repeat bg-center py-28">
        <img
          className=" mx-auto w-60 h-60 rounded-full object-cover"
          src={chef_picture_url}
          alt=""
        />
        <h2 className="text-center mt-4 text-3xl font-bold text-gray-800">
          {chef_name}
        </h2>
        <div className="flex text-center flex-col justify-evenly mt-6 md:flex-row max-w-screen-sm mx-auto">
          <div className="flex items-center gap-2 font-medium py-2 px-3 bg-orange-500 rounded-xl text-white mx-auto text-center">
            <FaUserGraduate />
            <span>Ex : {experience} </span>
          </div>
          <div className="flex items-center gap-2 font-medium py-2 px-3 bg-orange-500 rounded-xl text-white mx-auto text-center">
            <FaList />
            <span>Total Recipes : {recipes.length} </span>
          </div>
          <div className="flex items-center gap-2 font-medium py-2 px-3 bg-orange-500 rounded-xl text-white mx-auto text-center">
            <FaSmile />
            <span>Likes : {number_of_likes} </span>
          </div>
        </div>
        <h3 className="font-xl font-medium mt-4 text-gray-700 text-center">
          {short_bio}
        </h3>
      </div>

      {/* Recipes */}
      <div className="bg-gray-100 py-24">
        <h2 className="text-3xl text-center font-bold mb-14">
          {chef_name}'s recipes
        </h2>
        <div className="container mx-auto grid grid-cols-1 gap-7 md:grid-cols-3">
          {recipes.map((sr) => (
            <div className="p-6 border border-gray-400" key={sr.recipe_id}>
              <img
                className="w-full h-96 object-cover rounded-xl"
                src={sr.recipe_cover_image}
                alt=""
              />
              <h2 className="my-6 text-2xl font-bold">
                Recipe Name : {sr.recipe_name}
              </h2>
              <div className="flex gap-3">
                <p className="font-bold text-gray-800">Ingredients:</p>
                <ul className="grid grid-cols-3 gap-3">
                  {sr.ingredients.map((sri) => (
                    <li className="bg-orange-500 text-white py-1 px-3 rounded-full text-center">
                      {sri}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-gray-600 mt-6">
                <span className="font-bold text-gray-800 mr-2">
                  Cooking Method:{" "}
                </span>{" "}
                {sr.cooking_method}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
