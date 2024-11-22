import React from "react";
import "../layout/M-layout.css";
import "../Calendar/calendar.css";

function Calendar({ onDateClick }) {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const highlightedDates = [5, 10, 21, 26];
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="calendar">
      <h2>Calendar</h2>
      <div className="calendar-header">
        <h3>{`${monthNames[month]} / ${year}`}</h3>
      </div>
      <table className="calendar-table">
        <thead>
          <tr>
            <th>Sun</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>Tu</th>
            <th>F</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: Math.ceil((daysInMonth + firstDayOfMonth) / 7) }).map((_, week) => (
            <tr key={week}>
              {Array.from({ length: 7 }).map((_, day) => {
                const date = week * 7 + day - firstDayOfMonth + 1;
                const isHighlighted = highlightedDates.includes(date);
                return (
                  <td
                    key={day}
                    className={isHighlighted ? "highlighted" : ""}
                    onClick={() => isHighlighted && onDateClick()} 
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
