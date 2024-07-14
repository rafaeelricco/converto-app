'use client'

import React from 'react'

export default function Home() {
   const [files, setFiles] = React.useState<File[]>([])
   console.log(files)
   //   const [message, setMessage] = React.useState("");
   //   let ws = new WebSocket(process.env.NEXT_PUBLIC_WS_URL as string);

   //   ws.onopen = () => {
   //     console.log("connected");
   //   };

   //   ws.onmessage = (msg) => {
   //     setMessage(msg.data);
   //   };

   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <input
            alt=""
            multiple
            type="file"
            accept="application/pdf"
            onInput={(e) => {
               const files = Array.from(e.currentTarget.files as FileList)
               setFiles(files)
            }}
         />
         <div className="max-h-[150px] w-full min-w-[300px] overflow-y-scroll border border-gray-400">
            {files.map((file) => (
               <div key={file.name} className="flex items-center justify-between p-2">
                  <p>{file.name}</p>
                  <button
                     onClick={() => {
                        setFiles((files) => files.filter((f) => f.name !== file.name))
                     }}
                  >
                     X
                  </button>
               </div>
            ))}
         </div>
      </main>
   )
}
