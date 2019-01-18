import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title : 'I want it that way', duration :  '4:20' },
        { title : 'New Divide', duration : '3:55' },
        { title : 'I know it', duration : '5:22' },
        { title : 'Summer 69', duration : '3:41' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs : songReducer,
    selectedSong : selectedSongReducer
});