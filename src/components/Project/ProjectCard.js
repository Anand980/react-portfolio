import React from "react";
// import { ProjectDetails } from "./ProjectDetails";
import { Card, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Project.scss";
function Maz() {
  return (
    <div>
      <Col>
        <Row>
          <div className="project-card-details">
            <ProjectCard
              image="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"
              title="Food Cart"
              body="A web application for food ordering"
              demourl="https://react-yndcui.stackblitz.io"
              codeurl="https://github.com/Anand980/foodcart-react-anand980"
            />
          </div>
          <div className="project-card-details">
            <ProjectCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbNw_vP05soOrrAwLWx7w7JV9769svcqDLOw&usqp=CAU"
              title="Online Food Order"
              body="A food website similar to zomato"
              demourl="https://react-ikfkwo.stackblitz.io"
              codeurl="https://github.com/Anand980/zomato-clone-app"
            />
          </div>
        </Row>
      </Col>
    </div>
  );
}
function urlClick(link) {
  const url = link;
  window.open(url, "_blank");
}

function ProjectCard(props) {
  return (
    <div>
      <Row>
        <Card style={{ width: "25rem" }} className="project-card">
          <Card.Img
            variant="top"
            src={props.image}
            height="300"
            width="300"
            className="project-icons"
          />
          <Card.Body>
            <Card.Title className="project-title">{props.title}</Card.Title>
            <Card.Text className="project-body">{props.body}</Card.Text>
            <p style={{ textAlign: "center", left: "0", marginTop: "10px" }}>
              <Button
                className="urls"
                onClick={() => {
                  urlClick(props.demourl);
                }}
              >
                {" "}
                Demo{" "}
              </Button>{" "}
              <Button
                className="urls"
                onClick={() => {
                  urlClick(props.codeurl);
                }}
              >
                {" "}
                Code{" "}
              </Button>
            </p>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
}

export default Maz;
