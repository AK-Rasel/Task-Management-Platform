


import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import toast from 'react-hot-toast';


const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ppyzixa', 'template_ekbvofl', form.current, 'zGx8edpzuZtxO5hSY')
            .then((result) => {
                console.log(result.text);

                toast.success("Sent Message Successfully")

                form.current.reset();
            })
            .catch((error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="mx-auto max-w-[1280px]">
            <div  className="flex justify-evenly items-center my-32 ">

                <div className="flex px-10 gap-20 flex-col lg:flex-row font-catamaran">
                    {/* content */}
                    <div className=" flex-1 lg:text-left md:text-justify items-center">
                        <h1 className="text-5xl font-extrabold uppercase text-[#2563DC]">Contact <span className="text-black">Us</span></h1>
                        <p className="py-6 font-medium text-xl">Contact us If you have any problem or want to give any feedback you can contact us.</p>



                    </div>
                    {/* from */}
                    <div className="flex-1 max-w-2xl">

                        <div className="card shrink-0  w-full  shadow-2xl ">
                            <form ref={form} onSubmit={sendEmail} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white text-lg ">Name</span>
                                    </label>
                                    <input type="text" name="user_name" placeholder="Name" className=" focus:outline-none input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white text-lg ">Email</span>
                                    </label>
                                    <input type="email" name="user_email" placeholder="email" className="input input-bordered focus:outline-none" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white text-lg ">Message</span>
                                    </label>
                                    <textarea name="message" className="focus:outline-none textarea textarea-bordered" placeholder="message"></textarea>

                                </div>
                                <div className="form-control mt-6">
                                    {/* <button type="submit" value="Send" className="btn text-lg  border-none  text-white transition ease-in-out delay-150 bg-[#2563DC] hover:-translate-y-1 hover:scale-110 hover:text-[#1F2937] hover:bg-white hover:border-[#2563DC] duration-300">Send Message</button> */}
                                    {/* <input className="bg-white" type="submit" value="Send" /> */}
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn border-none text-white bg-[#2563DC] hover:text-[#1F2937] hover:bg-white">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>







        </div>
    );
};

export default ContactUs;