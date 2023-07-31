import { Link } from "react-router-dom";

const CarRow = ({ toy_car, index }) => {
  const {_id, photo, name, seller_name, category, price, quantity } = toy_car;

//   const toyCardDetails=id=>{
//     console.log("details",id)
//   }

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        {photo && (
          <>
            <div className="avatar">
              <div className="rounded w-24 h-24">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </>
        )}
      </td>
      <td>{name && <> {name} </>} </td>
      <td>{seller_name}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Link  to={`/toy-cars/${_id}`} >
      <button className="btn btn-warning">Details </button>
        </Link>
      </td>
    </tr>
  );
};

export default CarRow;
