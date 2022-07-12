# What is the ShopifyQL API
The ShopifyQL enables you to write analytical queries to find insights in merchants' store data. You can use the GraphQL Admin API to query data from a store using ShopifyQL.

You can use the ShopifyQL API to create reporting apps that provide business insights for merchants. The ShopifyQL API also enables you to export data from a store, so you can import the data into data warehouses

## ShopifyQL Examples
In the [exampleQueries](/exampleQueries) directory you will find examples of ShopifyQL that can be run in [Shopify Notebooks](https://help.shopify.com/en/manual/reports-and-analytics/shopifyql). There are examples of those same queries that can be excuted as API calls to the [Admin GraphQL API.](https://shopify.dev/api/admin-graphql)

```sql
##########################
# ShopifyQL
# Shows the city most shipped to
# This can be run in Shopify Notebooks
##########################

FROM sales
SHOW orders
BY shipping_city
SINCE -150d
ORDER BY orders DESC
LIMIT 10
```
```gql
//This GQL query can be run on the Shopify Admin API
shopifyqlQuery(query: "FROM sales SHOW orders BY shipping_city SINCE -150d ORDER BY orders DESC LIMIT 10 ") {
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
```

## ShopifyQL Example App
Developers can build reporting apps that consume the results of ShopifyQL queries. 

The example app is Node.js and React web app that can be installed on a Shopify store. It connects to the Shopify Store data use the Admin GraphQL API. It displays the returned data with [Polaris components](https://polaris.shopify.com/), Shopify's component library. 

<img width="1419" alt="liz-dev-5 ~ ShopifyQL Analytics App~ Shopify 2022-07-12 09-11-56" src="https://user-images.githubusercontent.com/23265671/178511232-24749c5d-aa35-46c6-9d4c-ea444ec803a5.png">

### ShopifyQL Schema
For more information on the availble fields that can be queried, review the [schema information](https://help.shopify.com/en/manual/reports-and-analytics/shopifyql/notebooks-sales-schema).

### ShopifyQL Syntax
Review the [syntax and reference docs.](https://shopify.dev/api/shopifyql/shopifyql-reference)

