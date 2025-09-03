import React from 'react';
import Portfolio1 from '../../assets/images/8.jpg'
import Portfolio2 from '../../assets/images/9.jpg'
import Portfolio3 from '../../assets/images/10.jpg'
import Portfolio4 from '../../assets/images/11.jpg'
import Portfolio5 from '../../assets/images/12.jpg'
interface Showcase {
    id: string;
    image: string;
    title: string;
    alignment: 'left' | 'right';
}

const PortfolioSection: React.FC = () => {
    const showcases: Showcase[] = [
        { id: '1', image: Portfolio1, title: 'High Quality Visuals', alignment: 'left' },
        { id: '2', image: Portfolio2, title: 'Unique Selling', alignment: 'right' },
        { id: '3', image: Portfolio3, title: 'Home Ware', alignment: 'left' },
        { id: '4', image: Portfolio4, title: 'Selling In 2023', alignment: 'right' },
        { id: '5', image: Portfolio5, title: 'Medal Rate Estate', alignment: 'left' }
    ];

    return (
        <section className="portfolio" id="portfolio">
            <div className="container-xl">
                <div className="section_heading">
                    <div className="heading_2 wow animate__animated animate__fadeInUp">
                        Explore designs that redefine <br />
                        conventional spaces.
                    </div>
                    <p className="wow animate__animated animate__fadeInUp">
                        Embark on a journey of collaboration, where your dreams become architectural masterpieces.
                    </p>
                </div>

                <div className="showcases">
                    {showcases.map((showcase) => (
                        <div key={showcase.id} className="showcase wow animate__animated animate__fadeInUp">
                            <div className="row">
                                {showcase.alignment === 'left' ? (
                                    <>
                                        <div className="col-md-2">
                                            <img src={showcase.image} alt={showcase.title} />
                                        </div>
                                        <div className="col-md-10">
                                            <div className="heading_3">{showcase.title}</div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="col-md-10">
                                            <div className="heading_3">{showcase.title}</div>
                                        </div>
                                        <div className="col-md-2">
                                            <img src={showcase.image} alt={showcase.title} />
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;