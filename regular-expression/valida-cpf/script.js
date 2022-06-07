import ValidarCPF from "./validar-cpf.js";

const cpf = document.getElementById('cpf')

const validarCPF = new ValidarCPF(cpf).iniciar()