import { Button, Form, Input } from "antd";
import "../Login/Login.css";

const UpdateProfile = () => {
	// const { createUser } = useContext(AuthContext);

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
					<h2 className='uppercase text-white text-center mb-4 font-medium text-xl'>
						Update Profile
					</h2>
					<Form.Item
						label='Username'
						name='username'
						className='mb-4 opacity-50'
						rules={[
							{
								required: true,
								message: "Please input your username!",
							},
						]}
					>
						<Input
							className='py-2 text-center username-input placeholder:text-white bg-[#a5a5a5] border-2 rounded-none border-[#434343] text-white font-medium disabled:bg-[#a5a5a5]'
							placeholder='Enter your username'
							disabled
						/>
					</Form.Item>
					<Form.Item
						label='Email'
						name='email'
						className='mb-4 opacity-50'
						rules={[
							{
								required: true,
								message: "Please input your email!",
							},
						]}
					>
						<Input
							className='py-2 text-center username-input placeholder:text-white bg-[#a5a5a5] border-2 rounded-none border-[#434343] text-white font-medium disabled:bg-[#a5a5a5]'
							placeholder='Enter your email'
							disabled
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
							className='py-2 text-center password-input bg-[#a5a5a5] border-2 rounded-none border-[#434343] text-white font-medium signup-password'
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
							className='py-2 text-center password-input bg-[#a5a5a5] border-2 rounded-none border-[#434343] text-white font-medium signup-password'
							placeholder='Confirm your password'
						/>
					</Form.Item>
				</div>
				<div className='flex justify-center items-center mt-6 flex-col'>
					<Button
						className='rounded-none bg-black px-10 submit-btn'
						type='primary'
						htmlType='submit'
					>
						Submit
					</Button>
					{/* <SocialLogin.Google className='mt-8' title='Sign up with Google' /> */}
				</div>
			</Form>
		</div>
	);
};

export default UpdateProfile;
