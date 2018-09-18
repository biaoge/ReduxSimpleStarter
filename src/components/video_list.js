import React from 'react';

import VideoListItem from './video_list_item';

// functionn component, props is a parameter
const VideoList = (props) => {
  const { videos, onVideoSelect } = props;
  // for array iterator, you'd better have a key prop, this would improve the performance when need to update particular item with this array;
  //  otherwise, react would throw away the old array and re-create a new ones
  const videoItems = videos.map((video) => {
    return (
      <VideoListItem
        key={video.etag}
        video={video}
        onVideoSelect={onVideoSelect}
        />
    );
  });

  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;