import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Clock } from "lucide-react"

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">Visit Us</h2>
          <p className="text-xl text-orange-700 max-w-3xl mx-auto">
            We'd love to welcome you to Spice Garden. Make a reservation or simply drop by to experience authentic
            Indian hospitality and flavors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Restaurant Information */}
          <div className="space-y-8">
            <Card className="bg-white border-orange-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-900 flex items-center gap-3">
                  <Clock className="h-6 w-6 text-orange-600" />
                  Opening Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-orange-800">
                  <span>Monday - Thursday</span>
                  <span>11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between text-orange-800">
                  <span>Friday - Saturday</span>
                  <span>11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between text-orange-800">
                  <span>Sunday</span>
                  <span>11:00 AM - 10:00 PM</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-orange-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-900">Special Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 text-orange-800">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                  <span>Traditional Tandoor Oven</span>
                </div>
                <div className="flex items-center gap-3 text-orange-800">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                  <span>Fresh Spices Daily</span>
                </div>
                <div className="flex items-center gap-3 text-orange-800">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                  <span>Vegetarian & Vegan Options</span>
                </div>
                <div className="flex items-center gap-3 text-orange-800">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                  <span>Family Dining Experience</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white border-orange-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-900">Make a Reservation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="First Name" className="border-orange-200 focus:border-orange-400" />
                <Input placeholder="Last Name" className="border-orange-200 focus:border-orange-400" />
              </div>
              <Input placeholder="Email" type="email" className="border-orange-200 focus:border-orange-400" />
              <Input placeholder="Phone" type="tel" className="border-orange-200 focus:border-orange-400" />
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Date" type="date" className="border-orange-200 focus:border-orange-400" />
                <Input placeholder="Time" type="time" className="border-orange-200 focus:border-orange-400" />
              </div>
              <Input
                placeholder="Number of Guests"
                type="number"
                min="1"
                className="border-orange-200 focus:border-orange-400"
              />
              <Textarea
                placeholder="Special requests or dietary restrictions"
                className="border-orange-200 focus:border-orange-400 min-h-[100px]"
              />
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg">
                Make Reservation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
