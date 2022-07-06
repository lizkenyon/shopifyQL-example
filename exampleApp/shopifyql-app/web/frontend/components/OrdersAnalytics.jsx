import { Card, DataTable } from '@shopify/polaris';
import { gql } from "graphql-request";
import { convertShopifyQLTypeToDataTableType } from "../util/index.js";
import { useShopifyQuery } from "../hooks";

const ORDER_ANALYTICS_QUERY = gql`
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

export function OrderAnalytics() {

    const orderAnalyticData = useShopifyQuery({
        key: "orderAnalyticData",
        query: ORDER_ANALYTICS_QUERY,
    });

    if(orderAnalyticData.status === "loading") {
        return <div>Loading...</div>
    }

    if(orderAnalyticData.status === "error") {
        return <div>Error</div>
    }

    let headings = orderAnalyticData.data.data.shopifyqlQuery.tableData.columns.map(x => x.name);
    let rows = orderAnalyticData.data.data.shopifyqlQuery.tableData.rowData;
    let columnContentTypes = convertShopifyQLTypeToDataTableType(orderAnalyticData.data.data.shopifyqlQuery.tableData.columns.map(x => x.dataType));

    return (
        <Card 
        title="ShopifyQL Order Analytics Data"
        >
        <DataTable
            columnContentTypes={columnContentTypes}
            headings={headings}
            rows={rows}
            hasZebraStripingOnData={true}
            firstColumnMinWidth={150}
            />
        </Card>
    );

}