var alt = require('../alt.js');

class CounterActions {
  increment(){
    this.dispatch("inc");
  }

  decrement(){
    this.dispatch("dec");
  }
}

module.exports = alt.createActions(CounterActions);
