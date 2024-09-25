import { useState, useEffect, useRef } from "react"
import { DayPilotCalendar } from "@daypilot/daypilot-lite-react"

const dayMapper = {
  MWF: ['2024-01-01', '2024-01-03', '2024-01-05'],
  TTH: ['2024-01-02', '2024-01-04']
}

const createNewDate = (dateTime, newDate) => {
  const oldTime = dateTime.split('T')[1]
  return `${newDate}T${oldTime}`
}

const createScheduleEvents = (enrollments) => {
  let scheduleEvents = []
  for (let i = 0; i < enrollments.length; i++) {
    const { id, name, days, start, end } = enrollments[i].course
    const dates = dayMapper[days]

    for (let j = 0; j < dates.length; j++) {
      scheduleEvents.push({ id: `${id}-${j + 1}`, text: name, start: createNewDate(start, dates[j]), end: createNewDate(end, dates[j]) })
    }
  }
  return scheduleEvents
}

export const StudentEnrollmentSchedule = ({ enrollments }) => {
  const calendarRef = useRef(null)
  const [events, setEvents] = useState([])

  useEffect(() => {
    const scheduleEvents = createScheduleEvents(enrollments)
    setEvents(scheduleEvents)
  }, [enrollments])

  useEffect(() => {
    const calendar = calendarRef.current.control

    calendar.update({
      viewType: "WorkWeek",
      days: 5,
      startDate: "2024-01-01",
      headerDateFormat: "dddd",
      headerHeight: 30,
      cellHeight: 33,
      cellDuration: 30,
      startHour: 9,
      businessBeginsHour: 9,
      businessEndsHour: 17,
      heightSpec: "BusinessHoursNoScroll",
      scrollToHour: 9,
      timeRangeSelecting: "Disabled",
      eventMoveHandling: "Disabled",
      eventResizeHandling: "Disabled",
      events: events,
    })

  }, [events])

  return <DayPilotCalendar ref={calendarRef} />
}
