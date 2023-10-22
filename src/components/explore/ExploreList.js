import LoadingCard from "components/loaders/LoadingCard";
import { useEffect } from "react";
import { connect } from "react-redux";
// import { get_articles_list, get_articles_list_page } from "redux/actions/articles";
import ExploreCard from "./ExploreCard";
import SmallSetPagination from "components/pagination/SmallSetPagination";

function ExploreList({
    articles_list,
    // get_articles_list,
    // get_articles_list_page,
    // count
}){

    useEffect(()=>{
        // get_articles_list()
    },[])

    return(
        <div>
            {
                articles_list ?
                <>
                <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                        <div className="absolute inset-0">
                            <div className="bg-white h-1/3 sm:h-2/3" />
                        </div>
                        <div className="relative max-w-7xl mx-auto">
                            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                                {
                                    articles_list.map(post=>(
                                        <ExploreCard/>
                                    ))
                                }
                                
                            </div>
                            {/* <SmallSetPagination get_articles_list_page={get_articles_list_page} articles_list={articles_list} count={count}/> */}
                        </div>
                </div>
                
                
                </>
                :
                <LoadingCard/>
            }

        </div>
    )
}

const mapStateToProps = state =>({
    // articles_list: state.articles.articles_list,
    // count: state.articles.count
})

export default connect(mapStateToProps,{
    // get_articles_list,
    // get_articles_list_page
})(ExploreList)