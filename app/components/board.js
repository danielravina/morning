import React from 'react'

export default class Board extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <h3>{this.props.type}</h3>
        <ul>
          <li><input type="text"/></li>
          <li><input type="text"/></li>
          <li><input type="text"/></li>
          <li><input type="text"/></li>
          <li><input type="text"/></li>
        </ul>
      </div>
    )
  }
}
