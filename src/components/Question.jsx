import styled from "styled-components";
import PropTypes from "prop-types";

const Question = ({ answerText, isCorrect, handlerAnswerOption }) => (
  <AnswerOptionButton
    onClick={() => handlerAnswerOption(isCorrect === true ? true : false)}
  >
    {answerText}
  </AnswerOptionButton>
);

export default Question;

Question.propTypes = {
  answerText: PropTypes.string.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  handlerAnswerOption: PropTypes.func.isRequired,
};

const AnswerOptionButton = styled.button`
  width: 100%;
  font-size: 16px;
  color: #ffffff;
  background-color: #252d4a;
  border-radius: 15px;
  display: flex;
  padding: 5px;
  justify-content: flex-start;
  align-items: center;
  border: 5px solid #234668;
  cursor: pointer;
`;
