'use client';

import { useRouter } from "next/navigation";
import { TypeAnimation } from 'react-type-animation';

const Do = () => {

    const router = useRouter();

    return(
        <div className="mt-[100px] font-metropolis">
            <p className="text-center text-[45px] font-metropolis_700">WE OFFER</p>
            <p className="text-center text-[45px]"><TypeAnimation sequence={['Hello World', 1000, 'Goodbye World', 1000]}
                wrapper="span" speed={25} repeat={Infinity}/></p>
            <div className="flex justify-center mt-[100px] max-[1050px]:grid max-[1050px]:mt-[100px]">
                <div className="grid m-[20px]">
                    <p className="text-[#ff5f5f] text-[35px] font-metropolis_700 max-[1050px]:text-center">Why choose us ?</p>
                    <p className="text-[35px] font-metropolis_600 w-[450px] mt-[-120px] max-[1050px]:mt-[0px] max-[1050px]:text-center max-[400px]:w-[300px] max-[400px]:text-[20px]">Innovative, Experienced, and knowledgeable.</p>
                    <p className="w-[500px] mt-[-135px] max-[1050px]:mt-[0px] max-[1050px]:text-center max-[500px]:w-[300px] max-[500px]:ml-auto max-[500px]:mr-auto">
                        We empower YOU. Our dedicated team at Magnified Marketing makes sure that we are up-to-date with all
                        the music industry trends, market strategies and are fluently comprehensive in brand development and maintainment.
                    </p>
                </div>
                <div className="grid m-[20px]">
                    <div>
                        <p className="text-[#ff5f5f] text-[35px] font-metropolis_700 max-[1050px]:text-center">01 - Knowledgable</p>
                        <p className="w-[500px] max-[1050px]:text-center max-[500px]:w-[300px] max-[500px]:ml-auto max-[500px]:mr-auto">
                            Our team here at Magnified Marketing are knowledaable across various industries. With this knowledge.
                            we&apos;re able to provide intensive ac wen those -our vision towares ou cients
                            without losind the conr ection that orought us together
                            uniqueness.
                        </p>
                    </div>
                    <div>
                        <p className="text-[#ff5f5f] text-[35px] font-metropolis_700 max-[1050px]:text-center">02 - Innovative</p>
                        <p className="w-[500px] max-[1050px]:text-center max-[500px]:w-[300px] max-[500px]:ml-auto max-[500px]:mr-auto">
                            All of our marketing solutions and tools are kept up-to-date with the industry trends
                            and our innovative mindset is kept in-line with them. This allows us to keep your individuality
                            while keeping the meaning of your brand to another level.
                        </p>
                    </div>
                    <div>
                        <p className="text-[#ff5f5f] text-[35px] font-metropolis_700 max-[1050px]:text-center">03 - Accomodating</p>
                        <p className="w-[500px] max-[1050px]:text-center max-[500px]:w-[300px] max-[500px]:ml-auto max-[500px]:mr-auto">
                            We accomodate towards your needs and requests. By focusing on both your vision and accomodating the necessities of
                            it, we’re able to completely amplify your engagement within and across various industries.
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-[100px] grid justify-center ">
                <p className="text-[45px] font-metropolis_700">Get in touch!</p>
                <p className="text-[30px] w-[250px] font-metropolis_600">Interested in working with us?</p>
                <button className="bg-[#ff5f5f] h-[30px] w-[120px] ml-auto mr-auto text-white rounded-xl mt-[15px] mb-[100px]" onClick={(() => router.push("/contact"))}>Contact Us</button>
            </div>
        </div>
    )
}

export default Do;