import styles from './Hero.module.css';
import PlaceholderImage from './PlaceholderImage';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h1 className={styles.headline}>
                            Automate the <br /> Boring Stuff
                        </h1>
                        <p className={styles.subheadline}>
                            Remgur AI offers an innovative and powerful way to automate repetitive daily tasks
                            using Artificial Intelligence and your common apps, empowering your business to achieve more.
                        </p>

                        <a href="#" className="btn btn-primary">Get Started</a>

                        <div className={styles.features}>
                            <div className={styles.feature}>
                                <span className={styles.featureIcon}>⚡</span>
                                <span>Revolutionize & Optimize</span>
                            </div>
                            <div className={styles.feature}>
                                <span className={styles.featureIcon}>🔄</span>
                                <span>Innovation & Efficiency</span>
                            </div>
                            <div className={styles.feature}>
                                <span className={styles.featureIcon}>🔗</span>
                                <span>Streamlined Operations</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.heroImage}>
                        <PlaceholderImage height="600px" text="Hero Illustration: Characters on Phone Stack" color="#eef" />
                    </div>
                </div>
            </div>
        </section>
    );
}
