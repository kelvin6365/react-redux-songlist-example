export const selectSong = (song) => {
	//return an action
	return {
		type: 'SONG_SELECTED',
		playload: song
	};
};
