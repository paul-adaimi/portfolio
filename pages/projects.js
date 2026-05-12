import { useMemo } from "react";
import Index from "../components/ProjectsPage/Index";
import Head from "next/head";

export default function Projects() {
  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "Bookstop",
        year: "2025",
        technologies: [
          "Next",
          "React",
          "Javascript",
          "Django",
          "Python",
          "Postgres",
        ],
        productionLinks: {
          web: "https://bookstop.pauladaimi.com/dashboard/projects-jobs",
        },
        description: `Bookstop is a custom-built ERP and workflow management platform designed to centralize and streamline company operations through a single integrated system. The platform manages projects, jobs, employees, task pipelines, inventory, customers, and operational workflows while providing realtime collaboration and live updates across the organization. Employees can track assigned work, update task statuses, follow structured production stages, and receive instant notifications as projects progress. Built with Next.js on the frontend and Django with Django REST Framework and WebSockets on the backend, the system was designed to support scalable realtime operations, improve internal coordination, and optimize the company’s day-to-day workflow management.`,
        type: "web",
        imgSrc: "/images/bookstop.png",
      },
      {
        id: 2,
        title: "Albu-Me",
        year: "2026",
        technologies: [
          "Expo",
          "React Native",
          "Javascript",
          "Django",
          "Python",
          "Postgres",
        ],
        productionLinks: {
          apple: "https://apps.apple.com/us/app/albu-me/id6759096358",
          android:
            "https://play.google.com/store/apps/details?id=com.pauladaimi.albume",
        },
        description: `Albu-me is a mobile application that allows users to create personalized photobooks directly from their phones through an intuitive and interactive editing experience. Users can organize their memories into custom-designed albums, choose different book sizes and layouts, customize covers, add and position photos, and preview their books before placing an order for printing. The app focuses on delivering a smooth creative workflow while handling high-quality rendering, cloud uploads, order management, and secure online payments behind the scenes. Built with React Native and Expo on the frontend and powered by a Django REST backend, Albu-me combines realtime responsiveness, scalable media processing, and a modern mobile-first experience to make photobook creation simple, fast, and accessible.`,
        type: "phone",
        imgSrc: "/images/albume.png",
      },
      {
        id: 3,
        title: "Bleumer",
        year: "2024",
        technologies: ["Expo", "React Native", "Firebase", "Javascript"],
        productionLinks: {
          apple: "https://apps.apple.com/tr/app/bleumer/id6738310999?uo=2",
          android:
            "https://play.google.com/store/apps/details?id=com.anonymous.bleumer&pli=1",
        },
        description: `This mobile app is a salmon delivery platform designed for Bleumer ME, a prominent Canadian brand in the salmon industry that expanded to Lebanon in January 2015.
        
Users can browse and shop for premium salmon products immediately after downloading the app. To place an order, signing in is required. Authentication is verified through WhatsApp using Twilio, a cloud communications platform. Users receive real-time notifications for any updates to their order status.

The app is available on both the App Store and Google Play. Download it using the links provided in the production links section.`,
        type: "phone",
        imgSrc: "/images/bleumer.png",
      },
      {
        id: 4,
        title: "Book Me",
        year: "2018",
        technologies: ["React", "Node.js", "Express", "Mongo", "Javascript"],
        description: `Developed, with the collaboration of three other students, a new generalized booking service that facilitates for clients to book speciﬁc seats in cinemas, restaurants, planes etc... 

Developed a cross-platform application, where diﬀerent companies use their own system and creates the seating arrangement, while clients surf the companies and make their reservations. `,
        type: "web",
        imgSrc: "/images/book-me.jpg",
      },
      {
        id: 5,
        title: "Air Hockey",
        year: "2017",
        technologies: ["Android", "Java"],
        description:
          "Developed a 2-player game for android mobile users, which allows to interactively play the traditional air hockey game using Wifi-Direct to exchange data and mobile sensors to move the mallet",
        type: "phone",
        imgSrc: "/images/air-hockey-2.jpg",
      },
      {
        id: 6,
        title: "Steal",
        year: "2017",
        technologies: ["Java", "JavaFX"],
        description:
          "Designed and implemented a game library using Java and JavaFX, where multiplayer games are oﬀered online through a server.",
        type: "desktop",
        imgSrc: "/images/steal.jpg",
      },
    ],
    [],
  );
  return (
    <>
      <Head>
        <title>Paul Adaimi - My Projects</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Paul Adaimi - My Projects",
              url: "https://pauladaimi.com/projects",
              description: "Paul Adaimi's Projects",
              isPartOf: {
                "@type": "WebSite",
                url: "https://pauladaimi.com",
              },
            }),
          }}
          key="webpage-jsonld"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://pauladaimi.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "My Projects",
                  item: "https://pauladaimi.com/projects",
                },
              ],
            }),
          }}
          key="breadcrumbs-jsonld"
        />
      </Head>
      <Index projects={projects} />
    </>
  );
}
