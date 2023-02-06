import PropTypes from 'prop-types';
import SectionStyle from './Section.styled';
import TitleSectionStyle from './TitleSection.styled';
function Section({ title, children }) {
  return (
    <SectionStyle>
      <TitleSectionStyle>{title}</TitleSectionStyle>
      {children}
    </SectionStyle>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
