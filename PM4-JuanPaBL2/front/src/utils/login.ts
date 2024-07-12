
import axios from 'axios';
import Cookies from 'js-cookie';

export const loginUser = async (formData: any, setToken: any, setError: any, setIsSuccess: any, setIsLoading:any) => {
  try {
    const response = await axios.post('http://localhost:3002/users/login', formData);
    const userData = {
      token: response.data.token,
      user: response.data.user
    };
    Cookies.set('token', userData.token, { expires: 7 })
    localStorage.setItem("userData", JSON.stringify(userData));
    setToken(response.data.token);
    setIsSuccess(true);
    setError(null);
    localStorage.setItem("LoginStatus", JSON.stringify(true));
  } catch (error:any) {
    console.log(error);
    setError(error.response.data.message);
    setIsSuccess(false);
  } finally {
    setIsLoading(false);
  }
};