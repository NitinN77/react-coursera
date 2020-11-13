import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';



 function RenderDish({dish}){
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

    function RenderComments({comments}){
        let options = { year: "numeric", month: "short", day: "numeric" };
        const l = comments.map((comment) => {
            return(
                <div className="container">
                <ul className="list-unstyled" key={comment.id}>
                    <li>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {new Date(comment.date).toLocaleDateString("en-US", options)}</p>
                    </li>
                </ul>
                </div>
            );
        })
        
        return(
            <div>
                <h4>Comments</h4>
                {l}
            </div>
        );
    }

    const DishDetail = (props) => {
        const dish = props.dish;
        if(dish!=null){
            return(
                <div className="row">
                    <div className="col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-md">
                        <RenderComments comments={props.dish.comments} />
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


export default DishDetail;