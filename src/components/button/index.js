import styles from "./Button.module.css";
import router from "next/router";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: "400" });

const Button = ({ children, icon, onClick, href }) => {
    return (
        <button
            onClick={() => {
                if (onClick) return onClick();
                if (href) return router.push(href);
            }}
            className={`${spaceMono.className} ${styles.buttonRoot}`}
        >
            <div className={styles.iconContainer}>{icon}</div>
            {children}
        </button>
    );
};

export default Button;
