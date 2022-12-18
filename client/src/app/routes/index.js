//NPM
import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom"
//  Components
import { Home, Search } from "../pages"

export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/home" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="*" element={<Navigate to="/home" replace={true} />} />
            </Switch>
        </BrowserRouter>
    )
} 