
import Link from 'next/link';
const robotImg = "/robot.png";
function Home2() {
  return (
    <div className="py-2 bg-gray-100 text-gray-900 min-h-screen">
      <div id="hero" className="pt-5 lg:flex items-center justify-between">
        <div className="lg:w-1/2 px-5 sm:px-10 md:px-10 lg:px-20">
          <h1 className="text-3xl xl:text-4xl font-black">
           talk to your pdfs
          </h1>
          <p className="mt-4">
            use worldclass, free software
          </p>
          
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <img 
            src={robotImg} 
            alt="Hero"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="p-5 sm:px-10 md:px-20" id="companies">
        <img 
          className="mx-auto" 
          src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846471026680582071-Strip-Payment-Logos.png" 
          alt="Companies"
        />
      </div>

      <div className="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8 bg-indigo-100" id="features">
        <h3 className="leading-none font-black text-3xl mb-6">Features</h3>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
            <div className="bg-gray-100 rounded shadow-lg p-6">
              <h4 className="font-bold text-xl mb-2">Amazing People</h4>
              <p>We guarantee that every designer you work with will be an awesome addition to your team.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
            <div className="bg-gray-100 rounded shadow-lg p-6">
              <h4 className="font-bold text-xl mb-2">Best Rates</h4>
              <p>Be assured that you will always get the best rates. We continuously monitor global freelance wage trends to ensure that no one is under or overpaid.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
            <div className="bg-gray-100 rounded shadow-lg p-6">
              <h4 className="font-bold text-xl mb-2">Abuse Protection</h4>
              <p>Money is held by us in escrow subject to project completion. If there is any dispute, a customer service representative will manually review the case and take appropriate action.</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="px-5 sm:px-10 md:px-20 py-8">
        <div className="flex flex-col items-center lg:flex-row-reverse justify-between">
          <div>
            <Link className="mx-4 text-sm font-bold text-indigo-600 hover:text-indigo-800" href="/">Home</Link>
            <Link className="mx-4 text-sm font-bold text-indigo-600 hover:text-indigo-800" href="/about">About Us</Link>
            <Link className="mx-4 text-sm font-bold text-indigo-600 hover:text-indigo-800" href="/careers">Careers</Link>
          </div>
          <div className="mt-4">
            <img src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png" className="w-32" alt="Logo"/>
          </div>
          <div className="mt-4 text-xs font-bold text-gray-500">
            &copy; 2020 TEMPLATANA | MIT License
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home2;
