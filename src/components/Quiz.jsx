import PropTypes from "prop-types";
import styled from "styled-components";
import Question from "./Question";

const Quiz = ({ questions, currentQuestion, handlerAnswerOption }) => {
  return (
    <>
      <QuestionContainer>
        <QuestionCount>
          <span>Question {currentQuestion + 1}</span>/ {questions.length}
        </QuestionCount>

        <QuestionText>{questions[currentQuestion].questionText}</QuestionText>
      </QuestionContainer>

      <AnswerOptionsContainer>
        {questions[currentQuestion].answerOptions.map((item) => (
          <Question
            key={item.id}
            {...item}
            handlerAnswerOption={handlerAnswerOption}
          />
        ))}
      </AnswerOptionsContainer>
    </>
  );
};

export default Quiz;

Quiz.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      questionText: PropTypes.string.isRequired,
      answerOptions: PropTypes.arrayOf(
        PropTypes.shape({
          answerText: PropTypes.string.isRequired,
          isCorrect: PropTypes.bool.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  currentQuestion: PropTypes.number.isRequired,
  handlerAnswerOption: PropTypes.func.isRequired,
};

const QuestionContainer = styled.div`
  width: 100%;
  position: relative;
`;

const QuestionCount = styled.div`
  margin-bottom: 20px;
`;

const QuestionText = styled.div`
  margin-bottom: 12px;
`;

const AnswerOptionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
