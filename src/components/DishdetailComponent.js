import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props);

        this.state = null;
    }

    renderDish(dish){
        return(
            <Card>
                <CardImg width="100%" src = {dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(dish){
        let options = { year: "numeric", month: "short", day: "numeric" };
        const l = dish.comments.map((comment) => {
            return(
                <ul className="list-unstyled" key={comment.id}>
                    <li>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {new Date(comment.date).toLocaleDateString("en-US", options)}</p>
                    </li>
                </ul>
            );
        })
        
        return(
            <div>
                <h4>Comments</h4>
                {l}
            </div>
        );
    }

    render(){
        const dish = this.props.dish;
        if(dish!=null){
            return(
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-md">
                        {this.renderComments(dish)}
                    </div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
        
    }
}

export default DishDetail;