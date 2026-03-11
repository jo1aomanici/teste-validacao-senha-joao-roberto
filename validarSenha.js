function validarSenha(senha) {

    if (senha.length < 9) {
        return false;
    }

    const especiais = "@#$%^&*()-+";

    let temNumero = false;
    let temMinuscula = false;
    let temMaiuscula = false;
    let temEspecial = false;

    const caracteres = new Set();

    for (let char of senha) {

        if (caracteres.has(char)) {
            return false;
        }

        caracteres.add(char);

        if (/[0-9]/.test(char)) {
            temNumero = true;
        }

        if (/[a-z]/.test(char)) {
            temMinuscula = true;
        }

        if (/[A-Z]/.test(char)) {
            temMaiuscula = true;
        }

        if (especiais.includes(char)) {
            temEspecial = true;
        }
    }

    return temNumero && temMinuscula && temMaiuscula && temEspecial;
}

module.exports = validarSenha;
