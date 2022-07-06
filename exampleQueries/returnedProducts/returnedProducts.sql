##########################
# ShopifyQL
# Shows the most returned items by product_id
##########################


FROM sales 
SHOW returned_item_quantity 
BY product_id SINCE -150d 
ORDER BY returned_item_quantity DESC