'use client';

import { useState } from 'react';
import styles from './CaseStudies.module.css';

const caseStudies = [
    {
        company: "Timothy's Consulting Firm",
        title: "The 24/7 AI Assistant",
        before: "Potential clients had questions at all hours. If they didn\'t get answers fast, they\'d go to competitors.",
        after: "An AI assistant that answers questions instantly, qualifies leads, and sounds completely human.",
        impact: [
            "Response time dropped from hours to seconds",
            "Lead conversion rate increased 40%",
            "Team focuses on high-value conversations only"
        ],
        icon: "🤖",
        color: "var(--gradient-primary)"
    },
    {
        company: "Zack's Marketing Agency",
        title: "The Ad Factory",
        before: "Creating custom ads for each client consumed all their time. Growth was impossible without hiring.",
        after: "A system that generates complete UGC-style ads—script, visuals, captions, variations—in minutes.",
        impact: [
            "Production increased from 5 ads weekly to 50",
            "Took on 3x more clients with the same team size",
            "Revenue up 240%"
        ],
        icon: "🎬",
        color: "var(--gradient-secondary)"
    },
    {
        company: "SFJ's Sales Team",
        title: "The Lead Machine",
        before: "Sales reps spent 3 hours daily searching Google Maps for leads. Only 5-6 hours left for actual selling.",
        after: "Automated system that scrapes, verifies, enriches, and scores leads overnight.",
        impact: [
            "100+ qualified leads delivered daily",
            "Sales team doubled their closing rate",
            "Reps now spend 8 hours selling, not searching"
        ],
        icon: "📊",
        color: "var(--gradient-accent)"
    },
    {
        company: "Fashion Brand",
        title: "Campaign Creation on Demand",
        before: "Creating seasonal campaigns with trending imagery took weeks of manual design work.",
        after: "Automated system that identifies trends, combines brand assets with celebrity imagery, and outputs campaign-ready ads in bulk.",
        impact: [
            "Campaign production dropped from 3 weeks to 4 hours",
            "Launched 5x more seasonal campaigns",
            "Content is fresher and more relevant"
        ],
        icon: "👗",
        color: "var(--gradient-sunset)"
    },
    {
        company: "Rocket Revenue",
        title: "From Service to SaaS Product",
        before: "Client needed a way to help businesses create social content from their websites.",
        after: "Built a complete SaaS platform that turns any URL into months of social media content.",
        impact: [
            "Launched a revenue-generating product",
            "Users create a month of content in 10 minutes",
            "Subscription model scales infinitely"
        ],
        icon: "🚀",
        color: "var(--gradient-cosmic)"
    }
];

export default function CaseStudies() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className={styles.section} id="case-studies">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Real <span className="gradient-text">Transformations</span>
                    </h2>
                    <p className={styles.subtitle}>
                        See how we\'ve helped businesses like yours save time and scale revenue
                    </p>
                </div>

                <div className={styles.carousel}>
                    <div className={styles.mainCard}>
                        <div className={styles.cardIcon}>{caseStudies[activeIndex].icon}</div>
                        <div className={styles.company}>{caseStudies[activeIndex].company}</div>
                        <h3 className={styles.caseTitle}>{caseStudies[activeIndex].title}</h3>

                        <div className={styles.beforeAfter}>
                            <div className={styles.beforeSection}>
                                <div className={styles.label}>Before</div>
                                <p>{caseStudies[activeIndex].before}</p>
                            </div>
                            <div className={styles.arrow}>→</div>
                            <div className={styles.afterSection}>
                                <div className={styles.label}>After</div>
                                <p>{caseStudies[activeIndex].after}</p>
                            </div>
                        </div>

                        <div className={styles.impactSection}>
                            <div className={styles.impactLabel}>Impact</div>
                            <div className={styles.impactList}>
                                {caseStudies[activeIndex].impact.map((item, i) => (
                                    <div key={i} className={styles.impactItem}>
                                        <span className={styles.impactCheck}>✓</span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={styles.navigation}>
                        {caseStudies.map((study, index) => (
                            <button
                                key={index}
                                className={`${styles.navButton} ${index === activeIndex ? styles.active : ''}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <span className={styles.navIcon}>{study.icon}</span>
                                <span className={styles.navText}>{study.company}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
