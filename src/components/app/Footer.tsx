import Link from "next/link";
import { FaCartPlus, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";
const footerLinks = [
  {
    title: "Support",
    links: [
      { name: "Faq", href: "#" },
      { name: "Terms of use", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Shop",
    links: [
      { name: "My Account", href: "" },
      { name: "Checkout", href: "" },
      { name: "Cart", href: "" },
    ],
  },
];
export default function Footer() {
  return (
    <>
      <div className=" flex justify-center items-center bg-[#F6F6F6] w-screen h-[445px] gap-28">
        <div className="w-[250px] flex flex-col gap-4">
          <div className="flex">
            <FaCartPlus className=" text-3xl" />
            <h1 className=" text-[#0E1422] font-bold text-[22px]">Ecommerce</h1>
          </div>
          <p className=" text-[#5C5F6A] text-[14px]">
            DevCut is a YouTube channel for practical project-based learning.
          </p>
          <div className="flex gap-6">
            <FaGithub className=" text-3xl text-[#5C5F6A] hover:text-black cursor-pointer" />
            <FaInstagram className=" text-3xl text-[#5C5F6A] hover:text-black cursor-pointer" />
            <FaFacebook className="text-3xl text-[#5C5F6A] hover:text-black cursor-pointer" />
          </div>
        </div>

        <div className="flex gap-16">
          {footerLinks.map((footerLink, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h1 className=" text-[#878A92] mb-4 text-[14px] uppercase">
                {footerLink.title}
              </h1>
              <Link
                href={footerLink.links[0].href}
                className="text-[#5C5F6A] hover:text-black"
              >
                {footerLink.links[0].name}
              </Link>
              <Link
                href={footerLink.links[0].href}
                className="text-[#5C5F6A] hover:text-black"
              >
                {footerLink.links[1].name}
              </Link>
              <Link
                href={footerLink.links[0].href}
                className="text-[#5C5F6A] hover:text-black"
              >
                {footerLink.links[2].name}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-10 ml-5">
          <h1 className="text-[#878A92] text-[14px] uppercase">
            ACCEPTED PAYMENTS
          </h1>
          <div className="flex gap-4">
            <svg
              width="31"
              height="18"
              viewBox="0 0 31 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.017 15.85C13.3637 17.2432 11.27 18.005 9.108 18C4.078 18 0 13.97 0 9.00002C0 4.03002 4.078 2.22141e-05 9.108 2.22141e-05C11.363 2.22141e-05 13.426 0.810022 15.017 2.15002C16.67 0.757051 18.7633 -0.00474228 20.925 2.22141e-05C25.955 2.22141e-05 30.033 4.03002 30.033 9.00002C30.033 13.97 25.955 18 20.925 18C18.7633 18.0048 16.67 17.243 15.017 15.85Z"
                fill="#ED0006"
              />
              <path
                d="M15.017 15.85C16.0186 15.0115 16.8242 13.9636 17.377 12.7801C17.9299 11.5966 18.2166 10.3063 18.217 9.00002C18.217 6.25702 16.975 3.80002 15.017 2.15002C16.67 0.757051 18.7633 -0.00474228 20.925 2.22141e-05C25.955 2.22141e-05 30.033 4.03002 30.033 9.00002C30.033 13.97 25.955 18 20.925 18C18.7633 18.0048 16.67 17.243 15.017 15.85Z"
                fill="#F9A000"
              />
              <path
                d="M15.017 15.85C16.975 14.2 18.217 11.743 18.217 9.00002C18.217 6.25702 16.975 3.80002 15.017 2.15002C14.0154 2.98856 13.2098 4.03647 12.657 5.21996C12.1041 6.40346 11.8174 7.69376 11.817 9.00002C11.817 11.743 13.058 14.2 15.017 15.85Z"
                fill="#FF5E00"
              />
            </svg>

            <svg
              width="47"
              height="12"
              viewBox="0 0 47 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.2242 0L0.0332031 11.826H6.2482L7.0182 9.941H8.7792L9.5502 11.827H16.3902V10.387L17.0002 11.827H20.5402L21.1492 10.357V11.827H35.3762L37.1062 9.99L38.7262 11.827L46.0332 11.842L40.8252 5.946L46.0332 0H38.8392L37.1552 1.803L35.5862 0H20.1092L18.7792 3.053L17.4202 0H11.2192V1.39L10.5292 0H5.2262H5.2242ZM6.4272 1.68H9.4572L12.9002 9.699V1.679H16.2192L18.8792 7.429L21.3292 1.679H24.6332V10.166H22.6232L22.6072 3.516L19.6772 10.166H17.8802L14.9352 3.516V10.166H10.8012L10.0182 8.263H5.7832L5.0012 10.164H2.7872L6.4272 1.679V1.68ZM34.6402 1.68H26.4702V10.16H34.5132L37.1062 7.35L39.6052 10.16H42.2172L38.4202 5.945L42.2172 1.679H39.7182L37.1382 4.458L34.6402 1.679V1.68ZM7.9002 3.115L6.5062 6.505H9.2942L7.9012 3.115H7.9002ZM28.4872 4.985V3.435H33.5852L35.8092 5.912L33.4862 8.404H28.4872V6.712H32.9442V4.986H28.4872V4.985Z"
                fill="#016FD0"
              />
            </svg>

            <svg
              width="43"
              height="14"
              viewBox="0 0 43 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.5152 7.91772e-05C28.5601 -0.00452076 29.5961 0.191351 30.5672 0.577079L30.1042 3.50308L29.7962 3.36008C29.0033 2.9927 28.1358 2.81468 27.2622 2.84008C25.9192 2.84008 25.3162 3.43108 25.3022 4.00808C25.3022 4.64308 26.0322 5.06108 27.2222 5.68108C29.1822 6.64708 30.0902 7.82908 30.0772 9.37108C30.0492 12.1841 27.7252 14.0001 24.1552 14.0001C22.6292 13.9851 21.1592 13.6531 20.3612 13.2791L20.8372 10.2361L21.2852 10.4531C22.3912 10.9581 23.1192 11.1731 24.4772 11.1731C25.4572 11.1731 26.5072 10.7551 26.5202 9.84808C26.5202 9.25608 26.0732 8.82408 24.7572 8.16008C23.4692 7.51108 21.7472 6.43008 21.7752 4.48408C21.7892 1.84508 24.1552 7.91772e-05 27.5152 7.91772e-05ZM14.8312 13.7981H18.2332L20.3612 0.246079H16.9592L14.8312 13.7981Z"
                fill="#00579F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39.2882 0.246079H36.6572C35.8452 0.246079 35.2292 0.491079 34.8782 1.37008L29.8252 13.7981H33.3952L34.1092 11.7651H38.4772C38.5752 12.2411 38.8832 13.7981 38.8832 13.7981H42.0332L39.2882 0.246079ZM35.0882 8.99608L36.4482 5.20608C36.4412 5.21608 36.4862 5.09008 36.5522 4.90108C36.6502 4.62108 36.7952 4.20808 36.8952 3.90808L37.1322 5.07508C37.1322 5.07508 37.7772 8.31908 37.9172 8.99708H35.0892L35.0882 8.99608Z"
                fill="#00579F"
              />
              <path
                d="M8.6572 9.48708L11.9892 0.246079H15.5872L10.2392 13.7841H6.6412L3.5892 1.93208C5.7452 3.10008 7.6772 5.45008 8.2932 7.61208L8.6572 9.48708Z"
                fill="#00579F"
              />
              <path
                d="M5.5632 0.246079H0.0892034L0.0332031 0.519079C4.3032 1.64408 7.1312 4.35508 8.2932 7.61308L7.1032 1.38508C6.9072 0.519079 6.3052 0.275079 5.5632 0.245079V0.246079Z"
                fill="#FAA61A"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
