const SHOPIFYQL_DATA_TYPE_MAPPING = {
    'day': 'text',
    'identity': 'text',
    'string' : 'text',
    'price' : 'numeric'
};

export const convertShopifyQLTypeToDataTableType = (types) => {
   return types.map(dataType => { return SHOPIFYQL_DATA_TYPE_MAPPING[dataType] })
};