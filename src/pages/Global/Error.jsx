import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-600">404</h1>
        <p className="text-2xl font-semibold text-gray-800">
          Oops! Page Not Found
        </p>
        <p className="text-slate-500 mb-10">
          The page you are looking for does not exist!
        </p>
        <Link
          to="/"
          className="bg-amber-500 hover:bg-amber-700 text-white py-2 px-4 rounded-full "
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default Error;
