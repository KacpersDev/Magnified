'use client';
import { FormEvent, useState } from "react";

const Contact = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [link1, setLink1] = useState("");
    const [link2, setLink2] = useState("");
    const [musician, setMusician] = useState(false);
    const [creator, setCreator] = useState(false);
    const [artist, setArtist] = useState(false);
    const [model, setModel] = useState(false);
    const [other, setOther] = useState(false);
    const [additionalInfo, setAdditionalInformation] = useState("");
    const [additionalLinks, setAdditionalLinks] = useState("");

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const data = {firstName, lastName, email, phone, link1, link2, musician, creator, artist, model, other, additionalInfo, additionalLinks};

        try {
            const res = await fetch("http://localhost:3000/api/form", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'content-type': 'application/json',
                }
            });
            res.json().then(data => {
                alert(data.message);
            })
        } catch(error) {
            console.error(error);
        }
    }

    return(
        <div className="font-metropolis mt-[125px]">
            <p className="text-[50px] font-metropolis_700 text-center">Let&apos;s work <span className="text-[#ff5f5f]">together</span>.</p>
            <p className="text-center w-[550px] text-[25px] ml-auto mr-auto font-metropolis_600">Fill out the form below and a member of our team will contact you as soon as possible!</p>
            <form className="mt-[100px]">
                <p className="text-center text-[25px] font-metropolis_700 min-[615px]:mr-[350px] max-[615px]:text-center">What field are you in?</p>
                <div className="flex justify-center max-[400px]:grid">
                    <div className="flex m-[10px] max-[400px]:ml-auto max-[400px]:mr-auto">
                        <input className="w-[16px] mt-[-3px] accent-red-500" type="radio" onClick={(() => setMusician(!musician))}/>
                        <p className="text-[20px] ml-[5px]">Musician</p>
                    </div>
                    <div className="flex m-[10px] max-[400px]:ml-auto max-[400px]:mr-auto">
                        <input className="w-[16px] mt-[-3px] accent-red-500" type="radio" onClick={(() => setCreator(!creator))}/>
                        <p className="text-[20px] ml-[5px]">Influencer/Creator</p>
                    </div>
                    <div className="flex m-[10px] max-[400px]:ml-auto max-[400px]:mr-auto">
                        <input className="w-[16px] mt-[-3px] accent-red-500" type="radio" onClick={(() => setArtist(!artist))}/>
                        <p className="text-[20px] ml-[5px]">Artist</p> 
                    </div>
                </div>
                <div className="flex justify-center max-[400px]:grid">
                    <div className="flex m-[10px]">
                        <input className="w-[16px] mt-[-3px] accent-red-500" type="radio" onClick={(() => setModel(!model))}/>
                        <p className="text-[20px] min-[400px]:ml-[5px]">Model</p>
                    </div>
                    <div className="flex m-[10px]">
                        <input className="w-[16px] mt-[-3px] accent-red-500" type="radio" onClick={(() => setOther(!other))}/>
                        <p className="text-[20px] ml-[5px]">Other</p>
                    </div>
                </div>
                <p className="text-center text-[25px] font-metropolis_700 min-[615px]:mr-[460px] max-[615px]:text-center">Your Details</p>
                <div className="grid justify-center mt-[20px]">
                    <div>
                        <input className="w-[250px] h-[40px] m-[15px] border-2 border-gray-400 rounded p-[5px]" type="text" placeholder="First Name" required
                            onChange={((e) => setFirstName(e.target.value))}/>
                        <input className="w-[250px] h-[40px] m-[15px] border-2 border-gray-400 rounded p-[5px]" type="text" placeholder="Last Name" required
                            onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <div>
                        <input className="w-[250px] h-[40px] m-[15px] border-2 border-gray-400 rounded p-[5px]" type="email" placeholder="Email" required
                            onChange={((e) => setEmail(e.target.value))}/>
                        <input className="w-[250px] h-[40px] m-[15px] border-2 border-gray-400 rounded p-[5px]" type="phone" placeholder="Phone Number" required
                            onChange={((e) => setPhone(e.target.value))}/>
                    </div>
                    <p className="text-[20px] max-[400px]:text-center">Social Media Link(s)</p>
                    <div>
                        <input className="w-[250px] h-[40px] m-[15px] border-2 border-gray-400 rounded p-[5px]" type="text" placeholder="Link 1"
                            onChange={((e) => setLink1(e.target.value))}/>
                        <input className="w-[250px] h-[40px] m-[15px] border-2 border-gray-400 rounded p-[5px]" type="text" placeholder="Additional Information"
                            onChange={((e) => setAdditionalInformation(e.target.value))}/>
                    </div>
                    <div>
                        <input className="w-[250px] h-[40px] m-[15px] border-2 border-gray-400 rounded p-[5px]" type="text" placeholder="Link 2"
                            onChange={((e) => setLink2(e.target.value))}/>
                    </div>
                    <div>
                        <input className="w-[250px] h-[40px] m-[15px] border-2 border-gray-400 rounded p-[5px]" type="text" placeholder="Additional Links"
                            onChange={((e) => setAdditionalLinks(e.target.value))}/>
                    </div>
                    <button className="bg-[#ff5f5f] w-[200px] h-[40px] rounded-2xl ml-auto mr-auto text-white border-2" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact;
