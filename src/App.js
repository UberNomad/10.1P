import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './firebase';
import Home from './pages/Home';
import JobPage from './pages/JobPage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Navbar from './components/Navbar'; // Adjust the import path as needed
import './App.css';

function App() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar userEmail={userEmail} setUserEmail={setUserEmail} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job" element={<JobPage />} />
          <Route path="/signin" element={<SignIn setUserEmail={setUserEmail} />} />
          <Route path="/signup" element={<SignUp setUserEmail={setUserEmail} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
