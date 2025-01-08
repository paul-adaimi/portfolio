import { useMemo } from "react";
import Index from "../../components/ProjectsPage/Index";

export default function Projects() {
  const projects = useMemo(
    () => [
      {
        title: "Bleumer",
        year: "2024",
        technologies: ["Expo", "React Native", "Firebase", "Javascript"],
        productionLinks: {
          apple: "https://apps.apple.com/tr/app/bleumer/id6738310999?uo=2",
          android: "coming soon",
        },
        description: (
          <>
            This mobile app is a salmon delivery platform designed for Bleumer
            ME, a prominent Canadian brand in the salmon industry that expanded
            to Lebanon in January 2015. <br />
            <br />
            Users can browse and shop for premium salmon products immediately
            after downloading the app. To place an order, signing in is
            required. Authentication is verified through WhatsApp using Twilio,
            a cloud communications platform. Users receive real-time
            notifications for any updates to their order status. <br />
            <br />
            The app is available on both the App Store and Google Play. Download
            it using the links provided in the production links section.
          </>
        ),
        type: "phone",
      },
      {
        title: "Book Me",
        year: "2018",
        technologies: ["React", "Node.js", "Express", "Mongo", "Javascript"],
        description: "This is the description for Project 2",
        type: "web",
      },
      {
        title: "Air Hockey",
        year: "2017",
        technologies: ["Android", "Java"],
        description: "This is the description for Project 3",
        type: "phone",
      },
    ],
    []
  );
  return <Index projects={projects} />;
}
