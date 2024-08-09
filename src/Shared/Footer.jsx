
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                  <img src="../../public/Images/images-removebg-preview.png" alt="" />
                  <p className="text-4xl font-extrabold font-serif text-black">Books_Gallery</p>
                </div> 
                <nav>
                  <h6 className="footer-title font-bold">Services</h6> 
                  <a className="link link-hover italic">Branding</a>
                  <a className="link link-hover italic">Design</a>
                  <a className="link link-hover italic">Marketing</a>
                  <a className="link link-hover italic">Advertisement</a>
                </nav> 
                <nav>
                  <h6 className="footer-title font-bold">Company</h6> 
                  <a className="link link-hover italic">About us</a>
                  <a className="link link-hover italic">Contact</a>
                  <a className="link link-hover italic">Jobs</a>
                  <a className="link link-hover italic">Press kit</a>
                </nav> 
                <nav>
                  <h6 className="footer-title font-bold">Legal</h6> 
                  <a className="link link-hover italic">Terms of use</a>
                  <a className="link link-hover italic">Privacy policy</a>
                  <a className="link link-hover italic">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;