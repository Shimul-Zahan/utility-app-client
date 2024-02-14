import { Button, Form, Input } from "antd";
import axios from "axios"; // Import axios for making HTTP requests
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/Authprovider";
import { validateEmail } from "../../../lib/utils";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
	const { googleSignIn, logIn } = useContext(AuthContext);
	const navigate = useNavigate();

	const onFinish = async values => {
		const { email, password } = values;

		try {
			const response = await axios.post("http://localhost:5000/login", values); // Send POST request to login endpoint
			const { token } = response.data; // Extract token from response data
			localStorage.setItem("token", token); // Store token in local storage
			await logIn(email, password);
			navigate("/"); // Redirect to home page after successful login
		} catch (error) {
			console.error("Login failed:", error); // Log any login errors
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
					span: 4,
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
					<h2 className='uppercase text-white text-center mb-4 font-medium text-xl'>Login</h2>
					<Form.Item
						label='Email'
						name='email'
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
							placeholder='Enter your username'
						/>
					</Form.Item>
					<Form.Item
						label='Password'
						name='password'
						className='mb-3'
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
					<div className='flex justify-between items-center sm:ml-20'>
						<p className='text-white'>
							No Account?&nbsp;
							<NavLink to='/signup' className='text-white'>
								Signup here
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
					<SocialLogin.Google onClick={googleSignIn} className='mt-5' title='Sign in with Google' />
				</div>
			</Form>
		</div>
	);
};

export default Login;
