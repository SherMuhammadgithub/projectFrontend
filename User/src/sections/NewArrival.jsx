import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: center;
  align-items: center;

  position: relative;
  /* background-color: ${(props) => props.theme.text}; */
`;



const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};

  position: absolute;
  top: 2rem;
  left: 1rem;
  z-index: 15;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
    top: 4rem;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;



const NewArrival = () => {
  const teamData = [
    {
      id: 1,
      name: "Sher Muhammad",
      role: "Full Stack Engineer",
      img: "https://hrcdn.net/s3_pub/hr-avatars/fdeb4eed-2858-4e1a-8523-e420f93eb4e9/150x150.png",
      socialLinks: [
        {
          href: "https://github.com/SherMuhammadgithub/xpense-tracker-app",
          icon: <FaGithub />,
          iconId: 1,
        },
        {
          href: "https://github.com/SherMuhammadgithub/xpense-tracker-ap",
          icon: <FaFacebook />,
          iconId: 2,
        },
      ],
    },
    {
      id: 2,
      name: "Hamid Riaz",
      role: "backend Engineer",
      img: "https://media.licdn.com/dms/image/D4D03AQG4PrtIG26MLg/profile-displayphoto-shrink_400_400/0/1706786666813?e=1722470400&v=beta&t=a4Insz6QEEvdW8c8WOrzExJeKPgXYRK062Z4G2AvPnk",
      socialLinks: [
        {
          href: "https://github.com/SherMuhammadgithub/xpense-tracker-ap",
          icon: <FaGithub />,
          iconId: 1,
        },
        {
          href: "https://github.com/SherMuhammadgithub/xpense-tracker-ap",
          icon: <FaFacebook />,
          iconId: 2,
        },
      ],
    },
    {
      id: 3,
      name: "Ahemd Butt",
      role: "Frontend Engineer",
      img: "https://media.licdn.com/dms/image/D4D03AQEsrB3E6s_LYg/profile-displayphoto-shrink_800_800/0/1701533843029?e=1722470400&v=beta&t=BdfS9QBxlHI4KDNaIgKgJSFa6_MMxIojy91TqWUOWKo",
      socialLinks: [
        {
          href: "https://github.com/SherMuhammadgithub/xpense-tracker-ap",
          icon: <FaGithub />,
          iconId: 1,
        },
        {
          href: "https://github.com/SherMuhammadgithub/xpense-tracker-ap",
          icon: <FaFacebook />,
          iconId: 2,
        },
      ],
    },
    {
      id: 4,
      name: "Sumaira Hafeez",
      role: "Front End Engineer",
      img: "https://media.licdn.com/dms/image/D5603AQFmkHMalVkWnQ/profile-displayphoto-shrink_100_100/0/1694165865307?e=1722470400&v=beta&t=YYeNL49OLFt1CCST_EiW5wAveoY6rboggCuzTfWcZlI",
      socialLinks: [
        {
          href: "https://github.com/SherMuhammadgithub/xpense-tracker-ap",
          icon: <FaGithub />,
          iconId: 1,
        },
        {
          href: "https://github.com/SherMuhammadgithub/xpense-tracker-ap",
          icon: <FaFacebook />,
          iconId: 2,
        },
      ],
    },
    {
      id: 5,
      name: "Muhammad Uzair",
      role: "Graphics Designer",
      img: "https://media.licdn.com/dms/image/D5603AQGSIYmQP8ePOg/profile-displayphoto-shrink_400_400/0/1716174267132?e=1722470400&v=beta&t=nybA9hHEb3FRXHSQFE6nNEejmRhbiV8a4zHqw_PDHt4",
      socialLinks: [
        {
          href: "https://github.com/SherMuhammadgithub/xpense-tracker-ap",
          icon: <FaGithub />,
          iconId: 1,
        },
        {
          href: "https://github.com/SherMuhammadgithub/xpense-tracker-ap",
          icon: <FaFacebook />,
          iconId: 2,
        },
      ],
    },
    {
      id: 6,
      name: "Arwa",
      role: "Front End Engineer",
      img: "https://media.licdn.com/dms/image/D4D03AQGiENCPKjGegA/profile-displayphoto-shrink_800_800/0/1694242471614?e=1722470400&v=beta&t=awiZJAu3QGK1NCMcxbZmsnj_2S7Y0Ue2QKShXu6K6qU",
      socialLinks: [
        {
          href: "https://github.com/SherMuhammadgithub/xpense-tracker-ap",
          icon: <FaGithub />,
          iconId: 1,
        },
        {
          href: "https://github.com/SherMuhammadgithub/xpense-tracker-ap",
          icon: <FaFacebook />,
          iconId: 2,
        },
      ],
    },
  ];
  return (
    <Section className="new-arrival bg-white p-4">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        Meet
      </Title>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our team
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Meet our dedicated team of professionals who are the driving force
              behind our success.
            </p>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center w-full">
            {teamData.map((item) => (
              <div className="text-center text-gray-500 dark:text-gray-400" key={item.id}>
                <img
                  className="mx-auto mb-4 w-36 h-36 rounded-full object-fill"
                  src={item.img}
                  alt="Joseph Avatar"
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <li key={item.id} className="list-none">
                    <a href="/">{item.name}</a>
                  </li>
                </h3>
                <p>{item.role}</p>
                <ul className="flex justify-center mt-4 space-x-4">
                  {item.socialLinks.map((link) => (
                    <li className="list-none" key={link.iconId}>
                      <a
                        href={link.href}
                        className="text-[#07271f] hover:text-green-500 dark:hover:text-white"
                      >
                        {link.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Section>
  );
};

export default NewArrival;
