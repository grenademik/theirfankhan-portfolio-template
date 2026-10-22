import React from "react"

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({ title, icon, position, handleClick, otherClasses }) => {
  return (
    <button
      className={`inline-flex w-full items-center justify-center gap-2 border-2 border-white bg-black p-4 text-lg font-medium text-white transition hover:bg-white hover:text-black focus:outline-none ${otherClasses}`}
      onClick={handleClick}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  )
}

export default MagicButton
