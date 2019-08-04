import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';

class DishDetail extends React.Component {

  
  render(){
  if(  this.props.dish != null ) {
      const comments = this.props.dish.comments.map((commentx, jki)=>{
        return(<li key={jki}>
          <div>{commentx.comment}</div>
          <div>---{commentx.author}</div>
          </li>);
      });
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                  <CardTitle>{this.props.dish.name}</CardTitle>
                  <CardText>{this.props.dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">{comments}</ul>
          </div>
          
        </div>
      </div>
    );
  } else {

    return (<div></div>);
  }

  }
}

export default DishDetail;