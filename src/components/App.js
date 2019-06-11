import React, { Component } from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		console.log('App', this.props);
		return (
			<div className="ui container grid">
				<div className="ui row">
					<div className="column eight wide">
						<SongList />
					</div>
					<div className="column eight wide">
						<SongDetail />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
