import React, { Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import AddItem from "../Components/AddItem/AddItem";
import Loader from "../Components/Common/Loader";
import Question from "../Components/Common/Question";
import Dashboard from "../Components/Dashboard/Dashboard";
import FindSimilarity from "../Components/FindSimilarity/FindSimilarity";
import Header from "../Components/Header/Header";
import Help from "../Components/Help/Help";
import PlaceOrder from "../Components/PlaceOrder/PlaceOrder";
import ViewOrders from "../Components/ViewOrders/ViewOrders";
import CustomerReviews from "../Components/CustomerReviews/CustomerReviews"
import Visualization from "../Components/Visualization/Visualization";
import { getUserInfo } from "../utils/AuthUtils";

const DefaultLayout = ({ children }) => (
    <>
        <Header />
        <div className="text-top-space">
            {children}
        </div>
    </>
);

const MainRoutes = () => {

    return (
        <Switch>
            <Suspense fallback={<Loader />}>
                {/* <Redirect exact from="/" to="/dashboard" /> */}

                {getUserInfo()?.isQuestion ? (
                    <>
                        <Route
                            exact={true}
                            path="/"
                            component={Question}
                        />
                        <Redirect to="/" />
                    </>
                ) : (
                    <>
                        <RouteWrapper exact={true} path="/" component={Dashboard} layout={DefaultLayout} />
                        <RouteWrapper exact={true} path="/myOrders" component={ViewOrders} layout={DefaultLayout} />
                        <RouteWrapper exact={true} path="/placeOrder" component={PlaceOrder} layout={DefaultLayout} />
                        <RouteWrapper exact={true} path="/addItem" component={AddItem} layout={DefaultLayout} />
                        <RouteWrapper exact={true} path="/help" component={Help} layout={DefaultLayout} />
                        <RouteWrapper exact={true} path="/findSimilarity" component={FindSimilarity} layout={DefaultLayout} />
                        <RouteWrapper exact={true} path="/customerFeedback" component={CustomerReviews} layout={DefaultLayout} />
                        <RouteWrapper exact={true} path="/visualization" component={Visualization} layout={DefaultLayout} />
                    </>
                )}
            </Suspense>
        </Switch>
    );
};

function RouteWrapper({ component: Component, layout: Layout, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) => (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        )}
      />
    );
  }

export default MainRoutes;
