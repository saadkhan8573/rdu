import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import AddData from './AddData'
import Error from './Error'
import Search from './Search'
import Slider from './crousel/Slider'

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/todo" component={AddData}/>
                <Route exact path="/search" component={Search} />
                <Route exact path="/slider" component={Slider} />
                <Route component={Error} />
            </Switch>
        </>
    )
}

export default Routes
