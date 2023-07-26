using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbstractFactory
{
    public  class BikeFactory:VehicleFactory
    {
        public override Vehicle Createvehicle()
        {
            return new Bike();
        }
    }
}
