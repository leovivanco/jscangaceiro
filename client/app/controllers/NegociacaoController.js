class NegociacaoController {
    constructor() {
        const $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoes = new Bind(
            new Negociacoes(),
            new NegociacoesView('#negociacoes'),
            'adiciona', 'esvazia'
        );
        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView('#mensagemView'),
            'texto'
        );


    }
    
    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 2.0
        this._inputData.focus();
    }
    adiciona(event) {
        try {
            event.preventDefault();
            this._negociacoes.adiciona(this._criaNegociacao());
            this._mensagem._texto = 'Negociação adicionada com sucesso'
            
            this._limpaFormulario();

            global()
        } catch (err) {
            console.log(err);
            if (err instanceof DataInvalidaException) {
                this._mensagem.texto = err.message                
            }else{
                this._mensagem.texto = 'Um erro não esperado aconteceu.Entre em contato com o suporte';
            }
        }    
    }
    _criaNegociacao() {
        //	retorna	uma	instância	de	negociação
        return new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }
    apaga(){
        this._negociacoes.esvazia();
        this._mensagem.texto = 'Negociações apagadas com sucesso';
        
    }
}