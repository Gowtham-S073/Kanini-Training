using FlightTicketReservation;
using System.Configuration;

class Program : ConfigurationSection
{
    public static void Main(string[] args)
    {
        Console.WriteLine("                                                                                                                                                                     \r\n88      a8P          db         888b      88  88  888b      88  88            db         88  88888888ba   88           88  888b      88  88888888888  ad88888ba      \r\n88    ,88'          d88b        8888b     88  88  8888b     88  88           d88b        88  88      \"8b  88           88  8888b     88  88          d8\"     \"8b     \r\n88  ,88\"           d8'`8b       88 `8b    88  88  88 `8b    88  88          d8'`8b       88  88      ,8P  88           88  88 `8b    88  88          Y8,             \r\n88,d88'           d8'  `8b      88  `8b   88  88  88  `8b   88  88         d8'  `8b      88  88aaaaaa8P'  88           88  88  `8b   88  88aaaaa     `Y8aaaaa,       \r\n8888\"88,         d8YaaaaY8b     88   `8b  88  88  88   `8b  88  88        d8YaaaaY8b     88  88\"\"\"\"88'    88           88  88   `8b  88  88\"\"\"\"\"       `\"\"\"\"\"8b,     \r\n88P   Y8b       d8\"\"\"\"\"\"\"\"8b    88    `8b 88  88  88    `8b 88  88       d8\"\"\"\"\"\"\"\"8b    88  88    `8b    88           88  88    `8b 88  88                  `8b     \r\n88     \"88,    d8'        `8b   88     `8888  88  88     `8888  88      d8'        `8b   88  88     `8b   88           88  88     `8888  88          Y8a     a8P     \r\n88       Y8b  d8'          `8b  88      `888  88  88      `888  88     d8'          `8b  88  88      `8b  88888888888  88  88      `888  88888888888  \"Y88888P\"      \r\n                                                                                                                                                                     \r\n                                                                                                                                                                     ");
        Console.WriteLine();
        Console.WriteLine();
        Console.WriteLine("1.Ticket Booking");
        Console.WriteLine("2.See Booked Details");
        Console.WriteLine("3.Ticket Cancelation");
        Console.WriteLine("Select a Option to move further : ");
        Console.WriteLine();
        Console.WriteLine();
        Console.WriteLine();
        ADO connections = new ADO();
        string constr = ConfigurationManager.ConnectionStrings["SQLStudentDB"].ConnectionString;
        connections.Open(constr);
        int option=Convert.ToInt32(Console.ReadLine());
        int num=0,age,temp=0;
        long contact_number;
        string name, gender,dob,classes,from,to, passport_number,flight_no;
        Console.WriteLine("------------------------------------------------------------------------------------------------------------------------");




        if (option == 1)
            {
                Console.WriteLine("Enter Total Number of people : ");
                num = Convert.ToInt32(Console.ReadLine());
                temp = num;
                Console.WriteLine("Enter the Depature Place : ");
                from = Console.ReadLine();
                Console.WriteLine("Enter the Reaching Place : ");
                to = Console.ReadLine();
                Console.WriteLine("Enter the  Economy class or Business class : ");
                classes = Console.ReadLine();
                connections.Flight_detail(from,to,classes);
                Console.WriteLine("Please Enter the respective Flight Number your going to Travel : ");
                flight_no= Console.ReadLine();
                Console.WriteLine("------------------------------------------------------------------------------------------------------------------------");
            Console.WriteLine();    

                string[] arr = new string[num];
                    connections.seatsava(flight_no, classes);
                    Console.WriteLine();
                    Console.WriteLine("Enter the seats you Need : ");
                    for (int i = 0; i < num; i++)
                    {
                        arr[i] = Console.ReadLine();

                    }
                connections.seatconfirmation(flight_no,classes,arr);
                    Console.WriteLine("------------------------------------------------------------------------------------------------------------------------");
            Console.WriteLine();


                    while (temp != 0)
                        {
                            Console.WriteLine("Enter the Name : ");
                                name = Console.ReadLine();
                            Console.WriteLine("Enter the Passenger Gender : ");
                                gender = Console.ReadLine();
                            Console.WriteLine("Enter the Passenger age : ");
                                age = Convert.ToInt32(Console.ReadLine());
                            Console.WriteLine("Enter the Date of Birth of the passenger : ");
                            dob = Console.ReadLine();
                            Console.WriteLine("Enter the passport number : ");
                                passport_number = Console.ReadLine();
                            Console.WriteLine("Enter the Contact Number : ");
                                contact_number = Convert.ToInt64(Console.ReadLine());
                    connections.InsertPassengerDetails(flight_no,name,passport_number,age,gender,dob,contact_number);
                            Console.WriteLine("------------------------------------------------------------------------------------------------------------------------");
                            temp--;
                        }
            connections.cost(classes,flight_no,num);
            connections.updateseatstatus(flight_no,classes,arr);
            connections.UpdateSeatCount(flight_no, classes);

                    }


                    else if (option == 2)
                    {
                                 Console.WriteLine("Enter Your Ticket ID and Passenger ID to see your details : ");
                                int ticket_id,passenger_id;
                                Console.WriteLine("Ticket ID : ");
                                ticket_id = Convert.ToInt32(Console.ReadLine());
                                Console.WriteLine("Passenger ID : ");
                               passenger_id= Convert.ToInt32(Console.ReadLine());
                                 Console.WriteLine();
                                connections.BookedDetails(ticket_id,passenger_id);
                               Console.WriteLine("------------------------------------------------------------------------------------------------------------------------");

                    }


                    else if (option == 3)
                    {
                            int num_can = 0;
                            Console.WriteLine("Number of ticket you need to cancel : ");
                            num_can = Convert.ToInt32(Console.ReadLine());
                            string flight_number, seat_no;
                            while (num_can != 0)
                            {
                                Console.WriteLine("To Cancel Your Ticket Please Enter Your Ticket ID , Passenger ID , Flight Number and Seat number : ");
                                int ticket_id, passenger_id;
                               
                                Console.WriteLine("Ticket ID : ");
                                ticket_id = Convert.ToInt32(Console.ReadLine());
                                Console.WriteLine("Passenger ID : ");
                                passenger_id = Convert.ToInt32(Console.ReadLine());
                                Console.WriteLine("Flight number");
                                flight_number = Console.ReadLine();
                                Console.WriteLine("Seat number : ");
                               seat_no = Console.ReadLine();
                               Console.WriteLine("Enter the class you booked (Economy or Business) : ");
                               string flight_class= Console.ReadLine();
                                connections.cancel(passenger_id,ticket_id,flight_number,seat_no);
                connections.UpdateSeataftercancel(flight_number, flight_class);
                                num_can--;
                            }
                             
                    }
                    else
                    {
                        Console.WriteLine("Enter only 1 or 2 or 3 ");

                    }
        

    }
}