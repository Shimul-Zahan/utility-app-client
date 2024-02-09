import { message } from "antd";

const AdminPage = () => {

  const handleDelete = () =>{
    message.success("User Delete Successful!");
  }
  return (
    <div>
      <div className="overflow-x-auto mx-10 my-20">
        <h1 className="text-4xl font-bold text-center mb-3">All USER HERE</h1>
        <table className="table table-zebra border-4">
          {/* head */}
          <thead>
            <tr className="font-semibold text-center text-lg">
              <th>SL</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            <tr className="text-center">
              <th>1</th>
              <td className="font-medium">xyz@gmail.com</td>
              <td>
                <button className="btn btn-sm btn-error text-white font-semibold" onClick={handleDelete}>
                  Delete
                </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
