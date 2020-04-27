
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';

class DishComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: this.props.selectedDish
        }
    }
    onDishSelect(dish) {
        this.setState({
            selectedDish: dish
        })
    }

    renderComments(dish) {
        if (dish != null) {
            return <ul className="list-unstyled" >
                {dish.comments.map((c) => {
                    return (
                        <li key={c.id}>
                            <p>{c.comment}</p>
                            <p>-- {c.author}, {c.date}</p>
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
            console.log(this.props.selectedDish.comments)
        return (

            <div >
                {this.renderComments(this.props.selectedDish)}
            </div>
        );
    }
}

export default DishComments;