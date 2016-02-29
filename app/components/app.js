import React from 'react'
import moment from 'moment'
import Board from './board'
import NoteBox from './noteBox'
import dispatcher from './flux/dispatcher'
import injectTapEventPlugin from 'react-tap-event-plugin'

import {
  ADD_ACTIVITY,
  REMOVE_ACTIVITY
} from './flux/enums'

import {
  focusOnActivity
} from './flux/actions'

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
    injectTapEventPlugin();
    this.state = { activities: day.activities }
  }

  componentDidMount() {
    this.startfluxListener()
  }

  addActivity(type) {
    let activities = this.state.activities

    // TODO: Make a model
    activities[type].push({
      id: 1,
      text: "",
      order: 2
    })

    // Magic
    this.setState({ activities:  activities })
  }

  removeActivity(activity) {
    let activities = this.state.activities
    let board = activities[activity.type]
    const activityToRemove = board.find( (_activity) => _activity.id == activity.id )
    const activityToRemoveIndex = board.indexOf(activityToRemove)
    const activityToFocus = board[activityToRemoveIndex -1]

    activities[activity.type].splice(board.indexOf(activityToRemove), 1)

    // Magic
    this.setState({ activities:  activities })

    // HACK: http://stackoverflow.com/a/29423815/2364328
    setTimeout(() => {
      focusOnActivity(activityToFocus)
    }, 1);

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
            underlineShow={false}
            textFieldStyle={style.dateTitle}
            />
        </header>
        <div className="row">
          <div className="col-sm-4">
            <Board type="yesterday" activities={this.state.activities.yesterday}/>
          </div>

        </div>
      </div>
    )
  }

  formatDate(date) {
    return moment(date).format(momentFormat)
  }

  startfluxListener() {
    dispatcher.listenTo(ADD_ACTIVITY, this.addActivity.bind(this));
    dispatcher.listenTo(REMOVE_ACTIVITY, this.removeActivity.bind(this));
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
