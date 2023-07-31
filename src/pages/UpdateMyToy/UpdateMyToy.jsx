import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hook/useTittle";

const UpdateMyToy = () => {
  const myToy = useLoaderData();
  const { _id, name, price, quantity, description } = myToy;

  const navigate = useNavigate();
  useTitle("Update Toy");

  const handelUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const updateToy = { name, quantity, price, description };
    console.log(updateToy);

    //update MyToy
    const url = `https://toy-car-marketplace-server.vercel.app/my-toys/${_id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your data has been Update",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/my-toys");
          console.log(data);
        }
      })
      .catch((error) => {
        Swal.fire(error, "Data Not Update", "question");
        console.log(error);
      });
  };
  return (
    <div className="min-h-[400px]">
      <form onSubmit={handelUpdateToy}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input
            type="text"
            defaultValue={name}
            required
            name="name"
            className="input input-bordered"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="form-control">
            <label className="label">
              <span className="label-text">price</span>
            </label>
            <input
              type="text"
              defaultValue={price}
              required
              name="price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="text"
              defaultValue={quantity}
              required
              name="quantity"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description </span>
          </label>
          <textarea
            id=""
            name="description"
            required
            defaultValue={description}
            rows="5"
            cols="10"
            className="mt-2 p-2 border border-black rounded-md mb-2"
          ></textarea>
        </div>
        <div className=" py-6">
          <input className="btn btn-warning mr-5" type="submit" value="Update" />
          <button  onClick={() => navigate(-1)} className="btn btn-warning">Go Back </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMyToy;
