import { ChatRoom } from "./chatRoom.js";

const chat = new ChatRoom()

chat.on("join",(user)=>{
    console.log(`USER --- ${user} JOINED THE ROOM`)
})
chat.on("message",(user,message)=>{
    console.log(`USER --- ${user} SEND MESSAGE -- ${message}`)
})
chat.on("leave",(user)=>{
    console.log(`USER --- ${user} LEAVED  THE ROOM`)
})

chat.join("Alice")
chat.join("Bob")

chat.sendMessage("Alice","HELLO THIS THIS IS ALICE")
chat.sendMessage("Bob","HEY ITS BOB THIS SIDE")

chat.sendMessage("Alice","OH I AM LEAVING")
chat.leave("Alice")
chat.leave("Bob")