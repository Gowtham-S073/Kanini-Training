using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SingleTon
{
    public sealed class VehicleFactory
    {
        private static VehicleFactory? instance;

        private VehicleFactory() { }

        public static VehicleFactory Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new VehicleFactory();
                }
                return instance;
            }
        }

        public Vehicle CreateVehicle(string vehicleType)
        {
            switch (vehicleType.ToLower())
            {
                case "car":
                    return new Car();
                case "motorcycle":
                    return new Bike();
                default:
                    throw new ArgumentException($"Invalid vehicle type: {vehicleType}");
            }
        }
    }
}
