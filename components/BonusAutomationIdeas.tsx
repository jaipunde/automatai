import styles from './BonusAutomationIdeas.module.css';

export default function BonusAutomationIdeas() {
    const ideas = [
        { title: "The Email Responder", desc: "Auto-reply to common questions instantly" },
        { title: "The Lead Scorer", desc: "Rank incoming leads by fit automatically" },
        { title: "The Content Repurposer", desc: "Turn one post into five formats" },
        { title: "The Follow-Up Machine", desc: "Never forget to follow up again" },
        { title: "The Data Syncer", desc: "Keep all your tools talking to each other" }
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="text-center">
                    <h2 className={styles.heading}>Bonus Section: Simple Wins</h2>
                    <p className={styles.subHeading}>(Quick Automation Ideas)</p>
                    <p className={styles.intro}>Not Ready for a Full System? Start Small.</p>
                </div>

                <div className={styles.grid}>
                    {ideas.map((idea, index) => (
                        <div key={index} className={styles.card}>
                            <h3>{idea.title}</h3>
                            <p>{idea.desc}</p>
                        </div>
                    ))}
                </div>

                <p className={styles.footer}>Small automations. Big impact. Let's start somewhere.</p>
            </div>
        </section>
    );
}
