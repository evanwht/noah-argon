/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
    Container,
    Row,
    Col
} from "reactstrap";
import LiftingCard from "./LiftingCard";
import { faCat, faDownload, faPallet } from "@fortawesome/free-solid-svg-icons";

class Cards extends React.Component {
    state = {
        dogFact: "Dog facts are great! Looks like we couldn't load a new one today though",
        catFact: "Cat facts are great! Looks like we couldn't load a new one today though",
        nasaFact: "NASA facts are great! Looks like we couldn't load a new one today though"
    };
    componentDidMount() {
        // fetch("https://dog-api.kinduff.com/api/facts").then((resp) => {
        //     resp.json((data) => {
        //         this.setState({
        //             dogFact: data.facts
        //         });
        //     });
        // });
        this.getCatFact();
        this.findAsteroids();
    }

    getCatFact() {
        fetch("https://catfact.ninja/fact")
            .then(resp => {
                if (!resp.ok) {
                    throw new Error("error getting fact");
                }
                resp.json().then(data => {
                    this.setState({
                        catFact: data.fact
                    });
                });
            })
            .catch(err => {
                alert("error: " + err);
            });
    }

    findAsteroids() {
        var curDate = new Date();
        var curDateStr = curDate.toISOString().slice(0, 10);
        fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${curDateStr}&end_date=${curDateStr}&api_key=DEMO_KEY`)
            .then(resp => {
                var json = resp.json();
                json.then(data => {
                    var objects = data.near_earth_objects;
                    var num = 0;
                    var hazardous = [];
                    var sizes = [];
                    for (var date in objects) {
                        var day = objects[date];
                        num = day.length;
                        day.forEach(obj => {
                            if (obj.is_potentially_hazardous_asteroid) {
                                hazardous.push(obj);
                                sizes.push(obj.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2));
                            }
                        })
                    }
                    var str = `There are ${num} asteroids being tracked today. ${hazardous.length} are potentially hazardous`;
                    if (hazardous.length > 0) {
                        str += `which are ${ this.nice(sizes) } km in diameter.`
                    } else {
                        str += '.';
                    }
                    this.setState({
                        nasaFact: str
                    });
                })
            }).catch(err => console.log(err));
    }

    nice([...array]) {
        return array.concat(array.splice(-2, 2).join(' and ')).join(', ');
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col lg="12">
                        <Row className="row-grid">
                            <Col lg="4">
                                <LiftingCard
                                    text={this.state.dogFact}
                                    variant="primary"
                                    tags={["doggos", "puppers"]}
                                    icon={faDownload}
                                    title="Dog Facts"
                                    action="New Fact"
                                />
                            </Col>
                            <Col lg="4">
                                <LiftingCard
                                    text={this.state.catFact}
                                    variant="success"
                                    tags={["cats", "kittens"]}
                                    icon={faCat}
                                    title="Cat Facts"
                                    action="New Fact"
                                />
                            </Col>
                            <Col lg="4">
                                <LiftingCard
                                    text={this.state.nasaFact}
                                    variant="warning"
                                    tags={["nasa", "NEO's", "space"]}
                                    icon={faPallet}
                                    title="Asteroid Watch"
                                    action="Learn more"
                                    link="https://cneos.jpl.nasa.gov/"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Cards;
