import React,{useState,useEffect} from 'react'
//---------css file import-----
import './loginScreen.css'
//---------Redux---------------
import { useDispatch, useSelector } from 'react-redux'

// ------third party import ------
import axios from 'axios'
import { useNavigate } from "react-router-dom";

// import { loginUser } from '../../../store/slices/authSlice';

const LoginScreen = () => {
  
  return (
    <div className="login_container">
        <div className='login_dashboard'>
            <div className='login_dashboard_left'></div>
            <div className='login_dashboard_right'>

          login

            </div>
        </div>
    </div>
  )
}

export default LoginScreen