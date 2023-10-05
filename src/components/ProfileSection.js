import React, { useState } from 'react';

function Profile({ profile }) {
    return (
        <div>
            <img src={profile.image} alt={profile.name} />
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
            <p>Rating: {profile.rating}/5</p>
        </div>
    );
}

function ProfileSection({ title, type }) {
    const [displayCount, setDisplayCount] = useState(3); // Initial count is 3

    const freelancers = [
      { image: "https://picsum.photos/200", name: "John Doe", description: "A professional freelancer", rating: 5 },
      { image: "https://picsum.photos/201", name: "Jane Smith", description: "Expert in web development", rating: 4 },
      { image: "https://picsum.photos/202", name: "Alan Walker", description: "Graphic Designer", rating: 4.5 },
      { image: "https://picsum.photos/203", name: "Elise Owen", description: "Digital Marketer", rating: 3.5 },
      { image: "https://picsum.photos/204", name: "Chris Red", description: "Mobile App Developer", rating: 5 },
      { image: "https://picsum.photos/205", name: "Lily White", description: "UI/UX Designer", rating: 4.8 }
    ];

    const customers = [
      { image: "https://picsum.photos/206", name: "Robert Frost", description: "Entrepreneur", rating: 5 },
      { image: "https://picsum.photos/207", name: "Elaine Marie", description: "Startup Founder", rating: 4 },
      { image: "https://picsum.photos/208", name: "Derek L", description: "Tech Lead", rating: 4.7 },
      { image: "https://picsum.photos/209", name: "Nina Turner", description: "Product Manager", rating: 3.9 },
      { image: "https://picsum.photos/210", name: "Gary Stu", description: "Investor", rating: 5 },
      { image: "https://picsum.photos/211", name: "Lora Ray", description: "Tech Consultant", rating: 4.5 }
    ];

    const profiles = type === "freelancers" ? freelancers : customers;

    const handleSeeMore = () => {
        // Setting it to the length of profiles array, which essentially means all profiles
        setDisplayCount(profiles.length);
    };

    return (
        <section>
            <h2>{title}</h2>
            <div className="grid">
                {profiles.slice(0, displayCount).map((profile, idx) => (
                    <Profile key={idx} profile={profile} />
                ))}
            </div>
            {displayCount < profiles.length && <button onClick={handleSeeMore}>See more</button>}
        </section>
    );
}

export default ProfileSection;