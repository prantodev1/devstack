const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-text-white text-base-content rounded border-t border-gray-100">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 text-left">
          <div className="flex flex-col items-start space-y-4 md:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="bg-linear-to-tr from-purple-600 to-pink-500 text-white font-bold px-2.5 py-1.5 rounded-lg flex items-center justify-center text-sm shadow">
                DS
              </div>
              <span className="text-xl font-bold tracking-tight">
                Dev<span className="text-pink-500">Stack</span>
              </span>
            </div>
            <p className="text-sm text-base-content/70 leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex space-x-4 text-sm font-medium pt-2">
              <a href="#" className="link link-hover">
                GitHub
              </a>
              <a href="#" className="link link-hover">
                Twitter
              </a>
              <a href="#" className="link link-hover">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <span className="footer-title text-xs font-semibold tracking-wider uppercase text-base-content opacity-80">
              Product
            </span>
            <a href="#" className="link link-hover text-sm">
              Home
            </a>
            <a href="#" className="link link-hover text-sm">
              Technologies
            </a>
            <a href="#" className="link link-hover text-sm">
              Projects
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            <span className="footer-title text-xs font-semibold tracking-wider uppercase text-base-content opacity-80">
              Company
            </span>
            <a href="#" className="link link-hover text-sm">
              About
            </a>
            <a href="#" className="link link-hover text-sm">
              Contact
            </a>
            <a href="#" className="link link-hover text-sm">
              Careers
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            <span className="footer-title text-xs font-semibold tracking-wider uppercase text-base-content opacity-80">
              Legal
            </span>
            <a href="#" className="link link-hover text-sm">
              Privacy Policy
            </a>
            <a href="#" className="link link-hover text-sm">
              Terms of Service
            </a>
          </div>
        </div>

        <div className="divider my-0"></div>

        <div className="flex flex-col gap-0 sm:flex-row justify-between items-center sm:gap-214 py-6 text-sm text-base-content/70">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="link link-hover">
              Privacy
            </a>
            <a href="#" className="link link-hover">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;