import React from 'react'
import { createPortal } from 'react-dom'

type DialogueType = {
    children: React.ReactNode
}
const Dialogue = ({ children }: DialogueType) => {
  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center"
    >
      {/* Modal box — stop click from bubbling to overlay */}
      <div
        className=" bg-white w-md max-w-md rounded-3xl p-6 min-w-[448px] shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body  // ← renders directly on body, escapes the entire tree
  )
}

export default Dialogue