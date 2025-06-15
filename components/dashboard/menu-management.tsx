import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Plus, Eye } from "lucide-react"
import Image from "next/image"

const menuItems = [
  {
    id: 1,
    name: "Butter Chicken",
    category: "Main Course",
    price: "₹720",
    status: "active",
    image: "/placeholder.svg?height=80&width=80",
    orders: 23,
  },
  {
    id: 2,
    name: "Lamb Biryani",
    category: "Rice Dishes",
    price: "₹880",
    status: "active",
    image: "/placeholder.svg?height=80&width=80",
    orders: 18,
  },
  {
    id: 3,
    name: "Samosa",
    category: "Appetizers",
    price: "₹320",
    status: "active",
    image: "/placeholder.svg?height=80&width=80",
    orders: 31,
  },
  {
    id: 4,
    name: "Mango Lassi",
    category: "Beverages",
    price: "₹200",
    status: "inactive",
    image: "/placeholder.svg?height=80&width=80",
    orders: 12,
  },
]

export default function MenuManagement() {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-gray-900">Menu Management</CardTitle>
        <Button className="bg-orange-600 hover:bg-orange-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Item
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-2">Item</th>
                <th className="text-left py-3 px-2">Category</th>
                <th className="text-left py-3 px-2">Price</th>
                <th className="text-left py-3 px-2">Status</th>
                <th className="text-left py-3 px-2">Orders Today</th>
                <th className="text-left py-3 px-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {menuItems.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-3">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded-lg object-cover"
                      />
                      <span className="font-medium text-gray-900">{item.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-gray-600">{item.category}</td>
                  <td className="py-4 px-2 font-semibold text-gray-900">{item.price}</td>
                  <td className="py-4 px-2">
                    <Badge
                      className={item.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}
                    >
                      {item.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-2 text-gray-600">{item.orders}</td>
                  <td className="py-4 px-2">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
