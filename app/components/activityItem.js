import React from 'react'
import $ from 'jquery'

require('app/styles/activityItem.scss')
export default class ActivityItem extends React.Component {
  render() {
    return (
      <div className="activity-item">
        <textarea ref="activity" name="" id="" cols="30" rows="1"></textarea>
      </div>
    )
  }
  componentDidMount() {
    this.textAreaAutoResize()
  }

  textAreaAutoResize() {
    const textarea = this.refs.activity
    let offset = textarea.offsetHeight - textarea.clientHeight;
    let resizeTextarea = (el) => {
      $(el).css('height', 'auto').css('height', el.scrollHeight + offset);
    }
    $(textarea).on('keyup input', () => { resizeTextarea(textarea); })
  }
}
