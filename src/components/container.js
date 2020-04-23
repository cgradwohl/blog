import React from "react";

import {
  Flex,
} from 'rebass';

const Container = props => (
  <Flex
    {...props}
    sx={{
      flexDirection: 'column',
      height:'100%'
    }}
  >
    { props.children }
  </Flex>
);

export default Container;