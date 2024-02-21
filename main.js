const submitButton = document.getElementById('calc-button');
const resultElement = document.getElementById('result');

const calcIMC = (weight, height) => {
    const result = Number(weight).toFixed(2) / Math.pow(Number(height).toFixed(2), 2);

    return result;
};

const getMaleImc = (imc) => {
    if (imc < 20) {
        return "Abaixo do normal";
    } else if (imc <= 24.9) {
        return "Normal";
    } else if (imc <= 29.9) {
        return "Obesidade Leve";
    } else if (imc <= 39.9) {
        return "Obesidade Moderada";
    } else {
        return "Obesidade Mórbida";
    }
};

const getFemaleImc = (imc) => {
    if (imc < 19) {
        return "Abaixo do normal";
    } else if (imc <= 23.9) {
        return "Normal";
    } else if (imc <= 28.9) {
        return "Obesidade Leve";
    } else if (imc <= 38.9) {
        return "Obesidade Moderada";
    } else {
        return "Obesidade Mórbida";
    }
};

const validateImcBySex = (sex, imc) => {
    let imcBySexText;

    switch(sex) {
        case "female":
            imcBySexText = getFemaleImc(imc);
            break;
        default:
            imcBySexText = getMaleImc(imc);
            break;
    }

    return imcBySexText;
};

const handleCalcIMC = () => {
    const formElement = document.getElementById('imc-form');
    const data = Object.fromEntries(new FormData(formElement).entries());
    
    const imc = calcIMC(data.weight, data.height);
    const imcBySexText = validateImcBySex(data.sex, imc);

    resultElement.innerHTML = `O IMC do aluno ${data.studentName}: ${imcBySexText}`;
};

submitButton.addEventListener('click', handleCalcIMC);
