const mockData = {
  menuitems: [
    {
      _id: "1",
      itemName: "Signature Latte",
      description: "Single-origin espresso with velvety steamed milk.",
      price: 5.5,
      category: "Food",
      itemImage:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      dietaryLabels: "Vegetarian"
    },
    {
      _id: "2",
      itemName: "Butter Croissant",
      description: "Flaky, golden, and baked fresh each morning.",
      price: 4.0,
      category: "Beverages",
      itemImage:
        "https://images.unsplash.com/photo-1555507036-ab794f575b12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      dietaryLabels: "Vegetarian"
    }
  ],
  gallery: [
    {
      _id: "1",
      title: "Espresso",
      description: "Rich and professional grade.",
      category: "Beverages",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      
    },
    {
      _id: "2",
      title: "Soft Drinks",
      description: "Refreshing bottled and canned drinks.",
      category: "Beverages",
      image: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      _id: "3",
      title: "Chicken & Vegetable Soup",
      description: "Hearty and homemade.",
      category: "Hot Kitchen & Soups",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      _id: "4",
      title: "Vegetarian Soup",
      description: "Daily selection of fresh vegetable soups.",
      category: "Hot Kitchen & Soups",
      image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      _id: "5",
      title: "Spinach Quiche",
      description: "Freshly baked savory pastry.",
      category: "Hot Kitchen & Soups",
      image: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      _id: "6",
      title: "House Lasagna",
      description: "Classic hot dish served with a side.",
      category: "Hot Kitchen & Soups",
      image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      _id: "7",
      title: "Tuna Croquette Sandwich",
      description: "Fresh tuna prepared daily.",
      category: "Signature Sandwiches",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      _id: "8",
      title: "Chicken Specialty Wraps",
      description: "Available in various Mediterranean flavours.",
      category: "Signature Sandwiches",
      image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      _id: "9",
      title: "Full Sandwich Plate",
      description: "A filling plate with your choice of sandwich and sides.",
      category: "Signature Sandwiches",
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      _id: "10",
      title: "Cajun Chicken Sandwich",
      description: "Our highly recommended house specialty.",
      category: "Signature Sandwiches",
      image: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      _id: "11",
      title: "Lentil Rice Salad",
      description: "Freshly prepared Lebanese style.",
      category: "Mediterranean Salads",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      _id: "12",
      title: "Ratatouille Salad",
      description: "Eggplant, tomato, and chickpeas.",
      category: "Mediterranean Salads",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
  ]
};

export const BaseCrudService = {
  async getAll(collectionId) {
    const items = mockData[collectionId] || [];
    return {
      items,
      totalCount: items.length,
      hasNext: false,
      currentPage: 0,
      pageSize: items.length,
      nextSkip: null
    };
  }
};
