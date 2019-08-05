import React from 'react';
import { Card, CardImg, CardText, CardBody, Button, Modal, ModalHeader,
  ModalBody, Form, FormGroup, Input, Label, 
  CardTitle, Breadcrumb, BreadcrumbItem
 } from 'reactstrap';

import { Link } from 'react-router-dom';

function RenderDish({dish}) {
  return(
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  )
}

function RenderComments({comments}) {


    return (comments.map((cx, ijk)=>{
                          return <li key={ijk} >
                              <div>{cx.comment}</div>
                              <div>--->{cx.author} , <span>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cx.date)))}</span></div>

                          </li> }));

}

class DishDetail extends React.Component {

constructor(props){
  super(props)

  this.state = {
    isModalOpen: false
};

}

toggleModal = ()=> {
  console.log("togglin modal..");
  this.setState({
    isModalOpen: !this.state.isModalOpen
  });
}

handleLogin = (event)=> {
  event.preventDefault();
  this.toggleModal();

  alert("name: " + this.name.value + " Comment: " + this.message.value
      + " rating: " );

}

  render(){
    if(  this.props.dish != null ) 
    {
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
          <div className="row">
              <div className="col-12 col-md-5 m-1">
                  <RenderDish dish={this.props.dish} />
              </div>
              <div className="col-12 col-md-5 m-1">
                  <Button outline onClick={this.toggleModal} type="submit" value="submit" color="primary">Leave a Comment</Button>
                  <RenderComments comments={this.props.comments} />
              </div>
          </div>

          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>

                <Form onSubmit={this.handleLogin}>
                  <FormGroup>
                      <Label htmlFor="rating">Rating</Label>
                      
                      <Input type="select" name="rating" id="rating" 
                                           innerRef={(input) => this.rating = input}
                                           >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        
                                    </Input>
                  </FormGroup>
                    <FormGroup>
                        <Label htmlFor="name">Name</Label>
                        <Input type="text" id="name" name="name"
                            innerRef={(input) => this.name = input} />
                    </FormGroup>
                    <FormGroup >
                        <Label htmlFor="message" >Comment</Label>
                        
                            <Input type="textarea" id="message" name="message"
                                rows="12"
                                innerRef={(input) => this.message = input}
                                ></Input>
                        
                    </FormGroup>
                    <Button type="submit" value="submit" color="primary">Submit</Button>
                </Form>

                </ModalBody>
                </Modal>

          </div>
      
    );
  
    } 
    else 
    {return (<div></div>);}
  }
}



export default DishDetail;

// function RenderDish({dish}) {
//   return(
//     <Card>
//       <CardImg top src={dish.image} alt={dish.name} />
//       <CardBody>
//         <CardTitle>{dish.name}</CardTitle>
//         <CardText>{dish.description}</CardText>
//       </CardBody>
//     </Card>
//   )
// }

// function RenderComments({comments}) {


//     return (comments.map((cx, ijk)=>{
//                           return <li key={ijk} >
//                               <div>{cx.comment}</div>
//                               <div>---{cx.author} , <span>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cx.date)))}</span></div>

//                           </li> }));

// }



// const DishDetail = (props)=>{
//   if(  props.dish != null ) 
//   {
//     return (

//         <div className="container">
//         <div className="row">
//             <Breadcrumb>

//                 <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
//                 <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
//             </Breadcrumb>
//             <div className="col-12">
//                 <h3>{props.dish.name}</h3>
//                 <hr />
//             </div>                
//         </div>
//         <div className="row">
//             <div className="col-12 col-md-5 m-1">
//                 <RenderDish dish={props.dish} />
//             </div>
//             <div className="col-12 col-md-5 m-1">
//                 <Button outline onClick={this.toggleModal} type="submit" value="submit" color="primary">Leave a Comment</Button>
//                 <RenderComments comments={props.comments} />
//             </div>
//         </div>
//         </div>
    
//   );

//   } 
//   else 
//   {return (<div></div>);}
// }