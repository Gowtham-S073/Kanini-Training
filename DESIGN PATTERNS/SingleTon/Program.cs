using SingleTon;

VehicleFactory vehicleFactory = VehicleFactory.Instance;

Vehicle car = vehicleFactory.CreateVehicle("car");
Vehicle bike = vehicleFactory.CreateVehicle("bike");

car.Drive();
bike.Drive();
