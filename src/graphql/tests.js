import gql from 'graphql-tag'

export const GENERAL_TEST_METHODS = gql`
  query {
    test_method_general {
      status
      statuscode
      message
      result {
        test_key
        department
        category
        display_name
        min
        max
        price
      }
    }
  }
`
export const BACTERIA_ANTIBIOTICS = gql`
  query {
    test_method_bacteria_antibiotic {
      status
      statuscode
      message
      result {
        group_name
        antibiotics
      }
    }
  }
`

export const DISINFECTANT_TEST_METHODS = gql`
  query {
    test_method_disinfectant_virus {
      status
      statuscode
      message
      result {
        test_key
        display_name
        cell_name
        price
      }
    }
  }
`