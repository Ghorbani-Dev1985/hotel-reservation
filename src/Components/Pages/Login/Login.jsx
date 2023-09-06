import { useUser } from "../../../Context/UsersContext";

const Login = () => {
    const {isLogin , setIsLogin} = useUser();
    return ( 
      {isLogin} , {setIsLogin}
     );
}
 
export default Login;