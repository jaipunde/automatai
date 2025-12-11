import Link from 'next/link';
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
                                <li><a href="mailto:hello@automatai.in">hello@automatai.in</a></li>
                            </ul>
                            <div className={styles.socialLinks}>
                                <a href="#" aria-label="YouTube" className={styles.socialIcon}>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                                </a>

                                <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                                <a href="#" aria-label="X (Twitter)" className={styles.socialIcon}>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>



                <div className={styles.bottom}>
                    <p className={styles.copyright}>© 2025 AutomatAI. All rights reserved.</p>
                    <div className={styles.legal}>
                        <Link href="/privacy">Privacy Policy</Link>
                        <span>•</span>
                        <Link href="/terms">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

