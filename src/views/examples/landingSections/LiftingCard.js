import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

import {
    Badge,
    Button,
    Card,
    CardBody,
} from "reactstrap";

class LiftingCard extends Component {

    renderBadges(variant, tags) {
        return tags.map((tag) => {
            return (
                <Badge key={tag} color={variant} pill className="mr-1">
                    {tag}
                </Badge>
            )
        });
    }

    render() {
        var { icon, title, text, variant, action, tags, link } = this.props;
        return (
            <Card className="card-lift--hover shadow border-0">
                <CardBody className="py-5">
                    <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                        <FontAwesomeIcon icon={icon} />
                    </div>
                    <h6 className="text-warning text-uppercase">{title}</h6>
                    <p className="description mt-3">{text}</p>
                    <div>
                        {this.renderBadges(variant, tags)}
                    </div>
                    <Button
                        className="mt-4"
                        color={variant}
                        href={link}
                        onClick={e => e.preventDefault()}
                    >
                        {action}
                    </Button>
                </CardBody>
            </Card>
        );
    }
}

export default LiftingCard;
