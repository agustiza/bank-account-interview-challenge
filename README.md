## Bank-account-intervie-challenge

Develop a web service providing debit and credit operations.

### Requirements:
- Service must 
- El servicio debe permitir conocer el estado actual de la cuenta.
- El servicio debe aceptar operaciones de crédito y débito sobre dicha cuenta.
- El servicio debe denegar operaciones inválidas (ej., que resulten en un balance
  negativo).
- Se debe almacenar un historial de transacciones.
- Considerar operaciones concurrentes: una operación de escritura debería
  bloquear otras que ocurran concurrentemente.
- Exponer las operaciones del servicio como endpoints de una API REST y
  documentarlos. Considerar métodos HTTP y status de respuesta aplicables para
  cada caso.
- Incluir un archivo README con instrucciones para levantar el servicio.
- El servicio debe correr en NodeJS.
  No es necesario:
- Implementar lógica de autenticación o autorización: la premisa es un único
  usuario con una única cuenta.
- Tener persistencia de los datos: todo puede correr en memoria.
- Utilizar un framework específico o una estructura compleja para el proyecto.
  Nice to have:
- Utilizar Typescript
- Implementar tests
  Entregables:
- Link a repositorio Git donde se encuentre el código fuente y el archivo README.