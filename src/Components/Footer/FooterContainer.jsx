import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Footer from './Footer';

let mapStateToProps = (state) => ({
  linksContact: state.linksList.linksContact,
  linksNav: state.linksList.linksNav,
  linksSocialNetworks: state.linksList.linksSocialNetworks,
});

const FooterContainer = compose(
  connect(mapStateToProps, {})
)(Footer);

export default FooterContainer;