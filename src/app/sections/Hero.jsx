import React from "react";
import students from "../../assets/videos/students.mp4";
import male from "../../assets/videos/male.mp4";
import { toast } from "sonner";
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
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { data } from "./../utils/index";

import DonationForm from "../components/form/DonationForm";
function Hero() {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white mb-8">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl ">
        <video
          className="min-w-full min-h-full absolute object-cover rounded-xl"
          src={male}
          type="video/mp4"
          autoPlay
          muted
          loop
        />
      </div>
      <div className="video-content space-y-2 z-10">
        <div className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 py-20">
          {/* <div class="info absolute top-2">
            <div class="info__icon">
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m12 1.5c-5.79844 0-10.5 4.70156-10.5 10.5 0 5.7984 4.70156 10.5 10.5 10.5 5.7984 0 10.5-4.7016 10.5-10.5 0-5.79844-4.7016-10.5-10.5-10.5zm.75 15.5625c0 .1031-.0844.1875-.1875.1875h-1.125c-.1031 0-.1875-.0844-.1875-.1875v-6.375c0-.1031.0844-.1875.1875-.1875h1.125c.1031 0 .1875.0844.1875.1875zm-.75-8.0625c-.2944-.00601-.5747-.12718-.7808-.3375-.206-.21032-.3215-.49305-.3215-.7875s.1155-.57718.3215-.7875c.2061-.21032.4864-.33149.7808-.3375.2944.00601.5747.12718.7808.3375.206.21032.3215.49305.3215.7875s-.1155.57718-.3215.7875c-.2061.21032-.4864.33149-.7808.3375z"
                  fill="#393a37"
                ></path>
              </svg>
            </div>
            <div class="info__title">
              <a
                href="#"
                className=" rounded-lg py-2 px-4 text-white-400 text-sm mb-5 transition duration-300 ease-in-out "
              >
                <span className="text-white">
                  Help these Students Secure Their Future
                </span>
              </a>
            </div>
          </div> */}

          <h1 className="mx-auto md:max-w-4xl font-display text-lg md:text-5xl font-semibold tracking-normal text-white-300 dark:text-gray-300">
            Harnessing the spirit of Ubuntu. <br />
            <span className="relative whitespace-nowrap text-white-600 mx-1 dark:text-gray-300">
              We're supporting Africa's promising students <br /> to achieve
              their study goals
            </span>
            <span className="relative whitespace-nowrap text-orange-500 dark:text-orange-300">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-500 dark:fill-orange-300/60"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
              <span className="relative">at home and abroad.</span>
            </span>
          </h1>
          <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-white-400 text-white-500 dark:text-gray-300 leading-7">
            Edufund is on a mission to revolutionalise education financing for
            low-income African students through a community-centred approach.
          </h2>
          <Drawer className="bg-neutral-800 border-none outline-none">
            <DrawerTrigger asChild>
              <button className="button mt-4">
                Donate now
                <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
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
        </div>
      </div>
    </section>
  );
}

export default Hero;
