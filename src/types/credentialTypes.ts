import client from "../config/database.js";
import { credentials } from "@prisma/client";


export type typeCredentialInsert = Omit<credentials, "id" | "createdAt">