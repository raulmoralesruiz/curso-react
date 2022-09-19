import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle, name }) => {
  // console.log(props);

  return (
    <>
      <h1>{title}</h1>
      {/* <code>{ JSON.stringify(variable) }</code> */}
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  // title: "Default title",
  subtitle: "Default subtitle",
  name: "Default name",
};