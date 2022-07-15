import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Header from "./components/Header/Header.component";
import "./App.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homepage/homepage.component";
import CheckoutPage  from "./pages/checkoutPage/checkoutPage.component";
import Shop from "./pages/shop/shop.component";
import Contact from "./pages/Contact/Contact.component";
import SignInandSignUp from "./pages/SignInandSignUp/SignInandSignUp.component";
import { auth, createUserProfileDocument , addCollectionAndDocuments} from "./firebase/firebase.utils";
import { setCurrentUser } from "./reduxs/user/user.actions";
import { currentUserSelector  } from "./reduxs/user/user.selectors";
import { selectCollectionsForPreview } from "./reduxs/shop/shop.selector";
import { Error } from "./pages/Error/Error.component";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser,collectionArray } = this.props;
    const {currentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.log(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
      addCollectionAndDocuments('collection',collectionArray)

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop/*" element={<Shop/>} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<Error />} />
          <Route
            exact
            path="/signin"
            element={!this.props.currentUser? <SignInandSignUp />: <Navigate to='/' />}
          />
        </Routes>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser : currentUserSelector,
  collectionArray : selectCollectionsForPreview
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
