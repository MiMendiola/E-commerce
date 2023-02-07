import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import RecoveryPass from '../pages/RecoveryPass';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout> 
                <Routes>    
                    {/* We call the element with the specify working path and is going to search to that exact route 
                    */}
                    <Route exact index path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/recoveryPassword" element={<RecoveryPass />} />
                    <Route exact path="/send-email" component={<SendEmail />} />
					<Route exact path="/new-password" component={<NewPassword />} />
					<Route exact path="/account" component={<MyAccount />} />
					<Route exact path="/signup" component={<CreateAccount />} />
					<Route exact path="/checkout" component={<Checkout />} />
					<Route exact path="/orders" component={<Orders />} />
					<Route path="*" component={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;