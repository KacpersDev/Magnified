'use client';
import Logo from "@/app/assets/logo.png"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {

    const router = useRouter();
    const [button, setButton] = useState("Home");

    return(
        <div className="font-metropolis">
            <Image className="ml-auto mr-auto" width={300} height={100} src={Logo} alt={"Company Logo"}/>
            <div className="flex justify-center mt-[-60px]">
                {getButton("Home", "/")}
                {getButton("What we do?", "/do")}
                {getButton("Clients", "/clients")}
                {getButton("Partnership", "/partnership")}
                {getButton("Blog", "/blog")}
                <button className="m-5 hover:cursor-pointer text-white bg-[#ff5f5f] w-[100px] h-[30px] rounded-xl font-metropolis_700">Let's Talk</button>
            </div>
        </div>
    )

    function getButton(name: string, path: string){
        if (name === button) {
            return (
                <button className="m-5 hover:cursor-pointer font-metropolis_700 text-[#ff5f5f]" onClick={(() => {
                    setButton("What we do?");
                    setButton("Clients?");
                    router.push(path);
                })}>{name}</button>
            )
        } else {
            return (
                <button className="m-5 hover:cursor-pointer hover:text-[#ff5f5f]" onClick={(() => {
                    setButton("What we do?");
                    setButton("Clients?");
                    router.push(path);
                })}>{name}</button>
            )
        }
    }
}

export default Header;