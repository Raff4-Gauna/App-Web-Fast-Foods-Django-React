import LoadingCard from "components/loaders/LoadingCard";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { get_business } from "redux/actions/businesses";

function RegisterBusinessDetail({
    get_business,
    business
}){
    const { slug } = useParams();

    useEffect(() => {
        get_business(slug);
      }, [get_business, slug]);
      
    return(
        <FullWidthLayout>
            {
                business ?
                <div className="relative py-16 bg-white overflow-hidden">
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="text-lg max-w-prose mx-auto">
                <h1>
                    <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                    {business.category.name}
                    </span>
                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    {business.name}
                    </span>
                </h1>
                {/* <p className="mt-8 text-xl text-gray-500 leading-8">
                    {business.excerpt}
                </p> */}
                </div>

                <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                <p>
                    {business.description}
                </p>
                
                </div>
            </div>
            </div>
            :
            <LoadingCard/>
            }
            
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
    business: state.businesses.business
})

export default connect(mapStateToProps,{
    get_business
})(RegisterBusinessDetail)