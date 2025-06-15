import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle, XCircle } from "lucide-react"

const orders = [
  {
    id: "#1234",
    customer: "John Doe",
    items: "Butter Chicken, Garlic Naan",
    total: "₹1,300",
    status: "preparing",
    time: "5 min ago",
  },
  {
    id: "#1235",
    customer: "Sarah Smith",
    items: "Lamb Biryani, Kulfi",
    total: "₹1,120",
    status: "ready",
    time: "12 min ago",
  },
  {
    id: "#1236",
    customer: "Mike Johnson",
    items: "Vegetable Samosa, Dal Makhani",
    total: "₹880",
    status: "completed",
    time: "18 min ago",
  },
  {
    id: "#1237",
    customer: "Emily Brown",
    items: "Tandoori Mixed Grill",
    total: "₹1,040",
    status: "cancelled",
    time: "25 min ago",
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "preparing":
      return <Clock className="h-4 w-4" />
    case "ready":
    case "completed":
      return <CheckCircle className="h-4 w-4" />
    case "cancelled":
      return <XCircle className="h-4 w-4" />
    default:
      return <Clock className="h-4 w-4" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "preparing":
      return "bg-yellow-100 text-yellow-800"
    case "ready":
      return "bg-blue-100 text-blue-800"
    case "completed":
      return "bg-green-100 text-green-800"
    case "cancelled":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function RecentOrders() {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-medium text-gray-900">{order.id}</span>
                  <Badge className={getStatusColor(order.status)}>
                    {getStatusIcon(order.status)}
                    <span className="ml-1 capitalize">{order.status}</span>
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">{order.customer}</p>
                <p className="text-sm text-gray-500">{order.items}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">{order.total}</p>
                <p className="text-xs text-gray-500">{order.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
