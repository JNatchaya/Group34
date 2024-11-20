import React from "react";
import "../layout/M-layout.css"; 

function Calendar() {
  const highlightedDates = [5, 15, 26]; 

  return (
    <div className="calendar">
      <h2>Calendar</h2>
      <div className="calendar-header">
        <span>July / 2024</span>
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
          {Array.from({ length: 5 }).map((_, week) => (
            <tr key={week}>
              {Array.from({ length: 7 }).map((_, day) => {
                const date = week * 7 + day + 1;
                return (
                  <td
                    key={day}
                    className={highlightedDates.includes(date) ? "highlighted" : ""}
                  >
                    {date <= 31 ? date : ""}
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
