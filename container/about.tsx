"use client";
import styles from "./About.module.scss";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Carousel from "../components/carousel";
import { EmblaOptionsType } from "embla-carousel-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { comfortaa } from "../lib/fonts";
const About = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [images, setImages] = useState([
    "/profile.jpg",
    "/profile.jpg",
    "/profile.jpg",
  ]);
  const OPTIONS: EmblaOptionsType = {
    loop: true,
  };
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: window.innerWidth - e.clientX * 1.2,
        y: window.innerHeight - e.clientY * 1.1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className={styles.main} style={{transform:`translate(${mousePos.x * 0.02}px,${mousePos.y * 0.02}px)`}}>
      <p>HI! I'M POP</p>
      <h1 className={comfortaa.className} >Papop Lekhapanyaporn</h1>
      <h2 className={comfortaa.className}>Student developer</h2>
      <p className={styles.introduction}>
        I'm a self taught developer who is currently studying in Computer science. 
        I have huge interest in Machine learning, Artificial Intelligent and high performance computing! 
        </p>
        <p className={styles.introduction}>
        I'm currently focusing on leaning new things in the computer science area. Beside that, 
        I'm also interested in building some small projects and teach beginner about coding.
        </p>
        <p className={styles.introduction}>
        Coding is my passion and I love to learn new things!
        </p>
      <div className={styles.button}>
        <Link href="/resume">resume <FontAwesomeIcon icon={faFile}/> </Link>
      </div>
      
    </main>
  );
};
export default About;
