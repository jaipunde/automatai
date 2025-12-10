import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.navWrapper}>
                    <Link href="/" className={styles.logo}>
                        <div className={styles.logoIcon}>⬛</div>
                        <div>
                            <span className={styles.logoText}>Remgur AI</span>
                            <div className={styles.logoTagline}>Smarter workflows. Faster outcomes.</div>
                        </div>
                    </Link>

                    <div className={styles.actions}>
                        <Link href="#" className={styles.skipLink}>Skip to Main Content</Link>
                        <nav className={styles.nav}>
                            <Link href="#" className={styles.navLink}>Book a free consultation</Link>
                            <Link href="#" className={styles.navLink}>More</Link>
                        </nav>
                        <Link href="#" className="btn btn-primary">Get Started</Link>
                        <Link href="#" className={styles.loginLink}>👤 Log In</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
