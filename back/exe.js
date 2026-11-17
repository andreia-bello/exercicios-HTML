import express from 'express'

const app = express()
app.use(express.json())

// Exercício 1: Peça ao usuário dois números com casas decimais (números reais), some os dois e mostre o resultado.
app.get('/soma', (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    res.send({
        soma: num1 + num2
    });
});

// Exercício 2: Peça o valor que a pessoa ganha por hora e a quantidade de horas trabalhadas no mês. Mostre quanto ela vai receber no final do mês.
app.get('/salario', (req, res) => {
    const valorHora = Number(req.query.valorHora);
    const qtdHoras = Number(req.query.qtdHoras);

    res.send({
        salario: valorHora * qtdHoras
    });
});

// Exercício 3: Peça o peso de 5 pessoas e calcule a média desses pesos. Mostre o resultado.
app.get('/media', (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    const num3 = Number(req.query.num3);
    const num4 = Number(req.query.num4);
    const num5 = Number(req.query.num5);

    const media = (num1 + num2 + num3 + num4 + num5) / 5;

    res.send({
        media: media
    });
});

// Exercício 4: Peça uma temperatura em graus Celsius e converta para Fahrenheit usando a fórmula:    F = (9 * C + 160) / 5
app.get('/temperatura', (req, res) => {
    const celsius = Number(req.query.celsius);

    const fahrenheit = (9 * celsius + 160) / 5;

    res.send({
        fahrenheit: fahrenheit
    });
});

// Exercício 5: Peça uma distância em milhas e converta para quilômetros.    (Dica: 1 milha = 1.60934 km)
app.get('/distancia', (req, res) => {
    const milhas = Number(req.query.milhas);

    const quilometros = milhas * 1.60934;

    res.send({
        quilometros: quilometros
    });
    console.log
});

// Inicia o servidor uma única vez
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
