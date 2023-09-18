import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Vino } from "./vino.entity"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    nickname!: string

    @Column()
    email!: string

    @Column()
    password!: string

    @OneToMany(() => Vino, (vino) => vino.user_id)
    vinos!: Vino[]
}