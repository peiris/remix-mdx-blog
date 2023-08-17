import { Link } from "@remix-run/react";

function Header() {
  return (
    <div className="container py-[28px] flex items-center justify-between">
      <img
        src="/logo.svg"
        alt="Spiced logo"
        className="w-[120px] object-center object-cover"
      />

      <div className="flex gap-[40px]">
        <span className="text-white text-base">
          <Link to="/" className="font-medium">
            Home
          </Link>
        </span>
        <span className="text-white text-base">
          <Link to="/services" className="font-medium">
            Services
          </Link>
        </span>
        <span className="text-white text-base">
          <Link to="/services" className="font-medium">
            Contact
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Header;
