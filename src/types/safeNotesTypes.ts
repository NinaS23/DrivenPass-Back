import { safeNotes } from "@prisma/client";

export type TsafeNOtesDate = Omit<safeNotes, "id"|"createdAt">