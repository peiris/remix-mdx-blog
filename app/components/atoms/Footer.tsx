import { Link } from "@remix-run/react";

function Footer() {
  return (
    <div className="py-[60px] flex items-center justify-between bg-black">
      <div className="container flex justify-between">
        <div className="flex flex-col gap-[24px] w-[280px]">
          <img
            src="/logo.svg"
            alt="Spiced logo"
            className="w-[120px] object-center object-cover"
          />
          <span className="text-white/50 text-base">
            We create stunning digital solutions that spices up your business
            growth
          </span>
        </div>

        <div className="flex gap-[24px] flex-col">
          <span className="text-white text-bold">Connect with us</span>
          <div className="flex gap-[16px]">
            <Link to="/" className="font-medium">
              <i className="ri-facebook-circle-fill text-[24px] text-white hover:text-yellow" />
            </Link>
            <Link to="https://www.instagram.com/spiced.tech/" className="font-medium">
              <i className="ri-instagram-fill text-[24px] text-white hover:text-yellow" />
            </Link>
            <Link to="/" className="font-medium">
              <i className="ri-twitter-fill text-[24px] text-white hover:text-yellow" />
            </Link>
          </div>
        </div>

        <div className="flex gap-[24px] flex-col">
          <span className="text-white text-bold">Company</span>
          <div className="flex flex-col gap-[16px]">
            <span className="text-white/50 text-base hover:text-white">
              <Link to="/" className="font-medium">
                About
              </Link>
            </span>
            <span className="text-white/50 text-base hover:text-white">
              <Link to="/" className="font-medium">
                Services
              </Link>
            </span>
            <span className="text-white/50 text-base hover:text-white">
              <Link to="/" className="font-medium">
                Blog
              </Link>
            </span>
            <span className="text-white/50 text-base hover:text-white">
              <Link to="/" className="font-medium">
                Contact
              </Link>
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-end gap-[16px]">
          <div className="flex flex-col gap-[16px]">
            <span className="text-white/50 text-md">Privacy</span>
            <span className="text-white/50 text-md">Terms</span>
          </div>
          <span className="text-white/50 text-md">
            © 2023 Spiced Technologies.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
