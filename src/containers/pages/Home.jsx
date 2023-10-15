import CTAHome from "components/home/CTAHome";
import HeaderHome from "components/home/HeaderHome";
import SecctionOffers from "components/home/SecctionOffers";
import SecctionWelcome from "components/home/SecctionWelcome";
import TestimonialsSlider from "components/home/TestimonialsSlider";

import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import PricesHome from "components/home/PricesHome";
import { useEffect } from "react"
import LanHome from "components/home/LanHome";



function Home(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <FullWidthLayout>
            <HeaderHome/>
            {/* <LanHome/> */}
            <SecctionWelcome/>
            <SecctionOffers/>
            <TestimonialsSlider/>
            {/* <PricesHome/> */}
            {/* <CTAHome/>   */}
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps,{
})(Home)