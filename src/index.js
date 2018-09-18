import _ from 'lodash';
import React, { Component } from 'react';  // used to create and manage component
import ReactDOM from 'react-dom';   // used to interact with actual DOM
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBsQT0vel3hsYRvq-46-r0whtZJlvekcpU';

// Create a new component. (This should produce some HTML)
// A componet is a class
// In class component, we can access props at anywhere with this.props
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    // (configuration, callabck)
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    // debounce: 1st parameter will be run every 2nd parameter ms
    // 1st parameter: sth you want to run
    // 2nd parameter: 1st parameter will be run every 2nd parmeter ms repeatly
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    // The following looks like HTML, but it is JSX (javascript)
    // Web browser don't understand, meed Webpack and babel to transfrom it
    return (
      <div>
        {/* you can add class componet within an function component */}
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
      );
  }
}

// Take this component's generater HTML, and put it on the page (int the DOM)
// <App /> is a instance of App class
// Render a <App /> component and insert it into a existing DOM, the '.container' is a class name from index.html
ReactDOM.render(<App />, document.querySelector('.container'));
