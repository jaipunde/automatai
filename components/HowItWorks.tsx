import styles from './HowItWorks.module.css';
import PlaceholderImage from './PlaceholderImage';

export default function HowItWorks() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.image}>
                        <PlaceholderImage height="500px" text="Illustration: Browser Automations" color="#E3F2FD" />
                    </div>
                    <div className={styles.content}>
                        <h2 className={styles.title}>
                            Tailored for <br />
                            Efficiency, by <br />
                            Experts
                        </h2>
                        <p className={styles.description}>
                            Our automation solutions are designed by industry experts to meet the specific
                            needs of businesses, ensuring seamless integration and optimal performance.
                        </p>

                        <a href="#" className="btn btn-primary">Book a Demo</a>

                        <div className={styles.features}>
                            <div className={styles.feature}>
                                <div className={styles.iconBox}>🔳</div>
                                <span>Unified Automation Toolkit</span>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.iconBox}>💻</div>
                                <span>Seamless Integration</span>
                            </div>
                            <div className={styles.feature}>
                                <div className={styles.iconBox}>✒️</div>
                                <span>Customizable Modules</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
