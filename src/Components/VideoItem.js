import React from "react";
import styled from "styled-components";

const ListItem = styled.div`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #ccc;
  }
`;

const ImgTitle = styled.h4`
  margin: 0 0 0 10px;
`;

const VideoItem = ({ video, handleVideoSelect }) => {
  console.log(video);
  return (
    <ListItem onClick={() => handleVideoSelect(video)}>
      <img
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
      />
      <ImgTitle>{video.snippet.title}</ImgTitle>
    </ListItem>
  );
};

export default VideoItem;
