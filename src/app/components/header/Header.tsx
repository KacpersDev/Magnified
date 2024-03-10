'use client';
import Logo from "@/app/assets/logo.png"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Menu from "@/app/assets/menu.png";

const Header = () => {

    const router = useRouter();
    const [button, setButton] = useState("home");
    const [clicked, setClicked] = useState(false);

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
            <div className="grid">
                <Image className="ml-auto mr-auto" width={300} height={100} src={Logo} alt={"Company Logo"}/>
                <Image className="ml-auto mr-auto min-[680px]:hidden max-[680px]:mt-[-80px] hover:cursor-pointer" src={Menu} alt="menu" onClick={(() => {
                    setClicked(!clicked);
                })}/>
            </div>
            <div className={clicked ? "flex justify-center mt-[-60px] max-[680px]:text-[15px] max-[680px]:grid max-[680px]:mt-[20px]" : "flex justify-center mt-[-60px] max-[680px]:text-[15px] max-[680px]:grid max-[680px]:mt-[20px] max-[680px]:hidden"}>
                <button className={button === "home" ? "min-[680px]:m-5 m-[5px] hover:cursor-pointer font-metropolis_700 text-[#ff5f5f] max-[680px]:bg-white max-[680px]:w-[680px]" : "max-[680px]:bg-white max-[680px]:w-[680px] min-[680px]:m-5 m-[5px] hover:cursor-pointer font-metropolis_700 text-black hover:text-[#ff5f5f]"} onClick={(() => {
                    setButton("home");
                    router.push("/");
                })}>Home</button>
                <button className={button === "what we do?" ? "min-[680px]:m-5 m-[5px] hover:cursor-pointer font-metropolis_700 text-[#ff5f5f] max-[680px]:bg-white max-[680px]:w-[680px]" : "max-[680px]:bg-white max-[680px]:w-[680px] min-[680px]:m-5 m-[5px] hover:cursor-pointer font-metropolis_700 text-black hover:text-[#ff5f5f]"} onClick={(() => {
                    setButton("what we do?");
                    router.push("/do");
                })}>What we do ?</button>
                <button className={button === "clients" ? "min-[680px]:m-5 m-[5px] hover:cursor-pointer font-metropolis_700 text-[#ff5f5f] max-[680px]:bg-white max-[680px]:w-[680px] " : "max-[680px]:bg-white max-[680px]:w-[680px] min-[680px]:m-5 m-[5px] hover:cursor-pointer font-metropolis_700 text-black hover:text-[#ff5f5f]"} onClick={(() => {
                    setButton("clients");
                    router.push("/clients");
                })}>Clients</button>
                <button className={button === "partnership" ? "min-[680px]:m-5 m-[5px] hover:cursor-pointer font-metropolis_700 text-[#ff5f5f] max-[680px]:bg-white max-[680px]:w-[680px]" : " max-[680px]:bg-white max-[680px]:w-[680px]min-[680px]:m-5 m-[5px] hover:cursor-pointer font-metropolis_700 text-black hover:text-[#ff5f5f]"} onClick={(() => {
                    setButton("partnership");
                    router.push("/partnership");
                })}>Partnership</button>
                <button className={button === "blog" ? "min-[680px]:m-5 m-[5px] hover:cursor-pointer font-metropolis_700 text-[#ff5f5f] max-[680px]:bg-white max-[680px]:w-[680px]" : "max-[680px]:bg-white max-[680px]:w-[680px] min-[680px]:m-5 m-[5px] hover:cursor-pointer font-metropolis_700 text-black hover:text-[#ff5f5f]"} onClick={(() => {
                    setButton("blog");
                    router.push("/blog");
                })}>Blog</button>
                <button className="min-[680px]:m-5 hover:cursor-pointer text-white m-[5px] bg-[#ff5f5f] w-[100px] h-[30px] rounded-xl font-metropolis_700 max-[680px]:bg-white max-[680px]:w-[680px] max-[680px]:text-black" onClick={(() => router.push('/contact'))}>Let&apos;s Talk</button>
            </div>
        </div>
    )
}

export default Header;