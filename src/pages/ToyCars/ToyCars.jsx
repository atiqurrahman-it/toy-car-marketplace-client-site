import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hook/useTittle";
import CarRow from "./CarRow";

const ToyCars = () => {
  //setTittle
  useTitle("All-Toys");
  const toy_cars = useLoaderData();
  const [allToy, setAllToy] = useState(toy_cars);
  const [searchError, setSearchError] = useState("");

  const handelSearchCar = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toy_name.value;
    console.log(toyName);

    setSearchError(" ");
    // search by category

    fetch(
      ` https://toy-car-marketplace-server.vercel.app/search-by-toy-name?toy_name=${toyName}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setAllToy(data);
          setSearchError(" ");
        } else {
          setSearchError("Sorry, the requested Toy Name  was not found ");
          setAllToy([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col md:flex-row md:justify-between justify-center items-center">
        <div>
          <h1 className="text-3xl font-bold">All Toys </h1>
        </div>
        <form onSubmit={handelSearchCar} className="form-control my-5">
          <div className="input-group">
            <input
              type="text"
              name="toy_name"
              placeholder="Search by Toy Name "
              className="input input-bordered"
            />
            <button type="submit" className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
      <div className=" text-center pb-4">
        {
          searchError !==" "?
          <>
        <h1 className="text-3lx font-bold">Search not found </h1> 
        <h1 className="text-red-700">{searchError}</h1>
          </> :''
        }
      </div>

      <div className="overflow-x-auto mx-7 md:mx-0">
        {
          allToy.length > 0 && 
          <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Img</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allToy.map((toy_car, index) => (
              <CarRow
                index={index}
                toy_car={toy_car}
                key={toy_car._id}
              ></CarRow>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Img</th>
              <th>Seller Name</th>
              <th>Car Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>quantity</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
        }
    
      </div>
    </div>
  );
};

export default ToyCars;
