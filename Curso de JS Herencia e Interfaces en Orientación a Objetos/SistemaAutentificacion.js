export class SistemaAutentificacion  
{
    static login(usuario, clave){
        return usuario.clave == clave;
    }
}

// Este atributo llamado clave que 