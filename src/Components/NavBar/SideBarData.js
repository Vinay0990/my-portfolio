import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const SideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Education",
    path: "/education",
    icon: <IoIcons.IoIosBook />,
    cName: "nav-text",
  },
  {
    title: "Experience",
    path: "/experience",
    icon: <MdIcons.MdWork />,
    cName: "nav-text",
  },
  {
    title: "Project",
    path: "/project",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "More",
    path: "/more",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
