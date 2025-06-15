import DashboardLayout from "@/components/dashboard/dashboard-layout"
import DashboardStats from "@/components/dashboard/dashboard-stats"
import RecentOrders from "@/components/dashboard/recent-orders"
import MenuManagement from "@/components/dashboard/menu-management"
import ReservationManagement from "@/components/dashboard/reservation-management"

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Restaurant Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening at Spice Garden today.</p>
        </div>

        <DashboardStats />

        <div className="grid lg:grid-cols-2 gap-8">
          <RecentOrders />
          <ReservationManagement />
        </div>

        <MenuManagement />
      </div>
    </DashboardLayout>
  )
}
