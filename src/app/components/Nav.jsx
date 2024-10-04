import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "About us", href: "/About" },
  { name: "Products", href: "/Products" },
  { name: "Donate", href: "/donation" },
  { name: "Reports", href: "/reports" },
  // { name: "Apply Now", href: "/apply" },
  { name: "Fundraiser", href: "/fundraiser" },
];
function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start", "end start"],
  });

  const getGreetingAndIcon = () => {
    const hours = new Date().getHours();
    if (hours < 12) {
      return { greeting: "Good Morning", icon: "☀️" };
    } else if (hours < 18) {
      return { greeting: "Good Afternoon", icon: "🌤️" };
    } else if (hours < 21) {
      return { greeting: "Good Evening", icon: "🌇" };
    } else {
      return { greeting: "Good Night", icon: "🌙" };
    }
  };

  const GreetingBadge = () => {
    const [greetingData, setGreetingData] = useState(getGreetingAndIcon());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setGreetingData(getGreetingAndIcon());
      }, 6 * 10000);

      return () => clearInterval(intervalId);
    }, []);

    return (
      <div className="font-redhat text-white rounded-full text-lg flex items-center">
        <span className="mr-2">{greetingData.icon}</span>
        {greetingData.greeting}
      </div>
    );
  };
  return (
    <header className="fixed backdrop-blur-md inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 hover:no-underline">
            <span className="sr-only">Your Company</span>
            {/* <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          /> */}
            {/* <span className="text-white font-kingshare text-xl md:text-2xl ">
            Edufund
          </span> */}
            <GreetingBadge />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <NavLink
              to={item.href}
              key={item.name}
              className="text-sm font-semibold leading-6 text-white"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://dashboard.edufunds.co/register"
            target="_blank"
            className="text-sm font-semibold leading-6 text-white"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto backdrop-blur-xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5 hover:no-underline">
              <span className="sr-only">Your Company</span>
              {/* <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            /> */}
              <span className="text-white font-kingshare">Edufund</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <NavLink
                    to={item.href}
                    key={item.name}
                    className="text-sm font-semibold leading-6 text-white block my-4 py-2"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Nav;
