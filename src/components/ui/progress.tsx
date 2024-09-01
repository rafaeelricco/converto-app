const ProgressCircle: React.FC<{ progress: number }> = ({ progress }) => {
   const stroke_dash_offset = 100 - progress

   return (
      <div className="relative size-40">
         <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            {/* <!-- Background Circle --> */}
            <circle
               cx="18"
               cy="18"
               r="16"
               fill="none"
               className="stroke-current text-[#D9D9D9]"
               stroke-width="2"
            ></circle>
            {/*  <!-- Progress Circle --> */}
            <circle
               cx="18"
               cy="18"
               r="16"
               fill="none"
               className="stroke-current text-[#2D2D2D]"
               stroke-width="2"
               stroke-dasharray="100"
               stroke-dashoffset={stroke_dash_offset}
               stroke-linecap="round"
            ></circle>
         </svg>
      </div>
   )
}

export { ProgressCircle }
