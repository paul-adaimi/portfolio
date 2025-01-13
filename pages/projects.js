import { useMemo } from "react";
import Index from "../components/ProjectsPage/Index";
import { AnimatedTextCoordinatorProvider } from "../components/Global/AnimatedTextCoordinatorProvider";

export default function Projects() {
  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "Bleumer",
        year: "2024",
        technologies: ["Expo", "React Native", "Firebase", "Javascript"],
        productionLinks: {
          apple: "https://apps.apple.com/tr/app/bleumer/id6738310999?uo=2",
          android: "coming soon",
        },
        description: `This mobile app is a salmon delivery platform designed for Bleumer ME, a prominent Canadian brand in the salmon industry that expanded to Lebanon in January 2015.
        
Users can browse and shop for premium salmon products immediately after downloading the app. To place an order, signing in is required. Authentication is verified through WhatsApp using Twilio, a cloud communications platform. Users receive real-time notifications for any updates to their order status.

The app is available on both the App Store and Google Play. Download it using the links provided in the production links section.`,
        type: "phone",
        imgSrc: "/images/bleumer.png",
      },
      {
        id: 2,
        title: "Book Me",
        year: "2018",
        technologies: ["React", "Node.js", "Express", "Mongo", "Javascript"],
        description: `Developed, with the collaboration of three other students, a new generalized booking service that facilitates for clients to book speciﬁc seats in cinemas, restaurants, planes etc... 

Developed a cross-platform application, where diﬀerent companies use their own system and creates the seating arrangement, while clients surf the companies and make their reservations. `,
        type: "web",
        imgSrc: "/images/book-me.jpg",
      },
      {
        id: 3,
        title: "Air Hockey",
        year: "2017",
        technologies: ["Android", "Java"],
        description:
          "Developed a 2-player game for android mobile users, which allows to interactively play the traditional air hockey game using Wifi-Direct to exchange data and mobile sensors to move the mallet",
        type: "phone",
        imgSrc: "/images/air-hockey-2.jpg",
      },
      {
        id: 4,
        title: "Steal",
        year: "2017",
        technologies: ["Java", "JavaFX"],
        description:
          "Designed and implemented a game library using Java and JavaFX, where multiplayer games are oﬀered online through a server.",
        type: "web",
        imgSrc: "/images/steal.jpg",
      },
    ],
    []
  );
  return <Index projects={projects} />;
}
