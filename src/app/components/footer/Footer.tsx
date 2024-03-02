import Logo from "@/app/assets/logo.png";

import Image from "next/image";

const Footer = () => {
    return (
        <div className="bg-[#251c1c] mt-[100px] font-metropolis">
            <div className="flex justify-center">
                <div className="mt-[-25px] m-[75px]">
                    <Image width={300} height={300} src={Logo.src} alt="Logo"/>
                    <p className="text-white w-[330px] mt-[-75px]">
                        Magnified Marketing is a specialized agency that empowers artists. influencers.
                        and creators to amplifv thair prasanca and expand their reach in the digital realm.
                    </p>
                </div>
                <div className="mt-[75px] m-[75px]">
                    <p className="text-[#ff5f5f] font-metropolis_700 text-[35px]">About.</p>
                    <div className="flex">
                        <div className="grid">
                            <button className="text-white text-left">About Us</button>
                            <button className="text-white text-left">Our Services</button>
                            <button className="text-white text-left">Why Choose Us</button>
                            <button className="text-white text-left">Terms & Conditions</button>
                        </div>
                        <div className="grid ml-[25px]">
                            <button className="text-white text-left">Testimonials</button>
                            <button className="text-white text-left">What We Offer</button>
                            <button className="text-white text-left">Blog</button>
                            <button className="text-white text-left">Privacy Policy</button>
                        </div>
                    </div>
                </div>
                <div className="mt-[75px] m-[75px]">
                    <p className="text-[#ff5f5f] font-metropolis_700 text-[35px]">Get in touch.</p>
                    <p className="text-white w-[200px]"><span className="text-[#ff5f5f] ">Interested?</span> Talk with us, we'd love to hear from you.</p>
                    <form className="grid">
                        <input className="text-white bg-[#251c1c] border-2 rounded-2xl p-[5px] border-[#ff5f5f] w-[250px]" type="email" placeholder="Your email here"/>
                        <input className="bg-[#ff5f5f] text-white h-[30px] rounded-2xl mt-[10px] w-[250px]" type="submit" value={"Send"}/>
                    </form>
                </div>
            </div>
            <div className="text-center">
                <p className="text-[#ff5f5f] font-metropolis_700">2024 Nine Ventures LLC. All rights Reserved.</p>
                <p className="text-white font-metropolis_700">Making Dreams Reality.</p>
            </div>
        </div>
    )
}

export default Footer;