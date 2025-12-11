'use client';

import styles from './Testimonials.module.css';

const testimonials = [
    {
        quote: "The AI assistant handles customer questions better than I expected. We're responding to leads instantly now, even the ones that come in at midnight. Conversion is way up.",
        author: "Timothy",
        company: "MWA.ai"
    },
    {
        quote: "We went from 5 ads a week to 50. Same team size. That's it—that's the whole story. Couldn't scale without them.",
        author: "Zack",
        company: "Nuamore"
    },
    {
        quote: "Our team was spending 3 hours a day just finding leads. Now that's automated and they actually have time to sell. Closing rate doubled.",
        author: "Sales Director",
        company: "SFJ, Bangalore"
    },
    {
        quote: "Response time went from 24 hours to 2 minutes. Candidates think we never sleep. Our placement rate is up 35% this quarter.",
        author: "Recruitment Manager",
        company: "GRR BAOW"
    },
    {
        quote: "Lead gen and content creation used to eat up our entire week. Now it runs in the background. We're taking on way more clients.",
        author: "Marketing Lead",
        company: "MakeMyVid"
    },
    {
        quote: "They didn't just build automation—they built our entire SaaS product. From idea to working platform in weeks. Impressive team.",
        author: "Founder",
        company: "Rocket Revenue"
    },
    {
        quote: "The content summarization system works flawlessly. Our users love getting AI summaries delivered on schedule. Exactly what we needed.",
        author: "Product Lead",
        company: "FROLIC"
    },
    {
        quote: "The abandoned cart system alone paid for itself in the first month. We're recovering about $40K monthly that we used to just lose.",
        author: "E-commerce Owner",
        company: ""
    },
    {
        quote: "Campaign production used to take us 3 weeks. Now it's done in hours. We're launching way more campaigns with fresher content.",
        author: "Fashion Brand Creative Director",
        company: ""
    },
    {
        quote: "Finally—automation that actually works. No overpromising, just solid results. Our operations are 10x smoother.",
        author: "Agency Owner",
        company: ""
    },
    {
        quote: "We were skeptical about AI handling candidate conversations. But it works, and candidates love the instant responses. Game changer.",
        author: "HR Director",
        company: "Recruiting Firm"
    },
    {
        quote: "Lead qualification happens automatically now. Our agents only talk to people who are actually ready to buy. Much better use of time.",
        author: "Real Estate Team Lead",
        company: ""
    }
];

export default function Testimonials() {
    // Duplicate testimonials for seamless loop
    const allTestimonials = [...testimonials, ...testimonials];

    return (
        <section className={styles.section} id="testimonials">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Happy 30+ Clients</h2>
                </div>

                <div className={styles.scrollContainer}>
                    <div className={styles.scrollTrack}>
                        {allTestimonials.map((testimonial, index) => (
                            <div key={index} className={styles.card}>
                                <p className={styles.quote}>"{testimonial.quote}"</p>
                                <p className={styles.author}>
                                    {testimonial.author}
                                    {testimonial.company && <span className={styles.company}>&nbsp;&nbsp;&nbsp;&nbsp;{testimonial.company}</span>}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
