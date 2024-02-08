import { Link } from "react-router-dom";

const Note = () => {
  return (
    <div className="mx-10 mt-10 mb-60">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">LOGO</h1>
        <Link to="/Notes/addNote">
          <button className="btn btn-primary text-white font-semibold">
            Add Notes +
          </button>
        </Link>
      </div>
      <div className="flex items-center mt-10 gap-3">
        <div className="card w-80  bg-slate-800 text-primary-content">
          <div className="card-body text-center">
            <h2 className="text-2xl font-semibold text-white">Card title!</h2>
            <p className="text-white font-medium">05 February 2024</p>
            <div className="card-actions justify-center mt-5">
              <Link to="">
                <button className="btn btn-primary text-white">View</button>
              </Link>
              <Link to="">
                <button className="btn btn-warning text-white">Update</button>
              </Link>
              <Link to="">
                <button className="btn btn-error text-white">Delete</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-80  bg-slate-800 text-primary-content">
          <div className="card-body text-center">
            <h2 className="text-2xl font-semibold text-white">Card title!</h2>
            <p className="text-white font-medium">05 February 2024</p>
            <div className="card-actions justify-center mt-5">
              <Link to="">
                <button className="btn btn-primary text-white">View</button>
              </Link>
              <Link to="">
                <button className="btn btn-warning text-white">Update</button>
              </Link>
              <Link to="">
                <button className="btn btn-error text-white">Delete</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-80  bg-slate-800 text-primary-content">
          <div className="card-body text-center">
            <h2 className="text-2xl font-semibold text-white">Card title!</h2>
            <p className="text-white font-medium">05 February 2024</p>
            <div className="card-actions justify-center mt-5">
              <Link to="">
                <button className="btn btn-primary text-white">View</button>
              </Link>
              <Link to="">
                <button className="btn btn-warning text-white">Update</button>
              </Link>
              <Link to="">
                <button className="btn btn-error text-white">Delete</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
