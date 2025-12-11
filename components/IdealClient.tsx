import styles from './IdealClient.module.css';

export default function IdealClient() {
    const points = [
        "Do the same tasks repeatedly and know there's a better way",
        "Spend hours on manual work that doesn't require human judgment",
        "Need to scale output without scaling headcount",
        "Have a team stretched too thin",
        "Know automation exists but don't know where to start",
        "Tried automation tools before but couldn't make them work",
        "Want their team focused on strategy, not busywork",
        "Are growing fast and drowning in operational tasks"
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.heading}>Perfect For Teams Who...</h2>

                <div className={styles.list}>
                    {points.map((point, index) => (
                        <div key={index} className={styles.item}>
                            <span className={styles.check}>✅</span>
                            <span className={styles.text}>{point}</span>
                        </div>
                    ))}
                </div>

                <div className={styles.cta}>
                    <p className={styles.ctaText}>If any of this sounds familiar, we should talk.</p>
                </div>
            </div>
        </section>
    );
}
