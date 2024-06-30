import PropTypes from 'prop-types';

export function FirstApp({ title, subtitle }) {
    return (
        <>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired,
};

FirstApp.defaultProps = {
    title: 'Uwu',
    subtitle: 123,
};
