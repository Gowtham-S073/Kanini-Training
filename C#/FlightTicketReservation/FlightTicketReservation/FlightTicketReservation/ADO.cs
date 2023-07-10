using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace FlightTicketReservation
{
    internal class ADO
    {
        SqlConnection conn;
        DataSet ds;
        SqlDataAdapter da;
        public void Open(string constr)
        {
            conn = new SqlConnection(constr);

            try
            {
                conn.Open();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                Console.WriteLine(ex.StackTrace);
                Console.WriteLine("Server Not Connected");
            }
        }

        public void Flight_detail(string from,string to,string classes)
        {
            if (classes == "economy" || classes =="ECONOMY" || classes=="Economy")
            {
                da = new SqlDataAdapter($"select Flight_no,Flight_name,Economy_cost,no_of_economy_seats,Depature_time from flight_details where \"From\" = '{from}' and \"to\" = '{to}'; ", conn);
                ds = new DataSet();
                da.Fill(ds, "FT");
                foreach (DataRow dr in ds.Tables["FT"].Rows)
                {
                    Console.WriteLine($"Flight Number : {dr[0]}\nName of the Flight : {dr[1]}\nCost of a Ticket for Economy class : {dr[2]}\nNumber of seats available : {dr[3]}\nDepature TIme : {dr[4]}");
                }
                conn.Close();
            }
            else
            {
                da = new SqlDataAdapter($"select Flight_no,Flight_name,Economy_cost,no_of_business_seats,Depature_time from flight_details where \"From\" = '{from}' and \"to\" = '{to}'; ", conn);
                ds = new DataSet();
                da.Fill(ds, "FT");
                foreach (DataRow dr in ds.Tables["FT"].Rows)
                {
                    Console.WriteLine($"Flight Number : {dr[0]}\nName of the Flight : {dr[1]}\nCost of a Ticket for Business class : {dr[2]}\nNumber of seats available : {dr[3]}\nDepature TIme : {dr[4]}");
                }
                conn.Close();
            }
        }
        public void seatconfirmation(string flight_no,string classes,string[] arr)
        {
            for(int i=0;i<arr.Length;i++)
            {
                da = new SqlDataAdapter($"Insert into Flight_Booking(Flight_no,Class,Seat_no_cofirm)values('{flight_no}','{classes}','{arr[i]}');", conn);
                ds = new DataSet();
                da.Fill(ds, "FT");
                conn.Close();
            }
        
        }


        public void InsertPassengerDetails(string flight_no,string name,string passport_number, int age,string gender,string dob,long contact_number)
        {
            da = new SqlDataAdapter($"insert into Passenger_Details(Flight_no,Passenger_Name,Passport_number,Age,Gender,Date_of_birth,Contact_number)values('{flight_no}','{name}','{passport_number}',{age},'{gender}','{Convert.ToDateTime(dob)}',{contact_number});\r\n", conn);
            ds = new DataSet();
            da.Fill(ds, "FT");
            conn.Close();
        }

        public void updateseatstatus(string flight_no,string classes, string[] arr)
        {
            for (int i = 0; i < arr.Length; i++)
            {
                da = new SqlDataAdapter($"update Seat_Allocation set Seat_status='Booked' where Flight_no='{flight_no}' and Business_or_Economy='{classes}' and Seat_numbers='{arr[i]}'", conn);
                ds = new DataSet();
                da.Fill(ds, "FT");
                conn.Close();
            }
        }

        public void seatsava(string flight_no,string classes)
        {
            da = new SqlDataAdapter($"select seat_numbers,Flight_date from Seat_Allocation where Business_or_Economy='{classes}' and Seat_status='Available' and Flight_no='{flight_no}'", conn);
            ds = new DataSet();
            da.Fill(ds, "FT");
            foreach (DataRow dr in ds.Tables["FT"].Rows)
            {
                Console.WriteLine($"Seat Number : {dr[0]}    Flight_Date : {dr[1]}");
            }
            conn.Close();
        }
        public void cost(string classes,string flight_no,int num)
        {
            double amount=0,useramount=0;

            if (classes == "economy" || classes == "ECONOMY" || classes == "Economy")
            {
                da = new SqlDataAdapter($"select economy_cost from Flight_Details where Flight_no = '{flight_no}'", conn);
                ds = new DataSet();
                da.Fill(ds, "FT");
                foreach (DataRow dr in ds.Tables["FT"].Rows)
                {
                    //Console.WriteLine($"Ticket Cost : {dr[0]}");
                    Console.WriteLine($"Total Ticket Cost : {Convert.ToInt32(dr[0]) * num}");
                    amount = Convert.ToInt32(dr[0]) * num;
                }
                conn.Close();
            }
            else
            {
                da = new SqlDataAdapter($"select Business_cost from Flight_Details where Flight_no = '{flight_no}'", conn);
                ds = new DataSet();
                da.Fill(ds, "FT");
                foreach (DataRow dr in ds.Tables["FT"].Rows)
                {
                    //Console.WriteLine($"Ticket Cost: {dr[0]}");
                    Console.WriteLine($"Total Ticket Cost : {Convert.ToInt32(dr[0]) * num}");
                    amount = Convert.ToInt32(dr[0]) * num;
                }
                conn.Close();
            }

            Console.WriteLine();
            Console.WriteLine("Pay the Ticket amount to confirm your ticket : ");
            useramount = Convert.ToDouble(Console.ReadLine());
            if (amount == useramount)
            {
                Console.WriteLine("Payment sucessful\nYour Ticket is Booked");
                Console.WriteLine(".___________. __    __       ___      .__   __.  __  ___    ____    ____  ______    __    __  \r\n|           ||  |  |  |     /   \\     |  \\ |  | |  |/  /    \\   \\  /   / /  __  \\  |  |  |  | \r\n`---|  |----`|  |__|  |    /  ^  \\    |   \\|  | |  '  /      \\   \\/   / |  |  |  | |  |  |  | \r\n    |  |     |   __   |   /  /_\\  \\   |  . `  | |    <        \\_    _/  |  |  |  | |  |  |  | \r\n    |  |     |  |  |  |  /  _____  \\  |  |\\   | |  .  \\         |  |    |  `--'  | |  `--'  | \r\n    |__|     |__|  |__| /__/     \\__\\ |__| \\__| |__|\\__\\        |__|     \\______/   \\______/  \r\n                                                                                              ");
            }
            else
            {
                Console.WriteLine("Payment failed");
            }
        }
        public void UpdateSeatCount(string flight_no,string classes)
        {
            if (classes == "economy" || classes == "ECONOMY" || classes == "Economy")
            {
                da = new SqlDataAdapter($" update Flight_Details set No_of_Economy_seats=no_of_economy_seats-1 where Flight_no='{flight_no}'", conn);
                ds = new DataSet();
                da.Fill(ds, "FT");
                conn.Close();
            }
            else
            {
                da = new SqlDataAdapter($" update Flight_Details set No_of_business_seats=no_of_business_seats-1 where Flight_no='{flight_no}'", conn);
                ds = new DataSet();
                da.Fill(ds, "FT");
                conn.Close();
            }
        }


        public void BookedDetails(int ticket_id,int passenger_id)
        {
            da = new SqlDataAdapter($"select FB.Ticket_ID, PD.passenger_ID, FB.flight_no, FB.Class, FB.Seat_no_cofirm, SA.Flight_Date from Flight_Booking FB " +
                $"join Passenger_Details PD on FB.Flight_no = PD.Flight_no " +
                $"join Seat_Allocation SA on sa.Seat_numbers = FB.Seat_no_cofirm where FB.Ticket_ID = {ticket_id} and PD.Passenger_ID = {passenger_id}; ", conn);
            ds = new DataSet();
            da.Fill(ds, "FT");
            foreach (DataRow dr in ds.Tables["FT"].Rows)
            {
                Console.WriteLine($"Ticket ID : {dr[0]}\nPassenger ID : {dr[1]}\nFlight Number : {dr[2]}\nClass : {dr[3]}\nSeat Number : {dr[4]}\nDate of the Flight : {dr[5]}");
            }
            conn.Close();
        }

        public void cancel(int passengerid,int ticketid,string flightno,string seatno)
        {
            SqlCommand command = new SqlCommand("[dbo].[TicketCancel]", conn);
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@passengerid", passengerid);
            command.Parameters.AddWithValue("@ticketid", ticketid);
            command.Parameters.AddWithValue("@flight_no", flightno);
            command.Parameters.AddWithValue("@seat_no", seatno);
            command.ExecuteNonQuery();
            conn.Close();
            Console.WriteLine("Your Amount Will Return in 2 to 3 working days But the Cancellation fee will be Rs.1000");
        }
        public void UpdateSeataftercancel(string flight_no, string classes)
        {
            if (classes == "economy" || classes == "ECONOMY" || classes == "Economy")
            {
                da = new SqlDataAdapter($" update Flight_Details set No_of_Economy_seats=no_of_economy_seats+1 where Flight_no='{flight_no}'", conn);
                ds = new DataSet();
                da.Fill(ds, "FT");
                conn.Close();
            }
            else
            {
                da = new SqlDataAdapter($" update Flight_Details set No_of_business_seats=no_of_business_seats+1 where Flight_no='{flight_no}'", conn);
                ds = new DataSet();
                da.Fill(ds, "FT");
                conn.Close();
            }
        }
    }
}
