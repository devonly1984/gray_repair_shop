import { getCustomer } from "@/drizzle/queries/customerQueries";
import { getTicket } from "@/drizzle/queries/ticketQueries";
import BackButton from "@/components/buttons/BackButton";
import * as Sentry from "@sentry/nextjs";
const TicketFormPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
 
  try {
    const { customerId, ticketId } = await searchParams;
    if (!customerId && !ticketId) {
   
        console.log(customerId);
        return (
          <>
            <h2 className="text-2xl mb-2">
              Customer Id or Ticket Id Required to load Ticket Form
            </h2>
            <BackButton title="Go Back" variant="default" />
          </>
        );
    }
    //New Ticket Form
    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));
      if (!customer) {
        console.log(customerId);
        return (
          <>
            <h2 className="text-2xl mb-2">
              Customer Id # {customerId} was not found
            </h2>
            <BackButton title="Go Back" variant="default" />
          </>
        );
      }
      if (!customer.active) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Customer {customerId} is not currently active
            </h2>
            <BackButton title="Go Back" variant="default" />
          </>
        );
      }
      //return ticket form
    } 
    //Edit Ticket Form
    if (ticketId) {
      const ticket = await getTicket(parseInt(ticketId));
      if (!ticket) {
        console.log(ticketId);
        return (
          <>
            <h2 className="text-2xl mb-2">
              Ticket Id # {ticketId} was not found
            </h2>
            <BackButton title="Go Back" variant="default" />
          </>
        );
      }
      const customer = await getCustomer(ticket.customerId);
      //return ticket form
      console.log("ticket", ticket);
      console.log("customer",customer)
    }
      
  } catch (error) {
    if (error instanceof Error) {
      Sentry.captureException(error);
      throw error;
    }
  }
  return <div>TicketFormPage</div>;
};
export default TicketFormPage;
