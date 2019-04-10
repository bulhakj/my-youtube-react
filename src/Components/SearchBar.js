import React from "react";
import styled from "styled-components";
import device from "./Queries";

const SearchBarContainer = styled.div`
  grid-area: 1 / 1 / 2 / 7;

  @media ${device.laptop} {
    grid-area: 1 / 1 / 1 / 5;
  }
`;

const Form = styled.form`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const InputWrapper = styled.div``;

const Input = styled.input`
  border-radius: 5px;
  height: 25px;
  width: 300px;
`;

class SearchBar extends React.Component {
  state = {
    term: ""
  };

  handleChangeText = event => {
    this.setState({
      term: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };

  render() {
    return (
      <SearchBarContainer>
        <Form onSubmit={this.handleFormSubmit}>
          <InputWrapper className="field">
            <Input
              type="text"
              placeholder="Wyszukaj film, ENTER, aby wyszukać"
              value={this.state.term}
              onChange={this.handleChangeText}
            />
          </InputWrapper>
        </Form>
      </SearchBarContainer>
    );
  }
}

export default SearchBar;
