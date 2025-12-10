import styles from './TargetAudiences.module.css';
import PlaceholderImage from './PlaceholderImage';

const audiences = [
    { title: "Events", color: "#e3f2fd" },
    { title: "Creators & Content", color: "#e8f5e9" },
    { title: "Marketing", color: "#fff3e0" },
    { title: "Productivity", color: "#f3e5f5" }
];

export default function TargetAudiences() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Which hat are you wearing today?</h2>
                    <p className={styles.subtitle}>
                        Discover our cutting-edge automation solutions designed to streamline workflows,
                        enhance innovation, and boost operational efficiency.
                    </p>
                </div>

                <div className={styles.grid}>
                    {audiences.map((aud, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <PlaceholderImage height="280px" text={`Illustration: ${aud.title}`} color={aud.color} />
                            </div>
                            <h3 className={styles.cardTitle}>{aud.title}</h3>
                            <p className={styles.cardDesc}>Plan, coordinate, and execute smarter.</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
