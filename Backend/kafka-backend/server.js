var connection =  new require('./kafka/Connection');
//topics files
//var signin = require('./services/signin.js');
var Books = require('./services/books.js');
var Register = require('./services/auth')
var Login = require('./services/login')
var UserUpdate = require('./services/userUpate')
var UserDetails = require('./services/userDetails')
var CreateShop = require('./services/createShop')
var CreateProduct = require('./services/createProduct')
var UpdateShop = require('./services/updateShop')
var UpdateProduct = require('./services/updateProduct')

//Environment variable using dotenv
const dotenv = require("dotenv");
dotenv.config();

//Creating connection to database
const mongooseConnection = require('../config/database')

function handleTopicRequest(topic_name,fname){
    //var topic_name = 'root_topic';
    var consumer = connection.getConsumer(topic_name);
    var producer = connection.getProducer();
    console.log('server is running ');
    consumer.on('message', function (message) {
        console.log('message received for ' + topic_name +" ", fname);
        console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);
        
        fname.handle_request(data.data, function(err,res){
            console.log('after handle'+res);
            var payloads = [
                { topic: data.replyTo,
                    messages:JSON.stringify({
                        correlationId:data.correlationId,
                        data : res
                    }),
                    partition : 0
                }
            ];
            producer.send(payloads, function(err, data){
                console.log(data);
            });
            return;
        });
        
    });
}
// Add your TOPICs here
//first argument is topic name
//second argument is a function that will handle this topic request
handleTopicRequest("post_book",Books)
handleTopicRequest("auth",Register)
handleTopicRequest("login",Login)
//Need to add Topics+Routes
//User
handleTopicRequest("user_update",UserUpdate)
handleTopicRequest("user_details",UserDetails)
// //Cart
// handleTopicRequest("add_to_cart",AddToCart)
// handleTopicRequest("get_cart_items",GetCart)
// handleTopicRequest("remove_cart_item",RemoveCart)
// //ORDER
// handleTopicRequest("place_order",PlaceOrder)
// //PRODUCTS
handleTopicRequest("create_product",CreateProduct)
// handleTopicRequest("get_product",GetProduct)
handleTopicRequest("update_product",UpdateProduct)
// handleTopicRequest("get_shop_items",GetShopItems)
// handleTopicRequest("get_all_products",GetProducts)
// handleTopicRequest("get_product_by_id",GetProductById)
// handleTopicRequest("get_product_by_category",GetProductsByCategory)
// handleTopicRequest("get_filtered_products",GetFilteredProducts)
// handleTopicRequest("filter_product_by_price",GetProductsByPrice)
// handleTopicRequest("filter_product_by_quantity",GetProductByQuantiy)
// handleTopicRequest("filter_product_by_sales",GetProductBySales)
// //SHOP
handleTopicRequest("create_shop",CreateShop)
handleTopicRequest("update_shop",UpdateShop)
// handleTopicRequest("check_shop_availability",CheckShopAvailability)
// handleTopicRequest("get_shop_details",GetShop)
