import { error } from "console"
import EventEmitter from "events"

const event = new EventEmitter()

event.on("error",(error)=>{
    console.log(`ERROR---${error}`)
})

event.emit("error", new Error("SOMETHING WENT WRONG....."))