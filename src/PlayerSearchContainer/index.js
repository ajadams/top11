// /src/PlayerSearchContainer/index.js

import { connect } from 'react-redux'
import React, { Component } from 'react'

// components
import PlayerCard from './../Team/playerCard'

// actions 
import { 
	openPlayerSearch,
	updatePlayerResults,
} from './../actions'

class PlayerSearchContainer extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const { dispatch, _app } = this.props;
		const { playerToReplace, searchValue, allPlayers } = _app;

		return (
			<div id="_playerSearchContainer">

				<div className="inner-container">

					<div className="title">{`Who should replace ${playerToReplace.name}?`}</div>

					<div className="replacer-container">
						<div className="replacer">
							<PlayerCard {...playerToReplace} />
						</div>

						<div className="arrow">&#10562;</div>

						<div className="replacer">
							<PlayerCard {...playerToReplace} />
						</div>
					</div>

					<div className="input-wrapper">
						<input 
							type="text"
							className="search-input"
							placeholder="Enter name of player"
							value={ searchValue || '' }
							onBlur={ () => console.log('blurred') }
							onFocus={ () => console.log('focused') }
							onChange={ e => dispatch( updatePlayerResults({searchValue: e.target.value}) ) } />
					</div>

					<div className="results-container">
						{ allPlayers.map(player => <div key={`${player.id}${player.team_id}`} className="player-result">{ player.name }</div>) }
					</div>

				</div>
				
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
  return {
    _app: state._app,
  };
} 

export default connect(mapStateToProps)(PlayerSearchContainer);