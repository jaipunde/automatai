import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section className={styles.section} id="contact">
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.textContent}>
                        <h2 className={styles.title}>
                            Let\'s Talk About What You\'re <span className="gradient-text">Tired of Doing Manually</span>
                        </h2>
                        <p className={styles.description}>
                            Book your free automation audit (30 minutes, zero pressure). We\'ll hop on a call and:
                        </p>
                        <ul className={styles.list}>
                            <li>Listen to what\'s eating your team\'s time</li>
                            <li>Identify the biggest automation opportunities</li>
                            <li>Show you exactly what\'s possible</li>
                            <li>Give you a ballpark timeline and investment</li>
                        </ul>
                        <p className={styles.note}>
                            No sales pitch. No obligation. Just honest advice on whether automation is right for you.
                        </p>
                        <a href="mailto:hello@grosonic.in" className="btn btn-primary btn-xl">
                            Claim Your Free Audit
                        </a>
                    </div>

                    <div className={styles.contactInfo}>
                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>📧</div>
                            <div>
                                <div className={styles.infoLabel}>Email</div>
                                <a href="mailto:hello@grosonic.in" className={styles.infoValue}>
                                    hello@grosonic.in
                                </a>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>💼</div>
                            <div>
                                <div className={styles.infoLabel}>LinkedIn</div>
                                <a href="#" className={styles.infoValue}>
                                    Connect with us
                                </a>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>🎥</div>
                            <div>
                                <div className={styles.infoLabel}>YouTube</div>
                                <a href="#" className={styles.infoValue}>
                                    Watch us build
                                </a>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>📍</div>
                            <div>
                                <div className={styles.infoLabel}>Location</div>
                                <div className={styles.infoValue}>
                                    Based in Mumbai. Serving businesses globally.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.backgroundGradient}></div>
        </section>
    );
}
