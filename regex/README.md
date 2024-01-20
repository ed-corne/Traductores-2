# Implementacion de REGEX con React + Vite

En React, se pueden usar expresiones regulares (regex) para realizar validaciones, filtrar datos o manipular cadenas de texto. En esta aplicacion implemntamos las siguintes expresiones regulares en React:

1. Validar un correo electrónico:
```javascript
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
```

2. Validar una dirección URL:
```javascript
const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
```

3. Validar una fecha en formato "dd/mm/aaaa":
```javascript
const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
```

4. Validar un número de teléfono en formato internacional:
```javascript
const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
```

5. Validar una dirección IPv4:
```javascript
const ipv4Regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.([25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.([25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.([25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
```
