// import appGrid from "/app-grid.svg";
// import assign from "/assign.svg";
// import bell from '/bell.svg';
// import calendar1 from "/calendar1.svg";
// import calendar2 from "/calendar2.svg";
// import carbonPlan from "/carbon_plan.svg";
// import colorTheme from "/colorTheme.svg";
// import info from '/info.svg';
// import logo from '/logo.svg';
// import menu from "/menu.svg";
// import repeat from '/repeat.svg'
// import search from "/search.svg";
// import star from "/star.svg";
// import sum from '/sum.svg';
// import task from '/task.svg';
// import caretDown from '/caretDown.svg';
// import profile from '/profile.png';


export const icons = {
    logo: "/logo.svg",
    profile: "/profile.png",
    gridType: {
        list: {
            light: "/listLight.svg",
            dark: "/listDark.svg"
        },
        appGrid: {
            light: "/appGridLight.svg",
            dark: "/appGridDark.svg"
        },
    },
    assign: {
        light: "/assignLight.svg",
        dark: "/assignDark.svg"
    },
    bell: {
        light: "/bellLight.svg",
        dark: "/bellDark.svg"
    },
    calendar: {
        light: "/calendarLight.svg",
        dark: "/calendarDark.svg"
    },
    carbonPlan: {
        light: "/carbon_planLight.svg",
        dark: "/carbon_planDark.svg"
    },
    themeMode: {
        light: "/themeLight.svg",
        dark: "/themeDark.svg"
    },
    info: "/info.svg",
    menu: {
        light: "/menuLight.svg",
        dark: "/menuDark.svg"
    },
    repeat: {
        light: "/repeatLight.svg",
        dark: "/repeatDark.svg"
    },
    search: {
        light: "/searchLight.svg",
        dark: "/searchDark.svg"
    },
    star: {
        filled: {
            light: "/starFilledLight.svg",
            dark: "/starFilledDark.svg"
        },
        outline: {
            light: "/starLight.svg",
            dark: "/starDark.svg"
        }
    },
    sum: {
        light: "/sumLight.svg",
        dark: "/sumDark.svg"
    },
    task: {
        light: "/taskLight.svg",
        dark: "/taskDark.svg"
    },
    caretDown: {
        light: "/caretDownLight.svg",
        dark: "/caretDownDark.svg"
    },
};


export const sideBarRouteItems = [
    {
        title: "All Tasks",
        iconUrl: {
            light: icons.task.light,
            dark: icons.task.dark
        },
        route: "/all-tasks"
    },
    {
        title: "Today",
        iconUrl: {
            light: icons.calendar.light,
            dark: icons.calendar.dark
        },
        route: "/today-tasks"
    },
    {
        title: "Important",
        iconUrl: {
            light: icons.star.outline.light,
            dark: icons.star.outline.dark
        },
        route: "/important-tasks"
    },
    {
        title: "Planned",
        iconUrl: {
            light: icons.carbonPlan.light,
            dark: icons.carbonPlan.dark
        },
        route: "/planned-tasks"
    },
    {
        title: "Assigned to me",
        iconUrl: {
            light: icons.assign.light,
            dark: icons.assign.dark
        },
        route: "/assigned-tasks"
    },
];


export const TodayTodoNavIcons = [
    icons.bell,
    icons.repeat,
    icons.calendar
];