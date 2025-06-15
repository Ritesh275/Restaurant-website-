import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users } from "lucide-react"

const reservations = [
  {
    id: "R001",
    customer: "David Wilson",
    date: "Today",
    time: "7:00 PM",
    guests: 4,
    status: "confirmed",
    phone: "(555) 123-4567",
  },
  {
    id: "R002",
    customer: "Lisa Anderson",
    date: "Today",
    time: "8:30 PM",
    guests: 2,
    status: "pending",
    phone: "(555) 987-6543",
  },
  {
    id: "R003",
    customer: "Robert Taylor",
    date: "Tomorrow",
    time: "6:00 PM",
    guests: 6,
    status: "confirmed",
    phone: "(555) 456-7890",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "confirmed":
      return "bg-green-100 text-green-800"
    case "pending":
      return "bg-yellow-100 text-yellow-800"
    case "cancelled":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function ReservationManagement() {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Today's Reservations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reservations.map((reservation) => (
            <div key={reservation.id} className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-gray-900">{reservation.customer}</span>
                  <Badge className={getStatusColor(reservation.status)}>{reservation.status}</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Call
                  </Button>
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{reservation.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{reservation.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{reservation.guests} guests</span>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-2">{reservation.phone}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
