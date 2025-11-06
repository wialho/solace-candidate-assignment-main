import { IAdvocate } from "@/types/advocate";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export interface IAdvocateTableProps {
  data: IAdvocate[];
  columns: string[];
}

export const AdvocateTable = ({ data, columns }: IAdvocateTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((c) => {
            return <TableHead key={c}>{c}</TableHead>;
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((advocate: IAdvocate) => {
          return (
            <TableRow key={advocate.phoneNumber}>
              <TableCell>{advocate.firstName}</TableCell>
              <TableCell>{advocate.lastName}</TableCell>
              <TableCell>{advocate.city}</TableCell>
              <TableCell>{advocate.degree}</TableCell>
              <TableCell>
                {advocate.specialties.map((s: string) => (
                  <div key={s}>{s}</div>
                ))}
              </TableCell>
              <TableCell>{advocate.yearsOfExperience}</TableCell>
              <TableCell>{advocate.phoneNumber}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
