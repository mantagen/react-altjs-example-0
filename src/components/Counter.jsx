var React = require('react');
var AltContainer = require('alt/AltContainer');

var CounterActions = require('../actions/CounterActions.js');
var CounterStore = require('../stores/CounterStore.js');

const CounterDisplay = React.createClass({
	render(){
		return (
				<div className="counter-container">
					{this.props.count}
				</div>
		)
	}
});

const CounterButtons = React.createClass({
	pressTimer(){

	},
	increment(){
		CounterActions.increment();
	},
	decrement(){
		CounterActions.decrement();
	},
	longPress(e){
		// var actionType = e.target.dataset.action;
		// setTimeout(()=>this.startRepeat(actionType),400);
	},
	startRepeat(action){
		// var that = this;
		// this.pressTimer = window.setInterval(()=>that[action](),100);
	},
	stopRepeat(){
		// clearInterval(this.pressTimer);
	},
	render(){
		return (
			<div>
				<button onClick={this.increment} onMouseDown={this.longPress} onMouseUp={this.stopRepeat} data-action="increment">Increment</button>
				<button onClick={this.decrement} onMouseDown={this.longPress} onMouseUp={this.stopRepeat} data-action="decrement">Decrement</button>
			</div>
		)
	}
});

const Counter = React.createClass({
	render(){
		return (
			<AltContainer store={CounterStore}>
				<CounterDisplay />
				<CounterButtons />
			</AltContainer>
		)
	}
})

module.exports = Counter;
