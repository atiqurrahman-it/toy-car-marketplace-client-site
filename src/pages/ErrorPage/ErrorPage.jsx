import { Link, useRouteError } from "react-router-dom";
import img from "../../assets/error.jpg";
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="min-h-screen text-center  flex justify-center items-center">
      <div>
        <img className="w-96 h-full mx-auto " src={img} alt="404 Not Found" />
        <div className="text-center">
          <h1 className="font-bold text-2xl">Oops!</h1>
          <p>We could not find the page you are looking for. </p>
          <p>
            <i className="text-red-600">{error.statusText || error.message}</i>
          </p>
          <Link to="/" className="btn btn-warning  mt-2">
            Go Back Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
