import {useSelector} from "react-redux";

export default (config) => {
  // Do something before request is sent
  // const {token} = useSelector(state => state.auth.token); // TODO Домашка! Как сюда достучаться?
  const token = window.localStorage.getItem('token');
  config.headers['Authorization'] = `Bearer ${token}`;
  return config;
}