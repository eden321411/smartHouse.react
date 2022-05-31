class Product{
    constructor(name){
      this.name = name;
      this.status ='red';
    }
  
    changeStatus(){
        if(this.status == 'red'){
            this.status = 'green';
        }
       else this.status = 'red';
    }
  }
  
  export default Product
