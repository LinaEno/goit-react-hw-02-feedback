import PropTypes from 'prop-types';
import { Button } from 'components/FeedbackOptions/Button';
import Notification from 'components/Notification';
import Statistics from 'components/Statistics';

function Section({ title, text, good, neutral, bad, total, positive, onGoodFeedback, onNeutralFeedback, onBadFeedback }) {
    return (
    <section>
        <div>
            <h2>{title}</h2>
            <Button onClick={onGoodFeedback}>Good</Button>
            <Button onClick={onNeutralFeedback}>Neutral</Button>
            <Button onClick={onBadFeedback}>Bad</Button>
        </div>
        <div>
            <h2>{text}</h2>
            <Notification message='There is no feedback' />
            <Statistics good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positive={positive} />
        </div>
    </section>
    );
}

Section.propTypes = {
    title: PropTypes.string,
};

export default Section;