import { combineReducers } from 'redux';

const songReducer = () => {
	return [
		{ title: 'No Scrubs1', duration: '4:06' },
		{ title: 'No Scrubs2', duration: '3:06' },
		{ title: 'No Scrubs3', duration: '5:06' },
		{ title: 'No Scrubs4', duration: '1:06' }
	];
};

const selectedSongReduces = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.playload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songReducer,
	selectedSong: selectedSongReduces
});
