/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <>
      <div className="md:flex items-center justify-center my-3 gap-2 ">
        <div className="flex items-center justify-center my-3 gap-2 ">
          <div className="w-auto  bg-gray-300 text-black flex px-7 py-4 rounded-lg align-middle">
            <img
              className="w-28 rounded-full"
              src={data.avatar_url}
              alt="image"
            />
            <div className="flex-col gap-2 ml-3">
              <h1 className="text-lg font-bold">{data.name}</h1>
              <h3 className="text-base font-semibold">
                Followers : {data.followers}
              </h3>
              <h3 className="text-base font-semibold">
                Following : {data.following}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Github;

export const dataInfo = async () => {
  const response = await fetch("https://api.github.com/users/ashishkpandey91");
  return response.json();
};
