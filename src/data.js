import appGrid from "../public/app-grid.svg";
import assign from "../public/assign.svg";
import bell from '../public/bell.svg';
import calendar1 from "../public/calendar1.svg";
import calendar2 from "../public/calendar2.svg";
import carbonPlan from "../public/carbon_plan.svg";
import colorTheme from "../public/colorTheme.svg";
import info from '../public/info.svg';
import logo from '../public/logo.svg';
import menu from "../public/menu.svg";
import repeat from '../public/repeat.svg'
import search from "../public/search.svg";
import star from "../public/star.svg";
import sum from '../public/sum.svg';
import task from '../public/task.svg';
import caretDown from '../public/caretDown.svg';


export const icons = {
    appGrid,
    assign,
    bell,
    calendar1,
    calendar2,
    carbonPlan,
    info,
    logo,
    menu,
    repeat,
    search,
    star,
    sum,
    task,
    colorTheme,
    caretDown
};

export const sideBarRouteItems = [
    {
        title: "All Tasks",
        iconUrl: task
    },
    {
        title: "Today",
        iconUrl: calendar1
    },
    {
        title: "Important",
        iconUrl: star
    },
    {
        title: "Planned",
        iconUrl: carbonPlan
    },
    {
        title: "Assigned to me",
        iconUrl: assign
    },
];

export const navbarIcons = [
    {
        iconUrl: search,
        title: "search"
    },
    {
        iconUrl: appGrid,
        title: "gridflow"
    },
    {
        iconUrl: colorTheme,
        title: "colorTheme"
    },
];

export const TodayTodoNavIcons = [
    search,
    repeat,
    calendar2
];