import dispatcher from './dispatcher'
import enums      from './enums'

module.exports = {
  addActivity: (data) => {
    dispatcher.handleAction({
      actionType: enums.ADD_ACTIVITY,
      data: data
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
