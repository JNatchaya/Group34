import React, { useState } from "react";
import mAssignData from "../../../DATA/m-assignData"; 
import "../layout/M-layout.css";
import "../Calendar/calendar.css";

function Calendar({ onDateClick }) {
  const [selectedDate, setSelectedDate] = useState(null); 

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  
  const highlightedDates = mAssignData
    .flatMap((place) =>
      place.data.map((task) => {
        
        const dueDate = new Date(task.dueDate);
        return {
          ...task,
          dueDate: dueDate.toISOString().split("T")[0], 
        };
      })
    )
    .filter((task) => {
      const date = new Date(task.dueDate);
      return date.getFullYear() === year && date.getMonth() === month;
    })
    .map((task) => new Date(task.dueDate).getDate()); 

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handleDateClick = (date) => {
    const formattedDate = new Date(date).toISOString().split("T")[0];
    setSelectedDate(formattedDate);
    if (onDateClick) {
      onDateClick(formattedDate); 
    }
  };

  return (
    <div className="calendar">
      <h2>Calendar</h2>
      <div className="calendar-header">
        <h3>{`${monthNames[month]} ${year}`}</h3>
        {selectedDate && <p>Selected Date: {selectedDate}</p>}
      </div>
      <table className="calendar-table">
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: Math.ceil((daysInMonth + firstDayOfMonth) / 7) }).map((_, week) => (
            <tr key={week}>
              {Array.from({ length: 7 }).map((_, day) => {
                const date = week * 7 + day - firstDayOfMonth + 1; 
                const isHighlighted = highlightedDates.includes(date); 
                const isSelected = selectedDate === `${year}-${String(month + 1).padStart(2, "0")}-${String(date).padStart(2, "0")}`; 

                return (
                  <td
                    key={day}
                    className={`calendar-cell ${
                      isHighlighted ? "highlighted" : ""
                    } ${isSelected ? "selected" : ""}`}
                    onClick={() => {
                      if (date > 0 && date <= daysInMonth) {
                        handleDateClick(new Date(year, month, date));
                      }
                    }}
                  >
                    {date > 0 && date <= daysInMonth ? date : ""}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
