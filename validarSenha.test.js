const validarSenha = require('./validarSenha');

test('Senha válida', () => {
    expect(validarSenha("AbTp9@fok")).toBe(true);
});

test('Senha com menos de 9 caracteres', () => {
    expect(validarSenha("Ab1@")).toBe(false);
});

test('Senha sem número', () => {
    expect(validarSenha("Abcdef@Gh")).toBe(false);
});

test('Senha com repetição', () => {
    expect(validarSenha("AbTp9@foA")).toBe(false);
});
