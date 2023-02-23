import About from '../pages/About';
import Active from '../pages/Active';
import Block from '../pages/Block';
import { Children } from '../pages/Children';
import City from '../pages/City';
import Command from '../pages/Command';
import Contact from '../pages/Contact';
import Country from '../pages/Country';
import Edit from '../pages/Edit';
import Friend from '../pages/Friend';
import Home from '../pages/Home';
import Login from '../pages/Login';
import { NotFound } from '../pages/NotFound';
import Page21 from '../pages/Page21';
import Page22 from '../pages/Page22';
import { Page23 } from '../pages/Page23';
import Page24 from '../pages/Page24';
import Page25 from '../pages/Page25';
import Page26 from '../pages/Page26';
import { Page27 } from '../pages/Page27';
import Page28 from '../pages/Page28';
import Page29 from '../pages/Page29';
import Page30 from '../pages/Page30';
import Parents from '../pages/Parents';
import Principal from '../pages/Principal';
import Register from '../pages/Register';
import State from '../pages/State';
import Status from '../pages/Status';
import { Student } from '../pages/Student';
import Teacher from '../pages/Teacher';
import Village from '../pages/Village';

export const routes = [
            {
                path:"/",
                element:<Home />
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/register",
                element:<Register />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/teacher",
                element:<Teacher />
            },
            {
                path:"/student",
                element:<Student />
            },
            {
                path:"/principal",
                element:<Principal />
            },
            {
                path:"/parents",
                element:<Parents />
            },
            {
                path:"/children",
                element:<Children />
            },
            {
                path:"/friend",
                element:<Friend />
            },
            {
                path:"/country",
                element:<Country />
            },
            {
                path:"/city",
                element:<City />
            },
            {
                path:"/state",
                element:<State />
            },
            {
                path:"/village",
                element:<Village />
            },
            {
                path:"/block",
                element:<Block />
            },
            {
                path:"/active",
                element:<Active />
            },
            {
                path:"/status",
                element:<Status />
            },
            {
                path:"/command",
                element:<Command />
            },
            {
                path:"/edit",
                element:<Edit />
            },
            {
                path:"/page21",
                element:<Page21 />
            },
            {
                path:"/page22",
                element:<Page22 />
            },
            {
                path:"/page23",
                element:<Page23 />
            },
            {
                path:"/page24",
                element:<Page24 />
            },
            {
                path:"/page25",
                element:<Page25 />
            },
            {
                path:"/page26",
                element:<Page26 />
            },
            {
                path:"/page27",
                element:<Page27 />
            },
            {
                path:"/page28",
                element:<Page28 />
            },
            {
                path:"/page29",
                element:<Page29 />
            },
            {
                path:"/page30",
                element:<Page30 />
            },
            {
                path:"*",
                element:<NotFound />
            },
        ];