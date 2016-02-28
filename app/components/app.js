import React from 'react'
import moment from 'moment'
import Board from './board'
import NoteBox from './noteBox'

import {
  FlatButton,
  Divider,
  TextField,
  Paper,
} from 'material-ui'

require('app/styles/vendor/bootstrap.min')
require('app/styles/layout')

const momentFormat = 'dddd, MMMM D YYYY'

const style = {
  pageTitle: {
    fontSize: 20,
    marginBottom:0,
    marginTop: 15,
    color: '#2C3E50',
    lineHeight: 0.6,
  },

  dateTitle: {
    color: '#2C3E50',
    margin:0,
    fontSize: 38,
    display: 'inline-block',
    fontWeight: 100,
  },

  header: {
    marginBottom: 20,
  },

  changeButton: {
    // position: 'relative',
    // top: '-13px'
  }
}
export default class App extends React.Component {

  constructor() {
    super()
    this.state = { date: moment() }
  }

  render() {
    return (
      <div>
        <header style={style.header}>
          <h1 style={style.pageTitle}>Morning, doc!</h1>
          <h2 style={style.dateTitle}>
            {moment().format(momentFormat)}
            <FlatButton label="Chose date" style={style.changeButton}/>
          </h2>
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
        <div className="boards row">
          <div className="col-sm-4">

          </div>
        </div>
      </div>
    )
  }
}
