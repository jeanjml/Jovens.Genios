{

    //cotrles de fluxos
    let lista = []
    let i = 0
        // sorteador!
    let sorteador = function add() {

        function rand({ min = 1, max = 9 }) {
            const valor = Math.random() * (max - min) + min
            return Math.floor(valor)
        }

        let verificador = rand({})

        function inLista(n) {
            if (lista.indexOf(Number(n)) == -1) {
                return true;
            } else {
                return false
            }
        }

        if (inLista(verificador) == true) {
            lista.push(verificador)
            return Number(verificador)

        } else {
            sorteador()
        }
    }

    let question_number;
    let carteira = 100;

    // objeto para as questoes!
    let app = {
        questions: {
            1: { question: 'De quantos anos é constituído um século?', response: 1, option0: "1-> " + "50", option1: "2-> " + "100", option2: "3-> " + "1000", option3: "4-> " + "1.500", },
            2: { question: 'Qual é o coletivo de cães?', response: 0, option0: "1-> " + "MATILHA", option1: "2-> " + "REBANHO", option2: "3-> " + "CARDUME", option3: "4-> " + "MANADA", },
            3: { question: 'Segundo a Bíblia, em que rio Jesus foi batizado por João Batista?', response: 3, option0: "1-> " + "NO RIO NILO", option1: "2-> " + "NO RIO SENA", option2: "3-> " + "NO RIO RENO", option3: "4-> " + "NO RIO JORDÃO", },
            4: { question: 'Qual é a maior floresta do planeta?', response: 3, option0: "1-> " + "NEGRA", option1: "2-> " + "DE SHERWOOD", option2: "3-> " + "DA TIJUCA", option3: "4-> " + "AMAZÔNICA", },
            5: {
                question: 'Qual é o naipe do baralho quetem o desenho de coração?',
                response: 2,
                option0: "1-> " + "OUROS",
                option1: "2-> " + "PAUS",
                option2: "3-> " + "COPAS",
                option3: "4-> " + "ESPADAS",

            },
            6: {
                question: 'Qual atriz estrelou no filme: “Alagoa azul”?',
                response: 1,
                option0: "1-> " + "ALICIA SILVERSTONE",
                option1: "2-> " + "BROOKE SHIELDS",
                option2: "3-> " + "JULIA ROBERTS",
                option3: "4-> " + "JESSICA LANGE",
            },
            7: { question: 'Qual casal foi expulso doParaíso?', response: 3, option0: "1-> " + "SANSÃO E DALILA", option1: "2-> " + "JOSÉ E MARIA", option2: "3-> " + "SARA E ABRAÃO", option3: "4-> " + "ADÃO E EVA", value: 1 },

            8: { question: 'Segundo os contos, qual animal ao ser beijado se transforma em príncipe?', response: 3, option0: "1-> " + "CAVALO", option1: "2-> " + "CÃO", option2: "3-> " + "GATO", option3: "4-> " + "SAPO", value: 1 },


        }
    }

    // função de inicio do game!
    function init() {
        question_number = sorteador();

        render();
    }
    // fução enviar que verifica se está certo ou errado!
    function submit() {


        let option = parseInt(document.querySelector('input[name="option"]:checked').value);
        let currentOptions = app.questions[lista[i]]
        let teste = carteira * lista.length
        if (option == currentOptions.response) {
            Swal.fire({ text: `Agora você tem: R$${teste},00!` }); //função que mostra uma caixa interativa de acerto eu erro!
            carteira = teste;
            if (Number(carteira) >= 1000000) {
                Swal.fire({
                    text: `Parabén voçê GANHOU R$ 1.000.000,00 1MIL`,
                    onClose: () => {
                        location.reload();
                    }
                });
            }
            sorteador()
            i++
            question_number = lista[i]
            render()
        } else {
            Swal.fire({
                text: ` Você perdeu!`,
                onClose: () => {
                    location.reload(); //recarrega a pagina!
                }
            });
        }
    }

    // função do pare!
    function stop() {
        let option = document.querySelector('input#stop')
        Swal.fire({
            text: 'Você decidiu parar!',
            onClose: () => {
                location.reload();
            }
        });

    }
    // função de inteção com html!
    function render() {
        let currentOptions = app.questions[question_number]
        let currentQuestion = app.questions[question_number]


        let labelOption0 = document.getElementById('label-option0');
        labelOption0.innerHTML = currentOptions.option0

        let labelOption1 = document.getElementById('label-option1');
        labelOption1.innerHTML = currentOptions.option1

        let labelOption2 = document.getElementById('label-option2');
        labelOption2.innerHTML = currentOptions.option2

        let labelOption3 = document.getElementById('label-option3');
        labelOption3.innerHTML = currentOptions.option3

        let divQuestion = document.querySelector('div.div-question');
        divQuestion.innerHTML = currentQuestion.question
    }

    init();
}