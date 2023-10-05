import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../firebase';

function Navbar({ userEmail, setUserEmail }) {
  const handleLogout = async () => {
    const auth = getAuth(app);
    try {
      await signOut(auth);
      setUserEmail(null);
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="navbar">
      <h2><Link to="/">DevLink Marketplace</Link></h2>
      <nav>
        <Link to="#">Find DEV</Link>
        <Link to="#">Find Jobs</Link>
        {userEmail ? (
          <>
            <a href="#" onClick={handleLogout}>Logout</a>
            <b>{userEmail}</b>
          </>
        ) : (
          <>
            <Link to="/signin">Login</Link>
            <Link to="/signup">Create Account</Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
