##########################
# ShopifyQL
# Average Order Value by month
##########################

FROM sales
SHOW average_order_value
OVER month
since -1y UNTIL today