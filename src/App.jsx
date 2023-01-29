import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./layouts/navBar";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Footer from "./components/page/footer/footer";
import FooterWindow from "./components/page/footer/footerWindow";
import PageCategories from "./layouts/pageCategories";
import API from "./api";
import SearchPage from "./layouts/searchPage";
import Basket from "./layouts/basket";
import Favorite from "./layouts/favorite";

function App() {
    const [showFooterWindow, setShowFooterWindow] = useState(false);
    const uniqueCategories = API.uniqueCategories.uniqueCategories;
    const handleShowComponent = () => {
        setShowFooterWindow((current) => !current);
    };
    return (
        <div className="wrapper">
            <NavBar showFooterWindow={showFooterWindow} />
            <Switch>
                {uniqueCategories &&
                    uniqueCategories.map((cat) => (
                        <Route
                            key={cat}
                            path={`/${cat}/:productId?`}
                            render={(props) => (
                                <PageCategories name={cat} {...props} />
                            )}
                        />
                    ))}

                <Route path="/search-page" component={SearchPage} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/basket" component={Basket} />
                <Route path="/favorites" component={Favorite} />
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>

            <Footer showComponent={handleShowComponent} />
            {showFooterWindow && (
                <FooterWindow showComponent={handleShowComponent} />
            )}
        </div>
    );
}

export default App;
