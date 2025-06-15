import Image from "next/image"

const galleryImages = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Master chef preparing fresh naan bread in traditional tandoor oven with flames",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Vibrant array of Indian spices in traditional brass bowls and containers",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Elegant Indian restaurant dining room with traditional decor and warm lighting",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Chef garnishing creamy butter chicken curry with fresh cilantro and cream swirl",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Complete Indian thali with multiple curries, rice, bread, and accompaniments",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Fresh aromatic biryani being served from copper pot with fragrant steam rising",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Traditional Indian sweets and desserts showcase with gulab jamun and kulfi",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Sizzling tandoori mixed grill platter with assorted meats and vegetables",
  },
]

export default function Gallery() {
  return (
    <section className="py-20 bg-gradient-to-b from-red-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Gallery</h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Take a glimpse into our traditional kitchen, authentic dining spaces, and the artistry that goes into every
            authentic Indian dish we serve with love and tradition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center p-4">
                <p className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
