import React, { useEffect, useRef, useState } from 'react';
import Architecture1 from '../../assets/images/5.jpg';
import Architecture2 from '../../assets/images/6.jpg';
import Architecture3 from '../../assets/images/7.jpg';

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

const RatingSection: React.FC = () => {
  const [odometerStarted, setOdometerStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats: Stat[] = [
    { value: '900', label: 'Happy Sellers', suffix: 'k+' },
    { value: '2.8', label: 'Shipments Daily', suffix: 'k+' },
    { value: '4.8', label: 'App Rating', suffix: '' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !odometerStarted) {
            // Trigger odometer animation
            const odometers = entry.target.querySelectorAll('.odometer');
            odometers.forEach((odometer) => {
              const element = odometer as HTMLElement;
              const value = element.getAttribute('data-value');
              if (value) {
                element.innerHTML = value;
              }
            });
            setOdometerStarted(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [odometerStarted]);

  return (
    <section className="rating">
      <div className="container-xl">
        <div className="section_heading">
          <div>
            <div className="heading_2 wow animate__animated animate__fadeInUp">
              Best Architect with <br />
              knowledge
            </div>
          </div>
          <div>
            <p className="wow animate__animated animate__fadeInUp">
              Welcome to a world where spaces transform into
              works of art. Our architects bring a touch of
              brilliance to every project
            </p>
            <a href="#more" className="btn_2">View More</a>
          </div>
        </div>

        <div className="stats" ref={statsRef}>
          {stats.map((stat, index) => (
            <div key={index} className="stat">
              <div className="heading_3">
                <span className="odometer" data-value={stat.value}>0</span>
                {stat.suffix}
              </div>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="row g-5">
          <div className="col-md-4 image-card wow animate__animated animate__fadeInLeft">
            <img src={Architecture1} alt="Architecture 1" />
          </div>
          <div className="col-md-4 image-card wow animate__animated animate__fadeInUp">
            <img src={Architecture2} alt="Architecture 2" />
          </div>
          <div className="col-md-4 image-card wow animate__animated animate__fadeInRight">
            <img src={Architecture3} alt="Architecture 3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatingSection;