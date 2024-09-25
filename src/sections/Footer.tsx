// import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"


export const Footer = () => {

  const footerLinks = [
    {
      title:"Github",
      href:"github.com/harsh-singh-repository",
    },
    {
      title:"Twitter",
      href:"x.com/SinghDevloper"
    },
    {
      title:"Instagram",
      href:"www.instagram.com/harshwebartisty/"
    },
    {
      title:"LinkedIn",
      href:"www.linkedin.com/in/harsh-singh-8524b9219/"
    },
  ]

  return (
    <>
      <footer className="relative overflow-x-clip">
         <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
        <div className="container">
            <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between">
                <div className="text-white/40">&copy; 2024. All rights reserverd.</div>
                <nav className="flex flex-col items-center gap-8 md:flex-row">
                   {footerLinks.map((link)=>(
                       <a href={`//${link.href}`} target="_blank" key={link.title}>
                          <span>{link.title}</span>
                       </a>
                   ))}
                </nav>
            </div>
        </div>
      </footer>
    </>
  );
};
