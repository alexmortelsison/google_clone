import Link from "next/link";
import React from "react";
import Avatar from "./Avatar";
import { GripIcon } from "lucide-react";

export default function HomeHeader() {
  return (
    <div className="flex text-sm justify-end items-center space-x-4 px-4 py-4">
      <Link className="link" href={"https://mail.google.com"}>
        Gmail
      </Link>
      <Link className="link" href={"https://images.google.com"}>
        Images
      </Link>
      <GripIcon
        size={40}
        className="bg-transparent hover:bg-gray-100 p-2 rounded-full"
      />
      <Avatar className="rounded-full" />
    </div>
  );
}
