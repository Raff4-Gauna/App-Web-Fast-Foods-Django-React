import FullWidthLayout from "hocs/layouts/FullWidthLayout";

import { useParams } from "react-router";
import { useState } from "react";
import { connect } from "react-redux";
import { activate } from "redux/actions/auth";
import { Navigate } from "react-router";
import { ColorRing } from "react-loader-spinner";



const Activate = ({ 
  activate, 
  loading 
}) => {
  const params = useParams();
  const [activated, setActivated] = useState(false);

  const activate_account = () => {
    const uid = params.uid
    const token = params.token
    activate(uid, token)
    setActivated(true)
  };

  if (activated && !loading) 
  return <Navigate to="/" />;

  return (
    <FullWidthLayout>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3x1 mx-auto">
          {loading ? 
            <button className="inline-flex mt-14 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
              />
            </button>: 
            <button
              onClick={activate_account}
              className="inline-flex mt-14 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              ACTIVATION
            </button>
          }
        </div>
      </div>
    </FullWidthLayout>
  );
};

const mapStateToProps = (state) => ({
  loading: state.Auth.loading
});

export default connect(mapStateToProps, {
  activate,
})(Activate);


//2:09