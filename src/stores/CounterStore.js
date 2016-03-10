var alt = require('../alt.js');
var CounterActions = require('../actions/CounterActions.js');

class CounterStore {
  constructor() {
    this.count = 0;

    this.bindListeners({
      handleIncrement: CounterActions.INCREMENT,
      handleDecrement: CounterActions.DECREMENT
    });

  }

  handleIncrement(){
    this.count = this.count + 1;
  }

  handleDecrement(){
    this.count = this.count - 1;
  }
  
}

module.exports = alt.createStore(CounterStore, 'CounterStore');
