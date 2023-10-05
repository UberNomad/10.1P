import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProfileSection from '../components/ProfileSection';
import SignupBar from '../components/SignupBar';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="App">
      <Hero />
      <ProfileSection title="Featured Freelancers" type="freelancers" />
      <ProfileSection title="Featured Customers" type="customers" />
      <SignupBar />
      <Footer />
    </div>
  );
}

export default Home;