import React from 'react';
import Brand1 from '../../assets/images/brands-1.png';
import Brand2 from '../../assets/images/brands-2.png';
import Brand3 from '../../assets/images/brands-3.png';
import Brand4 from '../../assets/images/brands-4.png';
import Brand5 from '../../assets/images/brands-5.png';
import Brand6 from '../../assets/images/brands-6.png';
import Brand7 from '../../assets/images/brands-7.png';
import Brand8 from '../../assets/images/brands-8.png';

interface Brand {
    id: string;
    image: string;
    name: string;
}

const BrandsSection: React.FC = () => {
    const brands: Brand[] = [
        { id: '1', image: Brand1, name: 'Brand 1' },
        { id: '2', image: Brand2, name: 'Brand 2' },
        { id: '3', image: Brand3, name: 'Brand 3' },
        { id: '4', image: Brand4, name: 'Brand 4' },
        { id: '5', image: Brand5, name: 'Brand 5' },
        { id: '6', image: Brand6, name: 'Brand 6' },
        { id: '7', image: Brand7, name: 'Brand 7' },
        { id: '8', image: Brand8, name: 'Brand 8' }
    ];

    return (
        <section className="brands">
            <div className="container-xl">
                <div className="section_heading">
                    <div>
                        <p className=" animate__animated animate__fadeInUp">
                            Welcome to a world where spaces transform into
                            works of art. Our architects bring a touch of
                            brilliance to every project
                        </p>
                        <a href="#more" className="btn_2">View More</a>
                    </div>
                    <div>
                        <div className="heading_2  animate__animated animate__fadeInUp">
                            Our Architect with <br />
                            Known Company
                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-0">
                {brands.map((brand, index) => (
                    <div key={brand.id} className="col-md-3 col-sm-6 brand-holder">
                        <div
                            className="brand-image  animate__animated animate__fadeInUp"
                            style={{ animationDelay: `${(index % 4)}s` }}
                        >
                            <img src={brand.image} alt={brand.name} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BrandsSection;