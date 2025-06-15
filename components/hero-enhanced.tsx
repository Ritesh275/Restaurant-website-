import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Luxurious Indian restaurant interior with traditional brass decorations, warm lighting, and elegant dining setup"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-orange-100">Spice Garden</h1>
        <p className="text-xl md:text-2xl mb-8 text-orange-50">
          प्रामाणिक भारतीय व्यंजन - Authentic Indian Cuisine & Traditional Flavors
        </p>
        <p className="text-lg mb-10 text-gray-200 max-w-2xl mx-auto">
          Experience the rich heritage of Indian spices and traditional cooking methods passed down through generations,
          bringing you the most authentic flavors from across India - from Kashmir to Kerala.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
            View Menu
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-orange-800 px-8 py-3 text-lg"
          >
            <Phone className="mr-2 h-5 w-5" />
            Reserve Table
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center items-center text-orange-100">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="h-5 w-5" />
            <span>MG Road, Connaught Place</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="h-5 w-5" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="h-5 w-5" />
            <span>Open Daily 11 AM - 11 PM</span>
          </div>
        </div>
      </div>
    </section>
  )
}
