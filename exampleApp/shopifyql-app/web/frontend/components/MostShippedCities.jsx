import { Card, DataTable } from '@shopify/polaris';
import { gql } from "graphql-request";
import { convertShopifyQLTypeToDataTableType } from "../util/index.js";
import { useShopifyQuery } from "../hooks";

const MOST_SHIPPED_CITIES = gql`
{
      # "FROM sales SHOW total_sales BY month SINCE -1y UNTIL today" passes a ShopifyQL query to the GraphQL query.
  shopifyqlQuery(query: "FROM sales SHOW orders BY shipping_city SINCE -150d ORDER BY orders DESC LIMIT 5 ") {
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

export function MostShippedCities() {
    const mostShippedCities = useShopifyQuery({
        key: "mostShippedCities",
        query: MOST_SHIPPED_CITIES,
    });

    if (mostShippedCities.status === "loading") {
        return <div>Loading...</div>;
    }

    if (mostShippedCities.status === "error") {
        return <div>Error</div>;
    }

    let headings = mostShippedCities.data.data.shopifyqlQuery.tableData.columns.map(x => x.name);
    let rows = mostShippedCities.data.data.shopifyqlQuery.tableData.rowData;
    let columnContentTypes = convertShopifyQLTypeToDataTableType(
        mostShippedCities.data.data.shopifyqlQuery.tableData.columns.map(x => x.dataType)
    );

    return (
        <Card title="Most Shipped Cities">
            <DataTable
                headings={headings}
                rows={rows}
                columnContentTypes={columnContentTypes}
            />
        </Card>
    );
}