'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.navWrapper}>
                    <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
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

                        {/* Mobile Menu Toggle */}
                        <button
                            className={styles.mobileMenuToggle}
                            onClick={toggleMobileMenu}
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenuOpen ? (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            ) : (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                    <nav className={styles.mobileNav}>
                        <Link href="#what-we-do" className={styles.mobileNavLink} onClick={closeMobileMenu}>What We Do</Link>
                        <Link href="#pricing" className={styles.mobileNavLink} onClick={closeMobileMenu}>Pricing</Link>
                        <Link href="#how-it-works" className={styles.mobileNavLink} onClick={closeMobileMenu}>How It Works</Link>
                        <Link href="#testimonials" className={styles.mobileNavLink} onClick={closeMobileMenu}>Testimonials</Link>
                        <div className={styles.mobileMenuActions}>
                            <ThemeToggle />
                            <Link href="#schedule" className="btn btn-primary" onClick={closeMobileMenu}>Get Started</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
