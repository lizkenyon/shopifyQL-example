import { gql } from "graphql-request";
import { useShopifyQuery } from "../hooks";
import { convertShopifyQLTypeToDataTableType } from "../util/index.js";
import { Card, DataTable } from '@shopify/polaris';

const RETURNED_PROUDCTS_QUERY = gql`
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

export function ReturnedProducts(){
    const returnedProducts = useShopifyQuery({
        key: "returnedProducts",
        query: RETURNED_PROUDCTS_QUERY,
    });
    
    if (returnedProducts.status === "loading") {
        return <div>Loading...</div>;
    }
    
    if (returnedProducts.status === "error") {
        return <div>Error</div>;
    }
    
    let headings = returnedProducts.data.data.shopifyqlQuery.tableData.columns.map(x => x.name);
    let rows = returnedProducts.data.data.shopifyqlQuery.tableData.rowData;
    let columnContentTypes = convertShopifyQLTypeToDataTableType(
        returnedProducts.data.data.shopifyqlQuery.tableData.columns.map(x => x.dataType)
    );
    
    return (
        <Card title='Most Returned Products'>
        <DataTable
            headings={headings}
            rows={rows}
            columnContentTypes={columnContentTypes}
        />
        </Card>
    );
}