import styles from './ValueProposition.module.css';

export default function ValueProposition() {
    return (
        <section className={styles.section} id="what-we-do">
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.left}>
                        <h2 className={styles.title}>
                            We Turn "I Wish This Was Automatic" <br /> Into Reality
                        </h2>
                    </div>
                    <div className={styles.right}>
                        <p className={styles.description}>
                            Every day, you're doing the same tasks over and over. Copying data. Following up with people. Formatting content. Updating spreadsheets. Chasing leads.
                        </p>
                        <p className={styles.description} style={{ fontWeight: 'bold' }}>
                            What if all of that just... happened?
                        </p>
                        <p className={styles.description}>
                            That's what we do. We build AI-powered systems that handle the boring, repetitive work—so your team can focus on strategy, creativity, and revenue.
                        </p>
                        <p className={styles.description}>
                            The best part? You don't need to understand how it works. You just need to tell us what's eating your time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
