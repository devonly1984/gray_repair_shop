import {createInsertSchema,createSelectSchema}  from 'drizzle-zod';
import { tickets } from '@/drizzle/schemas/tickets';
import { z } from "zod";
export const insertTicketSchema = createInsertSchema(tickets,{
    id: 
})

export const createTicketSchema = createSelectSchema(tickets)