import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';

class DishComments extends Component {
    renderDish(dish) {
        if (dish != null)
            return (
                <Card className="col-12 col-md-5 m-1">
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    renderComments(dish) {
        if (dish != null) {
            return <ul className="list-unstyled" >
                {dish.comments.map((c) => {
                    return (
                        <li key={c.id} className="col-12 col-md-5 m-1">
                            <p>{c.comment}</p>
                            <p>-- {c.author}, {new Intl.DateTimeFormat('en-US', { year: "numeric", month: "2-digit" }).format(new Date(Date.parse(c.date)))}</p>
                            <p></p>

                        </li>

                    );
                })}
            </ul>
        }
        else {
            return (<div></div>);
        }

    }
    render() {
        if (this.props.selectedDish != null)
            console.log(this.props.selectedDish)
        return (
            <div className="container col-12 col-md-10 m-10">
                <div >
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div >
                    {this.renderComments(this.props.selectedDish)}
                </div>
            </div>
        );
    }
}

export default DishComments;