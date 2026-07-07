
import { Infinity } from 'ldrs/react'
import 'ldrs/react/Infinity.css'

export default function LoadingSpinner() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Infinity
        size="55"
        stroke="4"
        strokeLength="0.15"
        bgOpacity="0.1"
        speed="1.3"
        color="#c1785a" 
      />
          </div> 
  );
}
