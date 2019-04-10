import React from "react";
import styled from "styled-components";
import device from "./Queries";

const VideoWrapper = styled.section`
  grid-area: 2 / 1 / 7 / 5;

  @media ${device.laptop} {
    grid-area: 2 / 1 / 2 / 5;
  }
`;

const MainVideo = styled.iframe`
  width: 100%;
  height: 100%;
`;

const TitleWrapper = styled.div`
  padding: 15px;

  @media ${device.laptop} {
    grid-area: 3 / 1 / 3 / 5;
  }
`;

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Ładowanie</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <VideoWrapper>
      <MainVideo title="video player" src={videoSrc} />
      <TitleWrapper>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </TitleWrapper>
    </VideoWrapper>
  );
};

export default VideoDetail;
