function LowLevel(props: React.SVGProps<SVGSVGElement>) {
   return (
      <svg viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
         <circle cx={1} cy={13.5} r={1} fill="#030303" />
         <circle cx={6} cy={13.5} r={1} fill="#030303" />
         <circle cx={11} cy={13.5} r={0.5} fill="#B4B4B4" stroke="#B4B4B4" />
         <circle cx={16} cy={13.5} r={0.5} fill="#B4B4B4" stroke="#B4B4B4" />
         <circle cx={6} cy={9.5} r={1} fill="#030303" />
         <circle cx={11} cy={5.5} r={0.5} fill="#B4B4B4" stroke="#B4B4B4" />
         <circle cx={16} cy={1.5} r={0.5} fill="#B4B4B4" stroke="#B4B4B4" />
         <path d="M6 9.5v4" stroke="#030303" strokeWidth={2} />
         <path d="M11 5.5v8M16 1.5v12" stroke="#B4B4B4" strokeWidth={2} />
      </svg>
   )
}

function MediumLevel(props: React.SVGProps<SVGSVGElement>) {
   return (
      <svg viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
         <circle cx={1} cy={13.5} r={0.5} fill="#030303" stroke="#030303" />
         <circle cx={6} cy={13.5} r={0.5} fill="#030303" stroke="#030303" />
         <circle cx={11} cy={13.5} r={0.5} fill="#030303" stroke="#030303" />
         <circle cx={16} cy={13.5} r={0.5} fill="#B4B4B4" stroke="#B4B4B4" />
         <circle cx={6} cy={9.5} r={0.5} fill="#030303" stroke="#030303" />
         <circle cx={11} cy={5.5} r={0.5} fill="#030303" stroke="#030303" />
         <circle cx={16} cy={1.5} r={0.5} fill="#B4B4B4" stroke="#B4B4B4" />
         <path d="M6 9.5v4M11 5.5v8" stroke="#030303" strokeWidth={2} />
         <path d="M16 1.5v12" stroke="#B4B4B4" strokeWidth={2} />
      </svg>
   )
}

function HighLevel(props: React.SVGProps<SVGSVGElement>) {
   return (
      <svg viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
         <circle cx={1} cy={13.5} r={0.5} fill="#030303" stroke="#030303" />
         <circle cx={6} cy={13.5} r={0.5} fill="#030303" stroke="#030303" />
         <circle cx={11} cy={13.5} r={0.5} fill="#030303" stroke="#030303" />
         <circle cx={16} cy={13.5} r={0.5} fill="#030303" stroke="#030303" />
         <circle cx={6} cy={9.5} r={0.5} fill="#030303" stroke="#030303" />
         <circle cx={11} cy={5.5} r={0.5} fill="#030303" stroke="#030303" />
         <circle cx={16} cy={1.5} r={0.5} fill="#030303" stroke="#030303" />
         <path d="M6 9.5v4M11 5.5v8M16 1.5v12" stroke="#030303" strokeWidth={2} />
      </svg>
   )
}

export { HighLevel, LowLevel, MediumLevel }
