import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";

// import CreateArticleForm from "components/articles/crud/CreateArticleForm";

function Publish_Articles({
}){
    return(
        <FullWidthLayout>
            {/* <CreateArticleForm/> */}
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
})

export default connect(mapStateToProps,{
})(Publish_Articles)