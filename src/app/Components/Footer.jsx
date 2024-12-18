import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
        <div className="container mx-auto text-black pl-4">
      <footer className="footer py-16 text-[#111322]">
        <aside>
          <Image src='/image/logo_footer.png' alt="logo" width={300} height={300}/>
          <p className="mt-4">
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-[#111322]">Services</h6>
          <a className="link link-hover text-[#00233F] mt-2">For Investors</a>
          <a className="link link-hover text-[#00233F] mt-4">For Business</a>
        </nav>
        <nav>
          <h6 className="footer-title text-[#111322]">Company</h6>
          <a className="link link-hover text-[#00233F] mt-2">About Us</a>
          <a className="link link-hover text-[#00233F] mt-4">How it Works</a>
          <a className="link link-hover text-[#00233F] mt-2">Contact Us</a>
          <a className="link link-hover text-[#00233F] mt-4">FAQ</a>
        </nav>
        <nav>
          <h6 className="footer-title text-[#111322]">Information</h6>
          <a className="link link-hover text-[#00233F] mt-2">Legal</a>
          <a className="link link-hover text-[#00233F] mt-4">Learn More as a investor</a>
          <a className="link link-hover text-[#00233F] mt-2">Learn More as a Borrower</a>
          <a className="link link-hover text-[#00233F] mt-4">FAQ</a>
        </nav>
        
      </footer>
      <hr className="border-[#111322]"/>
      <footer className="footer py-10">
  <nav>
    <h6 className="footer-title font-medium text-[#111322]">Contact Us</h6>
    <a className="link link-hover">Email: <span className="text-blue-400">contactus@rsin.com</span></a>
    <a className="link link-hover">Phone: <span className="text-blue-400">8001000265</span></a>
    <div className="flex gap-4">
        <Image src="/image/face.png" alt="facebook" width={50} height={50}/>
        <Image src="/image/insta.png" alt="facebook" width={50} height={50}/>
        <Image src="/image/link.png" alt="facebook" width={50} height={50}/>
        <Image src="/image/twail.png" alt="facebook" width={50} height={50}/>
    </div>
  </nav>
  <nav>
  <h6 className="footer-title font-medium text-[#111322]">Office Address</h6>
  <p>Address: 1st Floor, Homestead Gulshan Link Tower, <br/> DCC TA-99, Gulshan-Badda link Road, Gulshan-1,<br/> Dhaka-1212</p>
    <div className="flex gap-1">
    <Image src="/image/location.png" alt="facebook" width={30} height={30}/>
        <span className="text-[#005397] mt-1">View Location</span>
    </div>
  </nav>
  <nav>
  <Image src="/image/code.png" alt="facebook" width={220} height={110}/>
  </nav>
</footer>

    </div>
    <footer className="footer bg-[#f3f7fb] text-[black] py-4 px-2 container mx-auto">
  <aside className="">
    <h1>Copyright RSIN@2024 . All rights reserved. V-0.1.14</h1>
  </aside>
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-6">
      <a>
        <p>Terms and Conditions</p>
      </a>
      <a>
        <p>Privacy policy</p>
      </a>
      <a>
        <p>Cookie Settings</p>
      </a>
    </div>
  </nav>
</footer>
    </div>
  );
};

export default Footer;
