import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../terms/terms.module.css';

export const metadata = {
    title: 'Privacy Policy - AutomatAI',
    description: 'AutomatAI Privacy Policy - Learn how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <div className={styles.content}>
                        {/* Header Section */}
                        <div className={styles.header}>
                            <h1 className={styles.title}>Privacy Policy</h1>
                            <div className={styles.meta}>
                                <p><strong>Effective date:</strong> January 1st, 2026</p>
                                <p><strong>Who we are:</strong> AutomatAI ("we", "us", "our") provides AI automation development, consulting, and related services via our website and booking pages.</p>
                            </div>
                        </div>

                        {/* Privacy Sections */}
                        <section className={styles.section}>
                            <h2>1) What information we collect</h2>
                            <p>You provide via forms (when booking a consultation):</p>
                            <ul>
                                <li>First name, last name, email address, phone number</li>
                                <li>Optional details you share in free-text fields (e.g., company, goals, project requirements)</li>
                            </ul>
                            <p>Automatically via cookies/trackers (see Section 7):</p>
                            <ul>
                                <li>Device, browser, approximate location (city/country), IP (may be truncated/anonymized)</li>
                                <li>Pages viewed, session duration, referrers/UTM, clicks, basic performance data</li>
                            </ul>
                            <p>We do not intentionally collect sensitive data through our site.</p>
                        </section>

                        <section className={styles.section}>
                            <h2>2) How we collect information</h2>
                            <p><strong>Directly from you:</strong> when you submit our booking form, contact form, or use chat features.</p>
                            <p><strong>Automatically:</strong> Essential cookies for site security and operation. Analytics/marketing cookies (if enabled) load only after you grant consent via our cookie banner.</p>
                        </section>

                        <section className={styles.section}>
                            <h2>3) Why we collect information (purposes & legal bases)</h2>
                            <p>We use your information only to:</p>
                            <ul>
                                <li>Schedule and host your consultation (calendar invites, confirmations, reminders)</li>
                                <li>Follow up on your request and related documentation (e.g., summary notes, proposals, project details)</li>
                                <li>Deliver automation services and maintain client records</li>
                                <li>Operate, secure, and improve our website (basic analytics and performance)</li>
                            </ul>
                            <p>Legal bases (if GDPR/UK GDPR applies):</p>
                            <ul>
                                <li><strong>Contract / pre-contract (Art. 6(1)(b))</strong> — booking and follow-ups you request</li>
                                <li><strong>Legitimate interests (Art. 6(1)(f))</strong> — site operation, basic analytics</li>
                                <li><strong>Consent (Art. 6(1)(a))</strong> — for non-essential cookies/trackers and any optional marketing</li>
                            </ul>
                            <p>We do not sell personal information.</p>
                        </section>

                        <section className={styles.section}>
                            <h2>4) How we store, share, and disclose information</h2>
                            <p><strong>Our service providers (processors)</strong></p>
                            <p>We use the following third-party services to operate our website and manage communications. Each acts as a processor on our behalf under a data-processing agreement (DPA). They only process your data to provide their service to us.</p>

                            <p><strong>Website Hosting & CMS</strong> – Website hosting, content management, site security and performance.</p>
                            <ul>
                                <li><strong>Data processed:</strong> page views, device/browser data, session identifiers, error/performance logs; form submissions you send to us (e.g., consultation form) are stored and forwarded to our inbox/CRM.</li>
                                <li><strong>Purpose:</strong> run the website, ensure availability and security, basic analytics.</li>
                                <li><strong>Transfers:</strong> may process data outside your country with appropriate safeguards.</li>
                            </ul>

                            <p><strong>Communication Tools</strong> – Email, chat, and messaging services.</p>
                            <ul>
                                <li><strong>Data processed:</strong> messages you choose to send, timestamp, basic device/browser info.</li>
                                <li><strong>Purpose:</strong> allow you to contact us and receive replies, schedule meetings, receive project updates.</li>
                                <li><strong>Note:</strong> Please avoid sharing highly sensitive information in unencrypted communications.</li>
                            </ul>

                            <p><strong>Payment Processors</strong> – (if applicable) Stripe, Razorpay, PayPal or similar.</p>
                            <ul>
                                <li><strong>Data processed:</strong> payment information, transaction details.</li>
                                <li><strong>Purpose:</strong> process payments for services.</li>
                                <li><strong>Note:</strong> We do not store complete payment card details; processors handle this securely.</li>
                            </ul>

                            <p><strong>Consent Management</strong> – Cookie/consent banner and preference storage.</p>
                            <ul>
                                <li><strong>Data processed:</strong> your consent choices (accept/deny per category), a consent identifier, timestamp, and country/region; stored in a cookie/local storage to remember your settings.</li>
                                <li><strong>Purpose:</strong> gather, store, and honor your consent for non-essential cookies and tracking, as required by applicable law.</li>
                                <li><strong>Effect:</strong> non-essential tools load only after you grant consent via the banner.</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>5) Retention</h2>
                            <p>We keep consultation and project records only as long as needed for the purposes above, to comply with legal obligations, or to resolve disputes. When no longer required, we securely delete or anonymize the data.</p>
                            <p>Typical retention periods:</p>
                            <ul>
                                <li><strong>Active client records:</strong> Duration of engagement plus 3 years</li>
                                <li><strong>Consultation inquiries (no engagement):</strong> 1-2 years</li>
                                <li><strong>Financial records:</strong> As required by Indian tax law (typically 7 years)</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>6) How we communicate with you</h2>
                            <p>We may contact you via email or phone to:</p>
                            <ul>
                                <li>Confirm/remind about meetings</li>
                                <li>Share follow-up notes, proposals, or project updates</li>
                                <li>Respond to your inquiries</li>
                                <li>Provide support for delivered automation systems</li>
                            </ul>
                            <p><strong>Marketing:</strong> We currently do not send marketing emails by default. If that changes, we'll request consent where required and provide an easy opt-out.</p>
                        </section>

                        <section className={styles.section}>
                            <h2>7) Cookies & tracking (with consent banner)</h2>
                            <p>We use a consent banner on our website. On your first visit, you can Accept All, Reject All, or Customize non-essential cookies. You can change your choices anytime via "Cookie Settings" in the site footer or browser settings.</p>
                            <p>Essential cookies are always on, because the site won't work without them.</p>
                            <p><strong>Cookie categories we use</strong></p>
                            <ul>
                                <li><strong>Essential (always on)</strong> — security (e.g., CSRF protection), load-balancing, session continuity, form/booking functionality, and your cookie preferences.</li>
                                <li><strong>Analytics/Performance (consent-based)</strong> — aggregated page metrics (e.g., page views, time on page, referring URLs), error/performance logs to help us improve the site.</li>
                                <li><strong>Marketing/Third-party (consent-based)</strong> — disabled unless you enable such features: only if we add marketing pixels or third-party embeds.</li>
                            </ul>
                            <p><strong>What consent tracking stores</strong></p>
                            <p>A consent record (your choices, timestamp, country/region) and a consent identifier (cookie/local storage) so we can prove and respect your preferences.</p>
                            <p><strong>Examples of what these cookies do</strong></p>
                            <ul>
                                <li>Keep you logged into a session during a booking or inquiry</li>
                                <li>Remember that you rejected/accepted non-essential cookies so we don't ask again each visit</li>
                                <li>Help us understand which pages are most useful (in aggregate), if you consent to analytics</li>
                                <li>Enable chat features to maintain conversation continuity</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>8) Minors</h2>
                            <p>Our services are not directed to children under 16 (or the age defined by your local law). We do not knowingly collect personal information from minors. If you believe a minor has provided data, contact us to remove it.</p>
                        </section>

                        <section className={styles.section}>
                            <h2>9) Your rights</h2>
                            <p>Depending on your location, you may have rights to:</p>
                            <ul>
                                <li>Access the personal data we hold about you</li>
                                <li>Correct inaccurate data</li>
                                <li>Delete your data</li>
                                <li>Object to / restrict certain processing (including object to direct marketing)</li>
                                <li>Withdraw consent (e.g., cookie preferences)</li>
                                <li>Data portability (receive your data in a structured format)</li>
                                <li>Lodge a complaint with your local data protection authority</li>
                            </ul>
                            <p>To exercise rights, see Contact us below. We may verify your identity before responding.</p>
                            <p><strong>California (if applicable):</strong> We do not sell or "share" personal information for cross-context behavioral advertising. You may request access or deletion as above.</p>
                            <p><strong>India (if applicable):</strong> You have rights under the Digital Personal Data Protection Act, 2023, including access, correction, deletion, and grievance redressal.</p>
                        </section>

                        <section className={styles.section}>
                            <h2>10) International data transfers</h2>
                            <p>Our service providers may process data outside India. When this occurs, we ensure appropriate safeguards are in place, such as:</p>
                            <ul>
                                <li>Standard contractual clauses</li>
                                <li>Adequacy decisions by relevant authorities</li>
                                <li>Other legally recognized transfer mechanisms</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>11) Security</h2>
                            <p>We use reasonable administrative, technical, and organizational measures to protect personal information, including:</p>
                            <ul>
                                <li>Encryption of data in transit (HTTPS/SSL)</li>
                                <li>Access controls and authentication</li>
                                <li>Regular security assessments</li>
                                <li>Secure data storage practices</li>
                            </ul>
                            <p>No method of transmission or storage is 100% secure; we cannot guarantee absolute security, but we continuously work to protect your information.</p>
                        </section>

                        <section className={styles.section}>
                            <h2>12) Automated decision-making</h2>
                            <p>We do not use automated decision-making or profiling that produces legal or similarly significant effects on you.</p>
                        </section>

                        <section className={styles.section}>
                            <h2>13) Changes to this policy</h2>
                            <p>We may update this policy from time to time. The Effective date shows the latest version. If we make material changes, we'll highlight them here or notify you where appropriate via email or website notice.</p>
                        </section>

                        <section className={styles.section}>
                            <h2>14) Contact us</h2>
                            <p>Questions, requests, or privacy concerns?</p>
                            <ul>
                                <li><strong>Email:</strong> <a href="mailto:hello@automatai.in">hello@automatai.in</a></li>
                                <li><strong>Website:</strong> <a href="https://automatai.in" target="_blank" rel="noopener noreferrer">https://automatai.in</a></li>
                            </ul>
                            <p><strong>Response time:</strong> We aim to respond to privacy requests within 30 days.</p>
                            <p><strong>Grievance Officer (India):</strong> For complaints under Indian data protection law, contact us at the email above with "DPDP Grievance" in the subject line.</p>
                        </section>

                        {/* Back to Home */}
                        <div className={styles.backToHome}>
                            <Link href="/" className="btn btn-primary">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
