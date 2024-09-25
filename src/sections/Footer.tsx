import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"


export const Footer = () => {

  const footerLinks = [
    {
      title:"Github",
      href:"#"
    },
    {
      title:"Twitter",
      href:"#"
    },
    {
      title:"Instagram",
      href:"#"
    },
    {
      title:"LinkedIn",
      href:"#"
    },
  ]

  return (
    <>
      <footer className="relative -z-10 overflow-x-clip">
         <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
        <div className="container">
            <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between">
                <div className="text-white/40">&copy; 2024. All rights reserverd.</div>
                <nav className="flex flex-col items-center gap-8 md:flex-row">
                   {footerLinks.map((link)=>(
                       <a href={link.href} key={link.title} className="inline-flex items-center gap-8">
                         <span>{link.title}</span>
                         <ArrowUpRightIcon className="size-4"/>
                       </a>
                   ))}
                </nav>
            </div>
        </div>
      </footer>
    </>
  );
};
