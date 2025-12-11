import styles from './Hero.module.css';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h1 className={styles.headline}>
                            Your Business Runs on Repeat Tasks. <br /> We Make Them Disappear.
                        </h1>
                        <p className={styles.subheadline}>
                            Stop wasting hours on work a computer should handle. We build intelligent automation that works while you sleep—so you can focus on what actually grows your business.
                        </p>

                        <div style={{ display: 'flex', gap: '16px' }}>
                            <a href="#schedule" className="btn btn-primary">Free Automation Audit</a>
                            <a href="#testimonials" className="btn btn-outline">See Real Results</a>
                        </div>


                    </div>

                    <div className={styles.heroImage}>
                        <div className={styles.lightModeImage}>
                            <Image
                                src="/Gemini_Generated_Image_ins8qoins8qoins8.png"
                                alt="Automation Machine - Light Mode"
                                fill
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                        </div>
                        <div className={styles.darkModeImage}>
                            <Image
                                src="/Gemini_Generated_Image_rolobarolobarolo.png"
                                alt="Automation Machine - Dark Mode"
                                fill
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
