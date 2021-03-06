import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppNavbar from '../components/AppNavbar';
import { Container } from 'reactstrap';
import { Redirect, Route, Switch } from 'react-router-dom';
import PostCardList from './nomalRoute/PostCardList';
import PostWrite from './nomalRoute/PostWrite';
import PostDetail from './nomalRoute/PostDetail';
import Search from './nomalRoute/Search';
import CategoryResult from './nomalRoute/CategoryResult';

const MyRouter = () => {

    return (
        <Fragment>
            <AppNavbar/>
            <Header/>
            <Container style={{ minHeight : "90vh" }}>
                <Switch>
                    <Route path = "/" exact component = {PostCardList}/>
                    <Route path = "/post" exact component = {PostWrite}/>
                    <Route path = "/post/:id" exact component = {PostDetail}/>
                    <Route path = "/post/category/:categoryName" exact component = {CategoryResult}/>
                    <Route path = "/search/:searchTerm" exact component = {Search}/>
                    <Redirect from ="*" to ="/" />
                </Switch>
            </Container>
            <Footer/>
        </Fragment>
    );
}

export default MyRouter;