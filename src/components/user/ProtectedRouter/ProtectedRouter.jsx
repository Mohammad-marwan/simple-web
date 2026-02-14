import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRouter() {
  const token = localStorage.getItem('userToken');
    if(!token){
        return <Navigate to="/Login"/>
    }
  return children;
}
