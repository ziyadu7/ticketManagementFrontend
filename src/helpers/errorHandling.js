import { toast } from 'react-hot-toast'

function errorFunction(err,navigate){
  console.log(err);
    if (err?.response?.data) {
        toast.error(err?.response?.data?.errMsg)
      }else if(err?.message){
        toast.error(err?.message)
      }
}

export default errorFunction