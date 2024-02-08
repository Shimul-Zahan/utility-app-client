import { DatePicker, Form, Input } from "antd";
import Lottie from "lottie-react";
import addUser from "../../../../../assets/addUser.json";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const AddNote = () => {
  return (
    <div className="flex my-16 items-center justify-evenly mx-16 p-10">
      <div>
        <h1 className="text-3xl font-bold text-center mb-6 italic">ADD NOTES</h1>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size="large"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Input Title here!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Date"
          name="DatePicker"
          rules={[
            {
              required: true,
              message: "Please input Date!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Description"
          name={["user", "description"]}
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <div className="flex gap-2 justify-center">
          <Form.Item
          >
            <button className="btn btn-wide btn-warning text-white" id="customizeBtn">
              Return
            </button>
          </Form.Item>
          <Form.Item
 
          >
            <button type="submit" className="btn btn-wide btn-primary text-white">
              Create Note
            </button>
          </Form.Item>
        </div>
      </Form>
      </div>
      <Lottie
        animationData={addUser}
        loop={true}
        style={{ width: "400px", height: "auto" }}
      />
    </div>
  );
};

export default AddNote;
