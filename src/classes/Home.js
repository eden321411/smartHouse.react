class MyHome{
    constructor(){
      this.rooms=[];
    }
  
    addRoom(room){
      this.rooms=[...this.rooms,room]
    }

    getRoomIndexByName(name){
        for (let i = 0; i < this.rooms.length; i++) {
            if (this.rooms[i].name == name){
                return i
            };
        }
    }

    checkIfRoomNameIsAllreadyTaken(roomName){
      let ans  = false ;
        for (let index = 0; index < this.rooms.length; index++) {
        if ( this.rooms[index].name == roomName)
            ans = true            
        }
       return ans 
    }
  }
  export default MyHome
