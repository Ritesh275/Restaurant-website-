import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-red-900 text-orange-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-orange-200 mb-4">Spice Garden</h3>
            <p className="text-orange-200 mb-4">
              Authentic Indian cuisine bringing you the rich heritage of Indian spices and traditional cooking methods
              passed down through generations.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-orange-300 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-orange-300 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-orange-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-orange-200 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-orange-300 hover:text-white transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="text-orange-300 hover:text-white transition-colors">
                  Reservations
                </a>
              </li>
              <li>
                <a href="#" className="text-orange-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-orange-300 hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/dashboard" className="text-orange-300 hover:text-white transition-colors">
                  Staff Dashboard
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-orange-200 mb-4">Experience</h4>
            <div className="space-y-2 text-orange-300">
              <p>Traditional Tandoor Cooking</p>
              <p>Fresh Spices & Ingredients</p>
              <p>Authentic Indian Flavors</p>
              <p>Family Recipes Since 1965</p>
              <p>Open Daily 11 AM - 11 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-red-800 pt-8 text-center">
          <p className="text-orange-300">© 2024 Spice Garden Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
