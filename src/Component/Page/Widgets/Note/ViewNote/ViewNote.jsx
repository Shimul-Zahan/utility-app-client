import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { useAllContext } from "../../../../Context/AllContext";

const ViewNote = () => {
  const { allTask } = useAllContext();

  return (
    <div className="mx-20 mt-10 mb-[28vh]">
      <div className="flex justify-end">
        <Link to="/Notes/addTask">
          <button className="btn btn-primary text-white font-semibold mb-9">
            Add Task +
          </button>
        </Link>
      </div>
      <div className="card card-side bg-base-100 shadow-2xl border-4 border-black">
        <Row>
          <Col span={12} className="border-r-8">
            <div className="card-body">
              <h2 className="text-3xl font-bold">Gym after work</h2>
              <p>05 February 2024</p>
              <p className="font-semibold">Description:</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea
              </p>
            </div>
          </Col>
          <Col span={12}>
            <div className="card-body">
              <h2 className="text-xl font-bold">Tasks:</h2>
              <ul style={{ listStyle: "circle" }} className="ml-5">
                {allTask.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
              <div className="card-actions justify-end">
                <Link to="">
                  <button className="btn btn-warning text-white">Update</button>
                </Link>
                <Link to="">
                  <button className="btn btn-error text-white">Delete</button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ViewNote;
