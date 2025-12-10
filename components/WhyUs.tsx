import styles from './WhyUs.module.css';

const reasons = [
    {
        icon: '🚀',
        title: 'We Make the "Impossible" Possible',
        description: 'Other agencies say "that can\'t be automated." We say "let us show you." If there\'s repetitive work, there\'s a way to automate it—and we find it.'
    },
    {
        icon: '💬',
        title: 'You Talk Business, We Handle Tech',
        description: 'No coding. No complicated dashboards. No tech jargon. You explain your problem in plain English—we deliver a working solution.'
    },
    {
        icon: '✅',
        title: 'It Actually Works in the Real World',
        description: 'We don\'t just connect apps and cross our fingers. We build systems that handle mistakes, exceptions, and the messy reality of running a business.'
    },
    {
        icon: '⚡',
        title: 'Results Come Fast',
        description: 'Most clients see their automation running within 2-4 weeks. You\'ll wonder why you waited so long.'
    },
    {
        icon: '🔓',
        title: 'You Own Everything',
        description: 'The automation belongs to you. Full documentation. Training included. We\'re not trying to lock you in—we want you successful.'
    }
];

export default function WhyUs() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Why Teams Love <span className="gradient-text">Working With Us</span>
                    </h2>
                </div>

                <div className={styles.grid}>
                    {reasons.map((reason, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{reason.icon}</div>
                            <h3 className={styles.cardTitle}>{reason.title}</h3>
                            <p className={styles.description}>{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
