'use client';
import Camera from "@/app/assets/camera.png";
import Heart from "@/app/assets/heart.png";
import Time from "@/app/assets/time.png";
import Dollar from "@/app/assets/dollar.png";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Offer = () => {

    const router = useRouter();

    return(
        <div className="font-metropolis mt-[75px]">
            <p className="text-center ml-auto mr-auto font-metropolis_700 text-[50px] w-[500px] max-[500px]:w-[300px] max-[500px]:text-[35px]">MAGNIFY <span className="text-[#ff5f5f]">YOUR</span> SUCCESS.</p>
            <p className="text-center w-[320px] ml-auto mr-auto mt-[25px]">
                Providing up-to-date marketing solutions for
                artists, influencers, creators and brands.
            </p>
            <button className="flex justify-center ml-auto mr-auto pt-[7px] text-white w-[200px] h-[40px] mt-[15px] rounded-2xl bg-[#ff5f5f] hover:cursor-pointer" onClick={(() => {
                router.push('/contact');
            })}>Let's Get Started!</button>
            <div className="flex justify-center mt-[100px] max-[1380px]:grid">
                <div className="w-[600px] ml-[10px] m-[100px] mt-[100px] max-[1380px]:ml-auto max-[1380px]:mr-auto max-[1380px]:text-center">
                    <p className="font-metropolis_700 text-[30px] max-[330px]:text-[25px]">What we <span className="text-[#ff5f5f]">can offer you.</span></p>
                    <p className="max-[600px]:w-[300px] max-[600px]:ml-auto max-[600px]:mr-auto">
                        Magnified Marketing is a specialized agency that empowers artists, influencers, 
                        and creators to amplify their presence and expand their reach in the digital realm. We are an agency that brings up-to-date planning to brands,
                        influencers, and artists. With our strategic expertise, we propel our clients forward by crafting innovative marketing campaigns, 
                        enhancing their visibility, and driving substantial and consistent growth. We provide influencers with a powerful platform to expand 
                        their reach, connect with their target audience authentically, and secure valuable partnerships with renowned brands. For artists, we offer comprehensive brand development,
                        showcasing their unique talents to captivate audiences and establish a strong artistic presence. 
                    </p>
                    <p className="mt-[10px] max-[600px]:w-[300px] max-[600px]:ml-auto max-[600px]:mr-auto">
                        Our dedicated team leverages cutting-edge techniques, market insights, and a vast network to unlock unparalleled opportunities and maximize success for our clients.
                    </p>
                </div>
                <div className="grid">
                    <div className="flex min-[1380px]:ml-[200px] max-[1380px]:grid">
                        <div className="w-[300px] max-[1380px]:ml-auto max-[1380px]:mr-auto">
                            <Image className="min-[1380px]:ml-[110px] max-[1380px]:ml-auto max-[1380px]:mr-auto" width={100} height={100} src={Camera} alt={"Camera"}/>
                            <p className="font-metropolis_700 text-center min-[1380px]:ml-[30px] text-[25px] mt-[20px]">VISIONARIES</p>
                            <p className="text-center w-[350px] max-[1380px]:ml-[-20px] max-[360px]:w-[300px] max-[360px]:ml-[7px]">
                                We "capture the moment". Everwant to tell your kids what you once did when you were younger? Ever want to inspire a totally new generation?
                                At Magnified Marketing we are visionaries, ready to focus on expanding your vision to reality. 
                                We work with our clients closely to produce the highest quality of work to satisfy their needs. 
                            </p>
                        </div>
                        <div className="w-[300px] ml-[150px] mt-[100px] max-[1380px]:ml-auto max-[1380px]:mr-auto">
                            <Image className="min-[1380px]:ml-[120px] max-[1380px]:ml-auto max-[1380px]:mr-auto" width={100} height={100} src={Heart} alt={"Heart"}/>
                            <p className="font-metropolis_700 text-center text-[25px] mt-[20px] min-[1380px]:ml-[40px]">ENGAGEMENT</p>
                            <p className="text-center w-[350px] max-[1380px]:ml-[-20px] max-[360px]:w-[300px] max-[360px]:ml-[7px]">
                                Likes, Follows, Shares, Comments. All words we hear from agencies but our up-to-date market solutions and social media management
                                go beyond just growing your brand’s name to fame and receiving them. 
                                We take it a step further by expanding the community and fanbase around YOU. 
                                By focusing on your community, it not only allows room for individual growth but also garuntees success.
                            </p>
                        </div>
                    </div>
                    <div className="flex min-[1380px]:ml-[200px] max-[1380px]:grid">
                        <div className="w-[300px] max-[1380px]:ml-auto max-[1380px]:mr-auto">
                            <Image className="min-[1380px]:ml-[110px] max-[1380px]:ml-auto max-[1380px]:mr-auto" width={100} height={100} src={Time} alt={"Time"}/>
                            <p className="font-metropolis_700 text-center text-[25px] mt-[20px] min-[1380px]:ml-[30px]">YOUR TIME</p>
                            <p className="text-center w-[350px] max-[1380px]:ml-[-20px] max-[360px]:w-[300px] max-[360px]:ml-[7px]">
                                Your time is most important to us. It’s the one thing that is scarce in our world. 
                                That’s why our innovative marketing strategies push the boundaries by delivering outstanding results by helping YOU stay ahead of the curve.
                                By combining creative thinking with forward-looking insights, they anticipate industry trendsand easily adapt to the evolving landscape.
                            </p>
                        </div>
                        <div className="w-[300px] ml-[150px] mt-[50px] max-[1380px]:ml-auto max-[1380px]:mr-auto">
                            <Image className="min-[1380px]:ml-[110px] max-[1380px]:ml-auto max-[1380px]:mr-auto" width={100} height={100} src={Dollar} alt={"Dollar"}/>
                            <p className="font-metropolis_700 text-center text-[25px] mt-[20px] min-[1380px]:ml-[30px] w-[300px]">PAYROLL AND PRICING</p>
                            <p className="text-center w-[350px] max-[1380px]:ml-[-20px] max-[500px]:w-[300px] max-[360px]:ml-[7px]">
                                At Magnified Marketing, we adopt a client-centric approach where pricing is customized based on the unique requirements and goals of each client. 
                                We understand that every brand is different, and therefore, we work closely with our clients to determine a pricing structure that aligns with their budget and desired outcomes. 
                            </p>
                            <p className="text-center w-[350px] mt-[15px] max-[1380px]:ml-[-20px] max-[500px]:w-[300px] max-[360px]:ml-[7px]">
                                Magnified Marketing operates with a streamlined and efficient system. We ensure prompt and accurate payroll processing, adhering to all legal and regulatory requirements. 
                                Our dedicated payroll team diligently manages employee compensation, benefits, deductions, and tax compliance, utilizing secure and reliable payroll software. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer;

