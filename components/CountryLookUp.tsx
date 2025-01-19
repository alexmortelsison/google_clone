"use client";
import React, { useEffect, useState } from "react";

export default function CountryLookUp() {
  const [country, setCountry] = useState("Philippines");
  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch(
        `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => data.country);
      if (!response) return;
      setCountry(response);
    };
    getCountry();
  });

  return <div>{country}</div>;
}
