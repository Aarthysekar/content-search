import { gql } from '@apollo/client';

const _IMAGE_FRAGMENT = gql`
  fragment Image on Image {
    uri
  }
`;

const _CATEGORY_FRAGMENT = gql`
  fragment Category on Category {
    name
  }
`;

const _EXPERT_FRAGMENT = gql`
  fragment Expert on Expert {
    firstName
    lastName
    title
    company
  }
`;

export const GET_CONTENT_CARDS = gql`
  ${_IMAGE_FRAGMENT}
  ${_CATEGORY_FRAGMENT}
  ${_EXPERT_FRAGMENT}

  query GetContentCards {
    contentCards(filter: { limit: 20, keywords: "", types: [PODCAST] }) {
      edges {
        ... on Podcast {
          name
          id
          image {
            ...Image
          }
          categories {
            ...Category
          }
          experts {
            ...Expert
          }
        }
      }
    }
  }
`;
