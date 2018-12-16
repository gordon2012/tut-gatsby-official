import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';

import { rhythm } from '../utils/typography';
import Layout from '../components/layout';

export default ({ data }) => {
  console.log(data);

  const { totalCount } = data.allMarkdownRemark;

  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Amazing Pandas Eating Things
        </h1>
        <h4>
          {totalCount} Post{totalCount === 1 ? '' : 's'}
        </h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {`${node.frontmatter.title} `}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  {' '}
                  - {node.frontmatter.date}
                </span>
              </h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
