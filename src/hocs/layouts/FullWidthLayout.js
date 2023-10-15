//uso de componentes de Navbar y Footer

import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import { connect } from "react-redux"
import {motion} from 'framer-motion'

import { check_authenticated, load_user, refresh } from "redux/actions/auth"
import { useEffect } from "react"



const FullWidthLayout = ({ children, refresh, check_authenticated, load_user }) => {

    useEffect(() => {
        refresh()
        check_authenticated()
        load_user()
    }, []);

    return(
        <motion.div
        initial={{opacity: 0, transition: {duration: 0.5}}}
        animate={{opacity: 1}}
        exit={{opacity: 0, transition: {duration: 0.5}}}
        >
        <>
        <Navbar/>
        {children}
        <Footer/>
        </>
        </motion.div>
    )
}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps,{
    check_authenticated,
    load_user,
    refresh
})(FullWidthLayout)