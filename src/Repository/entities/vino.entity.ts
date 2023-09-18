import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, TableForeignKey } from "typeorm"
import { Usuario } from "./user.entity"

@Entity()
export class Vino {
    @PrimaryGeneratedColumn()
    id: number

    @PrimaryColumn()
    userId: number

    @Column()
    año: number

    @Column()
    variedad: string

    @Column()
    tipo: string

    @Column()
    color: string

    @Column()
    temperatura: number

    @Column()
    graduacion: number

    @Column()
    ph: number

    @Column()
    observaciones: string

    @ManyToOne(() => Usuario, (usuario) => usuario.vinos, {
        onDelete: "CASCADE"
    })
    user: Usuario
}