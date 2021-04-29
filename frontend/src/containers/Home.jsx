import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="container-xxl">
            <Carousel fade activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://sudospaces.com/leanhhr-com/2020/08/khoa-hoc-dao-tao-ky-nang-mem.jpg"
                        alt="First slide"
                        width={900} height={500}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://loptiengnhat.edu.vn/wp-content/uploads/2017/04/khoa-hoc-tieng-nhat-cap-toc-n5.jpg"
                        alt="Second slide"
                        width={900} height={500}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://langmaster.edu.vn/public/templates/public/landing-hoc-tieng-anh-giao-tiep-online-truc-tuyen-cho-nguoi-moi-bat-dau/images/banner_main.jpg"
                        alt="Third slide"
                        width={900} height={500}

                    />
                </Carousel.Item>
            </Carousel>
            <h2 className="mx-auto" style={{ textAlign: "center", padding: "50px" }}>Top educational websites</h2>
            <div className="card-group">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;