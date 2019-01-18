//Action Creator

export const selectSong = song => {
    
    // Return data
    return {
        type : 'SONG_SELECTED',
        payload : song
    };
};