import { RoutesString } from "../../Modules/routesString";
import PageErr from "../404/PageErr";
import Contact from "../Contact/contact";
import Home from "../Home/Home";

const pages = [

    {
        path: RoutesString.PageNotFound,
        component: PageErr,
        exact: true,
    },

    /* Home */
    {
        path: RoutesString.Home,
        component: Home,
        exact: true,
    },
    // 
    {
        path: RoutesString.Contact,
        component: Contact,
        exact: true,
    },

];

export default pages;

