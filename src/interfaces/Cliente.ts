export interface ICliente{
    id:number,
    items:number,
    posicao:number,
    tempoAtendimento:number,
    situacao:"Pendente"|"EmAtendimento"|"Cancelado"|"Finalizado"
    dataHoraInicio:Date,
    dataHoraAlteracao:Date
}