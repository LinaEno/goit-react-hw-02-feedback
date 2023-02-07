import ButtonStyled from 'components/FeedbackOptions/Button.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <ButtonStyled
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </ButtonStyled>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({ option: PropTypes.string.isRequired }).isRequired
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
