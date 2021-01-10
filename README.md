# C - Extrato - Gateway
**Node, MongoDB**

## Resumo
- Responsável pelo "Extrato" do cliente
- Foi escolhido o MongoDB pois esta solução tem que ser extremamente rápida. 
- Este sistema está dividido em 4 sistemas totalmente independentes 
[Cliente](https://github.com/IVictorinoI/CExtrato/tree/main/Cliente),  
[Consulta de CPF](https://github.com/IVictorinoI/CExtrato/tree/main/ConsultaCpf), 
[Movimentação em cartão](https://github.com/IVictorinoI/CExtrato/tree/main/MovtoCartao) e 
[Movimentações financeiras](https://github.com/IVictorinoI/CExtrato/tree/main/MovtoFinanc)
- Cada API é um pequeno sistema, cada serviço é extremamente rápido e funcionam independente um do outro
- Para orquestrar o consumo destes sistemas e controlar autenticação e balanceanto de carga, foi criado o [Api Gateway](https://github.com/IVictorinoI/CExtrato/tree/main/Gateway) é nele que outros sistemas vão se conectar.
- Podemos considerar estas APIS "nanoservicos"?

## Tabelas (Ou Documentos por se tratar de Mongo):  
- Cliente (Replicada do sistema A) (Id, Nome, Cpf) 
- ConsultaCpf: (Id, IdCliente, DataHora, Origem{Serasa, Itau, Bradesco}) **GET, POST**
- MovtoFinanc: (Id, IdCliente, Tipo{Transf, Pagto, Recebto, Doacao}, EntSai, Data, Valor, Origem{Seu zé, Maria}) 
- MovtoCartao: (Id, IdCliente, CredDeb, Data, Valor, Origem{Havan, Carrefour}, Itens ARRAY{Descricao, Valor}) 

## Customer
Cadastro do cliente, existe uma tabela no banco para cliente, porém ela é alimentada via sincronização.
Aqui não é permitido "cadastrar" o metodo 'PUT' recebe apenas o Cpf e faz uma request para obter os dados do [Sistema A](https://github.com/IVictorinoI/AGestorPessoa/)
![Customer](https://github.com/IVictorinoI/CExtrato/blob/main/Imagens/Customer.PNG)

## CPF Check
Cada vez que alguém fizer uma consulta neste CPF é registrado.
![CpfCheck](https://github.com/IVictorinoI/CExtrato/blob/main/Imagens/CpfCheck.PNG)

## Movto cartão
Movimentações no cartão de crédito, é possivel informar os itens da movimentação (opcional)
![MovtoCartao](https://github.com/IVictorinoI/CExtrato/blob/main/Imagens/MovtoCartao.PNG)

## Movto financeiro
Movimentações financeiras como transferencias de valores, PIX, etc.
![MovtoFinanc](https://github.com/IVictorinoI/CExtrato/blob/main/Imagens/MovtoFinanc.PNG)

Autor [Victor Matheus Mendes](https://github.com/IVictorinoI/)