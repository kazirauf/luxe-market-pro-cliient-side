const Footer = () => {
    return (
        <div>
           <footer className="footer lg:w-full md:w-full w-[320px] p-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
    <nav>
        <header className="footer-title text-white">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
    </nav>
    <nav>
        <header className="footer-title text-white">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
    </nav>
    <nav>
        <header className="footer-title text-white">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
    </nav>
    <form>
        <header className="footer-title text-white">Newsletter</header>
        <fieldset className="form-control w-80">
            <label className="label">
                <span className="label-text text-white">Enter your email address</span>
            </label>
            <div className="relative mr-10">
                <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                <button className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white absolute top-0 right-0 rounded-l-none">Submit</button>
            </div>
        </fieldset>
    </form>
</footer>

        </div>
    );
};

export default Footer;