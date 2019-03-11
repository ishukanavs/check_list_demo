// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";

import Typography from "views/personal/personal.jsx";
import Icons from "views/Icons/team.jsx";

import NotificationsPage from "views/org/org.jsx";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
   
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
 
  {
    path: "/personal",
    name: "personal checklist",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/team",
    name: "team checklist",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  
  {
    path: "/org",
    name: "organisation",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  
];

export default dashboardRoutes;
