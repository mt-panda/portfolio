// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger, SplitText } from "gsap/all";

// import { toast } from "react-toastify";

// const Contact = () => {
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);

//     formData.append("access_key", "71a4fee6-de23-465b-a702-e951edfe52f9");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const id = toast.loading("Sending mail...");
//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: json,
//     }).then((res) => res.json());

//     if (res.success) {
//       toast.update(id, {
//         render: "Mail send successfully",
//         type: "success",
//         isLoading: false,
//         autoClose: 2000,
//       });
//     }
//   };

//   useGSAP(() => {
//     // split the title into characters
//     const splitContactTitle = SplitText.create("#contact-title", {
//       type: "chars",
//     });

//     // create a timeline
//     const tl = gsap.timeline({
//       ease: "power1.inOut",
//       scrollTrigger: {
//         trigger: "#contact",
//         start: "top 70%",
//       },
//     });

//     tl.from(splitContactTitle.chars, {
//       opacity: 0,
//       yPercent: 100,
//       stagger: 0.05,
//     })
//       .from("#contact-description", {
//         opacity: 0,
//         yPercent: 100,
//       })
//       .from("#contact-form", {
//         opacity: 0,
//       });
//   }, []);

//   return (
//     <section
//       id="contact"
//       className="h-screen w-full bg-gradient text-white py-20 selection"
//     >
//       <div className="h-full w-full col-center">
//         <h1 id="contact-title" className="text-8xl font-bold mb-5">
//           Contact me
//         </h1>
//         <p
//           id="contact-description"
//           className="text-md max-w-3/12 mx-auto text-center text-zinc-400"
//         >
//           Please feel free to contact me and I will get back to you as soon as I
//           can
//         </p>
//         <form
//           id="contact-form"
//           onSubmit={handleSubmit}
//           className="h-full w-3/12 col-center gap-5"
//         >
//           <input
//             type="text"
//             name="First name"
//             required={true}
//             placeholder="First name"
//             className="input"
//           />
//           <input
//             type="text"
//             name="Last name"
//             required={true}
//             placeholder="Last name"
//             className="input"
//           />
//           <input
//             type="email"
//             name="email"
//             required={true}
//             placeholder="E-mail"
//             className="input"
//           />
//           <textarea
//             cols={23}
//             name="message"
//             required={true}
//             placeholder="Type your message here..."
//             className="input"
//           ></textarea>
//           <input
//             type="submit"
//             value="Submit"
//             className="submit-btn cursor-pointer w-full"
//           />
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Mail, MapPin, Phone, Linkedin, Github, Twitter } from "lucide-react";
import ProfileCard from "../components/ui/ProfileCard/ProfileCard";

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSendEmail = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  const IconCircle = ({ children }) => (
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FFA500]">
      {children}
    </div>
  );

  return (
      <section className="flex flex-col bg-gradient p-8 items-center justify-center">
        {/* Section Title and Heading */}
        <div className=" text-center mb-8 max-w-4/12">
          <h2 className=" text-[#FFA500] font-bold">Get in Touch</h2>
          <p className="text-4xl font-semibold text-gray-600 mt-3">
            Any Questions? Feel Free to Contact
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-20 items-center justify-center w-full">
          {/* Left Column in Single Card */}
          <div className="flex-1 max-w-md h-full">
            <Card className="relative text-white bg-zinc-900 border-none px-4 py-6 h-full flex flex-col justify-between shadow-[0_4px_20px_#FFA500]">
              {" "}
              <div className="space-y-10 my-8 mx-6">
                <CardHeader>
                  <CardTitle className="text-center text-2xl text-[#FFA500]">
                    Contact Information
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex items-start gap-6 justify-start">
                  <IconCircle>
                    <MapPin size={24} />
                  </IconCircle>
                  <div>
                    <p className="font-semibold">Based In:</p>
                    <span>Lahore, Punjab, Pakistan</span>
                  </div>
                </CardContent>

                <CardContent className="flex items-start gap-6 justify-start">
                  <IconCircle>
                    <Mail size={24} />
                  </IconCircle>
                  <div>
                    <p className="font-semibold">Email:</p>
                    <span>mtahirthedev@gmail.com</span>
                  </div>
                </CardContent>

                <CardContent className="flex items-start gap-6 justify-start">
                  <IconCircle>
                    <Phone size={24} />
                  </IconCircle>
                  <div>
                    <p className="font-semibold">Phone:</p>
                    <span>+92 333 4586280</span>
                  </div>
                </CardContent>
              </div>
              {/* Social Icons in Pill Bar at Bottom */}
              <CardContent className="flex justify-center pb-4">
                <div className="flex gap-10 bg-[#FFA500] rounded-full px-15 py-4">
                  <a
                    href="#"
                    className="text-white font-extrabold hover:text-[black] transition-all"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="#"
                    className="text-white font-extrabold hover:text-[black] transition-all"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="#"
                    className="text-white font-extrabold hover:text-[black] transition-all"
                  >
                    <Twitter size={24} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="flex-1 max-w-md">
            <Card className="flex flex-col items-center justify-center h-full bg-transparent border-none">
              <CardContent className="flex flex-col items-center justify-center w-full">
                {!isModalOpen && (
                  <ProfileCard
                    name="Muhammad Tahir"
                    title="Software Engineer"
                    handle="mtahirthedev"
                    status="Online"
                    contactText="Contact Me"
                    avatarUrl="/images/profile.webp"
                    showUserInfo={true}
                    enableTilt={true}
                    enableMobileTilt={true}
                    onContactClick={() => setIsModalOpen(true)}
                  />
                )}
                {isModalOpen && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-md max-w-md w-full">
                      <button
                        className="mb-4 text-right w-full"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Close
                      </button>
                      <form onSubmit={handleSendEmail} className="space-y-4">
                        <div className="flex gap-4">
                          <input
                            type="text"
                            placeholder="Name"
                            className="flex-1 border p-2 rounded"
                            required
                          />
                          <input
                            type="email"
                            placeholder="Email"
                            className="flex-1 border p-2 rounded"
                            required
                          />
                        </div>
                        <div className="flex gap-4">
                          <input
                            type="text"
                            placeholder="Phone"
                            className="flex-1 border p-2 rounded"
                            required
                          />
                          <input
                            type="text"
                            placeholder="Subject"
                            className="flex-1 border p-2 rounded"
                            required
                          />
                        </div>
                        <div>
                          <textarea
                            placeholder="Message"
                            className="w-full border p-2 rounded"
                            required
                          />
                        </div>
                        <Button type="submit">Send Email</Button>
                      </form>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  );
}
