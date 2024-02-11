import { Button, Form, Input } from "antd";
import { NavLink } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
	const onFinish = values => {
		console.log("Success:", values);
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
					className: "form-label text-xl font-medium",
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
						label='Username'
						name='username'
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
					<SocialLogin.Google className='mt-5' title='Sign in with Google' />
				</div>
			</Form>
		</div>
	);
};

export default Login;
