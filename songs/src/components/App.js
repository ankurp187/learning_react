import React from 'react';
// import { selectSong } form '../actions/index';
import SongList from './SongList';
// oR import { selectSong } form '../actions';
//We used curly btraces as we didn't use export default so it is a named export
import SongDetail from './SongDetail';


const App = () => {
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
};

export default App;
