import { Action } from "easy-peasy";
import { MasterStatement } from "@/utils/masterSheet.ts";

export enum TransactionType {
  Pay = "Pay",
  Due = "Due",
}

export interface User {
  email: string;
  id: string;
  name: string;
  rooms_id: string[] | null;
  username: string;
}

export interface Room {
  created_by: string;
  id: string;
  last_updated: string | null;
  master_sheet: MasterStatement;
  name: string;
  transactions_id: string[] | null;
  users_id: string[];
}

// Transaction can be used in making History of a room
// also make the balance sheet with user.length transaction objects.
export interface Transaction {
  amount: number;
  approved: boolean | null;
  created_at: string;
  from_user: string;
  id: string;
  room_id: string;
  to_user: string;
  type: "Pay" | "Due";
}

export interface GlobalStore {
  user: User | null;
  appbarTitle: string;
  rooms: Room[] | null;
  isAdmin: boolean;

  setIsAdmin: Action<GlobalStore, boolean>;
  setUser: Action<GlobalStore, User | null>;
  setAppbarTitle: Action<GlobalStore, string>;
  setRooms: Action<GlobalStore, Room[] | null>;
}
