import { useState } from "react"
import { DayPilotCalendar } from "@daypilot/daypilot-lite-react"

export const Calendar = () => {

  const config = {
    viewType: 'Week',
    durationBarVisible: false,
  }

  return (
    <div className="enrollment-calendar">
      <DayPilotCalendar {...config} />
    </div>
  )
}
