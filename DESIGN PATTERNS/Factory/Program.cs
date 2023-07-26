using Factory;

VehicleFactory carFactory= new CarFactory();
VehicleFactory bikeFactory = new BikeFactory();

Vehicle car = carFactory.Createvehicle();
Vehicle bike = bikeFactory.Createvehicle();

car.Drive();
bike.Drive();