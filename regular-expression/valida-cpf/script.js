import ValidarCPF from "./validar-cpf.JS";

const cpf = document.getElementById('cpf')

const validarCPF = new ValidarCPF(cpf).iniciar()