// Mkulima Platform
// Mkulima is new Kenyan business-to-business (B2B) agro-startup focusing on connecting grocery vendors to rural farmers. This is through their online marketplace where farmers can trade vegetables and fruits with grocery vendors. To begin with, farmers have to register on the platform and login. Thereafter, they can upload their products with respective prices. On the other hand, grocery vendors can signup and login to the platform to place their bulk order requests. 

// Create a class Mkulima that will keep a list of farms, grocery vendors and products. A single farm record should contain id, farm name, farmer, phone number and address. A single grocery vendor record should contain id, store name and phone number. A product should have id, name and price fields. 

// Users of the system should be able to:
//  addFarm - params: farmId, name, farmer, phone, address
//  removeFarm - params: farmId
//  updateFarm - params: farmId, name, farmer, phone, address
//  getFarm - params: farmId - returns a farm object
//  addProduct - params: productId, name, price
//  removeProduct - params: productId
//  updateProduct - params: productId, name, price
//  getProduct - params: productId - returns a product object
//  printProducts - No param, console logs a list of product
//  items with their prices.
// calculateOrderCost - params: productId, quantity

// class Mkulima {
  
//   constructor() {
//     this.farms = [];
//     this.products = [];
//     this.orders = [];
//   }

//   // ...complete the rest 

// }


class Mkulima{
    constructor(){ 
    this.farms = [];
    this.products = [];
    this.orders = [];
    this.vendor = [];
}

addFarm (farmId, name,farmer,phone,address){
    return this.farms.push({farmId,name,farmer,phone,address});
}
removeFarm(farmId){
    let farm = this.farms.find(farm => farm.farmId === farmId);
    return delete this.farms[farm];
}
updateFarm(farmId,name,farmer,phone,address){
     
    this.farms.farmId = farmId;
    this.farms.name = name;
    this.farms.farmer = farmer;  
     this.farms.phone= phone;
     this.farms.address = address;
     var farmsUpdates = {farmId,name,farmer,phone,address};
     return farmsUpdates;
   
 }
getFarm(farmId){

    let farm = this.farms.find(farm => farm.farmId === farmId);
    return farm;
}
addProduct(productId,name,price){
    return this.products.push({productId,name,price});
 }
removeProduct(productId){
    let product = this.products.find(product => product.productId === productId);
    return delete this.products[product];
    
}
updateProduct(productId,name,price){
   this.products.name = name;
   this.products.price = price;  
    this.products.productId = productId;
    var updates = {productId,name,price};
    return updates;
}
getProduct(productId){
    let product = this.products.find(product => product.productId === productId);
    return product;
 }
printProducts(){

 for(let items of this.products){     
  
  console.log(`${items.name}: ${items.price}`);
  
 }   
}
calculateOrderCost(productId,quantity){
    let product = this.products.find(product => product.productId === productId);
    return product.price *quantity;
}
}

let mkulima = new Mkulima();
console.log(mkulima.addFarm(500,"Farm","Queen Mary","(+256)0781235","korongo"));
console.log(mkulima.addFarm(201,"Farmers","Sarah nakayiza","(+256)0781235","456-Karen"));
console.log(mkulima.removeFarm(500));
console.log(mkulima.getFarm(201));
console.log(mkulima.updateFarm(500,"Farm","Speria","(+256)0781235","750-Mombasa"));
console.log(mkulima.addProduct(200,"Pawpaws",300));
console.log(mkulima.addProduct(401,"Pinaple",100));
console.log(mkulima.removeProduct(100))
console.log(mkulima.updateProduct(200,"Gavas",300));
console.log(mkulima.getProduct(200));
mkulima.printProducts();
console.log(mkulima.calculateOrderCost(200, 16));
