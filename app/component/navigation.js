import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/cabins">cabins</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/account">Account</Link>
        </li>
      </ul>
    </nav>
  );
}
