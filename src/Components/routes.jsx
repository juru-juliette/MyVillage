
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import App from '../App';
import RelocationForm from './Relocation/Relocation_form';
import Visitor from './Visitors/visitor';
import MudLogin from './Mudugudu/mud_login';
import MudDashboard from './Dashboard/mud_dashboard';
import RelocaRequest from './Request/Reloca_request';
import Overview from './Overview/overview';

export default function routes() {
  return (
    <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='Relocation' element={<RelocationForm/>}></Route>
        <Route path='Visitor' element={<Visitor/>}></Route>
        <Route path='Mudugudu' element={<MudLogin/>}></Route>
        <Route path='Dashboard' element={<MudDashboard/>}></Route>
        <Route path='RelocaRequest' element={<RelocaRequest/>}></Route>
        <Route path='Overview' element={<Overview/>}></Route>
    </Routes>
  )
}

