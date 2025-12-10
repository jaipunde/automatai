import styles from './ValueProposition.module.css';

export default function ValueProposition() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.left}>
                        <h2 className={styles.title}>
                            Empowering <br />
                            Businesses with AI <br />
                            Automation
                        </h2>
                    </div>
                    <div className={styles.right}>
                        <p className={styles.description}>
                            At Remgur AI, we are dedicated to revolutionizing the way businesses operate
                            by leveraging the latest in artificial intelligence and automation technologies.
                            Our goal is to empower organizations to achieve greater efficiency and productivity
                            across all aspects of their operations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
