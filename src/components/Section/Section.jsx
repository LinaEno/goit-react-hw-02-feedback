import PropTypes from 'prop-types';
import Notification from 'components/Notification';
import Statistics from 'components/Statistics';
import ButtonStyled from 'components/FeedbackOptions/Button.styled';

function Section({ title, text, good, neutral, bad, total, positive, onGoodFeedback, onNeutralFeedback, onBadFeedback }) {
    return (
    <section>
        <div>
            <h2>{title}</h2>
            <ButtonStyled type = 'button' onClick={onGoodFeedback}>Good</ButtonStyled>
            <ButtonStyled type = 'button' onClick={onNeutralFeedback}>Neutral</ButtonStyled>
            <ButtonStyled type = 'button' onClick={onBadFeedback}>Bad</ButtonStyled>
        </div>
        <div>
                <h2>{text}</h2>
                {total === 0
                    ? <Notification message='There is no feedback' />
                    : <Statistics good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positive={positive} />}
            
            
        </div>
    </section>
    );
}

Section.propTypes = {
    title: PropTypes.string,
};

export default Section;