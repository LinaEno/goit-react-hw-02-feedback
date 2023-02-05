import ButtonStyled from 'components/FeedbackOptions/Button.styled';

const FeedbackOptions = ({ options, onLeaveFeedback  }) => {
    return (
        <div>
            {options.map((option) => {
                return <ButtonStyled key={option} type='button' onClick={onLeaveFeedback}>{option}</ButtonStyled>
            })}
            
        </div>
    )
}

export default FeedbackOptions;