import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Style';

const RedirectListButton = ({
  click,
  title,
  redirectTo,
  style,
}) => (
  <Button
    as={Link}
    style={{
      ...style,
      color: 'white',
      textDecorationLine: 'none',
      fontSize: '100%',
    }}
    to={redirectTo}
    onClick={click}
  >
    {title}
  </Button>
);

export default RedirectListButton;