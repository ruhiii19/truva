import Footer from "./components/footer";
//import WhiteNavbar from "./components/whiteNavbar";
import Gallery from "./components/gallery";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
//import TransparentNavbar from "./components/transparentNavbar";

export default function Home() {
  return (
    <div className="flex flex-col justify-center bg-white">
      {/*<WhiteNavbar />*/}
      {/*<div className="bg-black">
        <TransparentNavbar />
      </div>*/}
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="flex flex-row ">
        <div className="w-1/4 hidden md:block">
          <Sidebar />
        </div>
        <div className="pr-20 pl-20 bg-white flex-grow">
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
      </div>

      <Footer />
    </div>
  );
}
