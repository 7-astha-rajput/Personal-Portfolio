import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Caffee Reservation System",
      description: "Mern Stack",
      imgUrl: projImg1,
      url: "https://github.com/7-astha-rajput/CAFFEE",
    },
    {
      title: "Money Lending",
      description: "Backend Development",
      imgUrl: projImg2,
      url: "https://github.com/7-astha-rajput/Backend-Money-Lending",
    },
    {
      title: "Doctor Appointment Booking",
      description: "Web Development",
      imgUrl: projImg3,
      url: "https://github.com/7-astha-rajput/Web-Based-Appointed-Booking-Site",
    },
    {
      title: "Text Editor",
      description: "Web Development",
      imgUrl: projImg4,
      url: "https://txteditr.netlify.app/",
    },
    {
      title: "Budget Tracker",
      description: "Web Development",
      imgUrl: projImg5,
      url: "https://github.com/7-astha-rajput/Budget-Tracker",
    },
    {
      title: "Room Booking",
      description: "SQL",
      imgUrl: projImg6,
      url: "https://github.com/7-astha-rajput/Celebal-Internship/tree/main/Hotel%20Management",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Welcome to my portfolio of projects! Each project represents a unique challenge I tackled using diverse technologies to create functional and user-focused solutions. From crafting intuitive web applications like the Doctor Appointment Booking System and Text Editor to backend-focused solutions like the Money Lending System, I've applied a range of skills including MERN stack development, backend engineering, and SQL database design.

Highlights include the Caffee Reservation System, showcasing full-stack proficiency, and the Budget Tracker, built to simplify personal finance management. Additionally, my Room Booking System demonstrates expertise in database optimization. Dive in to explore these projects that reflect my passion for solving real-world problems through innovative tech!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                    
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Upcoming!!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
