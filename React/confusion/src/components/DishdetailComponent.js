import {Link} from 'react-router-dom';
import React,{Component} from 'react';
import {Card, CardImg, CardText, CardTitle, CardBody} from 'reactstrap';
// TODO Convert into Functional Component!!
class Dishdetail extends Component{
    render(){
        if(this.props.dishDetails!=null)
        {
            const x= this.props.dishDetails.comments.map((commentElement)=>{
                return(
                    <div style={{marginBottom:'1em'}} key={commentElement.key}>
                        {commentElement.comment}
                        <br/>
                        -- {commentElement.author}, {commentElement.date}
                    </div>
                    
                );
            });
            return(
                <div class="row">
                    <div class="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top width="100%" src={this.props.dishDetails.image} alt={this.props.dishDetails.name}/>
                            <CardBody>
                                <CardTitle>{this.props.dishDetails.name}</CardTitle>
                                <CardText>{this.props.dishDetails.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div class="col-12 col-md-5 m-1">
                        <h2>Comments</h2>
                        {x}
                    </div>
                </div>
            );
        }
        return(
            <div></div>
        );

    }
}
export default Dishdetail;