import { GripIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Avatar from "./Avatar";

export default function HomeHeader() {
  return (
    <header>
      <div className="flex space-x-4 items-center justify-end p-4">
        <Link className="link" href={"https://mail.google.com"}>
          Gmail
        </Link>
        <Link className="link" href={"https://images.google.com"}>
          Images
        </Link>
        <GripIcon size={40} className="hover:bg-gray-100 rounded-full p-2" />
        <Avatar />
      </div>
    </header>
  );
}
