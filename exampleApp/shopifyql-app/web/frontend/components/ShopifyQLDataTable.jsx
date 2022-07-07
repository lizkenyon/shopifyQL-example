import { Card, DataTable } from '@shopify/polaris';
import { convertShopifyQLTypeToDataTableType } from "../util/index.js";
import { useShopifyQuery } from "../hooks";

export function ShopifyQLDataTable ({query, title, queryKey}) {
    const response = useShopifyQuery({
        key: queryKey,
        query,
    });
    console.log(response)

    if (response.status === "loading") {
        return <div>Loading...</div>;
    }

    if (response.status === "error") {
        return <div>Error</div>;
    }

    let headings = response.data.data.shopifyqlQuery.tableData.columns.map(x => x.name);
    let rows = response.data.data.shopifyqlQuery.tableData.rowData;
    let columnContentTypes = convertShopifyQLTypeToDataTableType(
        response.data.data.shopifyqlQuery.tableData.columns.map(x => x.dataType)
    );

    return (
        <Card title={title}>
            <DataTable
                headings={headings}
                rows={rows}
                columnContentTypes={columnContentTypes}
            />
        </Card>
    );
}