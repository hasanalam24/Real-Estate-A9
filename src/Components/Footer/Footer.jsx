

const Footer = () => {
    return (
        <footer className="bg-gray-200 mt-8 p-4 lg:p-10 text-center">

            <div className=" grid grid-cols-1 gap-5 lg:flex lg:justify-between w-[90%] mx-auto text-base-content">
                <nav className="flex flex-col">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form className="">
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control text-center mt-3">
                        <div className="lg:join">
                            <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                            <button className="btn btn-secondary join-item">Login</button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div className="mt-5 text-center">
                <p>©2024 Developed by Hasan Alam</p>
            </div>
        </footer>
    );
};

export default Footer;