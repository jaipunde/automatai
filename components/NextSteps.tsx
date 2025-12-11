import styles from './NextSteps.module.css';

export default function NextSteps() {
    const steps = [
        {
            title: "Book your free automation audit",
            description: "30 minutes, zero pressure."
        },
        {
            title: "We'll hop on a call and:",
            items: [
                "Listen to what's eating your team's time",
                "Identify the biggest automation opportunities",
                "Show you exactly what's possible",
                "Give you a ballpark timeline and investment"
            ]
        }
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.heading}>What Happens Next?</h2>

                <div className={styles.content}>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>1</div>
                        <h3>{steps[0].title}</h3>
                        <p>{steps[0].description}</p>
                    </div>

                    <div className={styles.connector}></div>

                    <div className={styles.step}>
                        <div className={styles.stepNumber}>2</div>
                        <h3>{steps[1].title}</h3>
                        <ul>
                            {steps[1]?.items?.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="text-center">
                    <p className={styles.note}>No sales pitch. No obligation. Just honest advice on whether automation is right for you.</p>
                    <a href="#" className="btn btn-primary">Claim Your Free Audit</a>
                </div>
            </div>
        </section>
    );
}
