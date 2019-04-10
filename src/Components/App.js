import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../APIs/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import styled from "styled-components";
import device from "./Queries";

const Container = styled.section`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 100px 800px 100px 1fr;
  }
`;

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.handleTermSubmit("react programming");
  }

  handleTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  handleVideoSelect = video => {
    this.setState({
      selectedVideo: video
    });
  };

  render() {
    return (
      <Container>
        <SearchBar handleFormSubmit={this.handleTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          handleVideoSelect={this.handleVideoSelect}
          videos={this.state.videos}
        />
      </Container>
    );
  }
}

export default App;
