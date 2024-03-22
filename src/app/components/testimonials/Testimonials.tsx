'use client';
import TestimonialsIcon from "@/app/assets/testimonials.png";
import Left from "@/app/assets/left.png";
import Right from "@/app/assets/right.png";
import Person from "@/app/assets/person.png";

import Image from "next/image";
import { useEffect, useState } from "react";

const Testimonials = () => {

    const reviewData = [
        {
            name: "Artist Name",
            profession: "Musician",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "
        },
        {
            name: "Developer Name",
            profession: "Developer",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "
        },
        {
            name: "Actor Name",
            profession: "Actor",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "
        },
        {
            name: "CEO Name",
            profession: "CEO",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "
        },
        {
            name: "Director Name",
            profession: "Director",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "
        },
        {
            name: "Dancer Name",
            profession: "Dance",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "
        }
    ]

    const [counter, setCounter] = useState(0);

    useEffect(() => {

    })

    return (
        <div className="flex justify-center mt-[125px] max-[1250px]:grid">
            <div className="max-[1250px]:ml-auto max-[1250px]:mr-auto">
                <Image width={250} height={250} src={TestimonialsIcon} alt="Testimonials"/>
            </div>
            <div className="mt-[5px]">
                <p className="text-[35px] font-metropolis_700 text-center">Testimonials</p>
                <p className="w-[250px] text-center text-[#ff5f5f] font-metropolis_600 text-[25px] max-[1250px]:ml-auto max-[1250px]:mr-auto">What our Clients Think about us.</p>
                <div className="flex justify-center">
                    <Image className="m-5 hover:cursor-pointer" width={32} height={32} src={Left} alt="Left" onClick={(() => {
                        if (counter - 1 >= 0) setCounter(counter - 1);
                    })}/>
                    <Image className="m-5 hover:cursor-pointer" width={32} height={32} src={Right} alt="Right" onClick={(() => {
                        if (counter + 1 < reviewData.length - 1) setCounter(counter + 1);
                    })}/>
                </div>
            </div>
            <div className="mt-[15px] m-[20px]">
                <p className="w-[350px] text-[15px] text-[#848484] max-[1250px]:text-center max-[360px]:w-[300px]">
                    {reviewData[counter].review}
                </p>
                <Image className="max-[1250px]:ml-auto max-[1250px]:mr-auto" width={50} height={50} src={Person} alt="Person" />
                <p className="text-[#848484] font-metropolis_700 max-[1250px]:text-center">{reviewData[counter].name}</p>
                <p className="text-[#848484] font-metropolis_600 max-[1250px]:text-center">{reviewData[counter].profession}</p>
            </div>
            <div className="mt-[15px] m-[20px]">
                <p className="w-[350px] text-[15px] text-[#848484] max-[1250px]:text-center max-[360px]:w-[300px]">
                    {reviewData[counter + 1].review}
                </p>
                <Image className="max-[1250px]:ml-auto max-[1250px]:mr-auto" width={50} height={50} src={Person} alt="Person" />
                <p className="text-[#848484] font-metropolis_700 max-[1250px]:text-center">{reviewData[counter + 1].name}</p>
                <p className="text-[#848484] font-metropolis_600 max-[1250px]:text-center">{reviewData[counter + 1].profession}</p>
            </div>
        </div>
    )
}

export default Testimonials;