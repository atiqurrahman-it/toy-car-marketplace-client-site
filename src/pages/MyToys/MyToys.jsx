import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useTitle from "../../hook/useTittle";
import { AuthContext } from "../../providers/AuthProviders";
import MyToyRow from "./MyToyRow";

const MyToys = () => {
  //setTittle
  useTitle("MyToys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);


  // handel delete ei page kora kaon hoilo mytoys ke update korar jonno
  const handelDeleteToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        //delete toy
        fetch(`https://toy-car-marketplace-server.vercel.app/my-toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              //update MyToys
              const remaining = myToys.filter((toy) => toy._id !== id);
              setMyToys(remaining);
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
            }
          })
          .catch((error) => {
            Swal.fire(error.message, "sorry failed to deleted", "error");
            console.log(error);
          });
      }
    });
    // alert
  };

  const url = `https://toy-car-marketplace-server.vercel.app/my-toys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [url]);


  

  return (
    <div>
      <h1 className="text-3xl font-bold my-5"> My Toys </h1>
      <div className="flex justify-end items-center mb-5">
      <div className="my-2">
      <select  >
        <option value="none"  >Select ....</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Img</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>quantity</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((myToy, index) => (
              <MyToyRow
                index={index}
                handelDeleteToy={handelDeleteToy}
                myToy={myToy}
                key={myToy._id}
              ></MyToyRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
