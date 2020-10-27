import {Entity, Column, PrimaryColumn, Generated} from "typeorm";

import { Timestamp } from "typeorm";
@Entity()

export class user_table{
    @PrimaryColumn()
   
     ID: number;
     @Column({ length: 100})
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
    static FIRSTNAME: string;
    @Column()
  CREATED:Timestamp;
   
}