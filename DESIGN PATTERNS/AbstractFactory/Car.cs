using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbstractFactory
{
    internal class Car : Vehicle
    {
        public override void Drive()
        {
            Console.WriteLine("Car Drive");

        }
    }
}
