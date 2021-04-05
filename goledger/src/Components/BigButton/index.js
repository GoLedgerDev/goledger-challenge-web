import React from 'react';
import { Link } from 'react-router-dom';

const BigButton = ({
  url,
  title,
  click,
  style,
}) => (

    <Link
    onClick={click}
    style={style}
    to={url}
  >
    {title}
  </Link>

);

export default BigButton;
