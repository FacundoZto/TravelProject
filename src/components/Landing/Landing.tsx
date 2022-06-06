import {Fragment} from 'react';
// import styles from "./Landing.module.css";
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Services from '../Services/Services';
import Products from '../Products/Products';
import Details from '../Details/Details';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Landing = ():JSX.Element => {
    return(
        <Fragment>
            <Header/>
            <Home/>
            <About/>
            <Services/>
            <Products/>
            <Details/>
            <Contact/>
            <Footer/>
        </Fragment>
    )
}

export default Landing;