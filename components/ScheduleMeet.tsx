'use client';

import { useState, useEffect } from 'react';
import styles from './ScheduleMeet.module.css';

interface TimeSlot {
    time: string;
    available: boolean;
}

interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
}

export default function ScheduleMeet() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string>('');
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Available time slots (9 AM to 5 PM)
    const timeSlots: TimeSlot[] = [
        { time: '09:00 AM', available: true },
        { time: '10:00 AM', available: true },
        { time: '11:00 AM', available: true },
        { time: '12:00 PM', available: true },
        { time: '01:00 PM', available: true },
        { time: '02:00 PM', available: true },
        { time: '03:00 PM', available: true },
        { time: '04:00 PM', available: true },
        { time: '05:00 PM', available: true },
    ];

    // Get days in month
    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        return { daysInMonth, startingDayOfWeek };
    };

    const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);

    // Check if date is in the past or weekend
    const isDateDisabled = (day: number) => {
        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Disable weekends (0 = Sunday, 6 = Saturday)
        if (date.getDay() === 0 || date.getDay() === 6) return true;

        // Disable past dates
        if (date < today) return true;

        return false;
    };

    const handleDateClick = (day: number) => {
        if (isDateDisabled(day)) return;

        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        setSelectedDate(date);
        setSelectedTime('');
    };

    const handlePrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedDate || !selectedTime) {
            alert('Please select a date and time');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Format the date
            const formattedDate = selectedDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            const meetingData = {
                ...formData,
                date: formattedDate,
                time: selectedTime,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
            };

            // Send to API endpoint
            const response = await fetch('/api/schedule-meeting', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(meetingData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    message: ''
                });
                setSelectedDate(null);
                setSelectedTime('');
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <section className={styles.section} id="schedule">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Schedule a Meeting</h2>
                    <p className={styles.subtitle}>
                        Book your free automation audit. Let's discuss how we can help automate your business.
                    </p>
                </div>

                {/* Step Indicators */}
                <div className={styles.stepIndicators}>
                    <div className={`${styles.stepIndicator} ${styles.active}`}>
                        <div className={styles.stepNumber}>1</div>
                        <div className={styles.stepLabel}>Select Date</div>
                    </div>
                    <div className={styles.stepLine}></div>
                    <div className={`${styles.stepIndicator} ${selectedDate ? styles.active : ''}`}>
                        <div className={styles.stepNumber}>2</div>
                        <div className={styles.stepLabel}>Select Time</div>
                    </div>
                    <div className={styles.stepLine}></div>
                    <div className={`${styles.stepIndicator} ${selectedTime ? styles.active : ''}`}>
                        <div className={styles.stepNumber}>3</div>
                        <div className={styles.stepLabel}>Your Details</div>
                    </div>
                </div>

                <div className={styles.content}>
                    {/* Step 1: Calendar Section - Show only when no date is selected */}
                    {!selectedDate && (
                        <div className={styles.stepContainer}>
                            <div className={styles.calendar}>
                                <div className={styles.calendarHeader}>
                                    <button
                                        onClick={handlePrevMonth}
                                        className={styles.navButton}
                                        aria-label="Previous month"
                                    >
                                        ←
                                    </button>
                                    <h3 className={styles.monthYear}>
                                        {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                                    </h3>
                                    <button
                                        onClick={handleNextMonth}
                                        className={styles.navButton}
                                        aria-label="Next month"
                                    >
                                        →
                                    </button>
                                </div>

                                <div className={styles.dayNames}>
                                    {dayNames.map(day => (
                                        <div key={day} className={styles.dayName}>{day}</div>
                                    ))}
                                </div>

                                <div className={styles.daysGrid}>
                                    {Array.from({ length: startingDayOfWeek }).map((_, index) => (
                                        <div key={`empty-${index}`} className={styles.emptyDay}></div>
                                    ))}
                                    {Array.from({ length: daysInMonth }).map((_, index) => {
                                        const day = index + 1;
                                        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                                        const isDisabled = isDateDisabled(day);

                                        return (
                                            <button
                                                key={day}
                                                onClick={() => handleDateClick(day)}
                                                disabled={isDisabled}
                                                className={`${styles.day} ${isDisabled ? styles.disabled : ''}`}
                                            >
                                                {day}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Time Slots - Show only after date is selected and before time is selected */}
                    {selectedDate && !selectedTime && (
                        <div className={styles.stepContainer}>
                            <div className={styles.timeSlots}>
                                <div className={styles.selectedDateBadge}>
                                    📅 {selectedDate.toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                    <button
                                        onClick={() => {
                                            setSelectedDate(null);
                                            setSelectedTime('');
                                        }}
                                        className={styles.changeButton}
                                    >
                                        Change Date
                                    </button>
                                </div>
                                <h4 className={styles.timeSlotsTitle}>Select a Time</h4>
                                <div className={styles.timeSlotsGrid}>
                                    {timeSlots.map((slot) => (
                                        <button
                                            key={slot.time}
                                            onClick={() => setSelectedTime(slot.time)}
                                            disabled={!slot.available}
                                            className={`${styles.timeSlot} ${selectedTime === slot.time ? styles.selectedTime : ''} ${!slot.available ? styles.unavailable : ''}`}
                                        >
                                            {slot.time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Form Section - Only show after time is selected */}
                    {selectedTime && (
                        <div className={styles.formSection}>
                            <div className={styles.selectedInfo}>
                                <p className={styles.selectedInfoText}>
                                    📅 {selectedDate?.toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })} at {selectedTime}
                                </p>
                                <button
                                    onClick={() => {
                                        setSelectedTime('');
                                    }}
                                    className={styles.changeButton}
                                >
                                    Change Date/Time
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name" className={styles.label}>
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className={styles.input}
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={styles.label}>
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className={styles.input}
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="phone" className={styles.label}>
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className={styles.input}
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="company" className={styles.label}>
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className={styles.input}
                                        placeholder="Your Company"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message" className={styles.label}>
                                        What would you like to discuss?
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className={styles.textarea}
                                        placeholder="Tell us about your automation needs..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={styles.submitButton}
                                >
                                    {isSubmitting ? 'Scheduling...' : 'Schedule Meeting'}
                                </button>

                                {submitStatus === 'success' && (
                                    <div className={styles.successMessage}>
                                        ✓ Meeting scheduled successfully! We'll send you a confirmation email.
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className={styles.errorMessage}>
                                        ✗ Something went wrong. Please try again or contact us directly.
                                    </div>
                                )}
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
