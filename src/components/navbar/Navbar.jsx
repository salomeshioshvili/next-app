import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

function Navbar() {
  const links = [
    {
      id: 1,
      title: "Home",
      url: '/'
    },
    {
      id: 2,
      title: "Portfolio",
      url: '/portfolio'
    },
    {
      id: 3,
      title: "Blog",
      url: '/blog'
    },
    {
      id: 4,
      title: "About",
      url: '/about'
    },
    {
      id: 5,
      title: "Contact",
      url: '/contact'
    },
    {
      id: 6,
      title: "Dashboard",
      url: '/dashboard'
    },
  ];

  return (
    <div className={styles.container}>
      <div>Main</div>
      <div className={styles.links}>
        {links.map((link) => (
          <Link href={link.url}>{link.title}</Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;