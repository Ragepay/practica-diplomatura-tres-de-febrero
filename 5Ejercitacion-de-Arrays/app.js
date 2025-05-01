//la lista de clientes.
let arrayCuentas = [
    {
        nroCuenta: 5486273622,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 27771,
        titularCuenta: "Abigael Natte",
    },
    {
        nroCuenta: 1183971869,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 8675,
        titularCuenta: "Ramon Connell",
    },
    {
        nroCuenta: 9582019689,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 27363,
        titularCuenta: "Jarret Lafuente",
    },
    {
        nroCuenta: 1761924656,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 32415,
        titularCuenta: "Ansel Ardley",
    },
    {
        nroCuenta: 7401971607,
        tipoDeCuenta: "Cuenta Unica",
        saldoEnPesos: 18789,
        titularCuenta: "Jacki Shurmer",
    },
];
// podes continuar tu codigo a partir de aca!

let banco = {
    clientes: arrayCuentas,
    consultarCliente: function (titular) {
        // Busca el cliente por su nombre y devuelve la cuenta correspondiente
        let cliente = this.clientes.find(cliente => cliente.titularCuenta === titular);
        if (cliente) {
            return cliente;
        } else {
            return "Cliente no encontrado";
        }
    },
    deposito: function (titular, monto) {
        let cliente = this.clientes.find(cliente => cliente.titularCuenta === titular);
        if (cliente) {
            if (monto <= 0) {
                return "El monto a depositar debe ser mayor a cero.";
            } else {
                cliente.saldoEnPesos += monto;
                return "Deposito realizado, su nuevo saldo es: $" + cliente.saldoEnPesos;
            }
        } else {
            return "Cliente no encontrado.";
        }
    },
    extraccion: function (titular, monto) {
        let cliente = this.clientes.find(cliente => cliente.titularCuenta === titular);
        if (cliente) {
            if (monto <= 0) {
                return "El monto a depositar debe ser mayor a cero.";
            } else if (monto > cliente.saldoEnPesos) {
                return "Fondos Insuficientes.";
            } else {
                cliente.saldoEnPesos -= monto;
                return "Extraccion realizada correctamente, has exctraido: $" + monto + " su nuevo saldo es: $" + cliente.saldoEnPesos;
            }
        } else {
            return "Cliente no encontrado.";
        }
    }
}

let clienteEcnontrado = banco.consultarCliente("Ramon Connell");
console.log(clienteEcnontrado);
let deposito = banco.deposito("Ramon Connell", 1000);
console.log(deposito);
let extraccion = banco.extraccion("Ramon Connell", 10000);
console.log(extraccion);