import Select from "react-select";

import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useTitle from "../../hook/useTittle";
import { AuthContext } from "../../providers/AuthProviders";

// const options = (
//   <>
//     <option value="DEFAULT" disabled>
//       Select-Category
//     </option>
//     <option value="male">Cars</option>
//     <option value="female">Sports</option>
//     <option value="other">min police car </option>
//   </>
// );

const Add_a_Toy = () => {
  //setTittle
  useTitle("Add-A-Toys");
  const { user } = useContext(AuthContext);
  const [addToyError, setAddToyError] = useState("");

  // sub category
  const [categories, setCategories] = useState([]);

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

  // add to category react select
  const options = [];
  {
    categories.map((category) => (
      <div key={category._id}>
        {options.push({ value: category.name, label: category.name })}
      </div>
    ));
  }

  // category end

  // const handelCategory=()=>{

  // }
  const handelAddAToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const category = form.category.value;
    const seller_name = form.seller_name.value;
    const seller_email = form.seller_email.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const photo = form.photo_url.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const toy = {
      name,
      category,
      seller_name,
      seller_email,
      price,
      quantity,
      photo,
      rating,
      description,
    };
    console.log(toy);

    setAddToyError(" ");
    fetch(`https://toy-car-marketplace-server.vercel.app/add-a-toy`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          form.reset();
          // successfully alert
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Toy Car  has been successfully saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log("inside client site ", data);
      })
      .catch((error) => {
        console.log(error);
        setAddToyError(error.message);
      });
  };

  return (
    <div className="min-h-screen m-8 md:m-0">
      <h1 className="my-7 text-2xl font-extrabold">Please Add A Toy </h1>
      <div>
        <form onSubmit={handelAddAToy}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Toy Name"
                name="name"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>

              <Select required name="category" options={options} />

              {/* <select
                id=""
                name="category"
                required
                defaultValue={"DEFAULT"}
                className="input input-bordered"
              >
                {options}
              </select> */}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Seller Name"
                name="seller_name"
                defaultValue={user?.displayName}
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email </span>
              </label>
              <input
                type="email"
                placeholder="Enter Seller Email"
                name="seller_email"
                required
                defaultValue={user?.email}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price </span>
              </label>
              <input
                type="text"
                placeholder="Enter Product Price "
                name="price"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="text"
                placeholder="Enter Product Quantity"
                name="quantity"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter Photo URL"
                name="photo_url"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                placeholder="Enter Rating"
                name="rating"
                required
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="form-control mb-5">
            <label className="label">
              <span className="label-text">Subject</span>
            </label>
            <textarea
              id="textarea"
              name="description"
              rows="10"
              cols="10"
              required
              placeholder="Enter Description"
              className="mt-2 p-2 border border-black rounded-md"
            ></textarea>
          </div>
          <div>
            <p className="text-red-700"> {addToyError} </p>
          </div>
          <div className=" py-6">
            <input
              className="btn btn-warning"
              type="submit"
              value="Add A Toy "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add_a_Toy;
