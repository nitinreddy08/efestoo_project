import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header";
import Landing from "../components/Landing";
import EventsGrid from "../components/EventsGrid";
import OurLibrary from "../components/OurLibrary"; 
import ReviewsRatings from "../components/ReviewsRatings";
import FeedbackForm from "../components/FeedbackForm";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Header />
      <Landing />
      <EventsGrid />
      <OurLibrary/>
      <ReviewsRatings/>
      <FeedbackForm/>
      <ContactUs/>
      <Footer/>
    </>

  );
}
