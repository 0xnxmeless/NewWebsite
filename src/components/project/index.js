import Image from "next/image";
import styles from "./Project.module.css";
import Button from "../button";
import { FaLink } from "react-icons/fa";

const Project = ({ children, title, image, link }) => {
    return (
        <div className={styles.projectContainer}>
            <div className={styles.projectRoot}>
                <Image src={image} width={296} height={165} />
                <div className={styles.textContainer}>
                    <h1>{title}</h1>
                    <div className={styles.projectDescription}>{children}</div>
                    <Button icon={<FaLink />} href={link}>
                        check it out!
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Project;
