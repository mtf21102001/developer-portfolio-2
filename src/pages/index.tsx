import Container from "@/components/Container";
import { useEffect, useRef, Suspense, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ArrowDownToLine,
  ExternalLink,
  Github,
  Server,
  Globe,
  Building2,
  Database,
  Cpu,
  HeartPulse,
  CreditCard,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import { personalInfo, aboutStats, services, projects } from "@/data/portfolio";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Integration":
    case "API Integration":
      return <Server className="h-8 w-8" />;
    case "E-Commerce / Travel":
    case "E-Commerce Storefront":
      return <Globe className="h-8 w-8" />;
    case "Enterprise ERP":
    case "Military ERP":
      return <Building2 className="h-8 w-8" />;
    case "Data Automation":
    case "Financial Automations":
      return <Database className="h-8 w-8" />;
    case "SaaS Platform":
      return <Cpu className="h-8 w-8" />;
    case "Healthcare SaaS":
      return <HeartPulse className="h-8 w-8" />;
    case "Fintech E-Commerce":
      return <CreditCard className="h-8 w-8" />;
    case "Military Security":
      return <ShieldCheck className="h-8 w-8" />;
    default:
      return <Terminal className="h-8 w-8" />;
  }
};

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  // handle scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
          console.log(li.getAttribute("href"));
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  // card hover effect
  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.98,
    });
  }, []);

  return (
    <Container>
      <div ref={refScrollContainer}>
        <Gradient />

        {/* Intro */}
        <section
          id="home"
          data-scroll-section
          className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
        >
          <div className={styles.intro}>
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed=".09"
              className="flex flex-row items-center space-x-1.5"
            >
              <span className={styles.pill}>react.js</span>
              <span className={styles.pill}>next.js</span>
              <span className={styles.pill}>typescript</span>
              <span className={styles.pill}>python</span>
            </div>
            <div>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
              >
                <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
                  Hello, I&apos;m
                  <br />
                </span>
                <span className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">
                  {personalInfo.name}
                </span>
              </h1>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-2 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
              >
                {personalInfo.subtitle}
              </p>
            </div>
            <span
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              className="flex flex-row items-center space-x-2 pt-6"
            >
              <Link href={`mailto:${personalInfo.email}`} passHref>
                <Button>
                  Get in touch <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link href={personalInfo.cvPath} passHref>
                <Button variant="secondary" className="flex items-center">
                  Download CV <ArrowDownToLine className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </span>

            <div
              className={cn(
                styles.scroll,
                isScrolled && styles["scroll--hidden"],
              )}
            >
              Scroll to discover{" "}
              <TriangleDownIcon className="mt-1 animate-bounce" />
            </div>
          </div>
          <div
            data-scroll
            data-scroll-speed="-.01"
            id={styles["canvas-container"]}
            className="mt-14 h-full w-full xl:mt-0"
          >
            <Suspense fallback={<span>Loading...</span>}>
              <Spline scene="/developer-portfolio-2/assets/scene.splinecode" />
            </Suspense>
          </div>
        </section>

        {/* About */}
        <section id="about" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-14 flex max-w-6xl flex-col justify-start space-y-10"
          >
            <h2 className="py-16 pb-2 text-2xl font-light leading-relaxed tracking-tight text-foreground xl:text-[34px]">
              {personalInfo.aboutText}
            </h2>
            <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center xl:items-start xl:text-start"
                >
                  <span className="clash-grotesk text-gradient text-4xl font-semibold tracking-tight xl:text-6xl">
                    {stat.value}
                  </span>
                  <span className="tracking-tight text-muted-foreground xl:text-lg">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" data-scroll-section>
          {/* Gradient */}
          <div className="relative isolate -z-10">
            <div
              className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-[100px] sm:-top-80 lg:-top-60"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary via-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div data-scroll data-scroll-speed=".4" className="my-64">
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              ✨ Selected Projects
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              High-Impact Engineering Cases
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              Explore how I translate complex technical workflows into tangible business value and automation.
            </p>

            {/* Carousel */}
            <div className="mt-14">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {projects.map((project) => (
                    <CarouselItem key={project.title} className="basis-full md:basis-1/2 p-2">
                      <div id="tilt" className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-md h-[620px] w-full group transition-all duration-300 hover:border-white/20">
                        {/* Showcase Media (Top) */}
                        <div className="relative h-[200px] min-h-[200px] w-full overflow-hidden border-b border-white/5 bg-black/60">
                          {project.image === "/assets/portfolio.webm" ? (
                            <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
                              {/* Glowing background bubble */}
                              <div 
                                className="absolute -inset-10 opacity-20 blur-3xl rounded-full transition-all duration-500 group-hover:opacity-30"
                                style={{
                                  background: `radial-gradient(circle, ${project.color} 0%, transparent 70%)`
                                }}
                              />
                              <div className="relative z-10 flex flex-col items-center space-y-3">
                                <div 
                                  className="p-4 rounded-full border border-white/10 backdrop-blur-xl bg-white/5 transition-all duration-300 group-hover:scale-110"
                                  style={{ color: project.color, boxShadow: `0 0 30px ${project.color}20` }}
                                >
                                  {getCategoryIcon(project.category)}
                                </div>
                                <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-muted-foreground/80">
                                  {project.category}
                                </span>
                              </div>
                              {/* Grid lines pattern */}
                              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px]" />
                            </div>
                          ) : (
                            project.href ? (
                              <Link href={project.href} target="_blank" className="block w-full h-full relative">
                                {project.image.endsWith(".webm") ? (
                                  <video
                                    src={"/developer-portfolio-2" + project.image}
                                    autoPlay
                                    loop
                                    muted
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                  />
                                ) : (
                                  <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    quality={90}
                                    unoptimized={project.image.endsWith(".webp")}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                  />
                                )}
                              </Link>
                            ) : (
                              <div className="w-full h-full relative">
                                {project.image.endsWith(".webm") ? (
                                  <video
                                    src={"/developer-portfolio-2" + project.image}
                                    autoPlay
                                    loop
                                    muted
                                    className="absolute inset-0 h-full w-full object-cover"
                                  />
                                ) : (
                                  <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    quality={90}
                                    unoptimized={project.image.endsWith(".webp")}
                                    className="absolute inset-0 h-full w-full object-cover"
                                  />
                                )}
                              </div>
                            )
                          )}
                        </div>

                        {/* Content & Details (Bottom) */}
                        <div className="flex flex-col justify-between p-5 flex-grow">
                          <div>
                            {/* Title & External Links */}
                            <div className="flex items-center justify-between border-b border-white/5 pb-3">
                              <div className="flex flex-col">
                                <span className="text-[9px] font-bold tracking-widest uppercase mb-0.5" style={{ color: project.color }}>
                                  {project.category}
                                </span>
                                <h3 className="clash-grotesk text-lg font-semibold tracking-tight text-foreground truncate max-w-[210px]" title={project.title}>
                                  {project.title}
                                </h3>
                              </div>
                              <div className="flex items-center space-x-3">
                                {project.github && (
                                  <Link href={project.github} target="_blank" className="text-muted-foreground hover:text-foreground transition">
                                    <Github size={18} />
                                  </Link>
                                )}
                                {project.href && (
                                  <Link href={project.href} target="_blank" className="text-muted-foreground hover:text-foreground transition">
                                    <ExternalLink size={18} />
                                  </Link>
                                )}
                              </div>
                            </div>

                            {/* Technical description */}
                            <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                              {project.description}
                            </p>

                            {/* Business Metrics details */}
                            <div className="mt-4 space-y-2.5 rounded-lg bg-white/[2%] p-3.5 border border-white/5 text-[11px]">
                              <div>
                                <span className="text-[9px] font-bold tracking-wider uppercase" style={{ color: project.color }}>
                                  🎯 Business Goal
                                </span>
                                <p className="mt-0.5 text-secondary-foreground leading-normal line-clamp-2">
                                  {project.businessGoal}
                                </p>
                              </div>
                              <div className="grid grid-cols-1 gap-2 pt-2 border-t border-white/5">
                                <div>
                                  <span className="text-[9px] font-bold tracking-wider uppercase" style={{ color: project.color }}>
                                    👥 Target Audience
                                  </span>
                                  <p className="mt-0.5 text-secondary-foreground leading-normal truncate">
                                    {project.businessTarget}
                                  </p>
                                </div>
                                <div className="pt-2 border-t border-white/5">
                                  <span className="text-[9px] font-bold tracking-wider uppercase" style={{ color: project.color }}>
                                    📈 Business Impact
                                  </span>
                                  <p className="mt-0.5 text-secondary-foreground leading-normal line-clamp-2">
                                    {project.businessImpact}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Tech stack badges */}
                          <div className="mt-4 flex flex-wrap gap-1 border-t border-white/5 pt-3">
                            {project.techStack.slice(0, 4).map((tech) => (
                              <span 
                                key={tech} 
                                className="rounded px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider"
                                style={{ backgroundColor: `${project.color}15`, color: project.color }}
                              >
                                {tech}
                              </span>
                            ))}
                            {project.techStack.length > 4 && (
                              <span className="rounded bg-white/5 px-2 py-0.5 text-[9px] font-semibold text-muted-foreground uppercase tracking-wider">
                                +{project.techStack.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">
                  {current} / {count}
                </span>{" "}
                projects
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                staggerChildren: 0.5,
              }}
              viewport={{ once: true }}
              className="grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3"
            >
              <div className="flex flex-col py-6 xl:p-6 justify-center">
                <h2 className="text-4xl font-medium tracking-tight">
                  Professional
                  <br />
                  <span className="text-gradient clash-grotesk tracking-normal">
                    Solutions.
                  </span>
                </h2>
                <p className="mt-2 tracking-tighter text-secondary-foreground">
                  Here is what I bring to the table to help scale your business processes and optimize systems.
                </p>
              </div>
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.service}
                    className="flex flex-col items-start rounded-md bg-white/5 p-10 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md"
                  >
                    <IconComponent className="my-4 text-primary" size={24} />
                    <span className="text-lg tracking-tight text-foreground font-semibold">
                      {service.service}
                    </span>
                    <span className="mt-2 text-sm tracking-tight text-muted-foreground leading-relaxed">
                      {service.description}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" data-scroll-section className="my-64">
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24"
          >
            <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
              Let&apos;s build dynamic{" "}
              <span className="text-gradient clash-grotesk">systems.</span>
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I&apos;m currently available for full-time positions, contracting, or freelance integration work.
            </p>
            <Link href={`mailto:${personalInfo.email}`} passHref>
              <Button className="mt-6">Get in touch</Button>
            </Link>
          </div>
        </section>
      </div>
    </Container>
  );
}

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
