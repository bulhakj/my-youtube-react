import React from "react";
import styled from "styled-components";
import device from "./Queries";

const VideoWrapper = styled.section`
  grid-area: 2 / 1 / 7 / 5;

  @media ${device.laptop} {
    grid-area: 2 / 1 / 2 / 5;
    position: relative;
  }
`;

const MainVideo = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const VideoWrap = styled.div`
  position: relative;
  border: 0;
  padding-bottom: 56.25%;
  margin: 15px;
  height: 0;
  overflow: hidden;
`;

const TitleWrapper = styled.div`
  width: 100%;
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
      <VideoWrap>
        <MainVideo title="video player" src={videoSrc} />
      </VideoWrap>
      <TitleWrapper>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </TitleWrapper>
    </VideoWrapper>
  );
};

export default VideoDetail;
