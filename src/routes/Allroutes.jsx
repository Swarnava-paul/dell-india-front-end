import { Routes,Route } from "react-router-dom";
import { Suspense } from "react";
import React from "react";

//pages
const Home = React.lazy(()=>import('../pages/Home'));
const Cart = React.lazy(()=>import('../pages/Cart'));
const MyAccount = React.lazy(()=>import('../pages/MyAccount'));
const SelectedSeries = React.lazy(()=>import('../pages/SelectedTypeLaptop'));
const PageNotFound = React.lazy(()=>import('../pages/PageNotFound'));
const ProductListingPage = React.lazy(()=>import('../pages/ProductListingPage'))

const AllRoutes = () => {
 
    return (
        <Suspense fallback={<h3 style={{textAlign:"center"}}>Loading ...</h3>}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/myAccount' element={<MyAccount/>}/>
                <Route path='/productListingPage' element={<ProductListingPage/>}/>
                <Route path="/selectedType/:type" element={<SelectedSeries/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </Suspense>
    )
}

export default AllRoutes;