import { Button, Form, Input } from "antd";
import axios from "axios"; // Import axios for making HTTP requests
import { NavLink, useNavigate } from "react-router-dom";
import { validateEmail } from "../../../lib/utils";
import "../Login/Login.css";
import SocialLogin from "../SocialLogin/SocialLogin";

const Signup = () => {
	const navigate = useNavigate(); // Import useNavigate hook to redirect after signup

	const onFinish = async values => {
		console.log(values);
		try {
			const response = await axios.post("http://localhost:5000/signup", {
				...values,
				role: "user",
			}); // Send POST request to signup endpoint with role=user
			console.log(response); // Log success message
			navigate("/login"); // Redirect to login page after successful signup
		} catch (error) {
			console.error("Signup failed:", error?.response?.data?.error); // Log any signup errors
		}
	};

	const onFinishFailed = errorInfo => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div className='h-[calc(100vh-120px)] flex justify-center items-center overflow-auto'>
			<Form
				name='basic'
				labelCol={{
					span: 6,
					className: "form-label text-xl font-medium flex justify-start items-center",
				}}
				style={{
					maxWidth: 600,
				}}
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'
				className='w-full'
			>
				<div className='bg-black w-full py-5 px-14'>
					<h2 className='uppercase text-white text-center mb-4 font-medium text-xl'>Signup</h2>
					<Form.Item
						label='Username'
						name='username'
						className='mb-4'
						rules={[
							{
								required: true,
								message: "Please input your username!",
							},
						]}
					>
						<Input
							className='py-2 text-center username-input placeholder:text-white bg-[#a5a5a5] border-4 rounded-none border-[#434343] text-white font-medium'
							placeholder='Enter your username'
						/>
					</Form.Item>
					<Form.Item
						label='Email'
						name='email'
						className='mb-4'
						rules={[
							{
								required: true,
								message: "Please input your email!",
							},
							{
								validator: (rule, value) => {
									if (!validateEmail(value)) {
										return Promise.reject("Please input a valid email address!");
									}
									return Promise.resolve();
								},
							},
						]}
					>
						<Input
							className='py-2 text-center username-input placeholder:text-white bg-[#a5a5a5] border-4 rounded-none border-[#434343] text-white font-medium'
							placeholder='Enter your email'
						/>
					</Form.Item>
					<Form.Item
						label='Password'
						name='password'
						className='mb-4'
						rules={[
							{
								required: true,
								message: "Please input your password!",
							},
						]}
					>
						<Input.Password
							className='py-2 text-center password-input bg-[#a5a5a5] border-4 rounded-none border-[#434343] text-white font-medium signup-password'
							placeholder='Enter your password'
						/>
					</Form.Item>
					<Form.Item
						label='Confirm'
						name='confirmPassword'
						className='mb-3'
						rules={[
							{
								required: true,
								message: "Re-input your password!",
							},
							({ getFieldValue }) => ({
								validator(rule, value) {
									if (!value || getFieldValue("password") === value) {
										return Promise.resolve();
									}
									return Promise.reject("The two passwords that you entered do not match!");
								},
							}),
						]}
					>
						<Input.Password
							className='py-2 text-center password-input bg-[#a5a5a5] border-4 rounded-none border-[#434343] text-white font-medium signup-password'
							placeholder='Confirm your password'
						/>
					</Form.Item>
					<div className='flex justify-between items-center sm:ml-20'>
						<p className='text-white'>
							Already member?&nbsp;
							<NavLink to='/login' className='text-white'>
								Login here
							</NavLink>
						</p>
						<NavLink href='/forgot-password' className='text-white'>
							Forgot Password?
						</NavLink>
					</div>
				</div>
				<div className='flex justify-center items-center mt-6 flex-col'>
					<Button
						className='rounded-none bg-black px-10 submit-btn'
						type='primary'
						htmlType='submit'
					>
						Submit
					</Button>
					<SocialLogin.Google className='mt-8' title='Sign up with Google' />
				</div>
			</Form>
		</div>
	);
};

export default Signup;
