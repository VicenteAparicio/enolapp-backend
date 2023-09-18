import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Vino } from "./vino.entity"

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nickname: string

    @Column()
    email: string

    @Column()
    password: string

    @OneToMany(() => Vino, (vino) => vino.userId, { cascade: true, onDelete: 'CASCADE' })
    @JoinColumn()
    vinos: Vino[]
}