import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Bins from './components/Bins/Bins'
import Shelves from './components/Shelves/Shelves'
import Create from './components/Create/Create'
import Items from './components/Items/Items'


export default (
    <Switch>
        <Route exact path ='/' component={Shelves}/>
        <Route path ='/bins/:bins' component={Bins}/>
        <Route path ='/create/:bin' component={Create}/>
        <Route path ='/bin/:item' component={Items}/>
    </Switch>
)