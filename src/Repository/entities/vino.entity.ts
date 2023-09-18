import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./user.entity"
import { userInfo } from "os"

@Entity()
export class Vino {
    @PrimaryGeneratedColumn()
    id!: number

    @PrimaryColumn()
    user_id!: number

    @Column()
    año!: number

    @Column()
    variedad!: string

    @Column()
    tipo!: string

    @Column()
    color!: string

    @Column()
    temperatura!: number

    @Column()
    graduacion!: number

    @Column()
    ph!: number

    @Column()
    observaciones!: string

    @ManyToOne(() => User, (user) => user.vinos)
    user!: User
}