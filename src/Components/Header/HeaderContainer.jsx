import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Header from './Header';

let mapStateToProps = (state) => ({
  linksHeader: state.linksList.linksHeader,
});

const HeaderContainer = compose(
  connect(mapStateToProps, {})
)(Header);

export default HeaderContainer;