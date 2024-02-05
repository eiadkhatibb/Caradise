import axios from 'axios'
import { API_ROUTES } from './routes'


const createMessage = async(data={})=>{
   const res = await axios.post(API_ROUTES.CREATE_CHAT,data)
   return res.data
}

const getMessage = async(data={})=>{
   const res =await axios.post(API_ROUTES.GET_CHATS,data)
   return res.data
}


const chatApi = {
   createMessage,
   getMessage
}

export default chatApi