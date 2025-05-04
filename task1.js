const products=[
    {
        productID:1,
        name: "Redmi",
        description:"Mobile Phone",
        price:14000,
        stock:7,
        category:"Electronics",
        tags:["Touch Screen","Internet Connectivity","Cameras"],
        discount:{type:"Percentage",value:30}
     },
    {
        productID:2,
        name: "Dell",
        description:"Laptop",
        price:50000,
        stock:10,
        category:"Laptop",
        tags:["8GB RAM","64 bit Operating System","no pen","No Touch Input"],
        discount:{type:"fixed",value:100}
},
    {
        productID:3,
        name: "John Barrel",
        description:"Television",
        price:14000,
        stock:15,
        category:"Electronics",
        tags:["19 inches","LED","No Touch Input"],
        discount: { type: "fixed", value: 3 }

    },
    
];
// const displayProductDetails=()=>{
//     for(const product of products){
//         console.log(`id:${product.productID}`,
//             `name:${product.name}`,
//             `description:${product.description}`,
//             `price:${product.price}`,
//             `stock:${product.stock}`,
//             `category:${product.category}`,
//             `tags:${product.tags.join(",")}`,
//             // `discount:${product.discount.prize,product.discount.value}`
//             );
//             for(const key in product.discount){
//                 console.log(`${key}:${product.discount[key]}`);
//             }
            
//     }
// }
// displayProductDetails();


// ----------------------------Display Products-----------------------

const displayProductDetails = (product) => {
 
    for (const key in product) {
      if (key!=="tags") {
        console.log(`${key}:${product[key]}`);
      } else {
        console.log(`tags:${product.tags.join(",")}`);
      }
    }
  };
products.forEach((product) => displayProductDetails(product));


// -------------------------filteredProduct--------------------------

const filteredProduct=products.filter((product)=>{
    return product.price===14000; 
});
console.log(filteredProduct);


// ------------------------------FoundProducts------------------------------

console.log("----Find Product by ID-----")

const findProduct=((productID)=>{
    return products.find((product)=> product.productID=== productID)
});
const product1 =findProduct(1);
console.log(product1);

// -------------------------------------Apply Discount-------------------------------

const discountModule=(()=>{
    const applyDiscount=(product,discount)=>{
        if(discount&& discount.type === "percentage"){
            product.price = product.price - (product.price *(discount.value/100));
        }else if(discount && discount.type ==="fixed"){
            product.price = product.price - discount.value;
        }
    };
    return {applyDiscount: applyDiscount}
})();

console.log("---apply Discount to product 2----");
const product2= findProduct(2);
discountModule.applyDiscount(product2,{type:"fixed",value:100});
displayProductDetails(product2);


// --------------------------Update Stock-------------------------

const updateStock=(productID, quantity)=>{
    const productUpdate=findProduct(productID);
    if(productUpdate){
        productUpdate.stock= quantity;
        console.log(`Updated Stock for the Product ${productID} to the stock ${quantity} `);
    }else{
        console.log(`Stock of the productID ${productID} is not Found`);
    }
};

console.log("-----Update Stock to product 3------");
updateStock(3,30);
displayProductDetails(findProduct(3));

// ---------------------------Adding a tag to the product--------------------

const addTagToProduct=(productId,tag)=>{
    const getProduct=findProduct(productId);
    if(getProduct){
        if(!getProduct.tags.includes(tag)){
            getProduct.tags.push(tag);
            console.log(`The tag "${tag}" is added to the product "${productId}" `)
        }else{
            console.log(`The tag "${tag}"is already exist...`);
        }
    }
    else{
        console.log(`The ProductID "${productId}" is not found!`);
    }
};

console.log("-----Adding tag to Product---------");
addTagToProduct(1,"Inbuild Stylus");
addTagToProduct(1,"Cameras");
displayProductDetails(findProduct(1));

// -------------------Removing a Product------------------------

const removeProduct=(productID)=>{
    const index=products.findIndex((p)=>p.productID===productID);
    if(index!== -1){
        products.splice(index,1);
        console.log(`Product with ID "${productID}" is Removed`);
    }else{
        console.log(`Product with ID "${productID}"is not found`);
    }
};

console.log("----Removed Products------");
removeProduct(3);
console.log("After Removal of Product");
products.forEach((product)=>displayProductDetails(product));

// ---------------Calculating Total Value-------------------

const calculateTotalValue=()=>{
    let totalValue = 0;
    for(const product of products){
        totalValue += product.price * product.stock;
    }
        console.log(`The total Value: ${totalValue}`);
};

console.log("----Calculating the total Value------");
calculateTotalValue();