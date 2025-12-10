'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
    {
        question: 'How long does it actually take?',
        answer: 'Simple automations go live in 1-2 weeks. Complex systems take 3-6 weeks. We\'ll give you an exact timeline upfront—and we stick to it.'
    },
    {
        question: 'What if something breaks?',
        answer: 'We build for reliability. But if something does go wrong? We fix it fast. Ongoing support is included, not an upsell.'
    },
    {
        question: 'I\'m not technical at all. Will I understand it?',
        answer: 'That\'s the whole point. If you can explain your current process, we can automate it. We translate tech into plain English.'
    },
    {
        question: 'Will this work with the tools we already use?',
        answer: 'Almost certainly. We\'ve worked with dozens of platforms—CRMs, email tools, social schedulers, project management software, you name it. If it has an integration option (and most do), we can connect it.'
    },
    {
        question: 'What if our process changes later?',
        answer: 'We build flexible systems. Need to adjust something? We make it easy. Many clients manage their own tweaks after we train them.'
    },
    {
        question: 'Is AI actually reliable for real business operations?',
        answer: 'When built correctly, yes. We don\'t just plug in ChatGPT and hope for the best. We engineer systems with error handling, human checkpoints where needed, and fallback options.'
    },
    {
        question: 'Can you guarantee ROI?',
        answer: 'We\'re confident enough to show you projected time savings and revenue impact before you commit. Most clients see payback in 2-3 months through hours saved alone—revenue gains are bonus.'
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.section} id="faq">
            <div className="container-narrow">
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Questions You Might <span className="gradient-text">Have</span>
                    </h2>
                </div>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <button
                                className={`${styles.question} ${openIndex === index ? styles.active : ''}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{faq.question}</span>
                                <span className={styles.icon}>{openIndex === index ? '−' : '+'}</span>
                            </button>
                            <div className={`${styles.answer} ${openIndex === index ? styles.open : ''}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
