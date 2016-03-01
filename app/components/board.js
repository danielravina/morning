import React from 'react'
import ReactDom from 'react-dom'
import Activity from './activity'
import dispatcher from './flux/dispatcher'

import {
  addActivity
}  from './flux/actions'

import {
  Card,
  CardHeader,
  Paper,
  FloatingActionButton
} from 'material-ui'

import ContentAdd from 'material-ui/lib/svg-icons/content/add';

export default class Board extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div style={style.board}>
        <Card>
          <CardHeader style={{background: style.boardColors[this.props.type]}}>
            <h3 style={style.header}>{this.props.type}</h3>
          </CardHeader>
          <Paper zDepth={2}>
            {
              this.props.activities.map((activity, i) =>
                <Activity activity={activity}
                  key={i}
                  type={this.props.type}
                  isFocused={this.shouldFocus(activity.id)}
                  isLast={i === this.props.activities.length - 1}/>)
            }
          </Paper>
        </Card>
        <FloatingActionButton onClick={this._handleAddClick.bind(this)} style={style.addButton} backgroundColor={style.boardColors[this.props.type]} mini={true}>
          <ContentAdd/>
        </FloatingActionButton>
      </div>
    )
  }

  _handleAddClick() {
    addActivity(this.props.type)
  }

  shouldFocus(id) {
    return (this.props.focusOn &&
      this.props.focusOn.type == this.props.type &&
        this.props.focusOn.id == id)
  }
}

const style = {
  board: {
    marginBottom: '35px',
    position: 'relative'
  },
  header: {
    color: 'white',
    margin: 0,
    textTransform: 'uppercase'
  },

  boardColors: {
    yesterday: '#FCCF26',
    today: '#5696D4',
    blockers: '#7BCAA5'
  },

  addButton: {
    position: 'absolute',
    right: '6px',
    bottom: '-19px'
  }
};
