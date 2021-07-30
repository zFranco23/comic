import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import HeroScreen from '../components/heroes/HeroScreen'
import MarvelScreen from '../components/marvel/MarvelScreen';
import DcScreen from '../components/dc/DcScreen';
import Navbar from '../components/ui/Navbar';
import SearchScreen from '../components/search/SearchScreen';
const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            {/* Navbar no tiene acceso a los props que tienen las rutas , como history , etc
                solo las rutas tienen este history , es decir el componente que se reenderiza
                por ruta .
            */}
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/search" component={SearchScreen} />
                    <Route exact path="/hero/:heroeId" component={HeroScreen} />

                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}

export default DashboardRoutes
