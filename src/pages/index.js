/* eslint-disable */
import React from 'react';
import { Link, graphql } from 'gatsby';

import {
  Flex,
  Box,
  Text,
  Heading,
} from 'rebass';

const Index = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Flex height='100%' justifyContent='center' pt={40}>
      <Flex
        p={3}
        height='50%'
        width={2/5}
        justifyContent='center'
        sx={{
          borderRight: '1px solid #e6e6e6',
        }}
      >
        <Box width='50%'>
          <Heading>Chris Gradwohl</Heading>
          <Text color='#888'>AWS Data Hero providing training and consulting with expertise in DynamoDB, serverless applications, and cloud-native technology.</Text>
        </Box>
      </Flex>
      
      
      <Flex
        flexDirection='column'
        height='100%'
        width={3/5}
        p={3}
      >
        {
          posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <Flex
                flex={1}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </Flex>
            );
          })
        }
      </Flex>
    </Flex>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
