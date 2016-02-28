import React from 'react'
import moment from 'moment'
import DatePicker from './datePicker'
import Board from './board'
import NoteBox from './noteBox'

require('app/styles/vendor/bootstrap.min')
require('app/styles/layout')

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
        <div className="boards row">
          <Board type="yesterday" className="col-sm-4"/>
          <Board type="today" className="col-sm-4"/>
          <Board type="blockers" className="col-sm-4"/>
        </div>
        <NoteBox/>
      </div>
    )
  }
}
