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
	increment(){
		CounterActions.increment();
	},
	decrement(){
		CounterActions.decrement();
	},
	render(){
		return (
			<div>
				<button onClick="{this.increment}">Increment</button>
				<button onClick="{this.decrement}">Decrement</button>
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
