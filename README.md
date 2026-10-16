# PokéSurvivor Mod

Extensión de navegador para [pokesurvivor.com](https://pokesurvivor.com/): medidor de daño, minimapa, avisos de shiny y jefes, más campo de visión, resumen de cada partida y más.

## Cómo instalarlo (2 minutos)

Funciona en el ordenador con Chrome, Edge, Brave u Opera.

1. **Descarga el zip**: entra en la [última versión](https://github.com/aparmor2/pokesurvivor-mod/releases/latest) y baja hasta *Assets*. Descarga el archivo `pokesurvivor-mod-….zip` (los dos "Source code" no hacen falta).
2. **Descomprímelo**: clic derecho sobre el zip → *Extraer todo…* → *Extraer*. Deja la carpeta en un sitio donde no la vayas a borrar (por ejemplo, en Documentos), porque el navegador carga el mod desde ahí cada vez.
3. **Abre la página de extensiones**: escribe `chrome://extensions` en la barra de direcciones y pulsa Enter. En Edge es `edge://extensions`, en Brave `brave://extensions` y en Opera `opera://extensions`.
4. **Activa el "Modo de desarrollador"**: es un interruptor arriba a la derecha (en Edge, en el menú de la izquierda).
5. **Pulsa "Cargar descomprimida"** (arriba a la izquierda) y elige la carpeta que acabas de descomprimir. Es la que tiene dentro `manifest.json`: si te dice que falta el manifiesto, entra una carpeta más adentro.
6. **Abre o recarga [pokesurvivor.com](https://pokesurvivor.com/)**. Verás el panel del mod con el daño de la partida. `Alt` + `M` lo muestra y lo oculta.

Si el navegador te avisa de que tienes extensiones en modo de desarrollador, es normal en las extensiones que no vienen de la tienda: cierra el aviso, pero no pulses "Desactivar".

## Idioma

El mod sigue el idioma del juego (español o inglés). Para cambiarlo, cámbialo en los Ajustes de PokéSurvivor y recarga la página. Los nombres de ataques, objetos y regiones salen con la traducción del juego; los de los jugadores no se traducen.

*English speakers: see [English](#english) at the end.*

## Actualizar

Cuando salga una versión nueva, el juego te lo dirá con una tarjeta amarilla en la barra de arriba. Descarga el zip nuevo, descomprímelo encima de la carpeta de antes (reemplazando los archivos) y pulsa el botón de recargar (↻) del mod en la página de extensiones.

## Qué añade

- **Medidor de daño**: un panel con el daño total de cada jugador de la partida, su daño por segundo, el porcentaje del total y su vida. Pulsando tu fila ves el daño de cada uno de tus ataques.
- **Avisos**: mensaje en pantalla (con sonido) cuando aparece un shiny (con el sonido de shiny de Leyendas Pokémon: Arceus, también en el gacha), un dorado (salvo en la hora dorada, que ya la anuncia el juego), el ladrón, un jefe, los legendarios o una grieta, y cuando un amigo tiene poca vida o cae.
- **Ritmo y tiempos**: cuánto te falta para subir de nivel al ritmo actual, cuánto queda para los legendarios del minuto 30, cuánto sigue abierta una grieta y cuándo puede salir la siguiente.
- **Mejoras**: tus multiplicadores (daño, recarga, velocidad, defensa, regeneración, críticos, imán, experiencia, mejoras activas y objeto) y, en cooperativo, lo que compartís: el Aprendizaje de cada uno, la experiencia que recibe el equipo y cuánto suben los enemigos por jugador.
- **Menos expulsiones en cooperativo**: si se corta la conexión entre vosotros, el mod espera hasta 30 s a que vuelva en vez de echar al jugador al instante, y evita que Chrome cierre la pestaña del juego para ahorrar memoria. Todo queda apuntado en un registro.
- **Resumen e historial**: al acabar la partida, un resumen con tiempo, nivel, derrotados, daño, daño por segundo y tus mejores ataques, comparado con tus amigos. Se guardan tus últimas 30 partidas.
- **Más campo de visión**: aleja la cámara para ver más mapa (de 1.0x a 2.5x, viene en 1.4x).
- **HUD más grande**: agranda el HUD del juego (nombre, vida, mejoras, ataques, flechas) de 1x a 2x, viene en 1.4x. Además pone el nivel de cada ataque encima de su icono, también en los ataques fusionados (en dorado si está al máximo, ★ si ha evolucionado).
- **Controles a tu gusto**: cambia la tecla de cada acción (moverse, cambiar de ataque, elegir ataque, pausa…) y usa la rueda del ratón o sus botones central y laterales. Viene con la rueda para ir cambiando de ataque.
- **Minimapa**: el terreno, tus amigos, los enemigos, los cofres y los objetos del suelo que hay a tu alrededor.
- **Pokédex Nacional**: en la pantalla de Pokémon, una pestaña "Nacional" al principio de las regiones para verlos todos juntos (los filtros siguen funcionando).
- **Favoritos**: en la pantalla de Pokémon, pulsa la ★ de la esquina de cualquier Pokémon que tengas para marcarlo; la pestaña "★ Favoritos" los junta todos, sean de la región que sean.
- **Gacha más rápido**: botón para saltar la animación de la tragaperras, opción para saltarla siempre y botón "Tirar todo" para gastar todos los tickets de una vez.

## Uso

| Acción | Cómo |
|---|---|
| Más / menos visión | Botones `+` / `-` del panel, o `Alt` + `+` / `Alt` + `-` |
| Visión normal | Botón `1x`, o `Alt` + `0` |
| Tamaño del HUD | Botones `-` / `1x` / `+` de la fila "HUD" del panel |
| Cambiar los controles | Botón "Cambiar" de la fila "Controles" del panel, o `Alt` + `K` |
| Cambiar de ataque con la rueda | Rueda arriba: ataque anterior, rueda abajo: el siguiente (se puede cambiar en Controles) |
| Mostrar / ocultar el panel | `Alt` + `M` |
| Mover el panel | Arrastrarlo por el título "DAÑO" |
| Ver el daño de cada ataque | Pulsar tu fila del panel de daño |
| Avisos con o sin sonido | Botón "Sonido" del panel, o `Alt` + `B` |
| Historial de partidas | `Alt` + `H` |
| Mejoras tuyas y del equipo | Botón "Mejoras" del panel, o `Alt` + `J` |
| Registro de conexión | `Alt` + `L` |
| Mostrar / ocultar el minimapa | `Alt` + `N` |
| Zoom del minimapa | Rueda del ratón encima del mapa, o sus botones `-` / `+` |
| Mover el minimapa | Arrastrarlo por el título "MAPA" |

Los paneles solo aparecen durante una partida. La visión, el zoom del mapa y la posición de cada panel se guardan.

## Repertorio

En la pantalla de Mejoras del juego hay una casilla nueva: "Empezar con un solo movimiento aunque tenga Repertorio". Con ella marcada empiezas cada partida con un movimiento, como si no la hubieras comprado. No devuelve las monedas y se puede desmarcar cuando quieras.

## Gacha

- **Saltar animación**: durante la tragaperras sale un botón debajo para ir directo a los resultados.
- **Saltar siempre**: casilla debajo de los botones de tirar. Si está marcada, la tragaperras no sale nunca.
- **Tirar todo · N**: gasta todos tus tickets de golpe en el banner que tengas elegido y enseña todas las cartas juntas (N es el número de tiradas). Primero usa los tickets ×10, luego los normales de 10 en 10 (así cada grupo de 10 mantiene la épica garantizada) y lo que sobre, de uno en uno.
- Si al tirar desbloqueas un logro que da tickets, esos tickets llegan después de la tirada y se quedan para la siguiente.
- **Lo que te falta por región**: debajo de los botones de tirar, una tabla con cuántos Pokémon tienes de cada región, cuántos te faltan, cuántas tiradas quedan para la legendaria garantizada en cada banner y la lista de los que te faltan. En amarillo, el banner donde más te falta.

## Leyenda del minimapa

| Marca | Qué es |
|---|---|
| Flecha blanca en el centro | Tú, apuntando hacia donde andas |
| Recuadro blanco | Lo que se ve en pantalla |
| Círculos de colores | Tus amigos, cada uno con su color |
| Puntitos rojos | Enemigos normales |
| Círculo rojo grande | Jefe |
| Círculo morado grande | Legendario |
| Círculo celeste | Shiny |
| Círculo amarillo | Enemigo dorado o ladrón |
| Anillo morado | Grieta (portal) |
| Rombo amarillo | Evento del mapa |
| Cuadrado marrón / amarillo | Cofre / cofre grande |
| Rombo celeste | Altar |
| Cuadraditos de colores | Objetos del suelo: curación (verde), imán (rosa), bomba (naranja), tickets (morado), objetos (amarillo) |

Fondo: verde = suelo, oscuro = árboles, rocas y muros, azul = agua (naranja si es lava).

Los jefes, legendarios, shinies, la grieta, los eventos y tus amigos se quedan pegados al borde del mapa cuando están fuera de alcance, para que sepas hacia dónde ir.

## En cooperativo

- Cada jugador con el mod envía su daño al anfitrión, y el anfitrión lo reparte a todos. Los datos van dentro de los mensajes que el juego ya envía, y los jugadores sin el mod los ignoran.
- **Lo mejor es que el anfitrión tenga el mod.** Si lo tiene, ve también el daño de quien no lo tenga: sale con `~` delante, porque es una estimación a partir de los golpes que le llegan.
- Si el anfitrión no tiene el mod, cada uno solo ve su propio daño. El resto sale como "sin mod".
- Cuenta el daño directo de los ataques. Las quemaduras y los venenos que siguen haciendo daño después del golpe no entran en el total; en solitario sí salen aparte en el desglose por ataque ("Quemaduras" y "Veneno").
- El desglose por ataque es solo el tuyo. La vida de tus amigos sale para todos, tengan o no el mod.

## Próxima grieta

El juego decide las grietas con un dado, pero con reglas fijas: entre el 1:15 y el 28:00, cada 30 s tira con un 20 % de probabilidad, y cada fallo suma otro 20 % (40, 60, 80 y 100 %). Mientras haya un **jefe vivo** no tira. El mod sigue esa misma cuenta y en el panel pone:

- `Grieta: tirada en 0:12 (60 %) - segura en 1:12`: cuándo es la próxima tirada, con qué probabilidad, y cuándo es seguro que sale (si no aparece un jefe).
- `Grietas en pausa: hay un jefe vivo`: matad al jefe (sale en el minimapa) para que vuelvan a salir.

En cooperativo el dado lo tira el anfitrión; en los demás la cuenta puede ir un segundo desfasada.

## Si os echa de la partida

El juego conecta a los jugadores directamente entre sí. Cuando esa conexión se corta un momento (wifi, cambio de red, el router), el juego original echa al jugador sin avisar. Con el mod:

- Sale un aviso "Se ha cortado la conexión con…" y el mod espera hasta 30 s. El anfitrión vuelve a intentar la conexión a los 15 s; si vuelve, seguís jugando. Si no vuelve, la partida sigue para el anfitrión y al otro le saca como haría el juego (antes podíais quedaros los dos bloqueados "esperando" al otro).
- Mientras estuvo cortada pueden haber salido enemigos que el jugador desconectado no ve. No le hacen daño y desaparecen al morir.
- Chrome ya no puede cerrar la pestaña del juego para ahorrar memoria ("Ahorro de memoria"), que es otra causa típica de que se recargue la página.
- Si aun así os echa, pulsad `Alt` + `L`: el registro dice si fue la conexión entre vosotros, internet o el navegador. Pasadme esa línea.
- Funciona mejor si lo tienen todos, y sobre todo el anfitrión.

## Avisos

- Con más visión, los enemigos aparecen más lejos (el juego los genera fuera de la cámara). Los objetos que dan a todo lo que se ve en pantalla alcanzan más enemigos. Con mucha visión el juego puede ir algo más lento.
- El juego está ofuscado y el mod se engancha a sus módulos internos (`Camera`, `Net`, `Coop`, `Game`). Si una actualización del juego cambia esos nombres, el mod puede dejar de funcionar hasta que se arregle.

## Del mismo autor

[**PokéPuzzles**](https://pokepuzzles.net/?utm_source=github&utm_medium=readme): puzles diarios de Pokémon (adivina el Pokémon, debilidades, rankings, gritos y más). En el juego tienes el enlace en la barra de arriba, a la izquierda de las monedas.

## English

Browser extension for [pokesurvivor.com](https://pokesurvivor.com/): damage meter, minimap, shiny and boss alerts, wider field of view, run summaries and more. Free and open source. It follows the game's language: with PokéSurvivor in English, the whole mod is in English.

**How to install (2 minutes, desktop Chrome, Edge, Brave or Opera)**

1. Download `pokesurvivor-mod-….zip` from *Assets* in the [latest release](https://github.com/aparmor2/pokesurvivor-mod/releases/latest) (you don't need the "Source code" files).
2. Unzip it somewhere you won't delete it (e.g. Documents): the browser loads the mod from that folder every time.
3. Open `chrome://extensions` (`edge://extensions`, `brave://extensions` or `opera://extensions`).
4. Turn on **Developer mode** (top right; in Edge, in the left menu).
5. Click **Load unpacked** and pick the unzipped folder, the one with `manifest.json` inside.
6. Open or reload [pokesurvivor.com](https://pokesurvivor.com/). `Alt` + `M` shows and hides the mod's panel.

The browser may warn you about developer-mode extensions: that's normal for extensions that don't come from the store. Close the warning, but don't click "Turn off".

**Updating**: when a new version is out, a yellow card shows up in the game's top bar. Download the new zip, unzip it over the old folder (replacing the files) and click the mod's reload button (↻) on the extensions page.

To switch language, change it in the game's Settings and reload the page. Move, item and region names come from the game's own translations; player names are never translated.
