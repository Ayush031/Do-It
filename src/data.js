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
    appGrid: {
        light: appGrid,
        dark: "/app-grid.svg"
    },
    assign: {
        light: "/assign.svg",
        dark: "/assign.svg"
    },
    bell: {
        light: "/bell.svg",
        dark: "/bell.svg"
    },
    calendar: {
        light: "/calendar1.svg",
        dark: "/calendar2.svg"
    },
    carbonPlan: {
        light: "/carbon_plan.svg",
        dark: "/carbon_plan.svg"
    },
    colorTheme: {
        light: "/colorTheme.svg",
        dark: "/colorTheme.svg"
    },
    info: {
        light: "/info.svg",
        dark: "/info.svg"
    },
    logo: {
        light: "/logo.svg",
        dark: "/logo.svg"
    },
    menu: {
        light: "/menu.svg",
        dark: "/menu.svg"
    },
    repeat: {
        light: "/repeat.svg",
        dark: "/repeat.svg"
    },
    search: {
        light: "/search.svg",
        dark: "/search.svg"
    },
    star: {
        light: "/star.svg",
        dark: "/star.svg"
    },
    sum: {
        light: "/sum.svg",
        dark: "/sum.svg"
    },
    task: {
        light: "/task.svg",
        dark: "/task.svg"
    },
    caretDown: {
        light: "/caretDown.svg",
        dark: "/caretDown.svg"
    },
    profile: {
        light: "/profile.png",
        dark: "/profile.png"
    }
};


export const sideBarRouteItems = [
    {
        title: "All Tasks",
        iconUrl: icons.task.light,
        route: "/all-tasks"
    },
    {
        title: "Today",
        iconUrl: icons.calendar.light,
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