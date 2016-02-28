import React from 'react'
import moment from 'moment'
import DatePicker from './datePicker'
import Board from './board'
import NoteBox from './noteBox'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = { date: moment() }
  }

  render() {
    return (
      <div>
        <h1>Morning doc!</h1>
        <DatePicker />
        <div className="boards">
          <Board type="yesterday"/>
          <Board type="today"/>
          <Board type="blockers"/>
        </div>
        <NoteBox/>
      </div>
    )
  }
}
