const ProgressCircle: React.FC<{ progress: number }> = ({ progress }) => {
   const stroke_dash_offset = 100 - progress

   return (
      <div className="relative size-4 transition-all duration-300">
         <svg
            className="size-full -rotate-90 transition-all duration-300"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
         >
            {/* <!-- Background Circle --> */}
            <circle
               cx="18"
               cy="18"
               r="16"
               fill="none"
               className="stroke-current text-[#D9D9D9] transition-all duration-300"
               strokeWidth="4"
            ></circle>
            {/*  <!-- Progress Circle --> */}
            <circle
               cx="18"
               cy="18"
               r="16"
               fill="none"
               className="stroke-current text-[#2D2D2D] transition-all duration-300"
               strokeWidth="4"
               strokeDasharray="100"
               strokeDashoffset={stroke_dash_offset}
               strokeLinecap="round"
            ></circle>
         </svg>
      </div>
   )
}

export { ProgressCircle }
