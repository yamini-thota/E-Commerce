import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import { ClickableImage } from './ClickableImage';
import { SignUpp } from './SignUp';
import { Login } from './Login';
import AboutUs from './AboutUs';
import { Discount } from './Discount';
import {AllProducts} from './AllProducts';
import Cart from './Cart'

function Routing() {
    return (
        <div>

            <Routes>
                <Route path='/' element={<Home />} />

                <Route path="/Shop" element={<Shop />} />
                <Route path="/Discount" element={<Discount/>}/>
                <Route path="/product/:id" element={<ClickableImage />} />

                <Route path="/SignUp" element={<SignUpp />} />
                <Route path="/Login" element={<Login />} />
                <Route path='/AboutUs' element={<AboutUs />} />
                <Route path='/AllProducts' element={<AllProducts/>}/>
                <Route path='/Cart' element={<Cart/>}/>
            </Routes>

        </div>
    );
}

export default Routing;
