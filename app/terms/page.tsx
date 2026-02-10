import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './terms.module.css';

export const metadata = {
    title: 'Terms & Conditions - Grosonic',
    description: 'Terms & Conditions governing the use of Grosonic services and website.',
};

export default function TermsPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className="container">
                    <div className={styles.content}>
                        {/* Header Section */}
                        <div className={styles.header}>
                            <h1 className={styles.title}>Terms & Conditions</h1>
                            <div className={styles.meta}>
                                <p><strong>Effective date:</strong> January 1st, 2026</p>
                                <p><strong>Legal entity:</strong> Grosonic ("Grosonic," "we," "us," or "our")</p>
                                <p><strong>Website:</strong> <a href="https://grosonic.in" target="_blank" rel="noopener noreferrer">https://grosonic.in</a> (the "Site")</p>
                            </div>
                            <p className={styles.intro}>
                                Welcome to Grosonic's Terms & Conditions. Our Terms & Conditions are designed to govern
                                the activities of visitors on our website and the relationship between our visitors and
                                Grosonic. We understand the importance of tailoring our Terms to the specific needs of
                                our website, especially as an AI Automation agency.
                            </p>
                        </div>

                        {/* Terms Sections */}
                        <section className={styles.section}>
                            <h2>1) Acceptance of Terms</h2>
                            <p>
                                By accessing or using the Site, submitting a form, using our chat, or booking a consultation
                                (collectively, the "Services"), you agree to these Terms & Conditions ("Terms") and our
                                Privacy Policy. If you do not agree, do not use the Services.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>2) Eligibility</h2>
                            <p>
                                You must be at least the legal age of majority in your place of residence to use the Services.
                                The Services are not directed to children under 16 (see Privacy Policy).
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>3) What We Do</h2>
                            <p>
                                Grosonic provides AI automation development, consulting, and related advisory services.
                                A consultation provides general guidance based on information you share. It is not legal,
                                financial, tax, accounting, medical, or compliance advice.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>4) Booking, Rescheduling & Cancellations</h2>
                            <ul>
                                <li>You may book a consultation via our Site form/booking tool.</li>
                                <li>We may confirm, reschedule, or decline a booking (e.g., due to availability or conflicts).</li>
                                <li>If you need to cancel or reschedule, please do so at least 24 hours in advance via the confirmation email or by contacting us.</li>
                                <li>Missed or late cancellations may be considered a forfeited booking or subject to a fee (if applicable).</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>5) Fees & Payments (if applicable)</h2>
                            <ul>
                                <li>Some consultations may be complimentary; others may be paid. Any applicable price will be shown at booking or in a written proposal.</li>
                                <li>If payments are processed through third-party providers (e.g., Stripe, Razorpay, PayPal), you agree to their terms and policies.</li>
                                <li>All fees are exclusive of taxes unless stated otherwise. You are responsible for any applicable taxes.</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>6) Client Responsibilities</h2>
                            <p>You agree to:</p>
                            <ul>
                                <li>Provide accurate, complete information in forms, chat, and calls.</li>
                                <li>Ensure you have the right to share any data or materials provided to us.</li>
                                <li>Use any deliverables or guidance responsibly and in compliance with laws, platform policies, and third-party terms.</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>7) No Guarantees & Decision-Making</h2>
                            <p>
                                We aim to provide useful, professional automation solutions and advice, but outcomes depend
                                on many factors beyond our control. We do not guarantee specific results, performance, revenue
                                increases, or time savings. You remain solely responsible for business decisions.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>8) Intellectual Property</h2>
                            <ul>
                                <li><strong>Site Content.</strong> The Site and its content (text, graphics, logos, code, templates) are owned by Grosonic or our licensors and protected by IP laws.</li>
                                <li><strong>Limited License.</strong> We grant you a personal, non-exclusive, non-transferable license to access and use the Site for its intended purpose.</li>
                                <li><strong>Deliverables.</strong> Any automation workflows, documents, or artifacts we create during or after an engagement are subject to the terms of a separate written contract or proposal.</li>
                                <li><strong>Feedback.</strong> If you provide suggestions or feedback, you grant us a royalty-free, worldwide license to use them for product/service improvement.</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>9) Acceptable Use</h2>
                            <p>You agree not to:</p>
                            <ul>
                                <li>Copy, scrape, or reverse-engineer the Site or its code.</li>
                                <li>Upload or transmit malware, harmful code, or illegal content.</li>
                                <li>Infringe third-party rights or violate any law or platform policy.</li>
                                <li>Interfere with or disrupt the Site or its security.</li>
                                <li>Misrepresent your identity or affiliations.</li>
                            </ul>
                            <p>We may suspend or terminate access for violations.</p>
                        </section>

                        <section className={styles.section}>
                            <h2>10) Third-Party Services</h2>
                            <p>We may use third-party services to operate the Site including but not limited to:</p>
                            <ul>
                                <li>Web hosting and CMS platforms</li>
                                <li>Communication tools (chat, email)</li>
                                <li>Payment processors</li>
                                <li>Analytics and consent management tools</li>
                            </ul>
                            <p>
                                These providers may process your data as our processors—see our Privacy Policy for details.
                                Your use of features they power is also subject to their terms and policies.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>11) Privacy, Cookies & Consent</h2>
                            <ul>
                                <li>Our Privacy Policy explains what personal information we collect (e.g., name, email, phone when you book a call or inquiry), how we use it (meeting scheduling, project delivery, follow-ups, documentation), and your rights.</li>
                                <li>We may use cookies and similar technologies. You can manage your preferences through your browser settings or cookie banner (if implemented).</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>12) Confidentiality</h2>
                            <p>
                                We will use reasonable measures to keep non-public information you share during a consultation
                                or engagement confidential, and only use it to provide the Services or as required by law.
                                Do not share secrets you are not authorized to disclose. If you require specific confidentiality
                                terms, please request a separate NDA before sharing sensitive information.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>13) Disclaimers</h2>
                            <ul>
                                <li><strong>As-Is.</strong> The Site and Services are provided "as is" and "as available" without warranties of any kind, express or implied.</li>
                                <li><strong>No Professional Advice.</strong> Consultations are for general informational purposes and do not replace professional advice (legal, financial, tax, etc.).</li>
                                <li><strong>Availability.</strong> We do not warrant uninterrupted or error-free operation of the Site.</li>
                                <li><strong>Third-Party Integrations.</strong> While we build automation systems connecting various platforms, we are not responsible for changes, outages, or issues with third-party services beyond our control.</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>14) Limitation of Liability</h2>
                            <p>
                                To the maximum extent permitted by law, Grosonic and its owners, employees, or contractors
                                will not be liable for indirect, incidental, special, consequential, or punitive damages,
                                or any lost profits, revenues, data, or business opportunities, arising from or related to
                                your use of the Site or Services.
                            </p>
                            <p>
                                Our total aggregate liability for any claim will not exceed the amount you paid to us for
                                the Service giving rise to the claim (if any) in the three (3) months preceding the event.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>15) Indemnification</h2>
                            <p>
                                You agree to indemnify and hold harmless Grosonic from any claims, damages, losses,
                                liabilities, costs, and expenses (including reasonable attorneys' fees) arising from:
                            </p>
                            <ul>
                                <li>(a) your use of the Site or Services;</li>
                                <li>(b) content or data you provide;</li>
                                <li>(c) your breach of these Terms or violation of law or third-party rights.</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>16) Changes to the Site or Terms</h2>
                            <p>
                                We may update the Site, modify or discontinue features, and update these Terms at any time.
                                The Effective date will reflect the latest version. Material changes may be announced on the
                                Site. Continued use after changes means you accept the updated Terms.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>17) Suspension & Termination</h2>
                            <p>
                                We may suspend or terminate access to the Site or Services at any time for any reason,
                                including suspected violations of these Terms, legal risk, or maintenance.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>18) Governing Law & Dispute Resolution</h2>
                            <ul>
                                <li><strong>Governing Law:</strong> These Terms are governed by the laws of India (Maharashtra), without regard to conflict of law rules.</li>
                                <li><strong>Venue:</strong> Courts located in Mumbai shall have exclusive jurisdiction, unless otherwise required by law.</li>
                                <li><strong>Informal Resolution First:</strong> Before filing a claim, contact us to try to resolve the issue informally within 30 days.</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>19) International Users</h2>
                            <p>
                                Accessing the Site from outside India is at your own risk. You are responsible for compliance
                                with local laws.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>20) Assignment</h2>
                            <p>
                                You may not assign or transfer your rights or obligations under these Terms without our prior
                                written consent. We may assign these Terms in connection with a merger, acquisition, or sale
                                of assets.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>21) Severability; Waiver; Entire Agreement</h2>
                            <ul>
                                <li>If any provision is found unenforceable, it will be limited or eliminated to the minimum extent necessary; the remaining provisions remain in full force.</li>
                                <li>Our failure to enforce any right is not a waiver.</li>
                                <li>These Terms, together with the Privacy Policy and any signed proposal or contract, are the entire agreement regarding the Services.</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>22) Contact Us</h2>
                            <ul>
                                <li><strong>Email:</strong> <a href="mailto:hello@grosonic.in">hello@grosonic.in</a></li>
                                <li><strong>Website:</strong> <a href="https://grosonic.in" target="_blank" rel="noopener noreferrer">https://grosonic.in</a></li>
                            </ul>
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
