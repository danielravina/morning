import React from 'react'
import moment from 'moment'
import Board from './board'
import NoteBox from './noteBox'

const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const day = require('../data/day')

import {
  FlatButton,
  Divider,
  TextField,
  Paper,
  DatePicker
} from 'material-ui'

require('app/styles/vendor/bootstrap.min')
require('app/styles/layout')

const momentFormat = 'dddd, MMMM D YYYY'

export default class App extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {
    this.state = { activites: day.activites }
  }

  _onAddActivity() {

  }

  render() {
    return (
      <div>
        <header style={style.header}>
          <h1 style={style.pageTitle}>Morning, doc!</h1>
          <DatePicker
            container='inline'
            defaultDate={new Date()}
            formatDate={this.formatDate}
            mode="landscape"
            textFieldStyle={style.dateTitle}
            />
        </header>
        <div className="boards row">
          <div className="col-sm-4">
            <Board type="yesterday" activites={this.state.activites.yesterday}/>
          </div>
          <div className="col-sm-4">
            <Board type="today" activites={this.state.activites.today}/>
          </div>
          <div className="col-sm-4">
            <Board type="blockers" activites={this.state.activites.blockers}/>
          </div>
        </div>
      </div>
    )
  }

  formatDate(date) {
    return moment(date).format(momentFormat)
  }
}

const style = {
  pageTitle: {
    fontSize: 20,
    marginBottom:0,
    marginTop: 15,
    lineHeight: 0.6,
  },

  dateTitle: {
    margin:0,
    fontSize: 38,
    fontWeight: 100,
    width: '100%'
  },

  header: {
    marginBottom: 20,
  }
}
