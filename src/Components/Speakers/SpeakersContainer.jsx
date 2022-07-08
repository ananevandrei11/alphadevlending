import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getSpeakersThunk } from '../../Redux/speakersReducer';
import Preloder from '../Common/Preloader/Preloader';
import Speakers from './Speakers';

let mapStateToProps = (state) => ({
  speakers: state.speakersList.speakers,
  isFetching: state.speakersList.isFetching
});

const SpeakersSubContainer = (props) => {
  console.log(props.isFetching);
	let [speakers, setSpeakers] = useState([]); 
	
	useEffect(() => {
    props.getSpeakersThunk();
  }, []);

	useEffect(() => {
    setSpeakers(props.speakers);
  }, [props.speakers]);

  if (props.isFetching) {
    return <Preloder />;
  }

  return <Speakers speakers={speakers} />;
};

const SpeakersContainer = compose(
  connect(mapStateToProps, {
    getSpeakersThunk,
  })
)(SpeakersSubContainer);

export default SpeakersContainer;
