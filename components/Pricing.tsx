import styles from './Pricing.module.css';

const tiers = [
    {
        name: "Foundation",
        price: "$2,000 - $5,000",
        description: "Single-process automation for tactical optimization.",
        popular: false,
        includes: [
            "One workflow automation",
            "2-3 platform integrations",
            "Documentation & training",
            "30-day support"
        ],
        examples: "Lead capture, email sequences, data sync, social scheduling",
        timeline: "1-2 weeks"
    },
    {
        name: "Accelerator",
        price: "$5,000 - $15,000",
        description: "Department-wide automation with AI-powered intelligence.",
        popular: true,
        includes: [
            "Multi-step interconnected workflows",
            "5-8 platform integrations",
            "AI-powered features (content generation, smart routing)",
            "Advanced error handling",
            "Team training & documentation",
            "60-day support + optimization"
        ],
        examples: "Lead generation pipelines, content systems, recruitment automation, customer journeys",
        timeline: "3-5 weeks"
    },
    {
        name: "Enterprise",
        price: "$15,000 - $50,000+",
        description: "Organization-wide transformation and custom AI products.",
        popular: false,
        includes: [
            "Complex multi-workflow systems",
            "Unlimited integrations",
            "Custom AI agents (voice, chat, decision engines)",
            "RAG systems & vector databases",
            "Custom dashboards & reporting",
            "Full-stack development when needed",
            "Dedicated project management",
            "90-day premium support + quarterly reviews"
        ],
        examples: "AI assistants, SaaS products, agency platforms, sales intelligence systems",
        timeline: "6-12 weeks"
    }
];

export default function Pricing() {
    return (
        <section className={styles.section} id="pricing">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Investment & Pricing</h2>
                    <p className={styles.subtitle}>Transparent. Strategic. Results-Driven.</p>
                    <p className={styles.description}>
                        Fixed-scope pricing with clearly defined deliverables, comprehensive documentation, and dedicated support.
                    </p>
                </div>

                <div className={styles.tiersGrid}>
                    {tiers.map((tier, index) => (
                        <div key={index} className={`${styles.tierCard} ${tier.popular ? styles.popular : ''}`}>
                            {tier.popular && <div className={styles.popularBadge}>⭐ Most Popular</div>}
                            <h3 className={styles.tierName}>{tier.name}</h3>
                            <div className={styles.tierPrice}>{tier.price}</div>
                            <p className={styles.tierDescription}>{tier.description}</p>

                            <div className={styles.includesSection}>
                                <h4 className={styles.includesTitle}>Includes:</h4>
                                <ul className={styles.includesList}>
                                    {tier.includes.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {tier.examples && (
                                <p className={styles.examples}>
                                    <strong>Examples:</strong> {tier.examples}
                                </p>
                            )}
                            {tier.timeline && (
                                <p className={styles.timeline}>
                                    <strong>Timeline:</strong> {tier.timeline}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
