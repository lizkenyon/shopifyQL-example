import { gql } from "graphql-request";
export const ORDER_DETAILS_QUERY = gql`
{
  shopifyqlQuery(query: "FROM sales SHOW total_sales BY day, order_id, channel_name, shipping_country, referrer_source SINCE -150d UNTIL today ORDER BY total_sales DESC LIMIT 10") {
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
