type TVariedad = 'Abocado' | 'Semi seco' | 'Semi dulce' | 'Dulce';
type TTipo = 'Joven' | 'Crianza' | 'Reserva' | 'Gran reserva';

export interface IVino {
    año: number,
    variedad: TVariedad,
    tipo: TTipo,
    color: string,
    temperatura: number,
    graduacion: number,
    ph: number,
    observaciones: string
}