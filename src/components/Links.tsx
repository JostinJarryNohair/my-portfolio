import { Link, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { Card } from "./ui/card";

//Change this to your own links
const Links = () => {
  const links = [
    {
      title: "Portfolio",
      url: "#",
      icon: Link,
      description: "View my work",
      bgClass:
        "bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100/80 dark:hover:bg-blue-900/50",
    },
    {
      title: "GitHub",
      url: "https://github.com",
      icon: Github,
      description: "Check my repositories",
      bgClass:
        "bg-neutral-50 dark:bg-neutral-950/50 hover:bg-neutral-100/80 dark:hover:bg-neutral-900/50",
    },
    {
      title: "LinkedIn",
      url: "https://linkedin.com",
      icon: Linkedin,
      description: "Connect with me",
      bgClass:
        "bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100/80 dark:hover:bg-indigo-900/50",
    },
    {
      title: "Email",
      url: "mailto:your@email.com",
      icon: Mail,
      description: "Get in touch",
      bgClass:
        "bg-violet-50 dark:bg-violet-950/50 hover:bg-violet-100/80 dark:hover:bg-violet-900/50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mx-auto p-4">
      {links.map((link, index) => (
        <a
          key={link.title}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group transform transition-all duration-300 hover:-translate-y-1"
        >
          <Card
            className={`p-6 transition-all duration-500 
                       ${link.bgClass}
                       border border-gray-200/50 dark:border-gray-800/50
                       backdrop-blur-sm shadow-sm hover:shadow-md
                       animate-fade-up`}
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-xl bg-white/50 dark:bg-white/10 group-hover:bg-white/80 dark:group-hover:bg-white/20 transition-colors duration-500">
                <link.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-900 dark:text-white">
                  {link.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {link.description}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto text-gray-400 group-hover:text-gray-600 dark:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-500" />
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

export default Links;
