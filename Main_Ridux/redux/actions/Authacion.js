

const updateUser = (user) => {
  console.log('userrrrrrrrrrrrrr',user)
    return {
      type: 'UPDATE_USER',
      user,
      
      
    };
    
    
  };
  
 
  
  const removeUser = () => {
    return {
      type: 'REMOVE_USER',
      user:''
    };
  };


  
  export {updateUser, removeUser};
  