﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbstractFactory
{
    public abstract class VehicleFamilyFactory
    {
        public abstract VehicleFactory CreateCarFactory();
        public abstract VehicleFactory CreateBikeFactory();
    }
}
