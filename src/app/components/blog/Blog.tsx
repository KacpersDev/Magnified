import Left from "@/app/assets/left.png";
import Right from "@/app/assets/right.png";

import Image from "next/image";

const Blog = () => {
    return(
        <div className="font-metropolis mt-[100px]">
            <p className="text-[50px] text-center font-metropolis_900">OUR BLOG POSTS</p>
            <p className="text-center text-[30px] w-[500px] ml-auto mr-auto">
                Our blog posts aim to showcase our work, new and up-coming artists, 
                industry leading analysis's done by our dedicated team, analysis on genres and much more!
            </p>
            <p className="text-center text-[30px] mt-[30px]">Keep up to date by subscribing below!</p>
            <form className="grid justify-center">
                <input className="w-[350px] h-[35px] rounded-2xl p-[5px] border-2 border-[#ff5f5f]" type="email" placeholder="Your email here"/>
                <input className="bg-[#ff5f5f] text-white font-metropolis_600 h-[35px] w-[200px] rounded-2xl mt-[5px] ml-auto mr-auto hover:cursor-pointer" type="submit" value={"Subscribe!"}/>
            </form>
            <div className="mt-[100px]">
                <div className="flex justify-center mr-[920px]">
                    <p className="font-metropolis_700 text-[35px] mt-[15px]">Latest Posts</p>
                    <Image className="m-[25px]" width={32} height={32} src={Left} alt="Left"/>
                    <Image className="m-[25px]" width={32} height={32} src={Right} alt="Right"/>
                </div>
                <div className="flex justify-center">
                    <div className="border-2 border-black w-[400px] rounded-xl m-[25px]">
                        <div className="flex">
                            <p className="text-[#ff5f5f] font-metropolis_700 text-[35px] m-[5px]">Release of...</p>
                            <div className="grid">
                                <p className="text-[#ffc2c2]"><span className="text-[#ff5f5f]">By:</span> Hayden Keeperman</p>
                                <p className="text-[#ffc2c2]"><span className="text-[#ff5f5f]">Posted:</span> 0/11/2023</p>
                            </div>
                        </div>
                        <p className="w-[375px] m-[5px]">
                            We are thrilled to announce the highly anticipated launch of the Magnified Marketing’s website!
                            As a specialized agency that empowers artists, influencers, and creators to amplify their presence and 
                            expand their reach in the digital realm. We are an agency that brings up-to-date planning to brands, 
                            influencers, and artists. With our strategic expertise, we propel our clients forward by crafting
                            innovative marketing campaigns, enhancing their visibility, and driving substantial and consistent growth.... 
                        </p>
                        <button className="bg-[#ff5f5f] w-[200px] h-[50x] grid ml-auto justify-center p-[5px] m-[8px]  rounded-2xl text-white">Read More</button>
                    </div>
                    <div className="border-2 border-black w-[400px] rounded-xl m-[25px]">
                        <div className="flex">
                            <p className="text-[#ff5f5f] font-metropolis_700 text-[35px] m-[5px]">Release of...</p>
                            <div className="grid">
                                <p className="text-[#ffc2c2]"><span className="text-[#ff5f5f]">By:</span> Hayden Keeperman</p>
                                <p className="text-[#ffc2c2]"><span className="text-[#ff5f5f]">Posted:</span> 0/11/2023</p>
                            </div>
                        </div>
                        <p className="w-[375px] m-[5px]">
                            We are thrilled to announce the highly anticipated launch of the Magnified Marketing’s website!
                            As a specialized agency that empowers artists, influencers, and creators to amplify their presence and 
                            expand their reach in the digital realm. We are an agency that brings up-to-date planning to brands, 
                            influencers, and artists. With our strategic expertise, we propel our clients forward by crafting
                            innovative marketing campaigns, enhancing their visibility, and driving substantial and consistent growth....
                        </p>
                        <button className="bg-[#ff5f5f] w-[200px] h-[50x] grid ml-auto justify-center p-[5px] m-[8px]  rounded-2xl text-white">Read More</button>
                    </div>
                    <div className="border-2 border-black w-[400px] rounded-xl m-[25px]">
                        <div className="flex">
                            <p className="text-[#ff5f5f] font-metropolis_700 text-[35px] m-[5px]">Release of...</p>
                            <div className="grid">
                                <p className="text-[#ffc2c2]"><span className="text-[#ff5f5f]">By:</span> Hayden Keeperman</p>
                                <p className="text-[#ffc2c2]"><span className="text-[#ff5f5f]">Posted:</span> 0/11/2023</p>
                            </div>
                        </div>
                        <p className="w-[375px] m-[5px]">
                            We are thrilled to announce the highly anticipated launch of the Magnified Marketing’s website!
                            As a specialized agency that empowers artists, influencers, and creators to amplify their presence and 
                            expand their reach in the digital realm. We are an agency that brings up-to-date planning to brands, 
                            influencers, and artists. With our strategic expertise, we propel our clients forward by crafting
                            innovative marketing campaigns, enhancing their visibility, and driving substantial and consistent growth....
                        </p>
                        <button className="bg-[#ff5f5f] w-[200px] h-[50x] grid ml-auto justify-center p-[5px] m-[8px]  rounded-2xl text-white">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;