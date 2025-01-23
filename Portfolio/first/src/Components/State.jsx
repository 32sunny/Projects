import React from "react";
import git1 from  '../assets/git1.png'
import git2 from  '../assets/git2.png'
import '../State.css'

const Stat = () => {
  return (
    <div className="stat-page">
      {/* Stats Section */}
     

      {/* Calendar Section */}
      <div className="calendar-section">
        <h2>My GitHub Calendar</h2>
        <div className="calendar">
          <img src={git2} alt="GitHub Calendar" className="calendar-image" />
        </div>
        <div className="calendar-info">
          <div>
            <strong>Contributions in the last year</strong>
            <p>91 total</p>
          </div>
          <div>
            <strong>Longest streak</strong>
            <p>61 days</p>
          </div>
          <div>
            <strong>Current streak</strong>
            <p>12 days</p>
          </div>
        </div>  
      </div>
      <div className="stats-section">
        <div className="stat-card">
          <img src={git1} alt="GitHub Stats" className="stat-image" />
        </div>
      </div>
    </div>
  );
};

export default Stat;