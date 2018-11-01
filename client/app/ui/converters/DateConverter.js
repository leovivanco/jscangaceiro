class DateConverter {
    constructor() {
        throw new Error('Esta	classe	não	pode	ser	instanciada');
    }
    static paraTexto (data){
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
    static paraData(texto){
        
        if (!/\d{2}\/\d{2}\/\d{4}/.test(texto))
            throw new Error('A data deve estar no formato dd/mm/aaa');
            return new Date(...texto.split('/')
            .reverse()
            .map((item, index) => item - index % 2)
        )
    }
}