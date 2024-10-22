import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";

export const useCalendarStore = () => {

  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector(state => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch( onSetActiveEvent(calendarEvent) )
  }

  const startSavingEvent = async (calendarEvent) => {
    //Todo: llegar al backend

    //Todo: todo bien
    if( calendarEvent._id) {
      // actualizando
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      // creando
      dispatch( onAddNewEvent({ ...calendarEvent, id: new Date().getTime() }) )
    }
  }

  const startDeletingEvent = () => {
    //Todo: Llegar al backend
    dispatch(onDeleteEvent());
  }

  return {
    //* Propiedades
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    //* Métodos
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent
  }
}
