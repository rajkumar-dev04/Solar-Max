import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [units, setUnits] = useState(400);

  const billSaving = units * 6;
  const systemSize = (units / 120).toFixed(1);
  const co2Saved = (units * 0.82).toFixed(0);

  return (
    <div className="app">
      <nav className="navbar">
        <h2>SolarMax</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#calculator">Calculator</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="heroText">
          <p className="tag">Clean Energy For Future</p>
          <h1>Power Your Home With Smart Solar Panels</h1>
          <p>
            Reduce your electricity bill, increase your property value, and move
            towards a cleaner future with premium solar installation services.
          </p>

          <div className="heroBtns">
            <button>Get Free Quote</button>
            <button className="outline">View Projects</button>
          </div>
        </div>

        <div className="heroCard">
          <h3>Average Savings</h3>
          <h2>₹45,000+</h2>
          <p>Yearly electricity savings</p>
        </div>
      </section>

      <section className="stats">
        <div>
          <h2>1200+</h2>
          <p>Installations</p>
        </div>
        <div>
          <h2>15MW+</h2>
          <p>Solar Capacity</p>
        </div>
        <div>
          <h2>25 Years</h2>
          <p>Panel Warranty</p>
        </div>
        <div>
          <h2>98%</h2>
          <p>Happy Clients</p>
        </div>
      </section>

      <section id="services" className="section">
        <p className="tag">Our Services</p>
        <h2>Complete Solar Solutions</h2>

        <div className="cards">
          <ServiceCard
            title="Residential Solar"
            text="Smart rooftop solar systems for homes and apartments."
          />
          <ServiceCard
            title="Commercial Solar"
            text="High-performance solar plants for offices and businesses."
          />
          <ServiceCard
            title="Solar Maintenance"
            text="Panel cleaning, inspection, repair and performance checks."
          />
        </div>
      </section>

      <section id="calculator" className="calculator">
        <div>
          <p className="tag">Solar Calculator</p>
          <h2>Estimate Your Monthly Savings</h2>
          <p>Enter your monthly electricity units.</p>

          <input
            type="range"
            min="100"
            max="1000"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
          />

          <h3>{units} Units / Month</h3>
        </div>

        <div className="calcResult">
          <p>Recommended System</p>
          <h2>{systemSize} KW</h2>

          <p>Monthly Saving</p>
          <h2>₹{billSaving}</h2>

          <p>CO₂ Saved</p>
          <h2>{co2Saved} kg/month</h2>
        </div>
      </section>

      <section id="projects" className="section dark">
        <p className="tag">Recent Projects</p>
        <h2>Our Solar Installations</h2>

        <div className="projectGrid">
          <Project title="Delhi Home Rooftop" power="5 KW" />
          <Project title="Noida Office Plant" power="25 KW" />
          <Project title="Gurgaon Factory Solar" power="80 KW" />
        </div>
      </section>

      <section className="section">
        <p className="tag">Why Choose Us</p>
        <h2>Premium Quality. Fast Installation.</h2>

        <div className="cards">
          <ServiceCard title="Free Site Visit" text="Our experts inspect your roof." />
          <ServiceCard title="Subsidy Support" text="We help with solar subsidy process." />
          <ServiceCard title="Live Monitoring" text="Track energy generation from mobile." />
        </div>
      </section>

      <section className="testimonial">
        <h2>What Our Customers Say</h2>
        <p>
          “SolarMax installed a 5KW system at my home. My electricity bill is
          almost zero now. Great service and professional team.”
        </p>
        <h4>— Amit Sharma, Delhi</h4>
      </section>

      <section id="contact" className="contact">
        <div>
          <p className="tag">Contact Us</p>
          <h2>Ready To Go Solar?</h2>
          <p>Book your free consultation today.</p>
        </div>

        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number" />
          <textarea placeholder="Your Message"></textarea>
          <button type="button">Submit Request</button>
        </form>
      </section>

      <footer>
        <h3>SolarMax</h3>
        <p>© 2026 SolarMax Energy. All rights reserved.</p>
      </footer>
    </div>
  );
}

function ServiceCard({ title, text }) {
  return (
    <div className="card">
      <div className="icon">☀️</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Project({ title, power }) {
  return (
    <div className="project">
      <div className="projectImage"></div>
      <h3>{title}</h3>
      <p>{power} Solar System</p>
    </div>
  );
}