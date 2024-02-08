const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-black text-white px-10">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">LOGO</a>
        </div>
        <div className="flex-none ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <h1 className="italic">
                Login<a className="link link-primary text-white">here!</a>Not
                yet a member?{" "}
                <a className="link link-primary text-white">Join us now!</a>
              </h1>
            </li>
            <li>
              <details>
                <summary>MENU</summary>
                <ul className="p-3 bg-slate-500 rounded-t-none">
                  <li>
                    <a>Calender</a>
                  </li>
                  <li>
                    <a>Notes</a>
                  </li>
                  <li>
                    <a>Converter</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
