import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
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
            <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{this.props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
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