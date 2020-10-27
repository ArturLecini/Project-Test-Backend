import {Entity,Column} from "typeorm";
import { Timestamp } from "typeorm";
@Entity()

export class user_table{
    @Column()
    ID: number;
    @Column()
    FIRSTNAME: string;
    @Column()
    LASTNAME: string;
    @Column()
    EMAIL: string;
    @Column()
    PASSWORD: string;
    @Column()
    ADDRES: string
    @Column()
    PHONE: string;
    @Column()
    ROLE:boolean;
    @Column()
  CREATED:Timestamp;
   
}