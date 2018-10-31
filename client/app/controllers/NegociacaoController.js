class NegociacaoController {
    constructor() {
        const $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoes');
        // recebe inicialmente, o modelo que encapsula uma lista vazia
        this._negociacoesView.update(this._negociacoes);
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView('#mensagemView');
        this._mensagemView.update(this._mensagem);

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
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update(this._mensagem);
        this._limpaFormulario();
        //this._mensagemView.update(this._mensagem);

    }
    _criaNegociacao() {
        //	retorna	uma	instância	de	negociação
        return new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }

}