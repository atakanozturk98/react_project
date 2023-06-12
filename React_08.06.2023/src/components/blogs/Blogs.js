import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as blogActions from '../../redux/actions/blogActions';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import BlogDetails from "../blogsDetail/BlogDetails";

class Blogs extends Component {
  componentDidMount() {
    this.props.actions.getBlogs();
  }

  render() {
    const { currentCategory, blogs } = this.props;

    return (
      <>
        <h2>{currentCategory.category}</h2>
        <Row>
          {blogs.map((blog) => (
            <Col xs="4" key={blog.key}>
              <Link to={`/detail/${blog.key}`}>
                <div
                  className="card"
                  style={{ width: '18rem', marginBottom: '20px' }}
                >
                  <img
                    src={blog.image}
                    className="card-img-top"
                    alt="..."
                    style={{ height: '200px' }}
                  />
                  <div
                    className="card-body"
                    style={{
                      maxHeight: '200px',
                      minHeight: '200px',
                    }}
                  >
                    <h4 style={{ color: 'black', textDecoration: 'none' }}>
                      {blog.name}
                    </h4>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    blogs: state.blogReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getBlogs: bindActionCreators(blogActions.getBlogs, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);