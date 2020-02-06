((window)=>{

  const myLibrary = () => {

      //execute code here

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
  }

  if(typeof(window.api) === 'undefined'){
      window.api = myLibrary();
  }

})(window); 