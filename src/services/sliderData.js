const data = [
  {
    id: "p1",
    title: "Adidas Fast Graphic Tee - Black",
    logo: "https://api.yeshtery.com/v1/yeshtery/files/31/adidas-2805b77d93b649829a95d869558736a2.png?height=150",
    imgs: [
      "https://api.yeshtery.com/v1/yeshtery/files/31/ha6542-11-apparel-zip-turntable-3d-1-white-376f58c340454a01b6ea2cf23b78b6f3.jpg?height=552",
      "https://api.yeshtery.com/v1/yeshtery/files/31/ha6542-3-apparel-on-model-standard-view-white-ac7eaad30df34b959d28fa0450310d2a.jpg?height=552",
      "https://api.yeshtery.com/v1/yeshtery/files/31/ha6542-9-apparel-on-model-detail-view-2-white-d93d4cd72d83496dbcc5beb5c4a89ab8.jpg?height=552",
      "https://api.yeshtery.com/v1/yeshtery/files/31/ha6542-11-apparel-zip-turntable-3d-5-white-acd8b0ba70b4455cb242f70357efc0c8.jpg?height=552",
      "https://api.yeshtery.com/v1/yeshtery/files/31/ha6542-5-apparel-on-model-back-view-white-24c65873ef0b43fd93457a476aac70e0.jpg?height=552",
      "https://api.yeshtery.com/v1/yeshtery/files/31/ha6542-11-apparel-zip-turntable-3d-8-white-6faadbdfb7594d8c8b0114751ae6cf88.jpg?height=552",
      "https://api.yeshtery.com/v1/yeshtery/files/31/ha6542-11-apparel-zip-turntable-3d-2-white-0799058e842444a1a411f277d94e9d6f.jpg?height=552",
      "https://api.yeshtery.com/v1/yeshtery/files/31/ha6542-11-apparel-zip-turntable-3d-3-white-e2ae20d020bd43d0842634044777ea29.jpg?height=552",
      "https://api.yeshtery.com/v1/yeshtery/files/31/ha6542-8-apparel-on-model-detail-view-1-white-0580be2ce7e045a68679d11a58cd8e91.jpg?height=552",
      "https://api.yeshtery.com/v1/yeshtery/files/31/ha6542-11-apparel-zip-turntable-3d-6-white-898edc2e1e544c499866e777a1a34094.jpg?height=552",
    ],
    price: "9999",
    rating: Math.floor(Math.random() * 5 + 1),
    sizes: ["small", "medium", "large", "2xl"],
    category: "men",
    rates: Math.floor(Math.random() * 50 + 1),
    color: "GREY/BLACK",
    discount: "50",
    shipping: {
      location: "Genena Mall",
    },
  },

  {
    id: "p2",
    title: "Adidas Messi Soccer Graphic Tee - Black",
    logo: "https://api.yeshtery.com/v1/yeshtery/files/31/adidas-2805b77d93b649829a95d869558736a2.png?height=150",
    imgs: [
      "https://api.yeshtery.com/v1/yeshtery/files/31/ha0931-3-apparel-on-model-standard-view-white-8588dc67557e45efa18a126a2edef3df.jpg?height=500",
      "https://api.yeshtery.com/v1/yeshtery/files/31/ha0931-7-apparel-on-model-detail-view-1-white-691cb2d48d67416590bb8fdfd2fea34a.jpg?height=500",
      "https://api.yeshtery.com/v1/yeshtery/files/31/ha0931-2-apparel-photography-front-center-view-white-d19b9838db8b47da8cffbe473a15a56c.jpg?height=500",
      "https://api.yeshtery.com/v1/yeshtery/files/31/ha0931-9-apparel-zip-turntable-3d-5-white-600f7b3d4ec842a4bd5c347de54b0f02.jpg?height=500",
    ],
    price: "9999",
    rating: Math.floor(Math.random() * 5 + 1),
    sizes: ["2xl", "l", "xl"],
    color: "BLACK",
    category: "men",
    rates: Math.floor(Math.random() * 50 + 1),

    shipping: {
      location: "UK",
      duration: 10,
    },
  },
  {
    id: "p3",
    title: "Adidas Primeblue Designed 2 Move Heathered Sport Tee",
    logo: "https://api.yeshtery.com/v1/yeshtery/files/31/adidas-2805b77d93b649829a95d869558736a2.png?height=150",
    imgs: [
      "https://api.yeshtery.com/v1/yeshtery/files/31/gr0510-2-apparel-photography-front-center-view-white-2da6bed43c5f4156b81c3d144ce10a49.jpg?height=552",
      "https://api.yeshtery.com/v1/yeshtery/files/31/gr0510-9-apparel-zip-turntable-3d-5-white-de5bf6ec448d4a6fae44b0730930e439.jpg?height=552",
      "https://api.yeshtery.com/v1/yeshtery/files/31/gr0510-3-apparel-on-model-standard-view-white-093438d755ba48ea9e3716769978da11.jpg?height=552",
    ],
    price: "9999",
    rating: Math.floor(Math.random() * 5 + 1),
    sizes: ["l", "s"],
    color: " TMROBL/BLACK",
    category: "men",
    rates: Math.floor(Math.random() * 50 + 1),
    discount: "30",
    shipping: {
      location: "Genena Mall",
    },
  },
  {
    id: "p4",
    title: "Reebok Workout Ready Graphic Shorts",
    logo: "https://api.yeshtery.com/v1/yeshtery/files/31/reebok-eb02a3c36a11415391d519a023c867a3.png?height=150",
    imgs: [
      "https://api.yeshtery.com/v1/yeshtery/files/31/ha1062-1-apparel-photography-front-view-white.jpg?height=552",
      "https://api.yeshtery.com/v1/yeshtery/files/31/ha1062-4-apparel-on-model-side-view-white.jpg?height=552",
      "https://api.yeshtery.com/v1/yeshtery/files/31/ha1062-5-apparel-on-model-detail-view-1-white.jpg?height=552",
      "https://api.yeshtery.com/v1/yeshtery/files/31/ha1062-2-apparel-on-model-standard-view-white.jpg?height=552",
    ],
    price: "9999",
    rating: Math.floor(Math.random() * 5 + 1),
    sizes: ["m", "s", "2xl", "xl", "l"],
    color: "NGHBLK",
    category: "men",
    rates: Math.floor(Math.random() * 50 + 1),
    discount: "70",
    shipping: {
      location: "Egypt",
      duration: 2,
    },
  },
  {
    id: "p5",
    title: "White Superstar Shoes",
    logo: "https://api.yeshtery.com/v1/yeshtery/files/31/courir-custom-.png?height=150",
    imgs: [
      "https://api.yeshtery.com/v1/yeshtery/files/31/eg4960-6-footwear-photography-front-lateral-top-view-white-e80196538d5043fcb14c5f5c05c167e8.jpg?height=552",
      "https://api.yeshtery.com/v1/yeshtery/files/31/eg4960-7-footwear-photography-back-lateral-top-view-white-6cab728a96be4ca9b91103e15bfc6881.jpg?height=552",
      "https://api.yeshtery.com/v1/yeshtery/files/31/eg4960-4-footwear-photography-bottom-view-white-d0ad6ad23cbc4df5b5d24487a249e185.jpg?height=552",
      "https://api.yeshtery.com/v1/yeshtery/files/31/eg4960-12-footwear-zip-turntable-3d-2-white-26c27835f3174d51b18fc035cc69ac03.jpg?height=552",
      "https://api.yeshtery.com/v1/yeshtery/files/31/eg4960-1-footwear-photography-side-lateral-center-view-white-c09bc7cb086043d58707005c3904176b.jpg?height=552",
      "https://api.yeshtery.com/v1/yeshtery/files/31/eg4960-8-footwear-photography-detail-view-1-white-b8c2555a3bed401197cf3ce3a8a7a13b.jpg?height=552",
      "https://api.yeshtery.com/v1/yeshtery/files/31/eg4960-12-footwear-zip-turntable-3d-4-white-1dcd1170d10c484d8c285c5c5d5f71b6.jpg?height=552",
    ],
    price: "2999",
    rating: Math.floor(Math.random() * 5 + 1),
    sizes: ["42", "44", "43", "45"],
    color: "Ftwwht, Ftwwht, Ftwwht",
    category: "men",
    rates: Math.floor(Math.random() * 50 + 1),
    shipping: {
      location: "Genena Mall",
    },
  },
];

export default data;
