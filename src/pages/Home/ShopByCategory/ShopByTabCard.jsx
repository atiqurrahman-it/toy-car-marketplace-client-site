import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { useContext } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const ShopByTabCard = ({ tabPanel }) => {
  const { user } = useContext(AuthContext);

  const { _id, photo, name, price, rating } = tabPanel;
  const navigate = useNavigate();

  const handelToyDetails = (id) => {
    if (user) {
      navigate(`/toy-cars/${id}`);
    } else {
      toast("Without a login, you can not visit the single toy details page!");
      navigate(`/toy-cars/${id}`);
    }
  };
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Shoes" className="md:h-96" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>price : $ {price} </p>
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
        <div className="card-actions justify-end">
          <button
            onClick={() => handelToyDetails(_id)}
            className="btn btn-warning"
          >
            Show Details{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopByTabCard;
