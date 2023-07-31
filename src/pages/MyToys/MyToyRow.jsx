import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const MyToyRow = ({ myToy, index, handelDeleteToy }) => {
  const { _id, photo, name, category, price, quantity } = myToy;

  return (
    <tr >
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
      <td>{category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/my-toys/${_id}`}> 
        <FaEdit  color="blue" fontSize="1.5em" />
        </Link>
      </td>
      <td>
        <FaTrash
          onClick={() => handelDeleteToy(_id)}
          color="red"
          fontSize="1.5em"
        />
      </td>
    </tr>
  );
};

export default MyToyRow;
