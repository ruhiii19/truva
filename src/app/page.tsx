//import Footer from "./components/footer";
//import Navbar from "./components/navbar";
import Gallery from "./components/gallery";
export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Gallery
        images={[
          "/assets/test2.png",
          "/assets/test.png",
          "/assets/test.png",
          "/assets/test.png",
          "/assets/test2.png",
        ]}
      />
    </div>
  );
}
