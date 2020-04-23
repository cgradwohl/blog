import React from "react";
import {
  Flex,
} from 'rebass';

const Item = props => (
  <Flex
    {...props}
    sx={{
      flex: 1,
      justifyContent: 'center',
    }}
  >
    {props.children}
  </Flex>
);

export default Item;
