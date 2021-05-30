import React, { useState } from 'react';
import { Card, CardDeck, Carousel } from 'react-bootstrap';
import { GrSystem, GrGroup, GrSettingsOption } from "react-icons/gr";

const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div id="home-content">
            <div className="container-fluid p-0">
                <Carousel fade activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://static.wixstatic.com/media/9ceaff_fc8a013696b340a0905dabdfcf47ef2f~mv2.jpg/v1/fill/w_980,h_551,al_c,q_90/9ceaff_fc8a013696b340a0905dabdfcf47ef2f~mv2.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://seekerspot.in/wp-content/uploads/2020/12/getty_933383882_2000133420009280345_410292.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.bankrate.com/2019/03/08154502/Whats-the-right-age-to-start-teaching-your-kids-about-money.jpg?auto=webp&optimize=high&crop=16:9"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* Introduction */}
            <div className="content-section container">
                <h2 className="section-heading text-center text-uppercase">Introduction</h2>
                <p className="content-text text-justify">Với sự phát triển của công nghệ thông tin, rất nhiều trang web giáo dục đã
                được phát triển nhằm hỗ trợ việc học trực tuyến trên internet. Tuy nhiên do đó số
                lượng trang web giáo dục hiện có trên internet là một con số rất lớn khiến cho việc lựa
                chọn của người học trở nên khó khăn.
                Bài báo này sử dụng cách tiếp cận group-decision nhằm ứng dụng cho việc
                đánh giá trang web. Một vài công nghệ tính toán mềm đã được sử dụng trong bài toán
                    như fuzzy theory, grey system và group decision.</p>
                <div className="row intro-items text-center mt-5">
                    <div className="col-sm mt-3">
                        <GrSettingsOption size={40} />
                        <h3>Fuzzy Theory</h3>
                        <p className="text-justify">Fusce venenatis tempus leo eu fringilla. Curabitur luctus porta felis. Nam eleifend mauris metus, sit amet viverra dolor ullamcorper ut. Etiam accumsan ut magna et imperdiet.</p>
                    </div>
                    <div className="col-sm mt-3">
                        <GrSystem size={40} />
                        <h3>Grey System</h3>
                        <p className="text-justify">Fusce venenatis tempus leo eu fringilla. Curabitur luctus porta felis. Nam eleifend mauris metus, sit amet viverra dolor ullamcorper ut. Etiam accumsan ut magna et imperdiet.</p>
                    </div>
                    <div className="col-sm mt-3">
                        <GrGroup size={40} />
                        <h3>Group Decision</h3>
                        <p className="text-justify">Fusce venenatis tempus leo eu fringilla. Curabitur luctus porta felis. Nam eleifend mauris metus, sit amet viverra dolor ullamcorper ut. Etiam accumsan ut magna et imperdiet.</p>
                    </div>
                </div>
            </div>

            {/* Algorithm */}
            <div className="algorithm-section">
                <div className="content-section container">
                    <h2 className="section-heading text-center text-uppercase">Algorithm</h2>
                    <p className="content-text text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic explicabo voluptas nisi iste reiciendis, tempore commodi necessitatibus, laborum laudantium.</p>
                    <div className="text-start">
                        <div className="algorithm-steps mt-5">
                            <div className="row">
                                <div className="col-sm mt-3">
                                    <h3>Step 1</h3>
                                    <div>
                                        <p>Fusce venenatis tempus leo eu fringilla. Curabitur luctus porta felis. Nam eleifend mauris metus, sit amet viverra dolor ullamcorper ut. Etiam accumsan ut magna et imperdiet.</p>
                                    </div>
                                </div>
                                <div className="col-sm mt-3">
                                    <h3>Step 2</h3>
                                    <p>Fusce venenatis tempus leo eu fringilla. Curabitur luctus porta felis. Nam eleifend mauris metus, sit amet viverra dolor ullamcorper ut. Etiam accumsan ut magna et imperdiet.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm mt-3">
                                    <h3>Step 3</h3>
                                    <p >Fusce venenatis tempus leo eu fringilla. Curabitur luctus porta felis. Nam eleifend mauris metus, sit amet viverra dolor ullamcorper ut. Etiam accumsan ut magna et imperdiet.</p>
                                </div>
                                <div className="col-sm mt-3">
                                    <h3>Step 4</h3>
                                    <p>Fusce venenatis tempus leo eu fringilla. Curabitur luctus porta felis. Nam eleifend mauris metus, sit amet viverra dolor ullamcorper ut. Etiam accumsan ut magna et imperdiet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top educations websites */}
            <div className="content-section">
                <div className="container">
                    <h2 className="section-heading text-center text-uppercase">Top educational websites</h2>
                    <div className="mt-5">
                        <CardDeck>
                            <Card border="dark">
                                <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "40px", fontFamily: "Garamond" }}>#1</span>
                                <a href="https://coursera.org" target="_blank" rel="noreferrer">
                                    <Card.Img variant="top" src="https://s3.amazonaws.com/coursera/media/Grid_Coursera_Partners_updated.png" style={{ height: "15rem" }} />
                                </a>
                                <Card.Body>
                                    <Card.Title><a href="https://coursera.org" target="_blank" rel="noreferrer">Coursera.org</a></Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card border="dark">
                                <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-primary" style={{ fontSize: "30px", fontFamily: "Garamond" }}>#2</span>
                                <a href="https://udemy.com" target="_blank" rel="noreferrer">
                                    <Card.Img variant="top" src="https://www.classcentral.com/report/wp-content/uploads/2021/01/udemy-top-courses.png" style={{ height: "15rem" }} />
                                </a>
                                <Card.Body>
                                    <Card.Title><a href="https://udemy.com" target="_blank" rel="noreferrer">Udemy.com</a></Card.Title>
                                    <Card.Text>
                                        Phasellus auctor scelerisque purus id tincidunt.
                            </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card border="dark">
                                <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-success" style={{ fontSize: "30px", fontFamily: "Garamond" }}>#3</span>
                                <a href="https://edx.org" target="_blank" rel="noreferrer">
                                    <Card.Img variant="top" src="https://edx.edu.vn/wp-content/uploads/2020/02/Muc-tieu-giao-duc-cua-edX-1.jpg" style={{ height: "15rem" }} />
                                </a>
                                <Card.Body>
                                    <Card.Title><a href="https://edx.org" target="_blank" rel="noreferrer">Edx.org</a></Card.Title>
                                    <Card.Text>
                                        Sed vitae orci ante. Fusce sagittis arcu ut nisi ullamcorper, non venenatis justo facilisis.
                            </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;