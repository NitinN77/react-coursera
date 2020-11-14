import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';


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
                <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                    {props.dish.name}
                    <hr />
                    </div>
                    <div className="col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-md">
                        <RenderComments comments={props.comments} />
                    </div>
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