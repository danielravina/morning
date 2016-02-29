const Dispatcher = require('flux').Dispatcher;
const enums = require('./enums');
const dispatcher = new Dispatcher();
const _registeredActions = {}

dispatcher.handleAction = (action) => {
  dispatcher.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
}

// custom methods:
dispatcher.startListening = () => {
  dispatcher.register((payload) => {
    let action = payload.action;
    let registerred = _registeredActions[action.actionType]
    if (registerred instanceof Function) {
      registerred(action.data)
    }
  })
}

dispatcher.listenTo = (actionToRegister, callback) => {
  _registeredActions[actionToRegister] = callback;
}

dispatcher.startListening()

module.exports = dispatcher;
