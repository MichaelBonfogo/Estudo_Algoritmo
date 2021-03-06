
/* Teoria de Trabalho: Algoritmo e Lógica de Programação.
 * Base para linguagem JavaScript.
 * Atalhos para o VsCode.
 * 
 */


/*------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------*/

// 21. Sentença de Código #01

console.log("Boa noite!");

console.log('Passo #03');
console.log('Passo #01');
console.log('Passo #02');


// 24. Bloco de Código { }

{ }

{
    console.log("Passo #01");
    console.log("Passo #02");
    console.log("Passo #03");
}

{
    console.log("Passo #04");
    console.log("Passo #05");
}

{
    {
        {
            {
               ;
               ;
               ; 
            }
        }
    }
}

// 23. Comentários de Código

  // 

  /*
  * Esse é um
  * comentário
  * de múltiplas
  * linhas!
  */

/*------------------------------------------------------------------------------*/

// 27. Trabalhando com Dados #01 => Estrutura de Dados

/*------------------------------------------------------------------------------*/

// Seção 4: Operadores

// valores literais
console.log(7 + 3);
console.log(6 - 7);
console.log(7 * 9);
console.log(8 / 3);
console.log(8 % 3);

let a = 8;
let b = 11;

// usando variáveis
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

a = a + b * a / b;
console.log(a);

// Atribuição

let y = 20;
y += 10; // y = y + 10;
y -= 2; // y = y - 2;
y *= 2; // y = y * 2;
y /= 4; // y = y / 4;
y %= 3; // y = y % 3;

// Texto

let w = 'texto';
w += ', mais texto';
w += '!!!';


// Lógicos

let resultadoE = '#1 (AND) - Vai pro shopping? ';
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOU = '#2 (OR) - Vai pro shopping? ';
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU);

console.log(true !== true);
console.log(true !== false);
console.log(false !== true);
console.log(false !== false);

console.log('Não verdadeiro: ' + !true);
console.log('Não falso: ' + !false);
// ----------------------------------
let comprarTV50 = t1 && t2; // AND
console.log('Vamos comprar a TV 50"?', comprarTV50);

let comprarTV32 = t1 !== t2; // XOR
console.log('Vamos comprar a TV 32"?', comprarTV32);

let tomarSorvete = t1 || t2; // OR
console.log('Vamos comprar sorvete?', tomarSorvete);

let ficarEmCasa = !tomarSorvete; // NOT
console.log('Vamos ficar em casa?', ficarEmCasa);


// 35. Classificação dos Operadores => Operadors
// 41. Operadores Relacionais - Teoria

// valores literais
console.log(7 > 9);
console.log(7 >= 7);
console.log(8 < 2);
console.log(8 <= 12);
console.log(9 == 3);
console.log(9 != 5);
// ----------------------------------
let a = 7;
let b = 32;
// usando variáveis
console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);
console.log(a == b);
console.log(a != b);
// ----------------------------------
let a = 1;
let b = "1";
let c = "1";
console.log(a == b);
console.log(a === b);
console.log(b === c);
// ----------------------------------
console.log(a != b);
console.log(a !== b);
console.log(b !== c);
// ----------------------------------

// 47. Operadores de Atribuição - Teoria
// 51. Operadores Lógicos - Teoria #01
// 61. Operadores Unários - Prática #01

let a = 1;

a = a + 1;
a += 1;
a++;
++a;

a--;
--a;

console.log(a);

a++;
console.log(a === b);
b++;

console.log(!!true);
console.log(!!false);

console.log(!!'Texto!');
console.log(!!"");

console.log(!!1);
console.log(!!0);
console.log(!!-1);
console.log(!!-0.00001);

// 64. Operador Ternário - Teoria

const hora = 23;
const saudacao = hora <= 11 ? 'Bom dia' : 'Boa tarde';
console.log(saudacao);

const hora = 11;
const saudacao = hora <= 11 ? "Bom dia" : (hora <= 17 ? "Boa tarde" : "Boa noite");
console.log(saudacao);

// 43. Tipagem Fraca vs Tipagem Forte

// ??????

/*------------------------------------------------------------------------------*/

// Seção 5: Estruturas de Controle

// 69. Visão Geral das Estruturas de Controle #01

// 71. If - Teoria


// 79. If/Else - Teoria

// 87. Laços de Repetição - Teoria

// 88. While - Prática #01

while (true) {
    console.log('Laço infinito!!!');
}

console.log('Fim!');

// ----------------

let controle = 1;

while (controle <= 10) {
    console.log(controle);
    controle++;
}

console.log('Fim!');

// declaração, expressão e incremento -> Qtde determinada!

// 92. For - Prática #01

for (let controle = 1; controle <= 10; controle++) {
    console.log(controle);
}

console.log('Fim!');


// ----------------

for(let i = 7; i >= 3; i--) {
    console.log(i);
}

console.log('Fim!');

// 100. Switch

const conceito = 'C+';

switch(conceito) {
    case 'A+': console.log(10); break;
    case 'A': console.log(9); break;
    case 'B+': console.log(8); break;
    case 'B': console.log(7); break;
    case 'C+': console.log(6); break;
    case 'C': console.log(5); break;
    case 'D+': console.log(4); break;
    case 'D': console.log(3); break;
    case 'E+': console.log(2); break;
    case 'E': console.log(1); break;
    case 'F': console.log(0); break;
    default: console.log('Conceito inválido!');
}

// 103. Break Continue

// break
for(let i = 1; i <= 5; i++) {
    if(i === 3) {
        break;
    }
    console.log(i);
}

// continue
for(let i = 1; i <= 5; i++) {
    if(i === 3) {
        continue;
    }
    console.log(i);
}

/*------------------------------------------------------------------------------*/

// 95. Executar Código no Modo de Debug

/*------------------------------------------------------------------------------*/

// 96. Extra: Template String
// (`i = ${i}, j = ${j}`)

const i = 2;
const j = 4;

console.log("i = " + i + ", j = " + j);
console.log('i = ' + i + ', j = ' + j);

console.log(`i = ${i}, j = ${j}`);
console.log(`1 + 2 = ${1 + 2}`);
console.log(`Valor gerado foi: ${Math.random()}`);

console.log("i = ${i}, j = ${j}");
console.log('i = ${i}, j = ${j}');

/*------------------------------------------------------------------------------*/

// Seção 6: Funções

// #1: Função COM Parâmetros e COM Retorno
function somar(a, b) {
    return a + b;
}

let resultado = somar(30, 56);
console.log(`O resultado final é: ${resultado}`);
console.log(`O resultado final é: ${somar(30, 56)}`);

// #2: Função COM Parâmetros e SEM Retorno
function exibirMultiplicacao(a, b) {
    console.log(a * b);
}

exibirMultiplicacao(10, 21);
exibirMultiplicacao(7, 9);

// #3: Função SEM Parâmetros e COM Retorno
function retornarDataAtual() {
    return new Date();
}

console.log(retornarDataAtual());

// #4: Função SEM Parâmetros e SEM Retorno
function exibirHoraAtual() {
    console.log(new Date().getHours());
}

exibirHoraAtual();

/*------------------------------------------------------------------------------*/

// Seção 7: Arrays

// 128. Array Teoria

var array_name = [item1, item2, ...];  
ex:
var cars = ["Saab", "Volvo", "BMW"];

Acesse os elementos de um array
Você acessa um elemento da matriz referindo-se ao número do índice .

Esta instrução acessa o valor do primeiro elemento em cars:

var name = cars[0];

//              0    1   2    3    4    5
const notas = [7.8, 6.7, 10, 9.5, 7.8, 5.8];

console.log(notas);
console.log(notas[3]);
console.log(notas[5]);
console.log(notas[10]);

notas[4] = 8.7;

console.log(notas);
// ----------------------------------
const nomes = [];

nomes[0] = "Pedro";
nomes[1] = "Ana";
nomes[2] = "Bia";
nomes[3] = "Gui";
nomes[4] = "Rebeca";
nomes[9] = "Tiago";

console.log(nomes);
// ----------------------------------
console.log(typeof console);
console.log(typeof console.log);

const numeros = [1, 2, 3];

console.log(typeof numeros);

numeros.push(4);
numeros.push(5);
numeros.push(10.98);

console.log(numeros);
console.log(numeros.length);

// ----------------------------------

// 136. Métodos do Array #01

const numeros = [1, 2, 3, 4, 5, 8];

numeros[0] = 100;
numeros.push(6);

console.log(numeros.indexOf(4));
console.log(numeros.indexOf(4, 4));
console.log(numeros.includes(10));
console.log(numeros.includes(6));
console.log(numeros.join(' - '));
console.log(numeros);

const numeros2 = numeros.concat(7, 8, 9);
console.log(numeros2);
// ----------------------------------
const numeros = [1, 2, 3, 4, 5, 8];

numeros.splice(1, 2);
console.log(numeros);

console.log(numeros.pop());
console.log(numeros.pop());
console.log(numeros);
// ----------------------------------
const numeros = [10, 20, 30, 40];

function praCadaElemento(elemento, indice, array) {
    console.log(elemento, indice, array);
}

numeros.forEach(praCadaElemento);

numeros.forEach(function (el) {
    console.log(el);
});

numeros.forEach(function (_, i) {
    console.log(i);
});


/*------------------------------------------------------------------------------*/

// Seção 8: Objetos

/*------------------------------------------------------------------------------*/


/*------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------*/

/*----------------------------------------------------------------

Atalhos VsCode

Geral:
Ctrl + Shift + P, paleta de comando F1 Show
Ctrl + P Quick Open, vá para o arquivo ...
Ctrl + Shift + N Nova janela / instância
Ctrl + Shift + W Fechar janela / instância
Ctrl +, configurações do usuário
Ctrl + K Ctrl + S Atalhos de teclado

--------------------------------------------------------------------------------------------
Edição básica:
Ctrl + X Linha de corte (seleção vazia)
Ctrl + C Copiar linha (seleção vazia)
Alt + ↑ / ↓ Mover linha para cima / baixo
Shift + Alt + ↓ / ↑ Copiar linha para cima / baixo
Ctrl + Shift + K Excluir linha
Ctrl + Enter Inserir linha abaixo
Ctrl + Shift + Enter Inserir linha acima
Ctrl + Shift + \ Ir para o suporte correspondente
Ctrl +] / [linha Indent / outdent
Home / End Ir para o começo / fim da linha
Ctrl + Home Ir para o início do arquivo
Ctrl + End Ir para o final do arquivo
Ctrl + ↑ / ↓ Linha de rolagem para cima / baixo
Alt + PgUp / PgDn Rola a página para cima / baixo
Ctrl + Shift + [Dobre (colapse) a região
Ctrl + Shift +] Desdobrar (uncollapse) região
Ctrl + K Ctrl + [Dobre (reduza) todas as sub-regiões
Ctrl + K Ctrl +] Desdobra (uncollapse) todas as sub-regiões
Ctrl + K Ctrl + 0 Dobre (reduza) todas as regiões
Ctrl + K Ctrl + J Desdobra (uncollapse) todas as regiões
Ctrl + K Ctrl + C Adicionar comentário de linha
Ctrl + K Ctrl + U Remover comentário de linha
Ctrl + / Alternar comentário de linha
Shift + Alt + A Alternar comentário do bloco
Alt + Z Toggle quebra automática de palavras

--------------------------------------------------------------------------------------------
Navegação:
Ctrl + T Mostrar todos os símbolos
Ctrl + G Ir para linha ...
Ctrl + P Ir para arquivo ...
Ctrl + Shift + O Ir para o símbolo ...
Ctrl + Shift + M Mostrar painel de problemas
F8 Ir para o próximo erro ou aviso
Shift + F8 Ir para erro ou aviso anterior
Ctrl + Shift + Tab Navegar pelo histórico do grupo de editor
Alt + ← / → Retroceder / avançar
Ctrl + M Toggle Tab move o foco

--------------------------------------------------------------------------------------------
Pesquise e substitua:
Ctrl + F Encontrar
Ctrl + H Substituir
F3 / Shift + F3 Encontrar próximo / anterior
Alt + Enter Seleciona todas as ocorrências de Encontrar correspondência
Ctrl + D Adicionar seleção ao próximo Encontrar jogo **************************************
Ctrl + K Ctrl + D Move a última seleção para a próxima Find match
Alt + C / R / W Alternar maiúsculas / minúsculas / regex / palavra inteira

--------------------------------------------------------------------------------------------
Multi-cursor e seleção:
Alt + Clique no cursor Inserir
Ctrl + Alt + ↑ / ↓ Inserir cursor acima / abaixo
Ctrl + U Desfazer a última operação do cursor
Shift + Alt + I Insere o cursor no final de cada linha selecionada
Ctrl + I Seleciona a linha atual
Ctrl + Shift + L Seleciona todas as ocorrências da seleção atual
Ctrl + F2 Seleciona todas as ocorrências da palavra atual
Shift + Alt + → Expandir seleção
Shift + Alt + ← Seleção de encolhimento
Shift + Alt +
(arraste o mouse)
Seleção de coluna (caixa)
Ctrl + Shift + Alt
+ (tecla de seta)
Seleção de coluna (caixa)
Ctrl + Shift + Alt
+ PgUp / PgDn
Ctrl + Sugestão de acionamento de espaço
Ctrl + Shift + Espaço Dicas do parâmetro do acionador
Shift + Alt + F Formatar documento
Ctrl + K Ctrl + F Seleção de formato
F12 Ir para definição
Alt + F12 Peek Definition
Ctrl + K F12 Abrir Definição para o lado
Ctrl + Conserto rápido
Shift + F12 Mostrar referências
F2 Renomear Símbolo
Ctrl + K Ctrl + X Cortar espaços em branco à direita
Ctrl + K M Alterar idioma do arquivo

--------------------------------------------------------------------------------------------
Gerenciamento de editor:
Ctrl + F4, Ctrl + W Fechar editor
Ctrl + K F Fechar pasta
Ctrl + \ Split editor
Ctrl + 1/2/3 Concentre-se em 1
2º, 3º ou 3º grupo de editores
Ctrl + K Ctrl + ← / → Concentra-se no grupo de editores anterior / seguinte
Ctrl + Shift + PgUp / PgDn Mover editor para a esquerda / direita
Ctrl + K ← / → Mover o grupo do editor ativo

--------------------------------------------------------------------------------------------
Gerenciamento de arquivos:
Ctrl + N Novo Arquivo
Ctrl + O Abrir arquivo ...
Ctrl + S Salvar
Ctrl + Shift + S Salvar como ...
Ctrl + K S Salvar tudo
Ctrl + F4 Close
Ctrl + K Ctrl + W Fechar tudo
Ctrl + Shift + T reabrir editor fechado
Ctrl + K Enter Manter o editor do modo de visualização aberto
Ctrl + Tab Aberto ao lado
Ctrl + Shift + Tab Abrir anterior
Ctrl + K P Caminho de cópia do arquivo ativo
Ctrl + K R Revela o arquivo ativo no Explorer
Ctrl + K O Mostra o arquivo ativo em uma nova janela / instância

--------------------------------------------------------------------------------------------
Exibição:
F11 Alternar tela cheia
Shift + Alt + 0 Alternar o layout do editor (horizontal / vertical)
Ctrl + = / - Zoom in / out
Ctrl + B Alterna a visibilidade da barra lateral
Ctrl + Shift + E Mostrar o Explorer / Alternar o foco
Ctrl + Shift + F Mostrar pesquisa
Ctrl + Shift + G Mostrar controle de código-fonte
Ctrl + Shift + D Mostrar depuração
Ctrl + Shift + X Mostrar extensões
Ctrl + Shift + H Substituir nos arquivos
Ctrl + Shift + J Toggle Detalhes da pesquisa
Ctrl + Shift + U Mostrar painel de saída
Ctrl + Shift + V Abra a pré-visualização do Markdown
Ctrl + K V Abre a pré-visualização do Markdown para o lado
Ctrl + KZ Modo Zen (Esc Esc para sair)

--------------------------------------------------------------------------------------------
Depurar:
F9 Alternar ponto de interrupção
F5 Iniciar / Continuar
Shift + F5 Stop
F11 / Shift + F11 Passo para dentro / fora
F10 Passar por cima
Ctrl + K Ctrl + I Mostrar o cursor

--------------------------------------------------------------------------------------------
Terminal integrado:
Ctrl + `Mostrar terminal integrado
Ctrl + Shift + `Criar novo terminal
Ctrl + C Copiar seleção
Ctrl + V Cole no terminal ativo
Ctrl + ↑ / ↓ Rola para cima / baixo
Shift + PgUp / PgDn Rola a página para cima / baixo
Ctrl + Home / End Rola para cima / baixo
*/

/*------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------*/
