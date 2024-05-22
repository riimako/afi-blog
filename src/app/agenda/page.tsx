export default function Page() {
  return (
    <div className="googleCalendar">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FMadrid&bgcolor=%230a3398&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&hl=ca&showTitle=0&src=Y29tdW5pY2FjaW8uZ2VyYmVydEBnbWFpbC5jb20&color=%23039BE5"
        style={{ border: "solid 1px #777" }}
        width="800"
        height="600"
        frameBorder="0"
        title="Agenda"
        scrolling="no"
      ></iframe>
    </div>
  );
}
