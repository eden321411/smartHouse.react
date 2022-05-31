class Room{
    constructor(type, name, color){
      this.type = type;
      this.name = name;
      this.color = color;
      this.products = [];
    }
  
    addProduct(product){
      this.products=[...this.products,product]
    }

    containsProduct(productName){
        let ans  = false ;
        for (let index = 0; index < this.products.length; index++) {
        if ( this.products[index].name == productName)
            ans = true            
        }
       return ans 
    }
    
}

  export default Room
