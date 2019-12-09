import React from 'react';

interface Props {
  onClick: () => void;
}

const Button: React.FC<Props> = props => {
  return <button onClick={props.onClick}>{props.children}</button>;
};

export default Button;
