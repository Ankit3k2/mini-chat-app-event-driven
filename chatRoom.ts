import EventEmitter from "events"

class ChatRoom extends EventEmitter{
    users : Set<string>
    constructor(){
        super()
        this.users = new Set()
    }

    join(user:string){
        this.users.add(user)
        this.emit("join",user)
    }

    sendMessage(user:string ,message: string){
        if(this.users.has(user)){
            this.emit("message",user,message)
        }else
        {
            console.log("USER IS NOT IN THE USERS.......")
        }
    }

    leave(user:string){
        if(this.users.has(user))
        {
            this.users.delete (user)
            this.emit("leave",user)
        }
        else
        {
            console.log("NOT IN THE CHATROOM")
        }
    }
}

export {ChatRoom}