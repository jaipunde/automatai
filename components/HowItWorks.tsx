import styles from './HowItWorks.module.css';
import PlaceholderImage from './PlaceholderImage';

export default function HowItWorks() {
    const steps = [
        {
            title: "Step 1: Tell Us What's Killing Your Time",
            item: "Book a free call. Tell us about the tasks that make you think \"there has to be a better way.\" The data entry. The follow-ups. The content creation. Whatever it is."
        },
        {
            title: "Step 2: We Show You What's Possible",
            item: "We'll map out exactly how automation will work for you—in simple terms. You'll see the before and after. You'll understand the impact."
        },
        {
            title: "Step 3: We Build Your System",
            item: "You don't lift a finger. We handle the technical work, the testing, the edge cases. You approve the final setup."
        },
        {
            title: "Step 4: Watch It Run",
            item: "Your automation goes live. It runs in the background, doing work while you focus on what matters. You just watch the results roll in."
        },
        {
            title: "Step 5: We Support You",
            item: "Questions come up? Things change? We're here. Ongoing support is part of the deal."
        }
    ];

    return (
        <section className={styles.section} id="how-it-works">
            <div className="container">
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <h2 className={styles.title}>
                        How We Work <br /> <span style={{ fontSize: '0.6em', color: 'var(--color-text-light)' }}>(It's Easier Than You Think)</span>
                    </h2>
                </div>

                <div className={styles.grid}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.stepTitle}>{step.title}</div>
                            <p className={styles.description}>{step.item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
