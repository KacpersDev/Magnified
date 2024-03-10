'use client';
import Logo from "@/app/assets/logo.png"

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {

    const router = useRouter();
    const [button, setButton] = useState("home");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const url = window.location.href;

            if (url.includes("/do")) {
                setButton("what we do?");
            } else if (url.includes("/clients")) {
                setButton("clients");
            } else if (url.includes("/partnership")) {
                setButton("partnership");
            } else if (url.includes("/blog")) {
                setButton("blog");
            } else {
                setButton("home");
            }
        }
    }, []);

    return(
        <div className="font-metropolis">
            <Image className="ml-auto mr-auto" width={300} height={100} src={Logo} alt={"Company Logo"}/>
            <div className="flex justify-center mt-[-60px]">
                <button className={button === "home" ? "m-5 hover:cursor-pointer font-metropolis_700 text-[#ff5f5f]" : "m-5 hover:cursor-pointer font-metropolis_700 text-black hover:text-[#ff5f5f]"} onClick={(() => {
                    setButton("home");
                    router.push("/");
                })}>Home</button>
                <button className={button === "what we do?" ? "m-5 hover:cursor-pointer font-metropolis_700 text-[#ff5f5f]" : "m-5 hover:cursor-pointer font-metropolis_700 text-black hover:text-[#ff5f5f]"} onClick={(() => {
                    setButton("what we do?");
                    router.push("/do");
                })}>What we do ?</button>
                <button className={button === "clients" ? "m-5 hover:cursor-pointer font-metropolis_700 text-[#ff5f5f]" : "m-5 hover:cursor-pointer font-metropolis_700 text-black hover:text-[#ff5f5f]"} onClick={(() => {
                    setButton("clients");
                    router.push("/clients");
                })}>Clients</button>
                <button className={button === "partnership" ? "m-5 hover:cursor-pointer font-metropolis_700 text-[#ff5f5f]" : "m-5 hover:cursor-pointer font-metropolis_700 text-black hover:text-[#ff5f5f]"} onClick={(() => {
                    setButton("partnership");
                    router.push("/partnership");
                })}>Partnership</button>
                <button className={button === "blog" ? "m-5 hover:cursor-pointer font-metropolis_700 text-[#ff5f5f]" : "m-5 hover:cursor-pointer font-metropolis_700 text-black hover:text-[#ff5f5f]"} onClick={(() => {
                    setButton("blog");
                    router.push("/blog");
                })}>Blog</button>
                <button className="m-5 hover:cursor-pointer text-white bg-[#ff5f5f] w-[100px] h-[30px] rounded-xl font-metropolis_700" onClick={(() => router.push('/contact'))}>Let's Talk</button>
            </div>
        </div>
    )
}

export default Header;