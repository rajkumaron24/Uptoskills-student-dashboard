import React, { useEffect, useState } from 'react';

function CalendarWidget() {
  const [calendarData, setCalendarData] = useState({ month: '', year: '', days: [] });

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const monthIndex = today.getMonth();
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const month = monthNames[monthIndex];

    const firstDay = new Date(year, monthIndex, 1).getDay();
    const totalDays = new Date(year, monthIndex + 1, 0).getDate();

    const daysArray = [];
    for (let i = 0; i < firstDay; i++) {
      daysArray.push(null);
    }
    for (let d = 1; d <= totalDays; d++) {
      daysArray.push(d);
    }

    setCalendarData({ month, year, days: daysArray });
  }, []);

  return (
    <div className="calendar-widget">
      <div className="calendar-header">
        <h4>{`${calendarData.month} ${calendarData.year}`}</h4>
      </div>
      <div className="calendar-grid">
        <div className="calendar-days">
          <span>SUN</span><span>MON</span><span>TUE</span>
          <span>WED</span><span>THU</span><span>FRI</span><span>SAT</span>
        </div>
        <div className="calendar-dates">
          {calendarData.days.map((day, index) => {
            const today = new Date();
            const isToday =
              day === today.getDate() &&
              calendarData.month === today.toLocaleString('default', { month: 'long' }) &&
              calendarData.year === today.getFullYear();
            return <span key={index} className={isToday ? 'today' : ''}>{day || ''}</span>;
          })}
        </div>
      </div>
    </div>
  );
}

export default CalendarWidget;
