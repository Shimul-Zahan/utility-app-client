import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-black text-white px-10">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">LOGO</Link>
        </div>
        <div className="flex-none ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <h1 className="italic">
                Login<a className="link link-primary text-white">here!</a>Not
                yet a member?
                <a className="link link-primary text-white">Join us now!</a>
              </h1>
            </li>
            <li>
              <details>
                <summary>MENU</summary>
                <ul className="p-3 bg-slate-500 rounded-t-none">
                  <li>
                    <Link to="/calendar">Calender</Link>
                  </li>
                  <li>
                    <Link to="/Notes">Notes</Link>
                  </li>
                  <li>
                    <Link to="/pdfConverter">Converter</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/widgets">WIDGETS</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
