import React, { Component } from 'react';
import {ButtonStyled} from './Feedback.styled.jsx';
import PropTypes from 'prop-types';

class Feedback extends Component {

  render() {
    return (
      <div>
        <div>
          <ButtonStyled type="button" onClick={this.props.onLeaveFeedback}>
            Good
          </ButtonStyled>
          <ButtonStyled type="button" onClick={this.props.onLeaveFeedback}>
            Neutral
          </ButtonStyled>
          <ButtonStyled type="button" onClick={this.props.onLeaveFeedback}>
            Bad
          </ButtonStyled>
        </div>
      </div>
    );
  }
}
export default Feedback;

Feedback.propTypes = {
  option: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  onLeaveFeedback: PropTypes.func,
}