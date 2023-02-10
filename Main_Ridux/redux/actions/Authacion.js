

const updateUser = (user) => {
  // console.log('userrrrrrrrrrrrrr',user)
    return {
      type: 'UPDATE_USER',
      user,
      
      
    };
    
    
  };

  const api_store_redux_data = (redux_data) => {
    // console.log('.........redux_data.............',redux_data)
      return {
        type: 'REDUX_DATA',
        redux_data,
        
        
      };
      
      
    };

    const item_redux = ( new_item) => {
      // console.log('.........redux_item............',new_item)
        return {
          type: 'ITEM_REDUX',
          new_item,
          
          
        };
        
        
      };

    const image_redux = (redux_image) => {
      // console.log('.........redux_image ACTION.............',redux_image)
      return async(dispatch) => {
        dispatch({type: 'REDUX_PIC',
        redux_image,})
      }
        
        
        
      };


      const save_date_pikar = (save_date_redux) => {
        // console.log('.........save_date_redux.............',save_date_redux)
          return {
            type: 'SAVE_DATE',
            save_date_redux,
            
            
          };
        };
        const save_date_pikar_out = (save_date_redux_out) => {
          console.log('.........save_date_redux.............',save_date_redux_out)
            return {
              type: 'SAVE_DATE_OUT',
              save_date_redux_out,
              
              
            };
          };
  
      const removeImage = () => {
        return {
          type: 'REMOVE_IMAGE',
          redux_image:null
        };
      };
  
  const removeUser = () => {
    return async(dispatch) => {
      dispatch( {
        type: 'REMOVE_USER',
        user:''
      })
    }
    // return {
    //   type: 'REMOVE_USER',
    //   user:''
    // };
  };


  
  export {updateUser, removeUser,api_store_redux_data,image_redux,removeImage,item_redux,save_date_pikar,save_date_pikar_out};
  