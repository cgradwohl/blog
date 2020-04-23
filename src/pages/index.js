import React from 'react';
import { graphql } from 'gatsby';

import {
  Text,
} from 'rebass';

import { Container, Item } from '../components';

const Index = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Container mx={-2}>
      <Item>
        <Text p={1}>
          ONE
        </Text>
      </Item>
      <Item>
        <Text p={1}>
          TWO ... test me bro
          {
            posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              return (
                <Text>{title}</Text>
              );
            })
          }
        </Text>
      </Item>
    </Container>
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
