import ICarModel, { InsertCar, SelectCar } from "../interfaces/car/ICarModel.js";
import ICarService from "../interfaces/car/ICarService.js";
import { ServiceResponse } from "../interfaces/ServiceResponse.js";

class CarService implements ICarService {
    private carModel: ICarModel;

    constructor(model: ICarModel) {
        this.carModel = model;
    }

    public async createCar(car: InsertCar): Promise<ServiceResponse<SelectCar>> {
        try {
            let newCar = await this.carModel.registerCar(car);
            return {
                data: newCar as SelectCar,
                status: "CREATED"
            };
        } catch (e) {
            return {
                data: {message: e as string},
                status: "CONFLICT"
            };
        }
    }
}

export { CarService };