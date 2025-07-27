import React, { useState } from "react";
import styles from "./BookingPageStyle.module.css";

const BookingForm = () => {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [selectedOccasion, setSelectedOccasion] = useState("");

  const [availableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  const [occasions] = useState(["Birthday", "Anniversary"]);

  return (
    <div>
      <form className={styles.formContainer}>
        <h2 className={styles.formTitle}>Reserve a Table</h2>
        <div className={styles.formGroup}>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={resDate}
            onChange={(e) => setResDate(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={resTime}
            onChange={(e) => setResTime(e.target.value)}
          >
            <option value="">---Select Time---</option>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            id="guests"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={selectedOccasion}
            onChange={(e) => setSelectedOccasion(e.target.value)}
          >
            <option value="">----Select Occasion----</option>
            {occasions.map((occas, index) => (
              <option key={index} value={occas}>
                {occas}
              </option>
            ))}
          </select>
        </div>

        <button className={styles.submitButton} type="submit">
          Make Your Reservation
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
