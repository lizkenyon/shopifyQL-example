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

import { trophyImage } from "../assets";

//import { ProductsCard } from "../components";
import { OrderAnalytics } from "../components/OrdersAnalytics";
import { MostShippedCities, ReturnedProducts } from "../components";

export default function HomePage() {
  return (
    <Page >
      <TitleBar title="App name" primaryAction={null} />
      <Layout>
        <Layout.Section>
            <OrderAnalytics></OrderAnalytics>
        </Layout.Section>
        <Layout.Section oneHalf>
          <ReturnedProducts></ReturnedProducts>
        </Layout.Section>
        <Layout.Section oneHalf>
          < MostShippedCities></MostShippedCities>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
