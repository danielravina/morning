import React from 'react'
import ReactDom from 'react-dom'

import {
  TextField,
  Divider,
} from 'material-ui'

export default class Activity extends React.Component {
  render() {
    return (
      <div key={this.props.activity.id} style={{position:'relative'}}>
        <TextField
          ref={"activity-" + this.props.activity.id}
          defaultValue={this.props.activity.text}
          hintText="Activity"
          style={style.input}
          underlineShow={false}
          multiLine={true}
          fullWidth={true}/>
        <Divider/>
        <div style={style.cover.wrapper} onClick={this.onClickA}>
          <div style={style.cover.textHolder}>
            {this.processText()}
          </div>
          <Divider/>
        </div>
      </div>
    )
  }

  processText() {
    return this.props.activity.text
  }

  onClickA(e) {
    console.log(e.currentTarget)
    e.currentTarget.style.display = 'none'
  }
}

const style = {
  input: {
    paddingLeft: 20,
    paddingRight: 20
  },

  cover: {
    wrapper: {
      position: 'absolute',
      top: 0, right:0, left: 0, bottom: 0,
      background: 'white'
    },

    textHolder: {
      lineHeight: '24px',
      fontSize: '16px',
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 12,
      paddingBottom: 12
    }
  }
}
