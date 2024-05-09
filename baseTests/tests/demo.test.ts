describe('Pruebas en <DemoComponent>', () => {
    test('should first', () => {

        // 1.Arrange/Inicializacion
        const message1 = 'Hola mundo   '

        // 2.Act/Estímulo
        const message2 = message1.trim()

        // 3.Assert/Observar el comportamiento esperado
        expect(message1).toBe(message2)
    })
})