import React, { useEffect } from 'react';
import RoundDetails from '../components/RoundDetails';

import { useSelector, useDispatch } from 'react-redux';
import { SET_ROUNDS } from '../slices/roundSlice';

function Profile() {
  // another useEffect to grab user details fetchProfile

  // use effect to grab users rounds
  const rounds = useSelector((state) => state.round.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRounds = async () => {
      const response = await fetch('/api/posts');

      const json = await response.json();
      console.log(json[0].course);
      dispatch(SET_ROUNDS(json));
    };

    fetchRounds();
  }, [dispatch]);

  return (
    <div>
      <h1> testing </h1>

      {rounds.map((round) => {
        return <RoundDetails key={round.id} round={round} />;
      })}
    </div>
  );
}

// displays users name/picture and all their info course rounds etc
export default Profile;
