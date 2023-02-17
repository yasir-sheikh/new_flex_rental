
const  data ={

  
  user:null,
 redux_data:null


}
const  images ={

  
  user:null,
 redux_image:""


}
const  items ={

  
  user:null,
 new_item:null


}
const  date ={

  
  user:null,
save_date_redux:null



}
const  date_out ={

  
  user:null,
  save_date_redux_out:null



}
const  item ={

  
  user:null,
  item_data:null



}



const reducer = (state = {...data,...images,...items,...date,...date_out,...item}, action) => {
  // console.log("userrfvvvvvvvvvvvvvvvvv",action)
    switch (action.type) {
      case 'UPDATE_USER': {
        return {...state, user: action.user};
        
        
      }
      

      case 'REDUX_DATA': {
        return {...state, redux_data: action.redux_data};
        
        
      }
      case 'ITEM_REDUX': {
        return {...state, new_item: action.new_item};
        
        
      }
      
      case 'REDUX_PIC': 

        // console.log(redux_images,'reduser..........')
        // return {...state, redux_image: action.redux_image};
        return{
          ...state,
          redux_image:action.redux_image
        }
        case 'ITEM_DATA': 
           
        // console.log(save_date_redux,'reduser..........')
        return{
          ...state,
          item_data:action.item_data

        }
        case 'SAVE_DATE': 
        

        // console.log(save_date_redux,'reduser..........')
        return{
          ...state,
          save_date_redux:action.save_date_redux
        }
        
        case 'SAVE_DATE_OUT': 
        return{
          ...state,
          save_date_redux_out:action.save_date_redux_out
        }
        
        
        
        
      
      case 'REMOVE_IMAGE': {
        return {...state, redux_image: null};
      }

      case 'REMOVE_USER': {
        return {...state, user: null};
      }
      default: {
        return state;
      }
    }
    
  };
 
  
  export default reducer;
  