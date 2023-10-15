import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
// import ArticlesList from "components/articles/ArticlesList";
// import ArticlesHeader from "components/articles/ArticlesHeader";
// import CreateArticleForm from "components/articles/crud/CreateArticleForm";
import ExploreHeader from "components/explore/ExploreHeader";
import ExploreList from "components/explore/ExploreList";
import ExploreCard from "components/explore/ExploreCard";
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