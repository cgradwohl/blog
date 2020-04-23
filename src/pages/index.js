import React from 'react';
import { Link, graphql } from 'gatsby';

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
      {
        posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <Item>
              <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                {title}
              </Link>
            </Item>
          );
        })
      }
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
