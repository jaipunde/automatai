import styles from './AutomationCapabilities.module.css';

export default function AutomationCapabilities() {
    const capabilities = [
        {
            title: "Data Work That Never Ends",
            description: "Copying between spreadsheets, updating CRMs, syncing platforms, generating reports—all happens automatically, perfectly, every time."
        },
        {
            title: "Customer Communication That Takes Forever",
            description: "Follow-up emails, review requests, abandoned cart messages, onboarding sequences—sent at the perfect time, personalized, without you thinking about it."
        },
        {
            title: "Content Creation That Drains Your Team",
            description: "Social posts, ad variations, email newsletters, video scripts—generated and scheduled while you sleep."
        },
        {
            title: "Lead Management That Eats Your Day",
            description: "Finding prospects, verifying contacts, scoring leads, nurturing sequences, updating sales stages—completely hands-free."
        },
        {
            title: "Reporting That Nobody Wants to Do",
            description: "Sales dashboards, campaign analytics, team performance reports—updated in real-time, always accurate."
        },
        {
            title: "Scheduling & Follow-ups You Forget",
            description: "Meeting recaps, task prioritization, deadline reminders, check-ins—managed automatically."
        },
        {
            title: "And Honestly? Almost Anything Repetitive",
            description: "If you're doing it more than once a week, there's probably a way to automate it."
        }
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <div className="text-center">
                    <h2 className={styles.heading}>What Can Be Automated? <br /><span className={styles.subHeading}>(More Than You Think)</span></h2>
                    <p className={styles.intro}>You'd Be Amazed</p>
                </div>

                <div className={styles.grid}>
                    {capabilities.map((cap, index) => (
                        <div key={index} className={styles.card}>
                            <h3 className={styles.cardTitle}>{cap.title}</h3>
                            <p className={styles.cardDescription}>{cap.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
