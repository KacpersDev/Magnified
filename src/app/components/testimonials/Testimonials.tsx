import TestimonialsIcon from "@/app/assets/testimonials.png";
import Left from "@/app/assets/left.png";
import Right from "@/app/assets/right.png";
import Person from "@/app/assets/person.png";

import Image from "next/image";

const Testimonials = () => {
    return (
        <div className="flex justify-center mt-[125px] max-[1250px]:grid">
            <div className="max-[1250px]:ml-auto max-[1250px]:mr-auto">
                <Image width={250} height={250} src={TestimonialsIcon} alt="Testimonials"/>
            </div>
            <div className="mt-[5px]">
                <p className="text-[35px] font-metropolis_700 text-center">Testimonials</p>
                <p className="w-[250px] text-center text-[#ff5f5f] font-metropolis_600 text-[25px] max-[1250px]:ml-auto max-[1250px]:mr-auto">What our Clients Think about us.</p>
                <div className="flex justify-center">
                    <Image className="m-5 hover:cursor-pointer" width={32} height={32} src={Left} alt="Left" />
                    <Image className="m-5 hover:cursor-pointer" width={32} height={32} src={Right} alt="Right" />
                </div>
            </div>
            <div className="mt-[15px] m-[20px]">
                <p className="w-[350px] text-[15px] text-[#848484] max-[1250px]:text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                </p>
                <Image className="max-[1250px]:ml-auto max-[1250px]:mr-auto" width={50} height={50} src={Person} alt="Person" />
                <p className="text-[#848484] font-metropolis_700 max-[1250px]:text-center">Artist Name</p>
                <p className="text-[#848484] font-metropolis_600 max-[1250px]:text-center">Musician</p>
            </div>
            <div className="mt-[15px] m-[20px]">
                <p className="w-[350px] text-[15px] text-[#848484] max-[1250px]:text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                </p>
                <Image className="max-[1250px]:ml-auto max-[1250px]:mr-auto" width={50} height={50} src={Person} alt="Person" />
                <p className="text-[#848484] font-metropolis_700 max-[1250px]:text-center">Artist Name</p>
                <p className="text-[#848484] font-metropolis_600 max-[1250px]:text-center">Musician</p>
            </div>
        </div>
    )
}

export default Testimonials;