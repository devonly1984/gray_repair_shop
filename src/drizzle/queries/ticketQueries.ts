import { db } from "../connect";
import { tickets } from "../schemas/tickets";
import { eq } from "drizzle-orm";


export const getTicket = async (id:number)=>{
    const ticket = await db.select().from(tickets).where(eq(tickets.id, id));
    return ticket[0];
}