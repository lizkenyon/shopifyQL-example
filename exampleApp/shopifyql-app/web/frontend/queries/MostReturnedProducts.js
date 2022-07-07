import { gql } from "graphql-request";
export const RETURNED_PROUDCTS_QUERY = gql`
{
      # "FROM sales SHOW total_sales BY month SINCE -1y UNTIL today" passes a ShopifyQL query to the GraphQL query.
  shopifyqlQuery(query: "FROM sales SHOW returned_item_quantity BY product_id SINCE -150d ORDER BY returned_item_quantity DESC LIMIT 5") {
    __typename
    ... on TableResponse {
      tableData {
        rowData
        columns {
          # Elements in the columns section describe which column properties you want to return.
          name
          dataType
          displayName
        }
      }
    }
    # parseErrors specifies that you want errors returned, if there were any, and which error properties you want to return.
    parseErrors {
      code
      message
      range {
        start {
          line
          character
        }
        end {
          line
          character
        }
      }
    }
  }
  }
`;
