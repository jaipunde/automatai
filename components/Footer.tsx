import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <h3 className={styles.logo}>AutomatAI</h3>
                        <p className={styles.tagline}>Time saved. Growth unlocked. Life easier.</p>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.linkGroup}>
                            <h4 className={styles.linkTitle}>Navigate</h4>
                            <ul className={styles.linkList}>
                                <li><a href="#who-we-transform">What We Do</a></li>
                                <li><a href="#case-studies">Real Results</a></li>
                                <li><a href="#how-it-works">How It Works</a></li>
                                <li><a href="#contact">Get Started</a></li>
                            </ul>
                        </div>

                        <div className={styles.linkGroup}>
                            <h4 className={styles.linkTitle}>Connect</h4>
                            <ul className={styles.linkList}>
                                <li><a href="#">LinkedIn</a></li>
                                <li><a href="#">YouTube</a></li>
                                <li><a href="mailto:hello@automatai.in">Email</a></li>
                            </ul>
                        </div>
                    </div>
                </div>



                <div className={styles.bottom}>
                    <p className={styles.copyright}>© 2025 AutomatAI. All rights reserved.</p>
                    <div className={styles.legal}>
                        <a href="#">Privacy Policy</a>
                        <span>•</span>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
