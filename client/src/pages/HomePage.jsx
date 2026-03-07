import React from 'react';
import GuestHome from './GuestHome';
import UserHome from './UserHome';

const HomePage = ({ user }) => {
  return (
    <div>
      {user ? (
        <UserHome user={user} />
      ) : (
        <GuestHome />
      )}
    </div>
  );
};

export default HomePage;