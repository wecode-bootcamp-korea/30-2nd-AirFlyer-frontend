import React from 'react';
import styled from 'styled-components';

function WrapperLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  width: 1400px;
  margin: 0 auto;
`;

export default WrapperLayout;
