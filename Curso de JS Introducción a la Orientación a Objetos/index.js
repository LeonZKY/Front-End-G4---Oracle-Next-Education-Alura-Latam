// Importacion de clases
import{Cliente} from './cliente.js';
import{CuentaCorriente} from './cuentaCorriente.js';

const cliente = new Cliente("Leon","36001082", "124152350");
const cliente2 = new Cliente("Maria","356589849","6456489489");

const cuentaDeLeon = new CuentaCorriente(cliente, "1", "001");
const cuentaDeMaria = new CuentaCorriente(cliente2, "2", "002");

let saldoCuenta = cuentaDeLeon.verSaldo();

saldoCuenta = cuentaDeLeon.depositoEnCuenta(150);

console.log(CuentaCorriente.cantidadCuentas);
