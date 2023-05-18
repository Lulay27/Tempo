import React, { useEffect, useState } from 'react';

function Profile() {
  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch('/api/posts');

      const json = await response.json();

      console.log(json[0].score);
    };

    fetchProfile();
    // console.log('test');
  }, []);

  return (
    <div>
      <h1> Testing posts </h1>
      <div>test</div>
    </div>
  );
}

export default Profile;
