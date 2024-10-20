import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns'

import { Navbar } from "../"
import { localizer, getMessagesES } from '../../helpers'

const events = [{
  title: 'Cumpleaños del Jefe',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours(new Date(), 2),
  user: {
    _id: '123',
    name: 'Fernando'
  }
}]

export const CalendarPage = () => {

  const eventStyleGetter = (event, start, end, isSelected) => {
    console.log({event, start, end, isSelected});

    const style = {
      backgroundColor: '#347CF7',
      borderRaius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }

  return (
    <>
      <Navbar />

      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100vh' }}
        messages={ getMessagesES() }
        eventPropGetter={ eventStyleGetter }
      />
    </>
  )
}
