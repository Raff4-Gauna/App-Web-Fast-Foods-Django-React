import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import ExploreHeader from "components/explore/ExploreHeader";
// import ExploreList from "components/explore/ExploreList";
// import RegisterBusinessList from "components/explore/ExploreCardBusiness";
import DishCategories from "components/dish/DishCategories";
import RegisterBusinessList from "components/registerBusiness/RegisterBusinessList";

function Explore({
}){
    return(
        <FullWidthLayout>
            <ExploreHeader/>
            <RegisterBusinessList/>
            {/* <ExploreCard/> */}
            {/* <DishCategories/> */}
            {/* <RegisterBusinessList/> */}
            {/* <ExploreList/> */}
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
})

export default connect(mapStateToProps,{
})(Explore)