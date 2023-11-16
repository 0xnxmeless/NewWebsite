import styles from "./Skill.module.css";

const Skill = ({ percentage, title, icon }) => {
    return (
        <div className={styles.main}>
            <div className={styles.iconContainer}>{icon}</div>
            <div className={styles.text}>
                <h2>{title}</h2>
                <div className={styles.percentageContainer}>
                    <div
                        style={{ width: `${percentage}%` }}
                        className={styles.percentage}
                    >
                        {percentage}%
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
