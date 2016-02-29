import React from 'react'
import ReactDom from 'react-dom'
import { linkTo } from './utils'

import {
  TextField,
  Divider,
} from 'material-ui'

export default class Activity extends React.Component {
  constructor() {
    super()
    this.state = {
      edited: false
    }
  }
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
      </div>
    )
  }
}
// Move this to server-side
//   translateJIRA() {
//     let jiraMatches = this.props.activity.text.match(/(https:\/\/aclgrc\.atlassian\.net\/browse\/([A-Z]{2}-\d+))/)
//     // console.log(jiraMatches)
//     if (!jiraMatches) {
//       return this.props.activity.text
//     }
//     let path   = jiraMatches[1]
//     let ticket = jiraMatches[2]
//     let link = linkTo(ticket, path)
//     let newText = this.props.activity.text.replace(path, link)

//     return newText;
//   }

//   coverClick(e) {
//     this.setState({edited: true})
//   }

// }

const style = {
  input: {
    paddingLeft: 20,
    paddingRight: 20,
    hidden: {
      display: 'none'
    }
  }
}
