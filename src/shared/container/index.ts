import { container } from "tsyringe"

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository"
import { UsersRepository } from "@modules/accounts/repositories/implementations/UsersRepository"

import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository"
import { CategoriesRepository } from "@modules/cars/repositories/implementations/CategoriesRepository"

import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository"
import { SpecificationsRepository } from "@modules/cars/repositories/implementations/SpecificationsRepository"

import { ICarsRepository } from "@modules/cars/repositories/ICarRepository"
import { CarsRepository } from "@modules/cars/repositories/implementations/CarsRepository"


container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
)

container.registerSingleton<IUsersRepository> (
    "UsersRepository",
    UsersRepository
)

container.registerSingleton<ICarsRepository>(
    "CarsRepository",
    CarsRepository
)