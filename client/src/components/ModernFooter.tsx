import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModernFooterProps {
  name: string;
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export function ModernFooter({ name, email, githubUrl, linkedinUrl }: ModernFooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 px-6 md:px-8 border-t overflow-hidden" data-testid="section-footer">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-2">{name}</h3>
            <p className="text-muted-foreground">
              Building digital experiences that matter.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3"
          >
            {githubUrl && (
              <motion.div whileHover={{ scale: 1.1, y: -2 }}>
                <Button variant="ghost" size="icon" asChild data-testid="footer-link-github">
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            )}
            {linkedinUrl && (
              <motion.div whileHover={{ scale: 1.1, y: -2 }}>
                <Button variant="ghost" size="icon" asChild data-testid="footer-link-linkedin">
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            )}
            {email && (
              <motion.div whileHover={{ scale: 1.1, y: -2 }}>
                <Button variant="ghost" size="icon" asChild data-testid="footer-link-email">
                  <a href={`mailto:${email}`} aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full"
              data-testid="button-scroll-top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t text-center"
        >
          <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-2">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </motion.div>
            <span>by {name}</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
