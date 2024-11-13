import { db } from "./connect";
import { migrate } from "drizzle-orm/neon-http/migrator";

const main = async()=>{
    try {
        await migrate(db,{
            migrationsFolder: './src/drizzle/migrations'
        })
        console.log("Migration Completed Successfully");
    } catch (error) {
        console.error("Error during migration",error);
        process.exit(1);

    }
}
main();
