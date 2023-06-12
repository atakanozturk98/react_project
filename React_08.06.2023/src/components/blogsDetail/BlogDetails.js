import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import Blogs from '../blogs/Blogs';
class BlogDetails extends Component {
  render() {
    const { image, title, subtitle, description } = this.props;

    return (
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={this.props.blogs.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{subtitle}</CardSubtitle>
            <CardText>{description}</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardDeck>
    );
  }
}

export default BlogDetails;