import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<div className='navbar bg-black text-white px-10'>
				<div className='flex-1'>
					<Link to='/' className='btn btn-ghost text-xl'>
						LOGO
					</Link>
				</div>
				<div className='flex-none '>
					<ul className='menu menu-horizontal px-1'>
						<li>
							<h1 className='italic'>
								Login
								<NavLink to='/login' className='link link-primary text-white'>
									here!
								</NavLink>
								Not yet a member?
								<NavLink to='/signup' className='link link-primary text-white'>
									Join us now!
								</NavLink>
							</h1>
						</li>
						<li>
							<details>
								<summary>MENU</summary>
								<ul className='p-3 bg-slate-500 rounded-t-none'>
									<li>
										<Link to='/calendar'>Calender</Link>
									</li>
									<li>
										<Link to='/Notes'>Notes</Link>
									</li>
									<li>
										<Link to='/pdfConverter'>Converter</Link>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<Link to='/widgets'>WIDGETS</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
