import { useLoaderData, useNavigate } from "react-router-dom";
import useTitle from "../../hook/useTittle";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const SingleToyCar = () => {
   //setTittle
   useTitle('Toy-Details')
    const navigate=useNavigate()
  const toyCar = useLoaderData();
  const {
    photo,
    seller_name,
    name,
    seller_email,
    price,
    quantity,
    description,
    rating,
  } = toyCar;
  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full  items-center min-h-[450px] justify-items-center ">
          <div>
            <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
          </div>
          <div>
            <h1 className="text-5xl font-bold my-5">{name}</h1>
            <p>Seller Name : {seller_name} </p>
            <p>Seller Email : {seller_email}</p>
            <p>Available Quantity : {quantity}</p>
            <p>Price : {price}</p>

            <div className="flex-grow-1">
          <Rating
            placeholderRating={rating}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          ></Rating>

          <span> {rating} </span>
        </div>

            <p className="py-6">{description}</p>
            <button  onClick={() => navigate(-1)} className="btn btn-warning">Go Back </button>
          </div>
        </div>
      </>
  );
};

export default SingleToyCar;
