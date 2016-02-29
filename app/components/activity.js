import React from 'react'
import ReactDom from 'react-dom'
import $ from 'jquery'

import putCursorAtEnd from '../vendor/putCursorAtEnd'

import {
  TextField,
  Divider,
} from 'material-ui'

import {
  removeActivity,
  addActivity
}  from './flux/actions'

export default class Activity extends React.Component {
  constructor() {
    super()
    this.state = {
      edited: false
    }
  }

  componentDidMount() {
    if(this.props.isLast) {
      this.focus()
    }
  }

  componentDidUpdate() {
    if (this.props.isFocused){
      this.focus()
    }
  }

  focus() {
    let $input = $(this.domInput())
    $input.focus().putCursorAtEnd()
  }

  render() {
    return (
      <div key={this.props.activity.id} style={{position:'relative'}}>
        <TextField
          ref='input'
          defaultValue={this.props.activity.text}
          hintText="Activity"
          style={style.input}
          underlineShow={false}
          multiLine={true}
          fullWidth={true}
          onKeyDown={this._handleTyping.bind(this)}/>
        <Divider/>
      </div>
    )
  }

  _handleTyping(e) {
    switch(e.keyCode) {
      case 13:
        if(this.props.isLast) {
          e.preventDefault()
          addActivity(this.props.type)
        }
        break
      case 8:
        if(this.isEmpty()) {
          let activity = this.props.activity
          activity.type = this.props.type
          removeActivity(activity)
          e.preventDefault()
        }
    }
  }

  domInput() {
    let $domNodde = $(ReactDom.findDOMNode(this.refs.input))
    return $domNodde.find('textarea')[1]
  }

  isEmpty() {
    return $(this.domInput()).val() === ""
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
