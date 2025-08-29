import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

import { toast } from "react-toastify";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("access_key", "71a4fee6-de23-465b-a702-e951edfe52f9");

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
        render: "Mail send successfully",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
    }
  };

  useGSAP(() => {
    // split the title into characters
    const splitContactTitle = SplitText.create("#contact-title", {
      type: "chars",
    });

    // create a timeline
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
      .from("#contact-form", {
        opacity: 0,
      });
  }, []);

  return (
    <section
      id="contact"
      className="h-screen w-full bg-gradient text-white py-20 selection"
    >
      <div className="h-full w-full col-center">
        <h1 id="contact-title" className="text-8xl font-bold mb-5">
          Contact me
        </h1>
        <p
          id="contact-description"
          className="text-md max-w-3/12 mx-auto text-center text-zinc-400"
        >
          Please feel free to contact me and I will get back to you as soon as I
          can
        </p>
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="h-full w-3/12 col-center gap-5"
        >
          <input
            type="text"
            name="First name"
            required="true"
            placeholder="First name"
            className="input"
          />
          <input
            type="text"
            name="Last name"
            required="true"
            placeholder="Last name"
            className="input"
          />
          <input
            type="email"
            name="email"
            required="true"
            placeholder="E-mail"
            className="input"
          />
          <textarea
            cols={23}
            name="message"
            required="true"
            placeholder="Type your message here..."
            className="input"
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="submit-btn cursor-pointer w-full"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
