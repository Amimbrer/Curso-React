import { getSaludo } from '../src/GetSaludo';

describe('Funcion que devuelve un saludo', () => {
    test('getSaludo', () => {

        // 1.Inicializacion
        const name = 'Fernando'

        // 2.Estímulo
        const message = getSaludo(name)

        // 3.Observar el comportamiento esperado
        expect(message).toBe(`Hola ${name}`);

    })



})
