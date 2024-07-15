"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/header.module.css";
import ExtLink from "./ext-link";

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: "Home", page: "/" },
  { label: "Blog", page: "/blog" },
  { label: "Contact", page: "/contact" },
  { label: "Source Code", link: "https://github.com/ijjk/notion-blog" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link
                href={page}
                className={pathname === page ? "active" : undefined}
              >
                {label}
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  );
}
