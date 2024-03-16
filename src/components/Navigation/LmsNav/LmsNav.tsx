import React from 'react';
import './LmsNav.css';
import useCurrentUser from '../../CurrentUser/CurrentUser';

export const LmsNav: React.FC = () => {

    const { isLoading, currentUser } = useCurrentUser();
  
    if (isLoading) {
      return <p>Loading...</p>;
    }
  
    if (!currentUser || currentUser.email === null) {
      return <p>User not logged in.</p>;
    }
  
    const { email, displayName } = currentUser;
    const emailUsername = email.split('@')[0];
    const firstLetter = displayName ? displayName.charAt(0).toUpperCase() : '';
  
    return (
      <nav className="left-navbar">
        <div className="account-button">
          <div className="profile-picture">{firstLetter}</div>
          <p>
            <span>{emailUsername}</span>
          </p>
        </div>
        <ul>
          <li>
            <div><a href="/SignificantEdge">Home</a></div>
          </li>
          <li>
            <div><a href="/MyAccount">Profile</a></div>
          </li>
          <li>
            <div><a href="/">Log out</a></div>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default LmsNav;
  