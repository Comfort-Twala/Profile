"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconDeviceMobileMessage, IconMail, IconBrandWhatsapp, IconBrandLinkedin, IconBrandGithub, IconCalendarTime } from '@tabler/icons-react';
import { LinkPreview } from "../ui/link-preview";

export function ContactModal() {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const contactInfo = [
    { icon: IconMail, text: "kontreitroos@gmail.com", href: "mailto:kontreitroos@gmail.com" },
    { icon: IconBrandWhatsapp, text: "+27 76 550 1291", href: "https://wa.me/27765501291" },
    { icon: IconBrandLinkedin, text: "Comfort Twala", href: "https://www.linkedin.com/in/comfort-twala" },
    { icon: IconBrandGithub, text: "Comfort-Twala", href: "https://github.com/Comfort-Twala" },
    { icon: IconCalendarTime, text: "Schedule Meeting", href: "#" },
  ];

  return (
    <div>
      <Modal>
        <ModalTrigger className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear flex group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Let's Chat!
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            <IconDeviceMobileMessage />
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Need a Problem Solver?{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Let's Chat!
              </span>{" "}
              🚀
            </h4>
            <div className="flex justify-center items-center mb-8">
              {images.map((image, idx) => (
                <motion.div
                  key={`image-${idx}`}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="portfolio image"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
              {contactInfo.map((info, index) => (
                <LinkPreview
                  key={`contact-${index}`}
                  url={info.href}
                  className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors duration-200"
                  >
                  <info.icon className="mr-3 text-neutral-700 dark:text-neutral-300 h-5 w-5" />
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">{info.text}</span>
                </LinkPreview>
              ))}
            </div>
          </ModalContent>
          <ModalFooter className="flex justify-center mt-6">
            <a
              href="#" // Replace with actual resume download link
              className="bg-black text-white dark:bg-white dark:text-black text-sm px-4 py-2 rounded-md border border-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors duration-200"
            >
              Download Resume
            </a>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}