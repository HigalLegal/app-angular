export class Produto {

    id: number
    nome: string
    valor: number
    promocao: boolean
    valorPromocao: number
    imagem: string

    // ------------------------------------------------------------------------------

    constructor(id: number, nome: string, valor: number, promocao: boolean, valorPromocao: number, 
        imagem: string) {
            this.id = id;
            this.nome = nome;
            this.valor = valor;
            this.promocao = promocao;
            this.valorPromocao = valorPromocao;
            this.imagem = imagem;
    }

    // ------------------------------------------------------------------------------

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    getValor(): number {
        return this.valor;
    }

    setValor(valor: number): void {
        this.valor = valor;
    }

    getPromocao(): boolean {
        return this.promocao;
    }

    setPromocao(promocao: boolean): void {
        this.promocao = promocao;
    }

    getValorPromocao(): number {
        return this.valorPromocao
    }

    setValorPromocao(valorPromocao: number): void {
        this.valorPromocao = valorPromocao;
    }

    getImagem(): string {
        return this.imagem;
    }

    setImagem(imagem: string): void {
        this.imagem = imagem;
    }
}