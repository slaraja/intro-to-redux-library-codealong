import React, { Component } from 'react';
import './App.css';

class App extends Component {
	handleOnClick = () => {
		this.props.store.dispatch({
			//dispatch method comes from the store (Redux library)
		  type: 'INCREASE_COUNT',
		});
	  }

//store contains two methods, dispatch and getState

	render() {
		return (
			<div className="App">
				<button onClick={this.handleOnClick}>Click</button>
				<p>{this.props.store.getState().clicks}</p>
			</div>
		);
	}
}

export default App;
