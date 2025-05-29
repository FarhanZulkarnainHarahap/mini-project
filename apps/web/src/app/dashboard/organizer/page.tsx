// pages/index.tsx
import React from "react";
import StatCard from "@/components/organizerComponents/dashboard-components/StatCard";
import { totalTickets, ticketSales } from "@/app/data/ticketData";
import HeaderOrganizer from "@/components/Header-section/header-organizer";

export default function DashboardOrganizer() {
  const totalSold = ticketSales.length;
  const totalPaid = ticketSales.filter((t) => t.isPaid).length;
  const totalRemaining = totalTickets - totalSold;

  return (
    <section>
      <HeaderOrganizer />
      <div className="min-h-screen bg-gray-100 p-8 pt-34">
        <h1 className="text-4xl font-bold mb-8">
          🎟️ Dashboard Event Organizer
        </h1>
        <div className="flex flex-col md:flex-row gap-6">
          <StatCard
            title="Ticket Sold"
            value={totalSold}
            color="bg-green-500"
          />
          <StatCard
            title="Remaining Tickets"
            value={totalRemaining}
            color="bg-yellow-500"
          />
          <StatCard title="Paid" value={totalPaid} color="bg-purple-600" />
        </div>
      </div>
    </section>
  );
}
