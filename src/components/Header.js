import React from 'react';
import PropType from 'prop-types';

const Header = ({ title }) => {
  return (
    <nav className="nav-wrapper light-blue darken-3">
      <a href="#!" className="brand-logo center">{title}</a>
    </nav>
  );
}

Header.propTypes = {
  title: PropType.string.isRequired
}

export default Header;