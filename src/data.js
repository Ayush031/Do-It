import appGrid from "/app-grid.svg";
import assign from "/assign.svg";
import bell from '/bell.svg';
import calendar1 from "/calendar1.svg";
import calendar2 from "/calendar2.svg";
import carbonPlan from "/carbon_plan.svg";
import colorTheme from "/colorTheme.svg";
import info from '/info.svg';
import logo from '/logo.svg';
import menu from "/menu.svg";
import repeat from '/repeat.svg'
import search from "/search.svg";
import star from "/star.svg";
import sum from '/sum.svg';
import task from '/task.svg';
import caretDown from '/caretDown.svg';
import profile from '/profile.png';

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
    caretDown,
    profile
};

export const sideBarRouteItems = [
    {
        title: "All Tasks",
        iconUrl: task,
        route: "/all-tasks"
    },
    {
        title: "Today",
        iconUrl: calendar1,
        route: "/today-tasks"
    },
    {
        title: "Important",
        iconUrl: star,
        route: "/important-tasks"
    },
    {
        title: "Planned",
        iconUrl: carbonPlan,
        route: "/planned-tasks"
    },
    {
        title: "Assigned to me",
        iconUrl: assign,
        route: "/assigned-tasks"
    },
];

export const navbarIcons = [
    {
        iconUrl: search,
        title: "search",
    },
    {
        iconUrl: appGrid,
        title: "gridflow",
    },
    {
        iconUrl: colorTheme,
        title: "colorTheme",
    },
];

export const TodayTodoNavIcons = [
    bell,
    repeat,
    calendar2
];