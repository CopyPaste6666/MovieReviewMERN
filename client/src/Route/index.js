import  React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import FooterComponent from  '../Components/Footer';
import HeaderComponent from '../Components/Header';
import HomeContainer from '../Container/Home';
import ContactContainer from '../Container/Contact';
import DetailsContainer from '../Container/Details';
import MoviesContainer from '../Container/Movies';
import TvSeriesContainer from '../Container/TVSeries';
import SearchContainer from '../Container/Search';
import AboutContainer from '../Container/About';
import SignUpContainer from '../Container/SignUp/Signup';
import SignInContainer from '../Container/SignUp/Login';
import SignOutContainer from '../Container/SignUp/Logout';


const  RouteComponent = ()=>{

    return (
        <>
            <BrowserRouter>
                <HeaderComponent />
                    <Routes>
                        <Route path="/" element={<HomeContainer />} />
                        <Route path='/about' element={<AboutContainer />} />
                        <Route path="/movies" element={<MoviesContainer />} />
                        <Route path="/series" element={<TvSeriesContainer />} />
                        <Route path="/search" element={<SearchContainer />} />
                        <Route path="/contact" element={<ContactContainer />} />
                        <Route path="/signup" element={<SignUpContainer />} />
                        <Route path="/signin" element={<SignInContainer />} />
                        <Route path="/signout" element={<SignInContainer />} />
                        <Route path="/details/:movieid/:mediatype" element={<DetailsContainer />} />
                    </Routes>        
                <FooterComponent />
            </BrowserRouter>
        </>
    )
}

export default RouteComponent;