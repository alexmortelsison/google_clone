import Image from "next/image";
import React from "react";

export default function Avatar({ size }: { size: number }) {
  return (
    <>
      <Image
        src={
          "https://media.licdn.com/dms/image/C5103AQF6XMfJ9zFyMw/profile-displayphoto-shrink_200_200/0/1576636743816?e=2147483647&v=beta&t=H9eKWYjtOef3sqrTOx8NVst_ZH1M3VuAoz0tj80IizM"
        }
        alt={"avatar"}
        width={size}
        height={size}
        className="rounded-full cursor-pointer"
      />
    </>
  );
}
