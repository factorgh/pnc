import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Status", "Next",  "Frequency", "Day", "Amount", "From", "To",""];
 
const TABLE_ROWS = [
    {
        status:"on",
        next:"08/03/24",
        frequency:"Every other week ",
        day:"on Thursday",
        amount:"$120",
        from:"Spend",
        to:"Growth"
      },
  {
    status:"on",
    next:"10/04/24",
    frequency:"Every other week ",
    day:"on Tuesday",
    amount:"$300",
    from:"Spend",
    to:"Growth"
  },
  {
    status:"on",
    next:"15/02/24",
    frequency:"Every other week ",
    day:"on Momday",
    amount:"$100",
    from:"Spend",
    to:"Growth"
  },
  {
    status:"on",
    next:"20/05/24",
    frequency:"Every other week ",
    day:"on Friday",
    amount:"$80",
    from:"Spend",
    to:"Growth"
  },
  {
    status:"on",
    next:"08/03/24",
    frequency:"Every other week ",
    day:"on Thursday",
    amount:"$250",
    from:"Spend",
    to:"Growth"
  },
];
 
export function DefaultTable() {
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ status, frequency, next , day,amount,from,to }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {status}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {frequency}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {next}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {day}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {amount}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {from}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {to}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Edit
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}