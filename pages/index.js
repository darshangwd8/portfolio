import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { BsBatteryHalf, BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import { useState } from "react";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>PortFolio Darshan Shivaram</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="from-teal-700 bg-gradient-to-b dark: bg-gray-900">
        <section className="bg-white min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-gray-500">
            <h1 className="text-xl font-burtons  text-neutral-300">
              developed using react/next.js
            </h1>
            <ul className='gap-6 flex items-center'>
              <li>
                
                <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />

              </li>
              <li>
                <BsBatteryHalf className="cursor-pointer text-2xl" />
              </li>
              <li className=" text-neutral-600 flex-initial text-center font-bold from-teal-500 bg-gradient-to-tr rounded-full h-10 w-20">
                Resume 
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-teal-600 text-5xl py-2 font-semibold">
              Darshan Shivaram
            </h2>
            <h3 className="text-3xl py-2">Software Developer(new grad) •</h3>
            <p className="text-xl py-2 font-serif ">
              • Software Engineer with customer facing product experience, with
              ability to leverage full stack knowledge and engineering
              principles to design and develop scalable applications. quick
              learner and seeks feedback to improve solutions. Actively looking
              for Full stack development/Web Application development
              opportunities starting to work from Jan - 2023 full-time.
            </p>
          </div>
          <div className="gap-10 flex justify-center py-3 text-gray-600 ">
            <a href="https://github.com/darshangwd8" target="//#region">
              <AiFillGithub className="text-5xl animate-bounce" alt="" />
              click to open
            </a>
            <a
              href="https://www.linkedin.com/in/darshanshivram/"
              target="//#region "
            >
              <AiFillLinkedin className="text-5xl animate-bounce" alt="" />
            </a>
          </div>
          <div className="relative animate-pulse  from-teal-500 bg-gradient-to-b rounded-full w-80 h-80 mt-10 mx-auto overflow-hidden">
            <Image src={deved} layout="fill" objectFit="cover" alt="" />
          </div>
        </section>
        <section>
            <div className="text-center py-32">
              <h3 className="text-6xl py-4  underline text-center text-red-500 animate-pulse">
                Skills
              </h3>
              <p className="py-2 leading-8 ">
                <ul className="text-5xl font-semibold text-teal-700   ">
                  <li>TEsting 1</li>
                  <li>TEsting 2</li>
                  <li>TEsting 3</li>
                </ul>
              </p>
            </div>
            <div>
              <div className="flex mx-auto justify-center">
                <Image src={design} className="flex text-center " alt="" />
                <Image src={code} className="flex text-center" alt="" />
                <Image src={consulting} className="flex text-center" alt="" />
              </div>
            </div>
          </section>
      </main>
    </div>
  );
}
