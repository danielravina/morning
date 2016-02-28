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
        <header>
          <h1>Morning doc!</h1>
          <DatePicker />
        </header>
        <div className="boards row">
          <div className="col-sm-4">
            <Board type="yesterday"/>
          </div>
          <div className="col-sm-4">
            <Board type="today"/>
          </div>
          <div className="col-sm-4">
            <Board type="blockers"/>
          </div>
        </div>
        <NoteBox/>
      </div>
    )
  }
}
