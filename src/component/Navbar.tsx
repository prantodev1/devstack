const Navbar = () => {
  return (
    <nav className="bg-[#FEFEFE] shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto px-12 lg:px-25">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="text-[#DB2777] bg-transparent">Home</a>
              </li>
              <li>
                <a className="text-[#475569] bg-transparent">Technologies</a>
              </li>
              <li>
                <a className="text-[#475569] bg-transparent">Projects</a>
              </li>
              <li>
                <a className="text-[#475569] bg-transparent">About</a>
              </li>
              <li>
                <a className="text-[#475569] bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
          <img src="/logo-text.png" alt="logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-[#DB2777] bg-transparent">Home</a>
            </li>
            <li>
              <a className="text-[#475569] bg-transparent">Technologies</a>
            </li>
            <li>
              <a className="text-[#475569] bg-transparent">Projects</a>
            </li>
            <li>
              <a className="text-[#475569] bg-transparent">About</a>
            </li>
            <li>
              <a className="text-[#475569] bg-transparent">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <button className="btn text-[#334155] text-sm font-medium bg-transparent border-none hover:shadow-none">
            Sign In
          </button>
          <button className="btn text-white text-sm font-medium rounded-full bg-[#D91B7E] border-none hover:shadow-none hover:bg-[#c70f6e] py-2.5 px-5">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;