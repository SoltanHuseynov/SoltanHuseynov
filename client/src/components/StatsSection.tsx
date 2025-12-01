import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { GitBranch, Star, Users, Code2 } from "lucide-react";

interface StatsSectionProps {
  totalRepos: number;
  totalStars: number;
  totalOrgs: number;
  languages: string[];
}

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export function StatsSection({ totalRepos, totalStars, totalOrgs, languages }: StatsSectionProps) {
  const stats = [
    { icon: GitBranch, label: "Repositories", value: totalRepos, color: "text-blue-500" },
    { icon: Star, label: "Total Stars", value: totalStars, color: "text-yellow-500" },
    { icon: Users, label: "Organizations", value: totalOrgs, color: "text-green-500" },
    { icon: Code2, label: "Languages", value: languages.length, color: "text-purple-500" },
  ];

  return (
    <section className="py-16 px-6 md:px-8" data-testid="section-stats">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-card border rounded-2xl p-6 text-center hover-elevate">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-4xl font-bold mb-1" data-testid={`stat-value-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
