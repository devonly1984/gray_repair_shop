import { db } from "../connect"
import { customers } from "../schemas/customers";
import {eq} from'drizzle-orm'
export const getCustomer = async (id:number) => {
    const customer = await db
      .select()
      .from(customers)
      .where(eq(customers.id, id));
      return customer[0];
};