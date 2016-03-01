import React from 'react'
import moment from 'moment'
import Board from './board'
import NoteBox from './noteBox'
import dispatcher from './flux/dispatcher'
import injectTapEventPlugin from 'react-tap-event-plugin'
import rn from 'random-number'

import {
  ADD_ACTIVITY,
  REMOVE_ACTIVITY,
  FOCUS_ON_ACTIVITY,
  JUMP_TO_NEXT_ACTIVITY
} from './flux/enums'

import {
  focusOnActivity
} from './flux/actions'

import {
  FlatButton,
  Divider,
  TextField,
  Paper,
  DatePicker
} from 'material-ui'

require('app/styles/vendor/bootstrap.min')
require('app/styles/layout')

const day = require('../data/day')
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
            <Board type="yesterday" activities={this.state.activities.yesterday} focusOn={this.state.focusedActivity}/>
          </div>
          <div className="col-sm-4">
            <Board type="today" activities={this.state.activities.today} focusOn={this.state.focusedActivity}/>
          </div>
          <div className="col-sm-4">
            <Board type="blockers" activities={this.state.activities.blockers} focusOn={this.state.focusedActivity}/>
          </div>
        </div>
      </div>
    )
  }

  focusOnActivity(activity) {
    this.setState({focusedActivity: activity})
  }

  jumpToActivity(currentActivity) {

  }

  addActivity(type) {
    let activities = this.state.activities

    // TODO: Make a model
    let newActivity = {
      id: rn({ min:  20, max:  1000, integer: true}),
      text: "",
      order: 2,
      type: type
    }

    activities[type].push(newActivity)

    // Magic
    this.setState({ activities:  activities })

    setTimeout(()=>{
      focusOnActivity(newActivity)
    },1)
  }

  removeActivity(activity) {
    let activities = this.state.activities
    let board = activities[activity.type]
    const activityIndex = board.indexOf(activity)

    const activityToFocus = board[activityIndex -1]

    // Remove activity from the board
    activities[activity.type].splice(board.indexOf(activity), 1)

    // Magic
    this.setState({ activities:  activities })

    setTimeout(()=>{
      focusOnActivity(activityToFocus)
    },1)
  }

  formatDate(date) {
    return moment(date).format(momentFormat)
  }

  startfluxListener() {
    dispatcher.listenTo(ADD_ACTIVITY, this.addActivity.bind(this));
    dispatcher.listenTo(REMOVE_ACTIVITY, this.removeActivity.bind(this));
    dispatcher.listenTo(FOCUS_ON_ACTIVITY, this.focusOnActivity.bind(this));
    dispatcher.listenTo(JUMP_TO_NEXT_ACTIVITY, this.jumpToActivity.bind(this));
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
