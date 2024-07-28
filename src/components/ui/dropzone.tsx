import { cn } from '@/lib/utils'
import { CloudUpload } from 'lucide-react'
import React from 'react'
import { useDropzone } from 'react-dropzone'

// const getColor = (props) => {
//   if (props.isDragAccept) {
//       return '#00e676';
//   }
//   if (props.isDragReject) {
//       return '#ff1744';
//   }
//   if (props.isFocused) {
//       return '#2196f3';
//   }
//   return '#eeeeee';
// }

// const Container = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   border-width: 2px;
//   border-radius: 2px;
//   border-color: ${props => getColor(props)};
//   border-style: dashed;
//   background-color: #fafafa;
//   color: #bdbdbd;
//   outline: none;
//   transition: border .24s ease-in-out;
// `;

const Dropzone: React.FC = (props) => {
   const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
      accept: { 'application/pdf': [] }
   })

   return (
      <div
         className={cn(
            'flex h-auto w-full flex-1 flex-col items-center justify-center rounded-lg border border-dashed border-white-500 bg-transparent py-8 transition-all duration-300',
            {
               'border-black-500': isFocused,
               'border-green-500': isDragAccept,
               'border-red-500': isDragReject
            }
         )}
         {...getRootProps({ isFocused, isDragAccept, isDragReject })}
      >
         <input {...getInputProps()} />
         <div className="flex flex-1 flex-col items-center justify-center">
            <CloudUpload className="my-2 h-8 w-8 text-black-500" />
            <p className="font-sf-pro-display text-base">
               <span className="cursor-default font-sf-pro-display font-semibold underline">Clique para enviar</span> ou
               arraste e solte
            </p>
            <p className="font-sf-pro-display text-sm text-white-800">Tamanho máximo de 2GB.</p>
         </div>
      </div>
   )
}

export { Dropzone }
