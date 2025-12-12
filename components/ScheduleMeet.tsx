'use client';

import Script from 'next/script';
import styles from './ScheduleMeet.module.css';

export default function ScheduleMeet() {
    return (
        <section className={styles.section} id="schedule">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Schedule a Meeting</h2>
                    <p className={styles.subtitle}>
                        Book your free automation audit. Let's discuss how we can help automate your business.
                    </p>
                </div>

                <div className={styles.content}>
                    <div
                        className="calendly-inline-widget"
                        data-url="https://calendly.com/automataimeet/schedule-a-meeting-automatai?hide_event_type_details=1&hide_gdpr_banner=1"
                        style={{ minWidth: '320px', height: '700px' }}
                    />
                    <Script
                        type="text/javascript"
                        src="https://assets.calendly.com/assets/external/widget.js"
                        async
                    />
                </div>
            </div>
        </section>
    );
}
