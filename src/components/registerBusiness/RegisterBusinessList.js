import { useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { get_business_list } from "redux/actions/businesses"
import { useParams } from "react-router-dom";
import LoadingCard from "components/loaders/LoadingCard";


function RegisterBusinessList({
  get_business_list,
  businesses
}) {

  useEffect(() => {
    get_business_list()
  }, [])

  return (
    <div>
      {businesses && businesses.length > 0 ? (
        <div className="bg-white">
          <div className="py-8 sm:py-10 xl:max-w-7xl xl:mx-auto xl:px-8">

            <div className="mt-4 flow-root">
              <div className="-my-2">
                <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
                  <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                    {
                      businesses ? businesses.map(category => (
                        <Link
                          // key={category.slug} 
                          // to={`/business/${category.slug}`} 
                          className="relative w-56 h-40 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                        >
                          <span aria-hidden="true" className="absolute inset-0">
                            <img src={category.image_url} alt={category.name} className="w-full h-full object-center object-cover" />
                          </span>
                          <span
                            aria-hidden="true"
                            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                          />
                          {/* <span className="relative mt-auto text-center text-xl font-bold text-white">{category.location}</span> */}
                          <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                        </Link>
                      )) : <></>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoadingCard />
      )}
    </div>

  )
}

const mapStateToProps = state => ({
  businesses: state.businesses.businesses
})

export default connect(mapStateToProps, {
  get_business_list,
})(RegisterBusinessList)
