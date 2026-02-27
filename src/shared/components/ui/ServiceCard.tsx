"use client";

import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

/**
 * Reusable ServiceCard component.
 * Pure CSS hover animations.
 */
const ServiceCard = ({ icon, title, desc }: ServiceCardProps) => (
  <div className="bg-white p-8 sm:p-10 rounded-4xl sm:rounded-card-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-primary/10 group hover:-translate-y-2">
    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-light rounded-full flex items-center justify-center text-primary mb-6 sm:mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <h3 className="font-serif text-2xl sm:text-3xl text-gray-900 mb-3 sm:mb-4">
      {title}
    </h3>
    <p className="text-gray-600 font-light leading-relaxed text-base sm:text-lg">
      {desc}
    </p>
  </div>
);

export default ServiceCard;
export type { ServiceCardProps };
