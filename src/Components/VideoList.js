import React from "react";
import VideoItem from "./VideoItem";
import styled from "styled-components";
import device from "./Queries";

const ListOfVideos = styled.section`
  grid-area: 2 / 5 / 16 / 7;

  @media ${device.laptop} {
    grid-area: 4 / 1 / 4 / 5;
  }
`;

const VideoList = ({ videos, handleVideoSelect }) => {
  const renderedList = videos.map(video => {
    console.log(video.id.videoId);
    return (
      <VideoItem
        key={video.etag}
        handleVideoSelect={handleVideoSelect}
        video={video}
      />
    );
  });
  return <ListOfVideos>{renderedList}</ListOfVideos>;
};

export default VideoList;
