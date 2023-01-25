
import { connect, useDispatch } from 'react-redux';
import {useSelector} from "react-redux"
import Splashauth from '../SplahauthContinar/Splahauth2';
import Homenavigat2 from '../Home_navigatconti2/Home-navigat2';



const Auth_home2 =()=>{
  // const [Userlogin,setUserlogin]=useState(false)
  const Userlogin=useSelector(state => state.authReducer.user);
   



return(

   

<>

{/* <Home_navigation/> */}
{Userlogin ? <Homenavigat2/>: <Splashauth/>



}



</>



)
}


const  mapStateToProps = state => {
  return {
      user:state.authReducer.user,
  }

}

export default connect(mapStateToProps,null)( Auth_home2)