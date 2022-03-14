import React from 'react';
import styled from 'styled-components';

function IconButton(props) {
  const { width, height, src } = props;
  return <Button width={width} height={height} src={src} />;
}

const Button = styled.button`
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  border: none;
  background-color: white;
  background: url(${props => props.src}) center center /
    ${props => props.width}px ${props => props.height}px;
  cursor: pointer;
`;

export default IconButton;
