const product = {
    productId: 14,
    productName:"Americano",
    quantityInStock: 50,
    unitPrice: "40 Baht",
    productDescription:{
        productBrand: ['KaoChong','NestCafe'],
        sizeOrQuantity: '16oz',
        tasteOrScent: 'Freshy',
        color: 'black',
        additionalDescription:'For Study',
    }
};
console.log(product.productDescription.productBrand, product.productDescription.unitPrice, product.productDescription.additionalDescription);