const Partners = () => {
    return(
        <div className="mt-[100px] font-metropolis">
            <p className="text-center font-metropolis_900 text-[50px] mb-[50px] max-[500px]:text-[30px]">NOTABLE PARTNERSHIPS</p>
            <div className="flex justify-center max-[550px]:grid">
                <div className="grid m-5">
                    <div className="w-[100px] h-[100px] bg-white border border-slate-400 rounded-[100px] ml-auto mr-auto"/>
                    <p className="text-center text-[18px] mt-[5px] font-metropolis_700 text-[#ff5f5f]">ARTIST NAME</p>
                    <p className="text-center font-metropolis_600 text-[16px]">INDUSTRY</p>
                </div>
                <div className="grid m-5">
                    <div className="w-[100px] h-[100px] bg-white border border-slate-400 rounded-[100px] ml-auto mr-auto"/>
                    <p className="text-center text-[18px] mt-[5px] font-metropolis_700 text-[#ff5f5f]">ARTIST NAME</p>
                    <p className="text-center font-metropolis_600 text-[16px]">INDUSTRY</p>
                </div>
                <div className="grid m-5">
                    <div className="w-[100px] h-[100px] bg-white border border-slate-400 rounded-[100px] ml-auto mr-auto"/>
                    <p className="text-center text-[18px] mt-[5px] font-metropolis_700 text-[#ff5f5f]">ARTIST NAME</p>
                    <p className="text-center font-metropolis_600 text-[16px]">INDUSTRY</p>
                </div>
            </div>
            <div className="text-center mt-[25px]">
                <p className="text-[50px] font-metropolis_700">Get in touch!</p>
                <p className="text-[35px] w-[350px] ml-auto mr-auto max-[340px]:text-[30px]">Interested in becoming a partner?</p>
                <button className="bg-[#ff5f5f] w-[120px] h-[35px] rounded-2xl text-white font-metropolis_600 mt-[30px]">Contact Us</button>
            </div>
        </div>
    )
}

export default Partners;