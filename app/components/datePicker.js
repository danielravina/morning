import React from 'react'
import moment from 'moment'
import DayPicker from "react-day-picker";

require('app/styles/dayPicker')

export default class DatePicker extends React.Component {
  constructor() {
    super()
    this.state = { selectedDay: null }
  }

  handleDayClick(e, day, modifiers) {
    this.setState({ selectedDay: day });
  }

  dateTitle() {
    const { selectedDay } = this.state;
    const day = selectedDay ? selectedDay : moment()
    return moment(day).format('dddd, MMMM Do YYYY')
  }

  render() {
    return (
      <div>
        <h2>{ this.dateTitle() }</h2>
        <DayPicker onDayClick={ this.handleDayClick.bind(this) } />
      </div>
    )
  }
}
