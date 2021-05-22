import React, { useState } from 'react';
import { Card, CardDeck, Carousel } from 'react-bootstrap';
import { GrSystem, GrGroup, GrSettingsOption } from "react-icons/gr";
const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <div className="container-fluid p-0">
                <Carousel fade activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://static.wixstatic.com/media/9ceaff_fc8a013696b340a0905dabdfcf47ef2f~mv2.jpg/v1/fill/w_980,h_551,al_c,q_90/9ceaff_fc8a013696b340a0905dabdfcf47ef2f~mv2.jpg"
                            alt="First slide"
                            width={900} height={1000}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://seekerspot.in/wp-content/uploads/2020/12/getty_933383882_2000133420009280345_410292.jpg"
                            alt="Second slide"
                            width={900} height={1000}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://mk0thinkificig8baqk3.kinstacdn.com/wp-content/uploads/2016/06/Create-Online-Courses-10.jpg"
                            alt="Third slide"
                            width={900} height={1000}

                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* Introduction */}
            <div style={{ padding: "100px" }}>
                <div className="container text-center">
                    <h2 className="mx-auto" >Introduction</h2>
                    <p>Với sự phát triển của công nghệ thông tin, rất nhiều trang web giáo dục đã
                    được phát triển nhằm hỗ trợ việc học trực tuyến trên internet. Tuy nhiên do đó số
                    lượng trang web giáo dục hiện có trên internet là một con số rất lớn khiến cho việc lựa
                    chọn của người học trở nên khó khăn.
                    Bài báo này sử dụng cách tiếp cận group-decision nhằm ứng dụng cho việc
                    đánh giá trang web. Một vài công nghệ tính toán mềm đã được sử dụng trong bài toán
                    như fuzzy theory, grey system và group decision.</p>
                    <div className="row" style={{ paddingTop: "50px" }}>
                        <div class="col">
                            <GrSettingsOption size={40} />
                            <h3>Fuzzy Theory</h3>
                            <div>
                                <p >Fusce venenatis tempus leo eu fringilla. Curabitur luctus porta felis. Nam eleifend mauris metus, sit amet viverra dolor ullamcorper ut. Etiam accumsan ut magna et imperdiet.</p>
                            </div>
                        </div>
                        <div className="col">
                            <GrSystem size={40} />
                            <h3>Grey System</h3>
                            <p>Fusce venenatis tempus leo eu fringilla. Curabitur luctus porta felis. Nam eleifend mauris metus, sit amet viverra dolor ullamcorper ut. Etiam accumsan ut magna et imperdiet.</p>
                        </div>
                        <div className="col">
                            <GrGroup size={40} />
                            <h3>Group Decision</h3>
                            <p>Fusce venenatis tempus leo eu fringilla. Curabitur luctus porta felis. Nam eleifend mauris metus, sit amet viverra dolor ullamcorper ut. Etiam accumsan ut magna et imperdiet.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Algorithm */}
            <div style={{ padding: "100px", backgroundColor: "#FFE4C4" }}>
                <div className="container text-center">
                    <h2 className="mx-auto">Algorithm</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic explicabo voluptas nisi iste reiciendis, tempore commodi necessitatibus, laborum laudantium.</p>
                    <div className="text-start">
                        <div className="row" style={{ paddingTop: "50px" }}>
                            <div class="col">
                                <h3>Step 1</h3>
                                <div>
                                    <p >Fusce venenatis tempus leo eu fringilla. Curabitur luctus porta felis. Nam eleifend mauris metus, sit amet viverra dolor ullamcorper ut. Etiam accumsan ut magna et imperdiet.</p>
                                </div>
                            </div>
                            <div className="col">
                                <h3>Step 2</h3>
                                <p>Fusce venenatis tempus leo eu fringilla. Curabitur luctus porta felis. Nam eleifend mauris metus, sit amet viverra dolor ullamcorper ut. Etiam accumsan ut magna et imperdiet.</p>
                            </div>
                        </div>
                        <div className="row" style={{ paddingTop: "50px" }}>
                            <div class="col">
                                <h3>Step 3</h3>
                                <div>
                                    <p >Fusce venenatis tempus leo eu fringilla. Curabitur luctus porta felis. Nam eleifend mauris metus, sit amet viverra dolor ullamcorper ut. Etiam accumsan ut magna et imperdiet.</p>
                                </div>
                            </div>
                            <div className="col">
                                <h3>Step 4</h3>
                                <p>Fusce venenatis tempus leo eu fringilla. Curabitur luctus porta felis. Nam eleifend mauris metus, sit amet viverra dolor ullamcorper ut. Etiam accumsan ut magna et imperdiet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Top educations websites */}
            <div style={{ padding: "100px" }}>
                <div className="container">
                    <h2 className="mx-auto text-center" style={{ paddingBottom: "100px" }}>Top educational websites</h2>
                    <CardDeck>
                        <Card border="dark">
                            <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger" style={{ fontSize: "40px", fontFamily: "Garamond" }}>#1</span>
                            <Card.Img variant="top" src="https://s3.amazonaws.com/coursera/media/Grid_Coursera_Partners_updated.png" style={{ height: "15rem" }} />
                            <Card.Body>
                                <Card.Title><a href="https://coursera.org" target="_blank" rel="noreferrer">Coursera.org</a></Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ultrices urna. In consectetur, purus eget pharetra scelerisque, metus dui dictum est, et dapibus quam quam ac leo.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card border="dark">
                            <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-primary" style={{ fontSize: "30px", fontFamily: "Garamond" }}>#2</span>
                            <Card.Img variant="top" src="https://www.classcentral.com/report/wp-content/uploads/2021/01/udemy-top-courses.png" style={{ height: "15rem" }} />
                            <Card.Body>
                                <Card.Title><a href="https://udemy.com" target="_blank" rel="noreferrer">Udemy.com</a></Card.Title>
                                <Card.Text>
                                    Phasellus auctor scelerisque purus id tincidunt. Fusce congue, augue vitae suscipit molestie, elit est pretium nulla, et pulvinar felis leo a magna. Vestibulum maximus neque porta neque porttitor fringilla. Proin consequat lobortis tempus. Morbi fringilla vulputate turpis ac accumsan.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card border="dark">
                            <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-success" style={{ fontSize: "30px", fontFamily: "Garamond" }}>#3</span>
                            <Card.Img variant="top" src="https://edx.edu.vn/wp-content/uploads/2020/02/Muc-tieu-giao-duc-cua-edX-1.jpg" style={{ height: "15rem" }} />
                            <Card.Body>
                                <Card.Title><a href="https://edx.org" target="_blank" rel="noreferrer">Edx.org</a></Card.Title>
                                <Card.Text>
                                    Sed vitae orci ante. Fusce sagittis arcu ut nisi ullamcorper, non venenatis justo facilisis. Quisque nec orci nec lacus sagittis volutpat.
                                    Morbi bibendum arcu id enim ornare pharetra. Maecenas tempor odio quam, eu sodales enim vestibulum sed.
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
    );
};

export default Home;