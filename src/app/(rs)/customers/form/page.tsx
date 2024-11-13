import BackButton from "@/components/buttons/BackButton";
import { getCustomer } from "@/drizzle/queries/customerQueries";
import * as Sentry from '@sentry/nextjs'

const CustomerPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  try {
    const { customerId } = await searchParams;
    
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
      } else {
        //new customer Form
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      Sentry.captureException(error);
      throw error;
    }
  }
  return <div>page</div>;
};
export default CustomerPage;
