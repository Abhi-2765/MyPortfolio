const ReactIcon = () => {
  return (
    <div className="flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
        <ellipse cx="24" cy="24" rx="21" ry="8" fill="none" stroke="#61DAFB" stroke-width="1.5" transform="rotate(0 24 24)"/>
        <ellipse cx="24" cy="24" rx="21" ry="8" fill="none" stroke="#61DAFB" stroke-width="1.5" transform="rotate(60 24 24)"/>
        <ellipse cx="24" cy="24" rx="21" ry="8" fill="none" stroke="#61DAFB" stroke-width="1.5" transform="rotate(120 24 24)"/>
        <circle cx="24" cy="24" r="4" fill="#61DAFB"/>
      </svg>
      <span className="text-gray-400 text-sm  mt-1">React</span>
    </div>
  )
}

export default ReactIcon;
