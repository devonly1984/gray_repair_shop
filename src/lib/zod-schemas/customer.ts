import {createInsertSchema,createSelectSchema}  from 'drizzle-zod';
import { customers } from '@/drizzle/schemas/customers';

export const insertCustomerSchema = createInsertSchema(customers, {
  firstName: (schema) => schema.firstName.min(1, "First Name is required"),
  lastName: (schema) => schema.lastName.min(1, "Last Name is required"),
  address1: (schema) => schema.address1.min(1, "Address is required"),
  city: (schema) => schema.city.min(1, "City is required"),
  state: (schema) =>
    schema.state.length(2, "State abbreviations must be exactly 2 characters"),
  email: (schema) => schema.email.email("Invalid Email addresss"),
  zipcode: (schema) =>
    schema.zipcode.regex(
      /^\d{5}(-\d{4})?$/,
      "Invalid zipcode must be 55555-5555 format"
    ),
  phone: (schema) =>
    schema.phone.regex(
      /^\d{3}-\d{3}-\d{4}$/,
      "Invalid phone number must include area code prefix and last 4"
    ),

});
export const selectCustomerSchema = createSelectSchema(customers);

export type insertCustomerSchemaType = typeof insertCustomerSchema._type;
export type selectCustomerSchemaType = typeof selectCustomerSchema._type;