import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTag = ({ keywords, description, title }) => {
  return (
    <Helmet>
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywords}/>
      <title>{title}</title>
    </Helmet>
  );
};

export default MetaTag;