import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Categories.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import rate from "../../images/rate.PNG";
import rate2 from "../../images/rate2.PNG";

const Categories = () => {
  return (
    <div className="container pb-4 category-style">
      <div
        className="row align-items-center md-4"
        style={{
          rowGap: "40px",
          marginTop: "40px",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <div className="col-md-3">
          <Card className="uk" style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://static.yoursurprise.com/resourcebase/files/542/1217688/billy-bear_small.png?width=204&crop=1:1&dpr=1.5"
            />
            <Card.Body>
              <Card.Title>Soft Toys</Card.Title>
              <Rating></Rating>
              <Link to="/shop">
                <Button variant="primary">More products</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="uk" style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://static.yoursurprise.com//articleimage/groepboxen/658bef93cbbf41fe27de6bced1173a78/acrylic-photo-keychain_small.jpg?width=263&crop=1:1"
            />
            <Card.Body>
              <Card.Title>Key Rings</Card.Title>
              <Rating></Rating>
              <Link to="/shop">
                <Button variant="primary">More products</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="uk" style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://static.yoursurprise.com/resourcebase/files/542/1086220/birthday-gifts_small.jpg?width=263&crop=1:1&dpr=1.5"
            />
            <Card.Body>
              <Card.Title>Birthday Gifts</Card.Title>
              <Rating></Rating>
              <Link to="/shop">
                <Button variant="primary">More products</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="uk" style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://static.yoursurprise.com/resourcebase/files/488/976659/for-him_small.jpg?width=263&crop=1:1&dpr=1.5"
            />
            <Card.Body>
              <Card.Title>For Him</Card.Title>
              <Rating></Rating>
              <Link to="/shop">
                <Button variant="primary">More products</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="uk" style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://static.yoursurprise.com/resourcebase/files/491/982551/for-her_small.jpg?width=263&crop=1:1&dpr=1.5"
            />
            <Card.Body>
              <Card.Title>For Her</Card.Title>
              <Rating></Rating>
              <Link to="/shop">
                <Button variant="primary">More products</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="uk" style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://static.yoursurprise.com/resourcebase/files/542/1214795/children-s-books_small.jpg?width=263&crop=1:1&dpr=1.5"
            />
            <Card.Body>
              <Card.Title>Books</Card.Title>
              <Rating></Rating>
              <Link to="/shop">
                <Button variant="primary">More products</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="uk" style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://static.yoursurprise.com/resourcebase/files/542/1086973/for-children_small.jpg?width=263&crop=1:1&dpr=1.5"
            />
            <Card.Body>
              <Card.Title>For Children</Card.Title>
              <Rating></Rating>
              <Link to="/shop">
                <Button variant="primary">More products</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="uk" style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://static.yoursurprise.com/resourcebase/files/542/1106296/grandparents_small.jpg?width=263&crop=1:1&dpr=1.5"
            />
            <Card.Body>
              <Card.Title>For Grandparents</Card.Title>
              <Rating></Rating>
              <Link to="/shop">
                <Button variant="primary">More products</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="uk" style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://static.yoursurprise.com/articleimage/groepboxen/8f3c14cffa34af2face8f59e495a508a/leather-laptop-sleeve_small.jpg?width=263&crop=1:1"
            />
            <Card.Body>
              <Card.Title>Bags</Card.Title>
              <Rating></Rating>
              <Link to="/shop">
                <Button variant="primary">More products</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="uk" style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://static.yoursurprise.com/resourcebase/files/542/1088475/thank-you-gifts_small.jpg?width=263&crop=1:1&dpr=1.5"
            />
            <Card.Body>
              <Card.Title>Thank You Gifts</Card.Title>
              <Rating></Rating>
              <Link to="/shop">
                <Button variant="primary">More products</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="uk" style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://static.yoursurprise.com/articleimage/1a/1a38587c5cb32594a9abcec8e362affa/photo-mug-magic_small.jpg?width=263&crop=1:1"
            />
            <Card.Body>
              <Card.Title>Photo Mugs</Card.Title>
              <Rating></Rating>
              <Link to="/shop">
                <Button variant="primary">More products</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="uk" style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://static.yoursurprise.com/articleimage/groepboxen/38a177a47b8c0b4ffe9f1fbf12e65004/snow-globe_small.jpg?width=263&crop=1:1"
            />
            <Card.Body>
              <Card.Title>For Anniversary</Card.Title>
              <Rating></Rating>
              <Link to="/shop">
                <Button variant="primary">More products</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="row">
        <img className="container col-12" src={rate} alt="" />
        <img className="container col-12" src={rate2} alt="" />
      </div>
    </div>
  );
};

export default Categories;
