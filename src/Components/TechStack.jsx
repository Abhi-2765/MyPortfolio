const TechStack = ({ name }) => {
  return (
    <span className="flex items-center justify-center rounded-full bg-teal-500/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 border border-teal-400/50 shadow-sm transition-all duration-300 hover:bg-teal-500/20 hover:text-white">
      {name}
    </span>
  );
};

export default TechStack;
