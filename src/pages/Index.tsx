
import Links from "@/components/Links";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/20 via-transparent to-transparent dark:from-blue-900/10"></div>
      <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero Section */}
          <section className="text-center space-y-8 animate-fade-down">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/50 text-sm text-blue-700 dark:text-blue-300 mb-4 hover:scale-105 transition-transform backdrop-blur-sm">
              Welcome to my portfolio
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
              Your Name
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-up font-light" style={{ animationDelay: "200ms" }}>
              A passionate developer crafting beautiful digital experiences
            </p>
          </section>

          {/* Links Section */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Connect With Me
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Find me across the web</p>
            </div>
            <Links />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
