import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { MOST_SHIPPED_CITIES } from "../queries/MostShippedCities";
import { RETURNED_PROUDCTS_QUERY } from "../queries/MostReturnedProducts";
import { ORDER_DETAILS_QUERY } from "../queries/OrderDetails";
import  {ShopifyQLDataTable} from "../components/ShopifyQLDataTable";

export default function HomePage() {
  return (
    <Page >
      <TitleBar title="ShopifyQL Analytics" primaryAction={null} />
      <Layout>
        <Layout.Section>
        <ShopifyQLDataTable query={ORDER_DETAILS_QUERY} title="Order Details" queryKey="orderAnalyticData"/>
        </Layout.Section>
        <Layout.Section oneHalf>
          <ShopifyQLDataTable query={RETURNED_PROUDCTS_QUERY} title="Most Returned Products" queryKey="mostReturnedProducts"/>
        </Layout.Section>
        <Layout.Section oneHalf>
          <ShopifyQLDataTable query={MOST_SHIPPED_CITIES} title="Most Shipped Cities" queryKey="mostShippedCities"/>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
