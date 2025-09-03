import React from 'react';
import Project1 from '../../assets/images/2.jpg';
import Project2 from '../../assets/images/3.jpg';
const IntroSection: React.FC = () => {
    return (
        <section className="intro">
            <div className="container-xl">
                <div className="heading_1 wow animate__animated animate__fadeInUp">
                    Unveiling <br />
                    Architectural <br />
                    Mastery
                </div>
                <p className="wow animate__animated animate__fadeInUp">
                    Our architects breathe life into dreams, creating
                    environments where innovation meets tradition,
                    and spaces transcend mere structures
                </p>
                <div className="projects">
                    <div className="project wow animate__animated animate__fadeInUp">
                        <img src={Project1} alt="Project 1" />
                    </div>
                    <div className="project wow animate__animated animate__fadeInUp">
                        <img src={Project2} alt="Project 2" />
                    </div>
                </div>

                <a href="#portfolio" className="btn_2">View Projects</a>
            </div>
        </section>
    );
};

export default IntroSection;