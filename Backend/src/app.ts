import "reflect-metadata";
import {createConnection} from "typeorm";
import {user_table} from "./entity/auto-gen/auto-gen";
import { Timestamp } from "typeorm";
import { user_button } from "./database/user_table";

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "user_database",
    entities: [
        user_table
    ],
    synchronize: true,
    logging: false
}).then(connection => {
    let user = new user_table();
    let button = new user_button
    user.EMAIL = "afcf@dfdfd";
    user.PASSWORD = "affr1234";
 user.CREATED;
button.ACTIVATE = false;
    return connection.manager
            .save(user)
            .then(user => {
                console.log("user has been saved. user id is", user.ID);
            });





    // here you can start to work with your entities
}).catch(error => console.log(error));