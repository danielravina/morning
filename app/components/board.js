import React from 'react'
import ActivityItem from './activityItem'

require('app/styles/board')

export default class Board extends React.Component {
  render() {
    return (
      <div className="board" id={this.props.type}>
        <div className="head">
          <h3>{this.props.type}</h3>
        </div>
        <div className="main-list">
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
        </div>
      </div>
    )
  }
}
