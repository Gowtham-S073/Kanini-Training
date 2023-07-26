using AbstractFactory;

VehicleFamilyFactory vehicleFamilyFactory = new motorFamilyFactory();

VehicleFactory carfactory = vehicleFamilyFactory.CreateCarFactory();
VehicleFactory bikefactory = vehicleFamilyFactory.CreateBikeFactory();

Vehicle car = carfactory.Createvehicle();
Vehicle bike = bikefactory.Createvehicle();

car.Drive();
bike.Drive();


