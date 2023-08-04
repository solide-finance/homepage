import Image from "next/image";

import logo from "./images/logo.png";

export default function Home() {
  return (
    <main className="flex min-h-[100vh]">
      <div className="flex min-w-[100vw] items-center justify-center flex-col">
        <h1 className="flex flex-row items-center font-light text-8xl mt-64">
          {" "}
          <Image
            className="relative mr-8"
            src={logo}
            alt="Solide Finance Logo"
            width={133}
            height={137}
            priority
          />
          SolideFinance
        </h1>

        <span className="text-slate-500 text-2xl mt-4">The Next Generation Banking Experience.</span>

        <p className="flex mt-32 cursor-pointer">
          <a href="mailto:hello@solide.fi" className="text-white bg-slate-900 text-lg rounded-full p-4 hover:text-slate-900 border hover:border-slate-900 hover:bg-transparent">
            Contact-Us
          </a>
        </p>

        <p className="flex text-sm text-slate-500 mt-auto m-16">Solide Finance SAS 2023. All rights reserverd</p>
      </div>
    </main>
  );
}
