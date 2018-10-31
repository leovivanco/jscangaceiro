class NegociacaoController {
    constructor() {
        const $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoes = ProxyFactory.create(
            new Negociacoes(),
            ['adiciona', 'esvazia'],
            model => this._negociacoesView.update(model)
        );


        this._negociacoesView = new NegociacoesView('#negociacoes');
        // recebe inicialmente, o modelo que encapsula uma lista vazia
        this._negociacoesView.update(this._negociacoes);
        this._negociacoes = ProxyFactory.create(
            new Mensagem(),
            ['texto'],
            model => this._mensagemView.update(model)
        );
        this._mensagemView = new MensagemView('#mensagemView');
        

    }
    
    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 2.0
        this._inputData.focus();
    }
    adiciona(event) {
        event.preventDefault();
        this._negociacoes.adiciona(this._criaNegociacao());
        this._mensagem._texto = 'Negociação adicionada com sucesso'
        
        this._limpaFormulario();

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