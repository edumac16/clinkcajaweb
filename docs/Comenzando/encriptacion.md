---
sidebar_position: 2
title: Encriptación de datos
description: Cómo usar la encriptación de datos para que ni nosotros podamos ver tus datos.
---
# Encriptación de descripciones en Clink Caja

La aplicación ofrece un **modo dual** de privacidad para las descripciones de las transacciones:

- **Sin clave de encriptación**: las descripciones se guardan en texto claro; la búsqueda por descripción funciona con normalidad.
- **Con clave de encriptación**: las descripciones se guardan encriptadas en la base de datos; solo quien conozca la clave puede verlas. La clave **no se guarda** en la base de datos: solo un hash para verificarla al ingresar.

---

## 1. Cómo activar la encriptación

### Al registrarte

En el formulario de **Crear cuenta** hay un campo opcional: **Clave de encriptación**.

- Si **dejás el campo en blanco**: tu cuenta funciona como siempre; las descripciones se guardan en claro y podés buscar por descripción en la tabla de transacciones.
- Si **completás la clave**: se guarda únicamente un **hash** de esa clave en la base de datos (nunca el texto en claro). A partir de ese momento, todas las descripciones de tus transacciones se guardan encriptadas.

:::warning[Importante]
Si configurás una clave de encriptación, **la vas a necesitar cada vez que ingreses**. Si la olvidás, no podrás acceder a la cuenta. No hay forma de recuperarla ni de recuperar las descripciones sin ella.
:::

---

## 2. Cómo ingresar cuando tenés encriptación

El ingreso se hace en **dos pasos** (así el autocompletado de contraseñas en iOS y otros dispositivos no se confunde):

1. **Primer paso**: en **Ingresar** solo cargás email y contraseña. Si son correctos y tu cuenta no usa encriptación, entrás directo.
2. **Segundo paso**: si tu cuenta **sí usa** encriptación, después de validar email y contraseña se abre una segunda pantalla que pide únicamente la **Clave de encriptación**. Ahí ingresás la clave que configuraste al registrarte. Si no la ingresás o está mal, no podrás continuar.

Podés volver al inicio de sesión desde esa segunda pantalla si te equivocaste de cuenta.

La clave correcta se guarda **solo en la sesión** (en memoria del servidor mientras estás logueado). No se escribe en la base de datos ni en cookies. Al **salir**, la sesión se cierra y la clave se descarta.
** Ni nosotros podemos ver tus datos si usas encriptación **

---

## 3. Qué se encripta y qué no

- **Se encripta**: el campo **descripción** de las transacciones (altas, ediciones, importación CSV, transacciones recurrentes, división de transacciones, etc.).
- **No se encripta**: fechas, importes, nombres de las cuentas, nombres de las categorías ni ningún otro dato. Solo la descripción.

Al guardar una transacción con encriptación activa y clave en sesión, la descripción se cifra antes de escribirse en la base de datos. Al leer (listados, edición, reportes, próximas ocurrencias, etc.), se desencripta con la clave de la sesión. 

---

## 4. Búsqueda por descripción

Cuando la encriptación está activa, **no es posible buscar por descripción** en el servidor, porque las descripciones están cifradas en la base de datos.

- En **Transacciones**: el buscador de la tabla filtra por fecha, importe, cuenta, categoría, etc., pero **no** por el texto de la descripción. Se muestra un aviso: *"La búsqueda en la tabla no incluye descripciones (encriptación activa)."*
- En **Asignar categoría por criterios**: el filtro "Descripción contiene" se desactiva cuando hay encriptación; se indica en la misma pantalla.

Esto es una limitación inherente a la encriptación: sin la clave no se puede buscar dentro del texto cifrado.

---

## 5. Aspectos técnicos

- **Algoritmo de cifrado**: AES-256-CBC. La clave de 32 bytes se deriva de la "Clave de encriptación" del usuario mediante SHA-256.
