import Image from "next/image";

import logo from "./images/logo.png";

export default function Home() {
  return (
    <main className="flex min-h-[100vh]">
      <div className="flex min-w-[100vw] items-center justify-center flex-col">
        <h1 className="flex flex-row items-center font-light text-4xl lg:text-8xl mt-64">
          {" "}
          <Image
            className="relative mr-8 hidden lg:flex"
            src={logo}
            alt="Solide Finance Logo"
            width={133}
            height={137}
            priority
          />
          <Image
            className="relative mr-8 flex lg:hidden"
            src={logo}
            alt="Solide Finance Logo"
            width={32}
            height={32}
            priority
          />
          SolideFinance
        </h1>

        <span className="text-slate-500 text-md lg:text-2xl mt-4">
          The Next Generation Banking Experience.
        </span>

        <p className="flex mt-32 cursor-pointer">
          <a
            href="mailto:hello@solide.fi"
            className="text-white bg-slate-900 text-lg rounded-full p-4 hover:text-slate-900 border hover:border-slate-900 hover:bg-transparent"
          >
            Contact-Us
          </a>
        </p>

        <p className="flex text-sm lg:text-lg text-slate-500 mt-32 p-4">
          Solide Finance SAS 2023. All rights reserved.
          <a
            className="group ml-4"
            aria-label="Solide Finance SAS"
            href="https://github.com/solide-finance"
          >
            <svg
              aria-hidden="true"
              className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"></path>
            </svg>
          </a>
        </p>
      </div>
    </main>
  );
}
