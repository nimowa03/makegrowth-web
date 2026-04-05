import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "서비스",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
