/* eslint-disable import/prefer-default-export */
import PropTypes from "prop-types";

export const Contact = PropTypes.shape({
  name: PropTypes.string,
  driverType: PropTypes.string,
  driverRank: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  profile_image: PropTypes.string,
});
