import styles from './TargetAudiences.module.css';
import Image from 'next/image';

const audiences = [
    {
        title: "Recruiting & HR Teams",
        desc: "Stop chasing candidates manually. Let AI do the heavy lifting.",
        image: "/Gemini_Generated_Image_micylymicylymicy (1).png", // Add your image path here
        features: [
            "Automatic candidate outreach across platforms",
            "Smart follow-ups that sound completely human",
            "Every conversation tracked and synced",
            "Recruiter bonuses calculated automatically",
            "Never miss a hot candidate again"
        ],
        impact: "Our response time went from 24 hours to 2 minutes. Candidates think we have a 24/7 team. It's just automation."
    },
    {
        title: "Marketing & Content Teams",
        desc: "Create a month's worth of content in an afternoon.",
        image: "/Gemini_Generated_Image_ctgl8hctgl8hctgl.png", // Add your image path here
        features: [
            "Repurpose content across every platform automatically",
            "Generate social posts that sound like you",
            "Schedule weeks of content in minutes",
            "Never stare at a blank screen again",
            "Scale content without burning out"
        ],
        impact: "We went from posting 3 times a week to daily content across 5 platforms—without hiring anyone. Our engagement tripled."
    },
    {
        title: "Sales & Lead Generation",
        desc: "Wake up to qualified leads in your inbox every single morning.",
        image: "/Gemini_Generated_Image_cbd30xcbd30xcbd3.png", // Add your image path here
        features: [
            "Extract leads from anywhere—Google Maps, LinkedIn, directories",
            "Verified emails and phone numbers included",
            "Leads scored and prioritized automatically",
            "Follow-up sequences that run themselves",
            "Your CRM always up to date"
        ],
        impact: "We eliminated 15 hours of manual lead research per week. Our pipeline is fuller than it's ever been."
    },
    {
        title: "Voice & Chat AI Automation",
        desc: "Answer Every Customer Instantly—Even While You're Sleeping.",
        image: "/Gemini_Generated_Image_csqkqcsqkqcsqkqc.png", // Add your image path here
        features: [
            "Instant responses to customer questions anytime, anywhere",
            "Lead qualification that happens in real-time conversations",
            "Natural, human-like voice and chat",
            "Full conversation history in your CRM",
            "Works across website chat, phone calls"
        ],
        impact: "Customers can't tell it's AI. Response time went from hours to seconds. We closed 3 deals last month from conversations that happened at midnight."
    }
];

export default function TargetAudiences() {
    return (
        <section className={styles.section} id="who-we-transform">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Who We Transform</h2>
                    <p className={styles.subtitle}>
                        See how we help teams like yours automate the work that's holding you back
                    </p>
                </div>

                <div className={styles.grid}>
                    {audiences.map((aud, index) => (
                        <div key={index} className={styles.cardDetail}>
                            {aud.image && (
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={aud.image}
                                        alt={aud.title}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        className={styles.cardImage}
                                    />
                                </div>
                            )}

                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{aud.title}</h3>
                                <p className={styles.cardDesc}>{aud.desc}</p>

                                <div className={styles.featuresSection}>
                                    <h4 className={styles.featuresTitle}>What You Get:</h4>
                                    <ul className={styles.featureList}>
                                        {aud.features.map((feature, i) => (
                                            <li key={i}>
                                                <span className={styles.checkmark}>✓</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={styles.impactBox}>
                                    <div className={styles.impactLabel}>Real Impact</div>
                                    <p className={styles.impactText}>"{aud.impact}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
