import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { toast } from "react-toastify";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card.jsx";
import { Mail, MapPin, Phone, Linkedin, Github, Twitter } from "lucide-react";
import image from "/images/profile.webp";
import { SparklesCore } from "@/components/ui/sparkles";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function ContactSection() {
  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("access_key", "c0cdf1f9-afc5-44cd-bfae-7ca4952e1a75");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const id = toast.loading("Sending mail...");
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.update(id, {
        render: "Mail sent successfully",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
    }
  };

  // GSAP Animation
  useGSAP(() => {
    const splitContactTitle = SplitText.create("#contact-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 70%",
      },
    });

    tl.from(splitContactTitle.chars, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.05,
    })
      .from("#contact-description", {
        opacity: 0,
        yPercent: 100,
      })
      .from("#left-card", {
        opacity: 0,
        x: -100,
        duration: 0.8,
      })
      .from("#left-card .card-item", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
      })
      .from("#contact-form", {
        opacity: 0,
        x: 100,
        duration: 0.8,
      });
  }, []);

  const IconCircle = ({ children }) => (
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FFA500]">
      {children}
    </div>
  );

  return (
    <section
      id="contact"
      className="flex flex-col bg-foreground p-12 items-center justify-center text-white"
    >
      {/* Section Title */}
      <div className="text-center mb-8 max-w-4/12">
        <h2 className="text-[#FFA500] sansation-bold">Get in Touch</h2>
        <h1
          id="contact-title"
          className="text-6xl mt-2 sansation-bold"
          style={{ textShadow: "0 0 10px rgba(255,165,0,0.5)" }}
        >
          Contact Me
        </h1>
        <p
          id="contact-description"
          className="text-md mt-3 max-w-xl mx-auto text-center text-zinc-400 sansation-regular"
        >
          Please feel free to contact me and I will get back to you as soon as I
          can
        </p>
      </div>

      {/* Main Contact Card Container (Added relative class) */}
      <div className="flex flex-col md:flex-row relative bg-gradient-radial from-black via-white border-[#FFA500] border-[0.1px] to-[#FFA500] w-6xl rounded-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-[#FFA500]/20">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={25}
          className="absolute inset-0 w-full h-full z-0"
          particleColor="#FFFFFF"
        />

        {/* Left Column - Contact Info (Content is z-10 or above to show over sparkles) */}
        <div className="flex-2 max-w-md relative z-10">
          <Card
            id="left-card"
            className="relative text-white bg-transparent border-none px-8 py-6 h-full flex flex-col justify-evenly overflow-hidden"
          >
            {/* Background Image with low opacity */}
            <img
              src={image}
              alt="Profile Background"
              className="absolute inset-0 w-full h-full object-cover opacity-5"
            />

            {/* Content above the background */}
            <div className="relative z-10 space-y-15 my-8 mx-6">
              <CardHeader className="card-item">
                <CardTitle className="text-center text-2xl text-[#FFA500] sansation-bold">
                  Contact Information
                </CardTitle>
              </CardHeader>

              <CardContent className="flex items-start gap-6 justify-start card-item">
                <IconCircle>
                  <MapPin size={24} />
                </IconCircle>
                <div>
                  <p className="sansation-bold">Based In:</p>
                  <span className="sansation-regular">
                    Lahore, Punjab, Pakistan
                  </span>
                </div>
              </CardContent>

              <CardContent className="flex items-start gap-6 justify-start card-item">
                <IconCircle>
                  <Mail size={24} />
                </IconCircle>
                <div>
                  <p className="sansation-bold">Email:</p>
                  <span className="sansation-regular">
                    mtahirthedev@gmail.com
                  </span>
                </div>
              </CardContent>

              <CardContent className="flex items-start gap-6 justify-start card-item">
                <IconCircle>
                  <Phone size={24} />
                </IconCircle>
                <div>
                  <p className="sansation-bold">Phone:</p>
                  <span className="sansation-regular">+92 333 4586280</span>
                </div>
              </CardContent>
            </div>

            {/* Social Icons */}
            <CardContent className="relative z-10 flex justify-center pb-4 card-item">
              <div className="flex gap-10 bg-[#FFA500] rounded-full px-10 py-4 hover:scale-110 transition-all">
                <a
                  href="#"
                  className="text-white sansation-bold hover:text-black transition-all"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-white sansation-bold hover:text-black transition-all"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="text-white sansation-bold hover:text-black transition-all"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Form (Content is z-10 or above to show over sparkles) */}
        <div className="flex-1 flex h-full relative z-10">
          <Card className="flex flex-col justify-center h-full bg-transparent border-none w-full p-10">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-[#FFA500] sansation-bold">
                Send me an Email
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center">
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 w-full max-w-lg"
              >
                <input
                  type="text"
                  name="First name"
                  required
                  placeholder="First name"
                  className="w-full px-4 py-3 rounded-md text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#FFA500] placeholder-zinc-500 sansation-regular"
                />
                <input
                  type="text"
                  name="Last name"
                  required
                  placeholder="Last name"
                  className="w-full px-4 py-3 rounded-md text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#FFA500] placeholder-zinc-500 sansation-regular"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="E-mail"
                  className="w-full px-4 py-3 rounded-md text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#FFA500] placeholder-zinc-500 sansation-regular"
                />
                <textarea
                  cols={23}
                  name="message"
                  required
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 min-h-[150px] rounded-md text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#FFA500] placeholder-zinc-500 sansation-regular"
                ></textarea>
                <input
                  type="submit"
                  value="Submit"
                  className="w-auto px-6 py-3 rounded-full bg-[#FFA500] text-white sansation-bold hover:bg-[#e69500] transition-colors cursor-pointer"
                />
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
