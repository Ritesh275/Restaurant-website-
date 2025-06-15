import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const menuItems = [
  {
    category: "Appetizers",
    items: [
      {
        name: "Samosa (2 pieces)",
        description:
          "Crispy golden pastry triangles filled with spiced potatoes, peas, and aromatic herbs, served with tangy mint chutney",
        price: "₹320",
        image: "/placeholder.svg?height=300&width=400",
        popular: true,
        spiceLevel: "mild",
      },
      {
        name: "Chicken Tikka",
        description:
          "Tender chicken pieces marinated in yogurt, ginger-garlic paste, and traditional tandoor spices, grilled to perfection",
        price: "₹560",
        image: "/placeholder.svg?height=300&width=400",
        spiceLevel: "medium",
      },
      {
        name: "Paneer Pakora",
        description:
          "Fresh cottage cheese cubes coated in spiced gram flour batter, deep-fried until golden and crispy",
        price: "₹400",
        image: "/placeholder.svg?height=300&width=400",
        spiceLevel: "mild",
      },
      {
        name: "Aloo Tikki Chaat",
        description: "Crispy potato patties topped with yogurt, tamarind chutney, and fresh coriander leaves",
        price: "₹280",
        image: "/placeholder.svg?height=300&width=400",
        spiceLevel: "medium",
      },
    ],
  },
  {
    category: "Tandoor Specialties",
    items: [
      {
        name: "Butter Chicken",
        description: "Tender chicken pieces in rich, creamy tomato-based sauce with butter, cream, and aromatic spices",
        price: "₹720",
        image: "/placeholder.svg?height=300&width=400",
        popular: true,
        spiceLevel: "mild",
      },
      {
        name: "Lamb Biryani",
        description:
          "Fragrant basmati rice layered with succulent lamb pieces, saffron, caramelized onions, and traditional spices",
        price: "₹880",
        image: "/placeholder.svg?height=300&width=400",
        spiceLevel: "medium",
      },
      {
        name: "Tandoori Mixed Grill",
        description:
          "Assorted tandoor-grilled meats including chicken tikka, seekh kebab, and lamb chops with naan and rice",
        price: "₹1040",
        image: "/placeholder.svg?height=300&width=400",
        popular: true,
        spiceLevel: "hot",
      },
      {
        name: "Fish Tikka",
        description:
          "Fresh fish marinated in yogurt, lemon juice, and spices, grilled in tandoor until perfectly charred",
        price: "₹680",
        image: "/placeholder.svg?height=300&width=400",
        spiceLevel: "medium",
      },
    ],
  },
  {
    category: "Vegetarian Delights",
    items: [
      {
        name: "Dal Makhani",
        description: "Creamy black lentils slow-cooked overnight with butter, cream, tomatoes, and aromatic spices",
        price: "₹560",
        image: "/placeholder.svg?height=300&width=400",
        spiceLevel: "mild",
      },
      {
        name: "Palak Paneer",
        description:
          "Fresh cottage cheese cubes in vibrant spinach gravy with garlic, ginger, and traditional garam masala",
        price: "₹640",
        image: "/placeholder.svg?height=300&width=400",
        popular: true,
        spiceLevel: "medium",
      },
      {
        name: "Chole Bhature",
        description: "Spiced chickpea curry served with fluffy, deep-fried bread made from refined flour",
        price: "₹600",
        image: "/placeholder.svg?height=300&width=400",
        spiceLevel: "medium",
      },
      {
        name: "Paneer Makhani",
        description: "Cottage cheese cubes in rich, creamy tomato-based sauce with butter and aromatic spices",
        price: "₹680",
        image: "/placeholder.svg?height=300&width=400",
        spiceLevel: "mild",
      },
    ],
  },
  {
    category: "Rice & Breads",
    items: [
      {
        name: "Garlic Naan",
        description: "Fresh baked bread infused with minced garlic, herbs, and brushed with clarified butter",
        price: "₹200",
        image: "/placeholder.svg?height=300&width=400",
        spiceLevel: "mild",
      },
      {
        name: "Vegetable Biryani",
        description:
          "Aromatic basmati rice layered with mixed vegetables, saffron, mint, and traditional biryani spices",
        price: "₹640",
        image: "/placeholder.svg?height=300&width=400",
        spiceLevel: "medium",
      },
      {
        name: "Butter Naan",
        description: "Soft, pillowy bread baked in tandoor and brushed with melted butter and fresh herbs",
        price: "₹180",
        image: "/placeholder.svg?height=300&width=400",
        spiceLevel: "mild",
      },
      {
        name: "Jeera Rice",
        description: "Fragrant basmati rice tempered with cumin seeds, whole spices, and clarified butter",
        price: "₹320",
        image: "/placeholder.svg?height=300&width=400",
        spiceLevel: "mild",
      },
    ],
  },
  {
    category: "Desserts & Beverages",
    items: [
      {
        name: "Gulab Jamun (3 pieces)",
        description: "Soft milk dumplings fried golden and soaked in rose-flavored sugar syrup with cardamom",
        price: "₹320",
        image: "/placeholder.svg?height=300&width=400",
        spiceLevel: "sweet",
      },
      {
        name: "Kulfi",
        description: "Traditional Indian ice cream made with condensed milk, cardamom, pistachios, and almonds",
        price: "₹240",
        image: "/placeholder.svg?height=300&width=400",
        popular: true,
        spiceLevel: "sweet",
      },
      {
        name: "Mango Lassi",
        description: "Refreshing yogurt-based drink blended with fresh mango pulp, sugar, and a hint of cardamom",
        price: "₹200",
        image: "/placeholder.svg?height=300&width=400",
        spiceLevel: "sweet",
      },
      {
        name: "Masala Chai",
        description: "Traditional Indian tea brewed with milk, sugar, and aromatic spices like cardamom and ginger",
        price: "₹120",
        image: "/placeholder.svg?height=300&width=400",
        spiceLevel: "mild",
      },
    ],
  },
]

const getSpiceLevelColor = (level: string) => {
  switch (level) {
    case "mild":
      return "bg-green-500"
    case "medium":
      return "bg-yellow-500"
    case "hot":
      return "bg-red-500"
    case "sweet":
      return "bg-pink-500"
    default:
      return "bg-gray-500"
  }
}

export default function Menu() {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">Our Menu</h2>
          <p className="text-xl text-red-700 max-w-3xl mx-auto">
            Discover our carefully curated selection of authentic Indian dishes, prepared with traditional spices and
            time-honored cooking techniques from across the Indian subcontinent.
          </p>
        </div>

        {menuItems.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-3xl font-bold text-red-900 mb-8 text-center">{category.category}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <Card
                  key={itemIndex}
                  className="bg-white border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      {item.popular && <Badge className="bg-red-600 hover:bg-red-700">Popular</Badge>}
                      <Badge className={`${getSpiceLevelColor(item.spiceLevel)} hover:opacity-80 text-white`}>
                        {item.spiceLevel}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl text-red-900">{item.name}</CardTitle>
                      <span className="text-xl font-bold text-red-600">{item.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-700">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
