import React from 'react';
import Arrow from '../../assets/images/arrow.png';
import ArrowBlack from '../../assets/images/arrow-black.png';
interface Card {
    id: string;
    number: string;
    icon: string;
    title: string;
    description: string;
    isSpecial?: boolean;
}

const AboutSection: React.FC = () => {
    const cards: Card[] = [
        {
            id: '1',
            number: '01',
            icon: Arrow,
            title: 'Visionary\nDesign',
            description: 'Our commitment to cutting-edge design and sustainable practices ensures that our creations stand the test of time.',
            isSpecial: false
        },
        {
            id: '2',
            number: '02',
            icon: Arrow,
            title: 'Architectural\nDetailing',
            description: 'Experience the perfect blend of innovation and sophistication as we craft spaces that reflect your unique style.',
            isSpecial: false
        },
        {
            id: '3',
            number: '03',
            icon: ArrowBlack,
            title: 'Pleasantly\nRedesign',
            description: '"Transform your living space with a home redesign that adds style, functionality, and a fresh perspective to your environment."',
            isSpecial: true
        }
    ];

    return (
        <section className="about">
            <div className="container-xl">
                <div className="section_heading">
                    <div>
                        <p className=" animate__animated animate__fadeInUp">
                            Our architects blend creativity and functionality to
                            redefine the way you experience your
                            surroundings.
                        </p>
                        <a href="#more" className="btn_2">View More</a>
                    </div>
                    <div>
                        <div className="heading_2  animate__animated animate__fadeInUp">
                            Best Architect with <br />
                            knowledge
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    {cards.map((card, index) => (
                        <div key={card.id} className="col-md-4">
                            <div
                                className={`card ${card.isSpecial ? 'card_bg' : ''}  animate__animated animate__fadeInUp`}
                                style={{ animationDelay: `${index}s` }}
                            >
                                <div className="card_header">
                                    <span>{card.number}</span>
                                    <div className="icon">
                                        <img src={card.icon} alt="Arrow" />
                                    </div>
                                </div>
                                <div className="card_body">
                                    <div className="heading_3">
                                        {card.title.split('\n').map((line, i) => (
                                            <React.Fragment key={i}>
                                                {line}
                                                {i < card.title.split('\n').length - 1 && <br />}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;