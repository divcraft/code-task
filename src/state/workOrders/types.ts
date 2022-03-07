import { StatusType } from "../../types";

export type AssignedToType = {
   person_name: string;
   status: string;
}

export type OrderType = {
   work_order_id: number;
   description: string;
   received_date: string;
   assigned_to: AssignedToType[];
   status: string;
   priority: string;
}

export type ResponseType = {
   current_page: number;
   from: number;
   last_page: number;
   per_page: number;
   to: number;
   total: number;
   data: OrderType[];
}

export type FetchedDataType = {
   exec_time: number;
   response: ResponseType;
}

export type WorkOrdersType = {
ordersList: OrderType[],
status: StatusType,
}