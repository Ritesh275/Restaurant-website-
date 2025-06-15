import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, DollarSign, ShoppingBag, Users, Calendar } from "lucide-react"

const stats = [
  {
    title: "Today's Revenue",
    value: "₹1,13,880",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Orders Today",
    value: "47",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingBag,
  },
  {
    title: "Active Tables",
    value: "12/16",
    change: "75% occupied",
    trend: "neutral",
    icon: Users,
  },
  {
    title: "Reservations",
    value: "23",
    change: "-2.1%",
    trend: "down",
    icon: Calendar,
  },
]

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-white shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="flex items-center text-xs">
              {stat.trend === "up" && <TrendingUp className="h-3 w-3 text-green-500 mr-1" />}
              {stat.trend === "down" && <TrendingDown className="h-3 w-3 text-red-500 mr-1" />}
              <span
                className={`${
                  stat.trend === "up" ? "text-green-600" : stat.trend === "down" ? "text-red-600" : "text-gray-600"
                }`}
              >
                {stat.change}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
