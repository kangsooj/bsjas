import React from 'react';
import Helmet from 'react-helmet';

class Blog extends React.Component {
  render () {
    return (
      <div className="">
        <Helmet
          title={config.siteTitle}
        />
        <h1>
          Blog
        </h1>
      </div>
    );
  }
}

export default Blog;
