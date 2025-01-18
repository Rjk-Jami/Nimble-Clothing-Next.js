"use client"
// src/app/payment/page.jsx

import dynamic from "next/dynamic";

// Dynamically import the PaymentPage component and disable SSR
const PaymentPage = dynamic(() => import("../../components/PaymentPage/PaymentPage"), {
  ssr: false, // Disable SSR for this component
});

export default function Payment() {
  return <PaymentPage />;
}
