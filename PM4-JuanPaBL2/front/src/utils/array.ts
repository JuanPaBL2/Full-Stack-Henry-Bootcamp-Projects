import { IProduct } from "@/interfaces/interfazProducts";

const products: IProduct[] = [
    {
      id: 1,
      name: "iPhone 11",
      description: "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
      price: 699,
      stock: 10,
      categoryId: 1,
      image: "https://i5.walmartimages.com/seo/iPhone-11-128GB-Purple-Unlocked-Refurbished-Good_18256a18-22d4-4fd2-954a-6af816e4e74e_1.4c07850f921a9db2516929f9a064057e.jpeg"
    },
    {
      id: 2,
      name: "MacBook Air",
      description: "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
      price: 999,
      stock: 10,
      image: "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2023/01/macbook-air-silver-gallery2-20220606_GEO_MX.jpeg",
      categoryId: 2
    },
    {
      id: 3,
      name: "iPad Pro",
      description: "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
      price: 799,
      stock: 10,
      image: "https://i5.walmartimages.com/seo/Apple-iPad-Pro-11-3rd-Gen-128GB-Space-Gray-Wi-Fi-3HQR3LL-A-Latest-Model_557264e6-8f6a-4e49-a6e2-67ea6bd020f2.732406b13ec681976afe83e16a197f3a.jpeg",
      categoryId: 3
    }
];
