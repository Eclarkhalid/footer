import Image from "next/image";
import logo from '../public/images/tuuze.png'
import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return <>
    <footer className="flex flex-col text-black mt-5 border-t-2 border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src={logo} alt="logo" width={118} height={18} className="object-contain" />
          <p className=" text-base text-gray-700">
            This is a demo website <br />
            All rights reserved &copy; 2023
          </p>
        </div>

        {/* footer links */}
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="text-bold">{link.title} </h3>
              {link.links.map((item) => (
                <Link key={item.title} href={item.url} className="text-gray-500">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t-4 border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 Demo Site. All rights reserved</p>

        <div className="footer__copyrights-link">
          <Link href={'/'} className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href={'/'} className="text-gray-500">
            Terms Of Use
          </Link>
        </div>
      </div>
    </footer>
  </>;
}

export default Footer;