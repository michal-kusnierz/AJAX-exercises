(function(window){

  const catalog = [];
  
      //function definitions go here
    const createRandomProduct = () => {
      const typeArray = ['Electronics','Book','Clothing','Food'];
      const price = (Math.random()*500).toFixed(2) 
      const type = typeArray[Math.floor(Math.random()*4)];
  
      return {price:price, type:type};                
    }

    const createRandomCatalog = num => {
      // const catalog = [];
      for (let i = 0; i < num; i++){
          const obj = createRandomProduct();
          catalog.push({id:i,price:obj.price,type:obj.type});
      }
      return catalog;
    }

    const searchAllProducts = () => {
      const promise = new Promise((resolve, reject) => {
  
          setTimeout(() => {
              resolve(catalog);
          },1000);
  
      });
      return promise;
    }

    const searchProductById = id => {

      const promise = new Promise((resolve,reject) => {
        let i = 0;
        setTimeout(() => {
          while (i < catalog.length){
            if (catalog[i].id == id){                        
                resolve({id:id,price:catalog[i].price,type:catalog[i].type});
            }
            i++;
          }
          reject("Invalid ID: " + id);
        },1000);
      });
    return promise;
    }

    const searchProductsByType = type => {

      const promise = new Promise((resolve,reject) => {
        let i = 0;
        const typeArray = [];
        const possibleTypes = ['Electronics','Book','Clothing','Food'];
        if(!possibleTypes.includes(type)){
            reject("Invalid Type: " + type)
        } else {
          setTimeout(() => {
            while (i < catalog.length){
              if (catalog[i].type == type){
                  typeArray.push({id:catalog[i].id,price:catalog[i].price,type:catalog[i].type});
              }
              i++;
            }
            resolve(typeArray);
          },1000);
        }
      });
    return promise;
    }

    const searchProductsByPrice = (price,difference) => {
      const promise = new Promise(function(resolve,reject){
          let i = 0;
          const priceArray = [];
          if(!isFinite(price)){
              reject("Invalid Price: " + price)
          }else{
            setTimeout(() => {
              while (i < catalog.length){
                if (Math.abs(catalog[i].price - price) < difference){
                    priceArray.push({id:catalog[i].id,price:catalog[i].price,type:catalog[i].type});
                }
                i++;
              }
              resolve(priceArray);
            },1000);
          }
      });
    return promise;
    }

    function myLibrary() {

    //execute code here
    const catalog = createRandomCatalog(100);

    return {
        searchProductById: searchProductById,
        searchProductsByPrice: searchProductsByPrice,
        searchProductsByType: searchProductsByType,
        searchAllProducts: searchAllProducts
    }
  
  }

  
  if(typeof(window.api) === 'undefined'){
      window.api = myLibrary();
  }

})(window); 