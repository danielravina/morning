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
  addActivity,
  jumpToNextActivity
}  from './flux/actions'

const keys = {
  ENTER: 13,
  BACKSPACE: 8
}
export default class Activity extends React.Component {

  componentDidUpdate() {
    if (this.props.isFocused){
      console.log("so?????", this.props.activity)
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
      case keys.ENTER:
        if(this.props.isLast) {
          addActivity(this.props.type)
        } else {
          jumpToNextActivity(this.props.activity)
        }
        e.preventDefault()
        break
      case keys.BACKSPACE:
        if(this.isEmpty()) {
          removeActivity(this.props.activity)
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
