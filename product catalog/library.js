((window)=>{

  const myLibrary = () => {

    //execute code here
    const catalog = createRandomCatalog(100);

    return {
        searchProductById: searchProductById,
        searchProductsByPrice: searchProductsByPrice,
        searchProductsByType: searchProductsByType,
        searchAllProducts: searchAllProducts
    }

      //function definitions go here
    const createRandomProduct = () => {
      const typeArray = ['Electronics','Book','Clothing','Food'];
      const price = (Math.random()*500).toFixed(2) 
      const type = typeArray[Math.floor(Math.random()*4)];
  
      return {price:price, type:type};                
    }
    
    const createRandomCatalog = num => {
      const catalog = [];
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

  }

  if(typeof(window.api) === 'undefined'){
      window.api = myLibrary();
  }

})(window); 