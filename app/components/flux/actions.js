import dispatcher from './dispatcher'
import enums      from './enums'

module.exports = {
  addActivity: () => {
    dispatcher.handleAction({
      actionType: enums.ADD_ACTIVITY
    })
  },

}
