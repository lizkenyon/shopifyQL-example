##########################
# ShopifyQL
# Shows the city most shipped to
##########################

FROM sales
SHOW orders
BY shipping_city
SINCE -150d
ORDER BY orders DESC
LIMIT 10