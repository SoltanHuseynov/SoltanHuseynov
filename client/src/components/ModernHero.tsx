import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ModernHeroProps {
  name: string;
  title: string;
  tagline: string;
  avatarUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  email?: string;
}

export function ModernHero({
  name,
  title,
  tagline,
  avatarUrl,
  githubUrl,
  linkedinUrl,
  email,
}: ModernHeroProps) {
  const scrollToProjects = () => {
    document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const cvPath = "/cv/CV.pdf";
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "SoltanHuseynov-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8 overflow-hidden" data-testid="section-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block"
          >
            <Avatar className="w-32 h-32 md:w-40 md:h-40 mx-auto border-4 border-background shadow-2xl">
              <AvatarImage src={avatarUrl} alt={name} />
              <AvatarFallback className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-primary to-primary/60 text-primary-foreground">
                {name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Yeni imkanlar üçün açığam
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          data-testid="text-hero-name"
        >
          <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text">
            {name}
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-primary font-medium mb-4"
          data-testid="text-hero-title"
        >
          {title}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          data-testid="text-hero-tagline"
        >
          {tagline}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-4 mb-12">
          <Button size="lg" onClick={scrollToProjects} data-testid="button-view-projects">
            Layihələrə Bax
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" onClick={downloadCV} data-testid="button-download-resume">
            <Download className="mr-2 h-4 w-4" />
            CV Yüklə
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center items-center gap-4">
          {githubUrl && (
            <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full" asChild data-testid="link-github">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profili">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          )}
          {linkedinUrl && (
            <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full" asChild data-testid="link-linkedin">
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profili">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          )}
          {email && (
            <motion.div whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full" asChild data-testid="link-email">
                <a href={`mailto:${email}`} aria-label="E-poçt Göndər">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
