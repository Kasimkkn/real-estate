import React from "react";
import Marquee from "react-fast-marquee";
import Star from "../../assets/images/star.png";

const MarqueeSection: React.FC = () => {
    const services = [
        "SEO",
        "ADVERTISING",
        "DIGITAL MARKETING",
        "SOCIAL MEDIA",
        "CONTENT MARKETING",
        "EMAIL MARKETING",
        "WEB ANALYTICS",
    ];

    return (
        <Marquee gradient={false} speed={50}>
            <div className="marque_holder flex gap-4">
                {services.map((service, index) => (
                    <React.Fragment key={index}>
                        <img src={Star} alt="Star" />
                        <div className="heading_3">{service}</div>
                    </React.Fragment>
                ))}
            </div>
        </Marquee>
    );
};

export default MarqueeSection;
