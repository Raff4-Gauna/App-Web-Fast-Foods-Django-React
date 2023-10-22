import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import ExploreHeader from "components/explore/ExploreHeader";
import ExploreList from "components/explore/ExploreList";
import ExploreCardBusiness from "components/explore/ExploreCardBusiness";

function Explore({
}){
    return(
        <FullWidthLayout>
            <ExploreHeader/>
            {/* <ExploreCard/> */}
            
            <ExploreCardBusiness/>
            <ExploreList/>
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
})

export default connect(mapStateToProps,{
})(Explore)