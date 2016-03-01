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
  insertActivityAfter,
}  from './flux/actions'

const keys = {
  ENTER: 13,
  BACKSPACE: 8
}
export default class Activity extends React.Component {
  constructor() {
    super()
    this.state = { isFocused: false }
  }

  componentDidUpdate() {
    if (this.props.forceFocus){
      this.focus()
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Investigate a bug
    console.log(nextState)
    return true;
  }

  componentWillUnmount() {
    let $textarea = $(this.textarea())
    $textarea.off()
  }

  render() {
    return (
      <div className='all-transition'
           style={this.state.isFocused ? style.wrapper.focus : style.wrapper.blur}>
        <TextField
          ref='input'
          defaultValue={this.props.activity.text}
          hintText="Activity"
          style={style.input}
          underlineShow={false}
          multiLine={true}
          fullWidth={true}
          onFocus={this._handleFocus.bind(this)}
          onBlur={this._handleBlur.bind(this)}
          onKeyDown={this._handleTyping.bind(this)}/>
        <Divider/>
      </div>
    )
  }

  _handleFocus() {
    this.setState({isFocused: true})
  }

  _handleBlur() {
    this.setState({isFocused: false})
  }

  _handleTyping(e) {
    switch(e.keyCode) {
      case keys.ENTER:
        if(!this.isEmpty()) {
          insertActivityAfter(this.props.activity)
        }
        e.preventDefault()
        break
      case keys.BACKSPACE:
        if(this.isEmpty() && !this.props.isAlone) {
          removeActivity(this.props.activity)
          e.preventDefault()
        }
    }
  }

  textarea() {
    let $textarea = $(ReactDom.findDOMNode(this.refs.input))
    return $textarea.find('textarea')[1]
  }

  isEmpty() {
    return $(this.textarea()).val() === ""
  }

  focus() {
    let $textarea = $(this.textarea())
    $textarea.focus().putCursorAtEnd()
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
  wrapper: {
    focus: {
      background: 'rgba(0,0,0,0.05)'
    },
    blur: {
      background: 'white'
    }
  },
  input: {
    paddingLeft: 20,
    paddingRight: 20,
    hidden: {
      display: 'none'
    }
  }
}
