import React from "react";
import Nav from "../components/Nav";
import Footer from "../sections/Footer";
import { Faqs } from "../sections/Faqs";
import { HowWeAreShapingEducation } from "../sections/HowWeAreShapingEducation";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import DonationForm from "../components/form/DonationForm";
function Products() {
  return (
    <div className="bg-pattern-bricks text-white px-2">
      <Nav />
      <Hero />
      <HowWeAreShapingEducation />
      <div id="faqs">
        <Faqs />
      </div>
      <Footer />
    </div>
  );
}
export function Hero() {
  return (
    <section>
      <div class="relative isolate overflow-hidden bg-gray-900/10 backdrop-blur-sm lg:pt-12">
        <svg
          class="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width="200"
              height="200"
              x="100%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              stroke-width="0"
            ></path>
          </svg>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          ></rect>
        </svg>
        <div
          class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div
            class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          ></div>
        </div>
        <div class="mt-[-50px] flex h-screen items-center justify-center">
          <div class="max-w-full flex-shrink-0 px-4 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
            <h1 class="mt-10 lg:w-full text-xl font-semibold tracking-tight font-barlow text-white sm:text-4xl">
              EduFund is making Quality Education
              <span class="text-sky-500 px-2">
                more accessible for Africa’s
              </span>
              <span class="text-sky-500 pr-2">
                most promising and underserved talents.
              </span>
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-300">
              We are democratizing access to education for all by matching
              Africa’s most promising young talents to well curated education
              funds and top-level universities globally.
            </p>
            <div class="mt-5 flex items-center justify-center gap-x-6">
              <Drawer className="bg-neutral-800 border-none outline-none">
                <DrawerTrigger asChild>
                  <button className="button mt-4">
                    Donate now
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="icon"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </DrawerTrigger>
                <DrawerContent className="bg-neutral-800 border-none outline-none">
                  <div className="mx-auto w-full">
                    <DonationForm />
                  </div>
                </DrawerContent>
              </Drawer>
              {/* <a
                href="/register"
                class="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                rel="noreferrer"
              >
                Donate Now →
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
