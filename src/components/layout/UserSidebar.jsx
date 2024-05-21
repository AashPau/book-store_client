import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";

import { FaBook } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { FaHistory } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiAdminFill } from "react-icons/ri";

const sideLinks = [
  {
    icon: <FaBook />,
    title: "Book",
    to: "/admin/books",
  },
  {
    icon: <PiStudent />,
    title: "Students",
    to: "/admin/students",
  },
  {
    icon: <FaHistory />,
    title: "All Burrows",
    to: "/admin/all-burrows",
  },
  {
    icon: <CgProfile />,
    title: "Profile",
    to: "/admin/profile",
  },
  {
    icon: <RiAdminFill />,
    title: "Admins",
    to: "admin/admins",
  },
];

export const UserSidebar = () => {
  return (
    <Stack gap={1}>
      {sideLinks.map(({ title, to, icon }) => {
        <Link key={title} to={to} className="p-2 nav-link">
          {icon}
          {title}
        </Link>;
      })}
    </Stack>
  );
};
