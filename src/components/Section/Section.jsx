import PropTypes from 'prop-types';
import { Button } from 'components/FeedbackOptions/Button';
import Notification from 'components/Notification';
import Statistics from 'components/Statistics';

function Section({ title }) {
    return (
    <section>
        <div>
            <h2>{title}</h2>
            <Button>Good</Button>
            <Button>Neutral</Button>
            <Button>Bad</Button>
        </div>
        <div>
            <Notification message='Statistics' />
            <Statistics />
        </div>
    </section>
    );
}

Section.propTypes = {
    title: PropTypes.string,
};

export default Section;