import dispatcher from './dispatcher'
import enums      from './enums'

module.exports = {
  insertActivityAfter: (activity) => {
    dispatcher.handleAction({
      actionType: enums.INSERT_ACTIVITY_AFTER,
      data: activity
    })
  },

  removeActivity: (data) => {
    dispatcher.handleAction({
      actionType: enums.REMOVE_ACTIVITY,
      data: data
    })
  },

  focusOnActivity: (activity) => {
    dispatcher.handleAction({
      actionType: enums.FOCUS_ON_ACTIVITY,
      data: activity
    })
  }
}
