import "@/styles/globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        {/* <div className="flex grow"> */}
        <div className="flex grow">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}
