import React, { useState } from "react";
import { format } from "date-fns";

const availableSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM"
];

export default function Bookings() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookedSlot, setBookedSlot] = useState(null);

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setBookedSlot({ date: selectedDate, time: selectedTime });
    }
  };

  return (
    <div>
      <h1>BOOKING</h1>
    </div>
  );
}
