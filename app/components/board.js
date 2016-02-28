import React from 'react'

import {
  Card,
  CardHeader,
  TextField,
  Divider,
  Paper,
  FloatingActionButton
} from 'material-ui'

import ContentAdd from 'material-ui/lib/svg-icons/content/add';

const style = {
  board: {
    marginBottom: '35px',
    position: 'relative'
  },

  input: {
    paddingLeft: 20,
    paddingRight: 20
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
    right: '15px',
    bottom: '-26px'
  }

};

export default class Board extends React.Component {
  render() {
    return (
      <div style={style.board}>
        <Card>
          <CardHeader style={{background: style.boardColors[this.props.type]}}>
            <h3 style={style.header}>{this.props.type}</h3>
          </CardHeader>
          <Paper zDepth={2}>
            {this.renderActivities()}
          </Paper>
        </Card>
        <FloatingActionButton style={style.addButton} backgroundColor={style.boardColors[this.props.type]} mini={false}>
          <ContentAdd/>
        </FloatingActionButton>
      </div>
    )
  }

  renderActivities(key) {
    let activites = []
    for(var i = 0; i < 2; i++) {
      activites.push (
        <div key={i}>
          <TextField hintText="Goal 1" style={style.input} underlineShow={false}  multiLine={true} fullWidth={true}/>
          <Divider />
        </div>
      )
    }
    return activites
  }
}
