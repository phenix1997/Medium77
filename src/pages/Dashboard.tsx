import React from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { StatCard } from '../components/dashboard/StatCard';
import { Book, Users, BookOpen, Library } from 'lucide-react';

export function Dashboard() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-sm text-gray-600">
          Welcome to LibrisConnecti. Here's an overview of your library network.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Resources"
          value="12,345"
          icon={Book}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Active Members"
          value="1,234"
          icon={Users}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Books Borrowed"
          value="456"
          icon={BookOpen}
          trend={{ value: 3, isPositive: true }}
        />
        <StatCard
          title="Connected Libraries"
          value="15"
          icon={Library}
        />
      </div>
    </DashboardLayout>
  );
}