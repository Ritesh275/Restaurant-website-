import { Card, CardContent } from "@/components/ui/card"
import { ChefHatIcon as Chef, Heart, Award } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">Our Heritage</h2>
          <p className="text-xl text-red-700 max-w-3xl mx-auto">
            Four generations of authentic Indian cooking, bringing you the rich flavors and traditions of India with
            every carefully spiced dish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Image
              src="/about.jpg"
              alt="Indian chef preparing traditional curry in tandoor kitchen"
              width={800}
              height={600}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-red-900">Tradition Meets Flavor</h3>
            <p className="text-lg text-red-800 leading-relaxed">
              Founded in 1965 by Master Chef Rajesh Kumar, Spice Garden has been serving authentic Indian cuisine for
              over 55 years. Our recipes have been passed down through generations, each dish crafted with traditional
              spices imported directly from India.
            </p>
            <p className="text-lg text-red-800 leading-relaxed">
              From our tandoor oven to our spice blends, we maintain the authentic cooking methods that have made Indian
              cuisine beloved worldwide. Every meal is a journey through the diverse culinary landscape of India.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white border-red-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <Chef className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-red-900 mb-3">Master Chefs</h4>
              <p className="text-red-700">
                Our chefs trained in India bring authentic techniques and generations of culinary wisdom to every dish.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-red-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-red-900 mb-3">Authentic Spices</h4>
              <p className="text-red-700">
                We import our spices directly from India, ensuring every dish captures the true essence of Indian
                flavors.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-red-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-red-900 mb-3">Award Winning</h4>
              <p className="text-red-700">
                Recognized as the city's best Indian restaurant and winner of the "Authentic Cuisine" award for five
                years running.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
