"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams();
    console.log(id)
  return (
    <div>
      <div>
      products details page
    </div>
    </div>
  )
}

export default page
