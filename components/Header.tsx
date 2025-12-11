import Link from 'next/link';
import styles from './Header.module.css';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.navWrapper}>
                    <Link href="/" className={styles.logo}>
                        {/* Light Mode Logo (Visible by default, hidden in dark mode) */}
                        <img
                            src="/Gemini_Generated_Image_7zeks07zeks07zek.png"
                            alt="AutomatAI Logo"
                            className={styles.logoImageLight}
                        />

                        {/* Dark Mode Logo (Hidden by default, visible in dark mode) */}
                        <img
                            src="/Gemini_Generated_Image_ic1alvic1alvic1a.png"
                            alt="AutomatAI Logo"
                            className={styles.logoImageDark}
                        />
                        <div className={styles.logoTextContainer}>
                            <span className={styles.logoText}>AUTOMATAI.IN</span>
                            <span className={styles.logoTagline}>Stop doing. Start growing.</span>
                        </div>
                    </Link>

                    <div className={styles.actions}>
                        <nav className={styles.nav}>
                            <Link href="#what-we-do" className={styles.navLink}>What We Do</Link>
                            <Link href="#pricing" className={styles.navLink}>Pricing</Link>
                            <Link href="#how-it-works" className={styles.navLink}>How It Works</Link>
                            <Link href="#testimonials" className={styles.navLink}>Testimonials</Link>
                        </nav>
                        <ThemeToggle />
                        <Link href="#schedule" className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>
        </header >
    );
}
