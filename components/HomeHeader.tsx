import { Grip } from "lucide-react";
import Link from "next/link";
import React from "react";
import Avatar from "./Avatar";

export default function HomeHeader() {
  return (
    <header className="flex items-center space-x-4 justify-end px-4 py-2 text-sm font-semibold">
      <Link href={"https://mail.google.com"} className="link text-gray-500">
        Gmail
      </Link>
      <Link href={"https://image.google.com"} className="link text-gray-500">
        Images
      </Link>
      <Grip
        size={40}
        className="hover:bg-gray-200 rounded-full p-2 text-gray-500"
      />
      <Avatar />
    </header>
  );
}
