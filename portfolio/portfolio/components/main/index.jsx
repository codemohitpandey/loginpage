import styles from "../../styles/Main.module.css";
import Link from "next/link";
import Image from "next/image";
import github from "../../public/icons8-github.svg";
import whatsapp from "../../public/icons8-whatsapp.svg";
import linkedin from "../../public/icons8-linkedin.svg";
import twitter from "../../public/icons8-twitter.svg";
import avatar from "../../public/man-face-clipart-design-illustration-free-png.webp";
import art_banner from "../../public/about-banner.png";
import project1 from "../../public/project1.JPG";
import project2 from "../../public/project2.JPG";
import project3 from "../../public/project3.JPG";
import project4 from "../../public/project4.JPG";
import Reach_out_me from "../reach_out_me";


const myemail = "developer.mohit99@gmail.com";
const name = "Mohit Pandey";
const phone = "+91 9992019192";

const reach_out_me_data = [
    {
        title: "Chat to us",
        desc1: "Our friendly team is there to help.",
        desc2: myemail,
        icon: "email"
    },
    {
        title: "Visit us",
        desc1: "Come say hello at our office HQ.",
        desc2: "Haryana, India - 125001",
        icon: "explore"
    },
    {
        title: "Call us",
        desc1: "Mon-Fri from 9:30am to 5:30pm.",
        desc2: phone,
        icon: "smartphone"
    }
];

function download() {
    const anchor = document.createElement("a");
    anchor.href = "../../public";
    anchor.download = "mohit.pdf";
    anchor.click();
    anchor.remove();
}

const Main = () => {
    return (
        <>
            <div className="w-full">
                <div className={styles.left}>
                    <div>
                        <ul className={styles.ul}>
                            <li className={styles.li}><Link href="#home" className={styles.a}>Home</Link></li>
                            <li className={styles.li}><Link href="#resume" className={styles.a}>Resume</Link></li>
                            <li className={styles.li}><Link href="#portfolio" className={styles.a}>portfolio</Link></li>
                            <li className={styles.li}><Link href="#contact" className={styles.a}>contact</Link></li>
                        </ul>
                    </div>

                    {/* media parent element to center icon links */}
                    <div className="flex items-center justify-center">
                        <div className="media absolute bottom-0 flex items-center justify-center m-2">
                            <Link href="https://www.github.com/webermohit" target="_blank" className={styles.link_image}><Image alt="image" src={github} height={20} width={20} priority /></Link>
                            <Link href="whatsapp://send?abid=+917056716766&text=Hello%2C%20Mohit!" target="_blank" className={styles.link_image}><Image alt="image" src={whatsapp} height={20} width={20} priority /></Link>
                            <Link href="https://www.linkedin.com/in/webermohit" target="_blank" className={styles.link_image}><Image alt="image" src={linkedin} height={20} width={20} priority /></Link>
                            <Link href="https://www.twitter.com/webermohit" target="_blank" className={styles.link_image}><Image alt="image" src={twitter} height={20} width={20} priority /></Link>
                        </div>
                    </div>
                </div>
                <div className={styles.right}  style={{paddingLeft:20}}>
                    <div id="home" className={styles.home}>
                        <div className="mx-auto grid lg:grid-cols-2 gap-x-24">
                            <div className="text-wrapper-parent">
                                <div className="text-container">
                                    <h1 className="text-8xl font-bold text-white uppercase">
                                        My name<br />is mohit <br />
                                        <span className={styles.stroke}>pandey...</span>
                                    </h1>
                                    <h4 className="text-white text-3xl font-bold mt-4">MERN Developer <span className="font-thin">based in</span> INDIA</h4>
                                    <button className={styles.home_btn}>Work with me <span className="material-icons">arrow_outward</span> </button>
                                    <div className="flex items-center justify-between mt-12">
                                        <h4 className="flex items-center justify-center text-white text-sm font-bold">
                                            <span className="material-icons">smartphone</span>{phone}
                                        </h4>
                                        <h4 className="flex items-center justify-center text-white text-sm font-bold">
                                            <span className="material-icons">markemailread</span>{myemail}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="image-container">
                                <div className={styles.shape}>
                                    <Image className={styles.avatar} src={avatar} alt="image" priority />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div id="resume" className={styles.resume}>
                        <div className="w-full flex flex-col justify-center items-start mb-6 pl-4">
                            <h5 className="text-xl text-white"><i>Nice to meet you!</i></h5>
                            <h2 className="font-bold text-5xl text-white uppercase">Welcome to...</h2>
                        </div>
                        <div className="mx-auto grid lg:grid-cols-2 gap-x-24 text-center">
                            <div className={styles.resume_left}>
                                <div className={styles.image_container}>
                                    <Image src={art_banner} alt="image" className="mt-8" priority />
                                </div>
                                <div className={styles.text_btn_wrapper}>
                                    <h1 className={styles.designed_h1}>mohit pandey</h1>
                                    <h4 className="text-white text-xl font-bold mt-4">MERN Developer <span className="font-thin">based in</span> INDIA</h4>
                                    <button className={styles.btn} onClick={download}>Download CV <span className="material-icons">get_app</span> </button>
                                </div>
                            </div>
                            <div className={styles.resume_right}>
                                <div>
                                    <h5 className="text-white text-md mt-6 fond-bold">Born in 2001, AB type living in India. We provide on-screen design for websites and apps, as well as front-end implementation. We will continue to pursue a wide range of expressions and better code by pursuing our “likes”.</h5>
                                    <div className="w-full mx-auto grid lg:grid-cols-2 mt-4 mb-4">
                                        <div className="phone_email flex flex-col items-start justify-center">
                                            <h6 className="text-white font-bold text-md mb-4 mt-4">{phone}</h6>
                                            <h6 className="text-white font-bold text-md mb-4">{myemail}</h6>
                                        </div>
                                        <div className="address flex flex-col items-start justify-center">
                                            <h6 className="text-white font-bold text-md mb-4 mt-4">{name}</h6>
                                            <h6 className="text-white font-bold text-md mb-4">Haryana, INDIA - 125001</h6>
                                        </div>
                                    </div>
                                    <hr className="divide-slate-700" />
                                    <div className="w-full mx-auto grid lg:grid-cols-2 mt-4 mb-4 gap-x-6">
                                        <div className="w-full flex flex-col items-start">
                                            <div className="flex flex-row items-center justify-center mb-8">
                                                <h1 className={styles.designed_h1}>10+</h1>
                                                <p className="text-white font-bold">Years <br />experience...</p>
                                            </div>
                                            <p className="text-white font-bold">
                                                Hello there! My name is <span style={{ color: "#af2676", fontWeight: 400 }}>{name}</span>. I am a web designer & developer, and I&apos;m very passionate and dedicated to my work.
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start">
                                            <div className="flex flex-row items-center justify-center mb-8">
                                                <h1 className={styles.designed_h1}>50+</h1>
                                                <p className="text-white font-bold">Clients <br />Worldwide...</p>
                                            </div>
                                            <p className="text-white font-bold">
                                                With 10+ years experience as a professional designer, I have acquired the skills to make your project a success.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full p-6 rounded-lg" style={{ background: "#211e3d" }}>
                                        <blockquote className="text-white text-xl">
                                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed sit ultrices et sed metus sollicitudin.”
                                        </blockquote>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="portfolio" className={styles.portfolio}>
                        <div className="w-full flex flex-col justify-center items-start mt-6 mb-6 pl-4">
                            <h5 className="text-xl text-white"><i>My work</i></h5>
                            <h2 className="font-bold text-5xl text-white uppercase">RECENT PROJECT</h2>
                        </div>
                        <div className="w-full mx-auto grid lg:grid-cols-2 mt-4 mb-4 gap-x-6">
                            <div className="flex flex-col items-center justify-center">
                                <div><Link href="https://cmp-magictarang.netlify.app" target="_blank"><Image alt="image" className={styles.project} src={project1} priority /></Link></div>
                                <div className="mb-6 mt-6"><h1 className="text-white text-xl">Property Sale & Purchase</h1></div>
                                <div><Link href="https://earnxj.vercel.app" target="_blank"><Image alt="image" className={styles.project} src={project2} priority /></Link></div>
                                <div className="mb-6 mt-6"><h1 className="text-white text-xl">Earn reward in form of crypto currency</h1></div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <div><Link href="https://cmp-credclub-clone.netlify.app" target="_blank"><Image alt="image" className={styles.project} src={project3} priority /></Link></div>
                                <div className="mb-6 mt-6"><h1 className="text-white text-xl">CRED Club Clone</h1></div>
                                <div><Link href="https://cmp-twitter-clone.netlify.app" target="_blank"><Image alt="image" className={styles.project} src={project4} priority /></Link></div>
                                <div className="mb-6 mt-6"><h1 className="text-white text-xl">Twitter UI Clone</h1></div>
                            </div>
                        </div>
                    </div>
                    <div id="contact" className={styles.contact}>
                        <div className="w-full mx-auto grid lg:grid-cols-2 mt-4 mb-4 gap-x-6">
                            <div className="pl-4">
                                <h1 className="text-white font-bold text-xl mb-4">Contact</h1>
                                <h1 className="text-5xl text-white font-bold">REACH OUT ME</h1>
                                {
                                    reach_out_me_data.map((item, index) => {
                                        return (
                                            <Reach_out_me key={index} title={item.title} desc1={item.desc1} desc2={item.desc2} icon={item.icon} />
                                        );
                                    })
                                }
                            </div>

                            {/* right form div parent container */}
                            <div className={styles.form_container}>
                                <form>
                                    <div>
                                        <h1 className="text-4xl text-white font-bold">Got Ideas? We&apos;ve got the skills. Let&apos;s team up.</h1>
                                        <h1 className="text-white text-md mt-6 mb-6">Tell us more about yourself and what you&apos;re got in mind.</h1>
                                    </div>
                                    <div className="w-full grid grid-cols-2 gap-x-6">
                                        <div className="mt-6">
                                            <label htmlFor="name" className="uppercase text-white text-sm">first name</label>
                                            <input type="text" className={styles.form_input} id="name" placeholder="Name *" autoComplete="off" />
                                        </div>
                                        <div className="mt-6 mb-6">
                                            <label htmlFor="email" className="uppercase text-white text-sm">your email</label>
                                            <input type="text" className={styles.form_input} id="email" placeholder="Email *" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="subject" className="uppercase text-white text-sm">subject</label><br />
                                        <input type="text" id="subject" placeholder="Subject *" className={styles.form_input} />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="message" className="uppercase text-white text-sm">message</label>
                                        <textarea id="message" className={styles.textarea} cols="70" rows="10" placeholder="Your message *"></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" onClick={(e) => e.preventDefault()} className={styles.form_btn}>Send message</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Main;