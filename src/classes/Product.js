class Product{
    constructor(name){
      this.name = name;
      this.status ='rgb(247, 82, 82)';
    }
  
    changeStatus(){
        if(this.status == 'rgb(247, 82, 82)'){
            this.status = 'rgb(95, 179, 95)';
        }
       else this.status = 'rgb(247, 82, 82)';
    }
  }
  
  export default Product
