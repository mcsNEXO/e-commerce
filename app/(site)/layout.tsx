import DarkenedBackground from "./components/DarkenedBackground";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";

export default function ShopLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    tag: string;
    item: string;
  };
}) {
  return (
    <section className="relative">
      <Header />
      <DarkenedBackground />
      {children}
      <Footer />
    </section>
  );
}
