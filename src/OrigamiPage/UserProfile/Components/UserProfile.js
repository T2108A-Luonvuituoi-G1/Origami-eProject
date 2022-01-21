import React from 'react';
import '../Assets/Css/UserProfile.css'
import UserProfileContent from './UserProfileContent';
import UserProfileHeader from './UserProfileHeader';
import UserProfileSlider from './UserProfileSlider';
import UserProfileStatus from './UserProfileStatus';

function UserProfile() {
  return (
    <>
      {/* HEADER */}
      <UserProfileHeader />
      <div className='UserProfile-content-page'>
        {/* CONTENT */}
        <UserProfileContent />

        {/* STATUS */}
        <UserProfileStatus />

        {/* SLIDER */}
        <UserProfileSlider />
      </div>
    </>
  );
}

export default UserProfile;
