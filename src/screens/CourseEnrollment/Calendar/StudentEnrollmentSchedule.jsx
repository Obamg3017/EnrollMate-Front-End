import { useState, useEffect, useRef } from "react"
import { DayPilotCalendar } from "@daypilot/daypilot-lite-react"

export const StudentEnrollmentSchedule = () => {
  const calendarRef = useRef(null)
  const [events, setEvents] = useState([
    {
      id: "1",
      text: "Meeting",
      start: "2024-01-01T09:00:00",
      end: "2024-01-01T11:00:00",
      resource: "monday",
    },
    {
      id: "2",
      text: "Conference Call",
      start: "2024-01-02T13:00:00",
      end: "2024-01-02T14:00:00",
      resource: "tuesday",
    },
    {
      id: "3",
      text: "Project Work",
      start: "2024-01-03T10:00:00",
      end: "2024-01-03T12:00:00",
      resource: "wednesday",
    },
  ])

  useEffect(() => {
    const calendar = calendarRef.current.control

    calendar.update({
      viewType: "WorkWeek",
      days: 5,
      startDate: "2024-01-01",
      // change to day of the week instead of date
      timeHeaders: [{ groupBy: "Day", format: "dddd" }, { groupBy: "Hour" }],
      cellDuration: 30,
      startHour: 9,
      businessBeginsHour: 9,
      businessEndsHour: 17,
      heightSpec: "BusinessHoursNoScroll",
      scrollToHour: 9,
      timeRangeSelecting: "Disabled",
      eventMoveHandling: "Disabled",
      eventResizeHandling: "Disabled",
      // setting below allows user to delete event by clicking x
      // if included, need to make sure also update enrollments
      // eventDeleteHandling: "Update",
      events: events,
    })

  }, [events])

  return <DayPilotCalendar ref={calendarRef} />
}
