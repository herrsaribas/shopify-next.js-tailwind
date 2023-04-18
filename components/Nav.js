import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <header className="border-b sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 m-auto lg:max-w-screen-xl">
        <Link href="/" passHref legacyBehavior>
          <a className="cursor-pointer">
            <span className="text-lg pt-1 font-bold">Shopify + Nextjs</span>
          </a>
        </Link>
        <a className="text-md font-bold cursor-pointer">Cart</a>
      </div>
    </header>
  );
}
