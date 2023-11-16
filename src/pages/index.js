import styles from "@/styles/Home.module.css";
import Head from "next/head";
import router from "next/router";
import {
    FaCss3,
    FaDocker,
    FaGithub,
    FaHtml5,
    FaInstagram,
    FaJava,
    FaJs,
    FaLink,
    FaLinkedin,
    FaLinux,
    FaNodeJs,
    FaReact,
    FaTerminal,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { Space_Mono } from "next/font/google";
import Skill from "@/components/skill";
import Project from "@/components/project";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: "400" });

const Button = ({ title, subtext, icon, href }) => (
    <button
        className={`${spaceMono.className} ${styles.button}`}
        onClick={() => {
            if (href) router.push(href);
        }}
    >
        <div className={styles.icon}>{icon}</div>
        <div className={styles.divider} />
        <div className={styles.textContainer}>
            <p>{title}</p>
            <p>
                <span>{subtext}</span>
            </p>
        </div>
    </button>
);

const Home = () => {
    return (
        <div className={spaceMono.className}>
            <Head>
                <title>0xnxmeless - home</title>
                <meta name="description" content="welcome to my space" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <div className={styles.main}>
                <img src="profile.jpg" />
                <h1>0xnxmeless</h1>
                <p>
                    <span>welcome to my space :D</span>
                </p>
                <div className={styles.buttons}>
                    <Button
                        icon={<FaInstagram />}
                        title="instagram"
                        subtext="@0xnxmeless"
                        href="https://instagram.com/0xnxmeless"
                    />
                    <Button
                        icon={<FaGithub />}
                        title="github"
                        subtext="@0xnxmeless"
                        href="https://github.com/0xnxmeless"
                    />
                    <Button
                        icon={<FaLinkedin />}
                        title="linkedin"
                        subtext="@0xnxmeless"
                        href="https://linkedin.com/in/0xnxmeless"
                    />
                    <Button
                        icon={<FaLink />}
                        title="shorten"
                        subtext="coming soon!"
                    />
                </div>
            </div>
            <div className={styles.section}>
                <h1>
                    so, <span>who am i</span>?
                </h1>
                <p>
                    my name's <span>dom</span>, i'm an amateur full-stack web
                    developer from <span>england</span>. i've been coding for
                    about <span>5-6 years</span> now and have multiple years
                    experience with <span>html</span> and other languages. you
                    can find out more about my skills, projects and other
                    various contributions below! :)
                </p>
            </div>
            <div className={styles.section}>
                <h1>skills</h1>
                <div className={styles.skillsContainer}>
                    <Skill
                        icon={<FaJs color="#F0DB4F" />}
                        title="javascript"
                        percentage={90}
                    />
                    <Skill
                        icon={<FaNodeJs color="#3c873a" />}
                        title="node.js"
                        percentage={90}
                    />
                    <Skill
                        icon={<SiTypescript color="#007acc" />}
                        title="typescript"
                        percentage={75}
                    />
                    <Skill
                        icon={<FaReact color="#61dbfb" />}
                        title="react.js"
                        percentage={85}
                    />
                    <Skill
                        icon={<FaCss3 color="#264de4" />}
                        title="css"
                        percentage={75}
                    />
                    <Skill
                        icon={<FaHtml5 color="#e34c26" />}
                        title="html"
                        percentage={75}
                    />
                    <Skill
                        icon={<FaJava color="#f89820" />}
                        title="java"
                        percentage={75}
                    />
                    <Skill
                        icon={<FaDocker color="#0db7ed" />}
                        title="docker"
                        percentage={50}
                    />
                    <Skill icon={<FaTerminal />} title="bash" percentage={40} />
                    <Skill icon={<FaLinux />} title="linux" percentage={45} />
                </div>
                <h1>
                    <span>overview</span>
                </h1>
                <p>
                    all of the above skills listed have been collated over a
                    number of years working with different technologies, tech
                    stacks and languages. <span>please keep in mind</span> that
                    the percentages given are estimates and may not be accurate,
                    however they do give a reasonable representation in regards
                    to my knowledge with the specified technology/language.
                </p>
            </div>
            <div className={styles.section}>
                <h1>projects</h1>
                <p>
                    unfortunately, i do not currently have a lot of projects
                    that i am able to actively show, however there are a couple
                    that are posted on this site. there are more projects to
                    come, including my upcoming link shortening service, however
                    aside from that the projects listed here are an amalgamation
                    of projects worked on during my free time, as well as during
                    my time studying at college.
                </p>
                <div className={styles.projectsContainer}>
                    <Project
                        title="0xnxmeless.co"
                        image="/website.png"
                        link="https://0xnxmeless.co"
                    >
                        <span>the website you're currently on</span>. this
                        website was built over a number of days using a{" "}
                        <span>react</span> framework called <span>next.js</span>
                        . i built this website as a demonstration of my
                        knowledge and also to show off anything cool i'm working
                        on.
                    </Project>
                </div>
            </div>
        </div>
    );
};

export default Home;
