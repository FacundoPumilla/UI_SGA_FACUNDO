# Por hacer
1. En personaNew
    - Verificar carga de datos.
    - Anduvo con 2 personas luego explota la API
    - Revisar validaciones
2. En personaList
    - Cambiar boton de nueva persona
    - Revisar __console.log()__ quitar todos.
3. General.
    - Codigo para recorrer un objeto
```javascript
Object.entries(this.personaAGuardar).forEach(([key, value]) => {
        console.log(key + " --> "+ value);
        if(key == 'contactoDTO'){
          Object.entries(value).forEach(([key, value]) => {
            console.log(key + " --> "+ value);
          })
        }
      });
```
