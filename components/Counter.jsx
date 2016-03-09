import React from 'react';
import AltContainer from 'alt/AltContainer';

import CounterActions from './actions/CounterActions';

const CounterDisplay = React.createClass({
	render(){
		return (
				<div className="counter-container">
					{counter.state.number}
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
			<button onClick="{this.increment}">Increment</button>
			<button onClick="{this.decrement}">Decrement</button>
		)
	}
});

const Counter = React.createClass({
	render(){
		return (
			<AltContainer store={CounterStore}>
			</Alt
		)
	}
})