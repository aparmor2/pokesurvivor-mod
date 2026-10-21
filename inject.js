// Mod-only localization. Translate literal UI text before interpolating values,
// so player names and interpolated game data or HTML are never rewritten.
(() => {
  'use strict';

  const EN = {
    "El navegador había cerrado la pestaña para ahorrar memoria": "The browser discarded the tab to save memory",
    "Por eso se ha recargado. Alt + L para ver el registro": "That caused the reload. Alt + L opens the connection log",
    "Mejoras tuyas y del equipo (Alt + J)": "Your stats and team stats (Alt + J)",
    "Avisos con sonido (Alt + B)": "Sound alerts (Alt + B)",
    "Menos visión (Alt + -)": "Zoom in (Alt + -)",
    "Visión normal (Alt + 0)": "Default view (Alt + 0)",
    "Más visión (Alt + +)": "Zoom out (Alt + +)",
    "HUD del juego más pequeño": "Smaller game HUD",
    "HUD del juego a tamaño original": "Default game HUD size",
    "HUD del juego más grande": "Larger game HUD",
    "Versión del mod": "Mod version",
    "Cambiar teclas y rueda del ratón (Alt + K)": "Change keyboard and mouse bindings (Alt + K)",
    "Caído - ve a revivirlo": "Down - revive them",
    "Caído": "Down",
    "Pulsa para ver el daño por ataque": "Click to see damage by move",
    "Sin datos todavía": "No data yet",
    "sin mod": "no mod",
    "Primera grieta posible en": "First possible rift in",
    "Grietas en pausa: hay un jefe vivo": "Rifts paused: a boss is alive",
    " - segura en": " - guaranteed within",
    "Grieta: tirada en": "Rift: next roll in",
    "Quemaduras": "Burn",
    "Veneno": "Poison",
    "Otros": "Other",
    "Aún no has hecho daño": "No damage dealt yet",
    "subes en": "next level in",
    "Legendarios en": "Legendaries in",
    "Grieta abierta:": "Rift closes in:",
    "Sonido: sí": "Sound: on",
    "Sonido: no": "Sound: off",
    "¡Shiny!": "Shiny!",
    "Jefe:": "Boss:",
    "Pokémon dorado:": "Golden Pokémon:",
    "¡Ladrón!": "Thief!",
    "¡Legendario!": "Legendary!",
    "Se ha abierto una grieta": "A rift has opened",
    "ha caído: ve a revivirlo": "is down: revive them",
    "tiene poca vida": "has low HP",
    "¿Te está gustando el mod?": "Enjoying the mod?",
    "Dale una estrella en GitHub: es gratis, son dos clics y ayuda a que lo conozca más gente.": "Star it on GitHub to help others discover it.",
    "Dar una estrella": "Star on GitHub",
    "No, gracias": "No, thanks",
    "Tu mejor daño por segundo": "Your highest damage per second",
    "Resumen de la partida": "Run summary",
    "Tus últimas partidas": "Recent runs",
    "Borrar historial": "Clear history",
    "Todavía no hay partidas guardadas. Se guardan al acabar cada partida.": "No saved runs yet. Runs are saved when they end.",
    "Empezar con un solo movimiento aunque tenga Repertorio": "Start with one move even with Repertoire unlocked",
    "el anfitrión": "the host",
    "un jugador": "a player",
    "No se pudo recuperar la conexión con": "Could not reconnect to",
    "Conexión con": "Connection to",
    " recuperada": " restored",
    " cortada": " lost",
    "Esperando a que vuelva.": "Waiting to reconnect.",
    "Se ha cortado la conexión con": "Lost connection to",
    "Reconectando… (hasta": "Reconnecting… (up to",
    "El navegador había cerrado esta pestaña para ahorrar memoria y la ha recargado.": "The browser discarded this tab to save memory and reloaded it.",
    "El navegador ha congelado la pestaña (estaba en segundo plano).": "The browser froze the background tab.",
    "La pestaña ha vuelto después de estar congelada.": "The tab resumed after being frozen.",
    "Se ha perdido la conexión a internet.": "Internet connection lost.",
    "Sin conexión a internet": "No internet connection",
    "Ha vuelto la conexión a internet.": "Internet connection restored.",
    "Registro de conexión": "Connection log",
    "No ha pasado nada raro todavía.": "No connection events yet.",
    "Si os echa de una partida, abrid esto (Alt + L) y mirad la última línea: dice si fue la conexión entre vosotros, internet o el navegador.": "If you disconnect, open this log (Alt + L). The latest entry identifies peer, internet, or browser issues.",
    "TUS MEJORAS": "YOUR STATS",
    "Reducción de daño": "Damage reduction",
    "Regeneración": "Regeneration",
    "Críticos (×1,5)": "Critical chance (×1.5)",
    "vida/s": "HP/s",
    "Mejora de": "Buff:",
    "Objeto": "Item",
    "EQUIPO": "TEAM",
    "Aprendizaje medio del equipo": "Average team Learning",
    "Experiencia que recibís": "XP received",
    "Vida de los enemigos": "Enemy HP",
    "Enemigos que salen": "Enemy spawn rate",
    "Ver más lejos (rueda del ratón)": "Zoom out (mouse wheel)",
    "Ver más cerca (rueda del ratón)": "Zoom in (mouse wheel)",
    "Saltar siempre la animación de la tragaperras": "Always skip the gacha animation",
    "Tirar todo": "Pull all",
    "Lo que te falta por región": "Missing Pokémon by region",
    "El banner donde más te falta": "Banner with the most missing Pokémon",
    "Legendaria en": "5-star pity in",
    " tiradas": " pulls",
    "Saltar animación": "Skip animation",
    "Cada tirada va a la primera región que aún no tienes completa, así no gastas tickets en regiones terminadas.": "Each pull goes to the first region you haven't completed, so no tickets are spent on finished regions.",
    "Ya tienes todos los Pokémon de todas las regiones": "You already have every Pokémon in every region",
    "Puzles diarios de Pokémon, del autor de este mod": "Daily Pokémon puzzles by the mod author",
    "Rueda arriba": "Wheel up",
    "Rueda abajo": "Wheel down",
    "Botón central": "Middle mouse",
    "Lateral atrás": "Mouse back",
    "Lateral adelante": "Mouse forward",
    "Espacio": "Space",
    "Intro": "Enter",
    "Bloq Mayús": "Caps Lock",
    "Mayús der.": "Right Shift",
    "Mayús": "Shift",
    "Ctrl der.": "Right Ctrl",
    "Ataque anterior": "Previous move",
    "Ataque siguiente": "Next move",
    "Ataque 1 / mejora 1": "Move 1 / upgrade 1",
    "Ataque 2 / mejora 2": "Move 2 / upgrade 2",
    "Ataque 3 / mejora 3": "Move 3 / upgrade 3",
    "Ataque 4": "Move 4",
    "Cambiar mejoras": "Reroll upgrades",
    "Pulsa un botón y luego la tecla, la rueda del ratón (arriba o abajo) o un botón central o lateral del ratón. Esc cancela, Retroceso deja el hueco vacío. La rueda solo cuenta encima del juego, no de los paneles.": "Click a binding, then press a key or use the mouse wheel, middle button, or side buttons. Esc cancels; Backspace clears the binding. The wheel works over the game, not over panels.",
    "Las flechas, Tab, el teclado numérico y Esc siguen funcionando como en el juego. Alt + K abre esto.": "Arrow keys, Tab, the numpad, and Esc retain their game behavior. Open this menu with Alt + K.",
    "Avisos con sonido": "Sound alerts on",
    "Avisos sin sonido": "Sound alerts off",
    "DAÑO": "DAMAGE",
    "Daño": "Damage",
    "Visión": "View",
    "Controles": "Controls",
    "Mejoras": "Stats",
    "Cambiar": "Change",
    "Cerrar": "Close",
    "Tiempo": "Time",
    "Nivel": "Level",
    "Derrotados": "Defeated",
    "Jugador": "Player",
    "Tus ataques": "Your moves",
    "Historial": "History",
    "Fecha": "Date",
    "Nv.": "Lv.",
    "Recarga": "Cooldown",
    "Velocidad": "Movement speed",
    "Imán": "Magnet",
    "imán": "magnet",
    "Experiencia": "Experience",
    "MAPA": "MAP",
    "Región": "Region",
    "Tienes": "Owned",
    "Faltan": "Missing",
    "Ocultar": "Hide",
    "Completa": "Complete",
    "Nacional": "National",
    "Arriba": "Up",
    "Abajo": "Down",
    "Izquierda": "Left",
    "Derecha": "Right",
    "Pausa": "Pause",
    "Restablecer": "Reset",
    "Pulsa…": "Press…",
    "Acción": "Action",
    "Tecla": "Key",
    "Otra": "Alternate",
    "Tú": "You",
    "ataque": "attack",
    "velocidad": "speed",
    "defensa": "defense",
    "regeneración": "regeneration",
    "Ver": "Show",
    "casillas": "tiles",
    "legendarios!": "legendaries!",
    " disponible": " available",
    "Tienes la ": "You have ",
    ". Descarga el zip nuevo, descomprímelo encima de la carpeta del mod y recarga la extensión.": ". Download the new ZIP, extract it over the mod folder, and reload the extension.",
    "En amarillo, tu mejor partida por daño por segundo. Se guardan las últimas ": "Your highest-DPS run is highlighted in yellow. Your last ",
    " en este navegador. Alt + H abre esto cuando quieras.": " runs are saved in this browser. Open with Alt + H.",
    "Abrir": "Open",
    "Todos los movimientos, quién los aprende y cómo funcionan (Alt + P)": "Every move, who learns it and how it works (Alt + P)",
    "movimientos": "moves",
    "Movimientos": "Moves",
    "ataque físico": "physical attack",
    "ataque especial": "special attack",
    "reducción de daño": "damage reduction",
    "Estado": "Status",
    "Golpe en arco": "Arc strike",
    "Golpea en abanico delante de ti.": "Hits in an arc in front of you.",
    "Embestida": "Dash",
    "Te lanzas hacia el enemigo dañando todo el recorrido.": "You rush at the enemy, hitting everything on the way.",
    "Mejora": "Buff",
    "No hace daño, sube una estadística.": "Deals no damage, raises a stat.",
    "Proyectil": "Projectile",
    "Dispara al enemigo más cercano.": "Shoots the nearest enemy.",
    "Abanico": "Cone",
    "Ráfaga corta de disparos en cono.": "Short burst of shots in a cone.",
    "Orbitales": "Orbitals",
    "Gira a tu alrededor y golpea lo que toca.": "Circles around you and hits what it touches.",
    "Onda radial": "Radial burst",
    "Dispara en todas direcciones.": "Shoots in every direction.",
    "Rayo": "Beam",
    "Línea recta que daña todo lo que cruza.": "Straight line that damages everything it crosses.",
    "Daña continuamente lo que tienes cerca.": "Keeps damaging whatever is near you.",
    "Cadena": "Chain",
    "Salta de un enemigo a otro.": "Jumps from one enemy to the next.",
    "Bumerán": "Boomerang",
    "Va y vuelve golpeando en los dos sentidos.": "Goes out and comes back, hitting both ways.",
    "Rastro": "Trail",
    "Deja charcos dañinos por donde pasas.": "Leaves harmful puddles where you walk.",
    "Minas": "Mines",
    "Deja trampas que estallan al pisarlas.": "Leaves traps that blow up when stepped on.",
    "Meteoros": "Meteors",
    "Caen del cielo sobre enemigos cercanos.": "Fall from the sky on nearby enemies.",
    "Torreta": "Turret",
    "Deja algo que dispara solo un rato.": "Leaves something that shoots on its own for a while.",
    "Por acumul.": "Per stack",
    "Máx. acumul.": "Max stacks",
    "Duración": "Duration",
    "Cada": "Every",
    "Repite golpe": "Re-hit every",
    "Charco cada": "Puddle every",
    "Saltos": "Jumps",
    "Orbes": "Orbs",
    "Bumeranes": "Boomerangs",
    "A la vez": "At once",
    "Disparos": "Shots",
    "Proyectiles": "Projectiles",
    "Perforación": "Pierce",
    "Largo": "Length",
    "Distancia": "Distance",
    "Alcance": "Reach",
    "Salto máx.": "Max jump",
    "Explosión": "Blast",
    "Radio": "Radius",
    "Grosor": "Width",
    "Arco": "Arc",
    "Apertura": "Spread",
    "Dispara cada": "Fires every",
    "Dura": "Lasts",
    "Vida proy.": "Proj. life",
    "Velocidad proy.": "Proj. speed",
    "Quema": "Burns",
    "Envenena": "Poisons",
    "Frena": "Slows",
    "Teledirigido": "Homing",
    "a enemigos con estado": "vs. statused enemies",
    "Empuje": "Knockback",
    "Cómo funciona": "How it works",
    "Cerrar (Alt + P)": "Close (Alt + P)",
    "Buscar: Lanzallamas, quema…": "Search: Flamethrower, burn…",
    "Buscar movimiento": "Search moves",
    "Tu Pokémon: Pikachu, Gengar…": "Your Pokémon: Pikachu, Gengar…",
    "Tipo": "Type",
    "Categoría": "Category",
    "Forma": "Shape",
    "Ningún movimiento coincide.": "No moves match.",
    "No evoluciona": "Doesn't evolve",
    "No evoluciona.": "Doesn't evolve.",
    "Nivel 1": "Level 1",
    "Nivel 5": "Level 5",
    "Evolución": "Evolution",
    "No tiene evolución: estos son sus números a nivel 5.": "It doesn't evolve: these are its level 5 numbers.",
    "Mejoras al subir de nivel": "Level-up upgrades",
    "Cómo funcionan los efectos": "How the effects work",
    "Físico y especial": "Physical and special",
    "Eficacia de tipos": "Type effectiveness",
    "Tu defensa": "Your defense",
    "Quemadura": "Burn",
    "Ralentizar": "Slow",
    "Cadena e Infortunio": "Chain and Hex",
    "Mejoras sin daño": "Buffs without damage",
    "Cada golpe hace el daño del movimiento × tu ataque × la eficacia de tipo. Un crítico multiplica por 1,5; la probabilidad viene de objetos y mejoras.": "Each hit deals the move's damage × your attack × type effectiveness. A critical hit multiplies it by 1.5; the chance comes from items and upgrades.",
    "Los movimientos físicos usan el Ataque de tu Pokémon y los especiales su Ataque Especial. Elige tu Pokémon arriba para ver con cuáles pega más.": "Physical moves use your Pokémon's Attack and special moves its Special Attack. Pick your Pokémon above to see which ones hit harder.",
    "Cada tipo del enemigo débil al movimiento multiplica por 1,6, cada uno que lo resiste por 0,6 y uno inmune por 0,3 (nunca es cero). El total queda entre ×0,3 y ×2,4.": "Each enemy type weak to the move multiplies by 1.6, each one that resists it by 0.6 and an immune one by 0.3 (never zero). The total stays between ×0.3 and ×2.4.",
    "El daño que recibes baja con la Defensa de tu Pokémon si el golpe es físico y con su Defensa Especial si es especial: de un 25 % más a un 22 % menos.": "The damage you take goes down with your Pokémon's Defense for physical hits and its Special Defense for special ones: from 25% more to 22% less.",
    "Cada golpe suma 1 acumulación (máximo 8) y la renueva a 3 s. Cada 0,5 s hace 1,6 × acumulaciones × (1 + 0,06 × tu nivel).": "Each hit adds 1 stack (up to 8) and resets it to 3 s. Every 0.5 s it deals 1.6 × stacks × (1 + 0.06 × your level).",
    "Suma acumulaciones (máximo 8) y dura 4 s. Cada 0,6 s quita un 1,2 % de la vida máxima × acumulaciones + 1 (algo menos en jefes de más de 60.000 de vida), así que es lo mejor contra jefes.": "Adds stacks (up to 8) and lasts 4 s. Every 0.6 s it takes 1.2% of max HP × stacks + 1 (a bit less on bosses above 60,000 HP), so it's the best against bosses.",
    "Frena al enemigo ese porcentaje durante un rato. Si le llegan dos, se queda el más fuerte, no se suman.": "Slows the enemy by that percentage for a while. If two hit it, the strongest one stays; they don't add up.",
    "Cuántos enemigos extra atraviesa el proyectil antes de desaparecer.": "How many extra enemies the projectile goes through before it disappears.",
    "El proyectil gira hacia el enemigo más cercano. Cuanto más alto el valor, más cerrado gira.": "The projectile turns towards the nearest enemy. The higher the value, the tighter it turns.",
    "Cuánto retrocede el enemigo al recibir el golpe. Útil para que no te rodeen.": "How far the enemy is pushed back when hit. Useful so they don't surround you.",
    "Los rayos en cadena saltan de enemigo en enemigo y pierden un 15 % de daño en cada salto. Infortunio hace más daño a quien esté quemado, envenenado o frenado.": "Chain moves jump from enemy to enemy and lose 15% damage on each jump. Hex deals more damage to burned, poisoned or slowed enemies.",
    "Danza Espada, Maquinación, Agilidad, Fortaleza, Danza Dragón y Acua Aro se lanzan solas. Cada vez suman una acumulación y reinician la duración; si se acaba, se pierden todas a la vez. La barrita bajo cada mejora del HUD te dice cuánto le queda.": "Swords Dance, Nasty Plot, Agility, Harden, Dragon Dance and Aqua Ring cast themselves. Each cast adds a stack and restarts the timer; when it runs out, all stacks go at once. The small bar under each buff on the HUD shows how long it has left.",
    "Un movimiento evoluciona cuando está a nivel 5 y además tienes la mejora pasiva que pide (Vigor, Potencia, Carrera, Reflejos, Coraza, Síntesis o Imán).": "A move evolves when it is at level 5 and you also have the passive upgrade it asks for.",
    "Movimiento inicial por tipo": "Starting move by type",
    "Con qué movimiento empieza tu Pokémon según su tipo, salvo que tenga uno propio. Al subir de nivel te pueden salir los de sus tipos, los de tipo Normal, que los aprende cualquiera, y los que le hayas enseñado con MT.": "The move your Pokémon starts with for its type, unless it has its own. On level up you can get moves of its types, Normal moves, which anyone can learn, and the ones you taught it with TMs.",
    "Empieza con": "Starts with",
    "Puede aprender además": "Can also learn",
    "Reparto entre ": "Sharing across ",
    " jugadores": " players",
    "Auto mejoras": "Auto-pick",
    "Auto mejoras: sí": "Auto-pick: on",
    "Auto mejoras: no": "Auto-pick: off",
    "Auto mejoras: no ha salido nada de tu lista": "Auto-pick: nothing from your list came up",
    "Auto:": "Auto:",
    "Activas": "On",
    "Apagadas": "Off",
    "Ajustar": "Edit",
    "Añadir": "Add",
    "Elegir solo las cartas al subir de nivel": "Pick level-up cards automatically",
    "Orden en que se eligen las cartas (Alt + U)": "Card priority order (Alt + U)",
    "Evolucionar un ataque": "Evolve a move",
    "Mejora que deja evolucionar un ataque": "Stat that unlocks a move's evolution",
    "Baya Zidra con menos de la mitad de vida": "Sitrus Berry when below half HP",
    "Subir de nivel un ataque que ya tienes": "Level up a move you already have",
    "Ataque nuevo que pega bien con tu Pokémon": "New move that suits your Pokémon",
    "Cualquier ataque nuevo": "Any new move",
    "Ataques de tu Pokémon": "Your Pokémon's moves",
    "Todos los ataques": "All moves",
    "Elijo yo": "I pick",
    "Cambiar opciones y, si tampoco, elijo yo": "Reroll, and if still nothing, I pick",
    "Si no sale nada de la lista:": "If nothing from the list comes up:",
    "La lista está vacía: añade algo.": "The list is empty: add something.",
    "Un ataque concreto vale para aprenderlo, subirlo de nivel o evolucionarlo. Con = una línea comparte puesto con la de arriba y se van turnando. En cooperativo verás las cartas un momento antes de que se elija. Lo que se elige sale en un aviso arriba.": "A specific move counts for learning it, leveling it up or evolving it. With = a line shares its place with the one above and they take turns. In co-op you'll see the cards for a moment before the pick. Each pick shows up in a notice at the top.",
    "Restablecer la lista": "Reset the list",
    "Panel del mod": "Mod panel",
    "Panel de daño": "Damage panel",
    "Daño de cada jugador, tiempos y ritmo durante la partida. Alt + M": "Damage per player, timers and pace during a run. Alt + M",
    "Mejoras en el panel": "Stats in the panel",
    "Tus multiplicadores y lo que compartís en cooperativo. Alt + J": "Your multipliers and what you share in co-op. Alt + J",
    "Minimapa": "Minimap",
    "Terreno, amigos, enemigos, cofres y objetos. Alt + N": "Terrain, friends, enemies, chests and items. Alt + N",
    "Shiny, jefes, legendarios, grietas y amigos con poca vida. Alt + B": "Shinies, bosses, legendaries, rifts and friends with low HP. Alt + B",
    "Cámara y HUD": "Camera and HUD",
    "Aleja la cámara para ver más mapa. Alt + + / Alt + - / Alt + 0": "Zooms the camera out to show more of the map. Alt + + / Alt + - / Alt + 0",
    "Tamaño del HUD": "HUD size",
    "Nombre, vida, mejoras y ataques del juego.": "The game's name, HP, buffs and moves.",
    "Elegir las cartas por mí": "Pick cards for me",
    "Al subir de nivel, el mod coge la carta del primer punto de la lista que haya salido. Alt + U": "On level up, the mod takes the card for the highest entry on the list that came up. Alt + U",
    "Más": "More",
    "Teclas, rueda y botones del ratón. Alt + K": "Keys, mouse wheel and buttons. Alt + K",
    "Todos los movimientos, quién los aprende y cómo funcionan. Alt + P": "Every move, who learns it and how it works. Alt + P",
    "Historial de partidas": "Run history",
    "Tus últimas partidas. Alt + H": "Your recent runs. Alt + H",
    "Cortes de conexión en cooperativo. Alt + L": "Connection drops in co-op. Alt + L",
    "Cualquier ataque": "Any move",
    "Misma prioridad que la de arriba: se van turnando": "Same priority as the one above: they take turns",
    "Iconos de objetos de los juegos": "Item icons from the main games",
    "En los objetos y en las cartas de mejora.": "On items and on stat cards.",
    "Iconos de tipo de los juegos recientes": "Type icons from the recent games",
    "Los de Escarlata y Púrpura en los ataques, en vez de los pixelados del juego.": "The Scarlet and Violet ones on moves, instead of the game's pixel-art icons.",
    "Objetos preferidos": "Favourite items",
    "Al coger un objeto llevando otro, te quedas con el que esté más arriba sin que el juego pregunte.": "When you pick up an item while holding another, you keep whichever is higher on the list, without the game asking.",
    "Sin objetos en la lista: el juego te pregunta siempre.": "No items on the list: the game always asks.",
    "Te quedas con": "Keeping",
    "Cambias a": "Switching to",
    "Área de los cofres con candado": "Locked chest area",
    "Un círculo en el suelo marca dónde tienes que quedarte para abrirlos.": "A circle on the ground shows where to stand to open them.",
    "Mejora que evoluciona": "Evolution stat",
    "Con menos de media vida": "Below half HP",
    "En su orden": "In its order",
    "Subir de nivel": "Level up",
    "Un ataque que tienes": "A move you have",
    "Ataque nuevo": "New move",
    "Que pegue bien": "Suits your Pokémon",
    "Cualquiera": "Any",
    "Moveset de tu Pokémon, en su orden": "Your Pokémon's moveset, in order",
    "Sin moveset: las auto mejoras pueden coger cualquier ataque.": "No moveset: auto-pick can take any move.",
    "Moveset para las auto mejoras": "Auto-pick moveset",
    "Pulsa los iconos de arriba o añádelos aquí. El orden es la prioridad.": "Click the icons above or add moves here. The order is the priority.",
    "El moveset de cada Pokémon se elige en su ficha, en la pantalla Pokémon.": "Each Pokémon's moveset is set on its card in the Pokémon screen.",
    "Los ataques que buscan las auto mejoras con este Pokémon, en orden. Solo aprende ataques nuevos de aquí.": "The moves auto-pick goes for with this Pokémon, in order. New moves only come from this list.",
    "Resumen del mod (Alt + H)": "Mod summary (Alt + H)",
    "Abrir el resumen al acabar la partida": "Open the summary when a run ends",
    "Si no, se abre con su botón de la pantalla final o con Alt + H.": "Otherwise, open it with its button on the end screen or with Alt + H.",
    "Lo puede aprender con una MT de la Tienda Kecleon": "It can learn it with a TM from the Kecleon Shop",
    "Naturaleza, habilidad y monotipo": "Nature, ability and single type",
    "La naturaleza sube un 10 % una estadística y baja otra; la habilidad tiene su efecto en la partida (se cambian con Mentas y Cápsulas de la Tienda Kecleon). Los Pokémon de un solo tipo pegan un 20 % más con los ataques de su tipo. Los números de tu Pokémon arriba ya lo tienen en cuenta.": "The nature raises one stat by 10% and lowers another; the ability has its own effect in the run (Mints and Capsules from the Kecleon Shop change them). Single-type Pokémon deal 20% more with moves of their type. Your Pokémon's numbers above already include all of this.",
    "Las MT de la Tienda Kecleon enseñan para siempre ataques de fuera de sus tipos, solo a los Pokémon que los aprenden en los juegos. Con tu Pokémon elegido, la lista marca con MT los que puede aprender así.": "TMs from the Kecleon Shop permanently teach moves outside its types, only to Pokémon that learn them in the main games. With your Pokémon picked, the list marks the ones it can learn this way with TM.",
    "MT": "TM"
  };
  const TEMPLATES = {
    " (+{x} con MT)": " (+{x} with TMs)",
    "Con MT: <b>{x} Pokémon</b> más": "With a TM: <b>{x} more Pokémon</b>",
    "{x} Pokémonedas en la Tienda Kecleon": "{x} PokéCoins in the Kecleon Shop",
    "{x} a {x} casillas": "{x} {x} tiles away",
    "¡{x} legendarios!": "{x} legendaries!",
    "En amarillo, tu mejor partida por daño por segundo. Se guardan las últimas {x} en este navegador. Alt + H abre esto cuando quieras.": "Your highest-DPS run is highlighted in yellow. Your last {x} runs are saved in this browser. Open with Alt + H.",
    "+{x} ataque": "+{x} attack",
    "+{x} ataque físico": "+{x} physical attack",
    "+{x} ataque especial": "+{x} special attack",
    "+{x} velocidad": "+{x} speed",
    "+{x} reducción de daño": "+{x} damage reduction",
    "+{x} vida/s": "+{x} HP/s",
    "Quema ×{x}": "Burns ×{x}",
    "Envenena ×{x}": "Poisons ×{x}",
    "Frena {x}": "Slows {x}",
    "Teledirigido {x}": "Homing {x}",
    "×{x} a enemigos con estado": "×{x} vs. statused enemies",
    "Empuje {x}": "Knockback {x}",
    "<span>{x} de {x}</span><span>↑ ↓ para moverte</span>": "<span>{x} of {x}</span><span>↑ ↓ to browse</span>",
    "{x} movimientos": "{x} moves",
    "Daño físico {x} · especial {x}": "Physical damage {x} · special {x}",
    "Empieza con {x} · recibe físico {x}, especial {x}": "Starts with {x} · takes physical {x}, special {x}",
    "Evoluciona de {x}": "Evolves from {x}",
    "Evoluciona a {x}": "Evolves into {x}",
    " · ×{x} con {x}": " · ×{x} with {x}",
    "{x} empieza con este": "{x} starts with this one",
    "<b>{x}</b> - necesita <span class=\"need\">{x}</span> y el movimiento a nivel 5<br>{x}": "<b>{x}</b> - needs <span class=\"need\">{x}</span> and the move at level 5<br>{x}",
    "Empiezan la partida con él: <b>{x} Pokémon</b>": "Start the run with it: <b>{x} Pokémon</b>",
    "Lo puede aprender <b>cualquier Pokémon</b> (los {x}).": "<b>Any Pokémon</b> can learn it (all {x}).",
    "Lo aprenden <b>{x} Pokémon</b>: los de tipo {x}": "Learned by <b>{x} Pokémon</b>: those of type {x}",
    "Reparto entre {x} jugadores": "Sharing across {x} players",
    "Tienes la {x}. Descarga el zip nuevo, descomprímelo encima de la carpeta del mod y recarga la extensión.": "You have {x}. Download the new ZIP, extract it over the mod folder, and reload the extension.",
    "Mod {x} disponible": "Mod {x} available",
    "Moveset de {x}": "Moveset: {x}"
  };
  let game = null;
  const escape = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const phrases = new RegExp(Object.keys(EN).sort((a, b) => b.length - a.length)
    .map(s => `(?<![\\p{L}\\p{N}_])${escape(s)}(?![\\p{L}\\p{N}_])`).join('|'), 'gu');

  // The mod speaks Spanish and English: the game's other languages (French,
  // Italian, Portuguese, Chinese) get English.
  function language() {
    const lang = (game && game.I18n && game.I18n.lang) || (window.PS_LOCALES && window.PS_LOCALES.lang);
    if (lang) return lang === 'es' ? 'es' : 'en';
    let saved;
    try { saved = localStorage.getItem('ps.lang'); } catch {}
    if (/^(es|en|fr|it|pt|zh)\b/i.test(saved || '')) return /^es/i.test(saved) ? 'es' : 'en';
    if (/\/en(\/|$)/.test(location.pathname)) return 'en';
    const nav = ((navigator.languages && navigator.languages[0]) || navigator.language || 'es').toLowerCase();
    return nav.startsWith('es') ? 'es' : 'en';
  }

  function text(s) {
    return language() === 'en' ? s.replace(phrases, match => EN[match]) : s;
  }

  // Supports both t('label') and t`label ${value}`; values stay untouched.
  function t(strings, ...values) {
    if (typeof strings === 'string') return text(strings);
    const translated = language() === 'en' && TEMPLATES[strings.join('{x}')];
    if (translated) {
      const parts = translated.split('{x}');
      return parts.reduce((out, part, i) => out + part + (i < values.length ? values[i] : ''), '');
    }
    return strings.reduce((out, part, i) => out + text(part) + (i < values.length ? values[i] : ''), '');
  }

  window.__psmodI18n = {
    t,
    language,
    setGame(ns) { game = ns; },
    locale() { return language() === 'en' ? 'en-US' : 'es-ES'; },
    gameText(s) { return game && game.I18n && game.I18n.t ? game.I18n.t(s) : s; },
  };
})();

// PokéSurvivor Mod: damage meter (per player and per move), field of view,
// minimap, alerts, run summaries, gacha helpers.
//
// Runs in the page's own JS world at document_start, before the game's
// deferred bundle. The game keeps all its modules (Camera, Net, Coop, Game...)
// on a private object inside a closure, so we catch that object the moment the
// bundle assigns `ns.Camera = {...}` through a one-shot setter on
// Object.prototype.
(() => {
  'use strict';
  if (window.__psmod) return;
  window.__psmod = true;

  const { t: tr, locale, gameText, setGame } = window.__psmodI18n;

  const LS = 'psmod:';
  const load = (k, d) => { try { const v = localStorage.getItem(LS + k); return v == null ? d : JSON.parse(v); } catch { return d; } };
  const save = (k, v) => { try { localStorage.setItem(LS + k, JSON.stringify(v)); } catch {} };

  let NS = null;

  Object.defineProperty(Object.prototype, 'Camera', {
    configurable: true,
    get() { return undefined; },
    set(v) {
      Object.defineProperty(this, 'Camera', { value: v, writable: true, configurable: true, enumerable: true });
      if (NS || !this || !('LIFT' in this) || !('U' in this)) return;
      delete Object.prototype.Camera;
      NS = this;
      setGame(NS);
      window.__psmodNS = NS; // handy for poking around from DevTools
      // Net is assigned later in this same script run, and Coop registers
      // its peer listener right after, so it has to be patched on arrival.
      trapModule('Net', patchNet);
      setupFov(v);
      waitFor(() => NS.Net && NS.Coop && NS.Game, setupMeter);
    },
  });

  function trapModule(name, fn) {
    Object.defineProperty(NS, name, {
      configurable: true,
      enumerable: true,
      get() { return undefined; },
      set(v) {
        Object.defineProperty(NS, name, { value: v, writable: true, configurable: true, enumerable: true });
        try { fn(v); } catch (err) { console.warn('[psmod]', name, err); }
      },
    });
  }

  function waitFor(cond, fn) {
    const id = setInterval(() => { if (cond()) { clearInterval(id); fn(); } }, 100);
  }

  // ---------------------------------------------------------------- FOV
  // Camera.resize() picks scale = min(w / VIEW_W, h / MIN_VIEW_H); scaling
  // both reference sizes up shows proportionally more of the world.
  const FOV_MIN = 1, FOV_MAX = 2.5, FOV_STEP = 0.1;
  let fov = clampFov(load('fov', 1.4));
  let cam = null, baseW = 0, baseH = 0, lastResize = null;

  function clampFov(f) { return Math.round(Math.min(FOV_MAX, Math.max(FOV_MIN, +f || 1)) * 10) / 10; }

  function setupFov(c) {
    cam = c;
    baseW = c.VIEW_W;
    baseH = c.MIN_VIEW_H;
    const orig = c.resize;
    c.resize = function (...args) { lastResize = args; return orig.apply(this, args); };
    applyFov();
  }

  function setFov(f) { fov = clampFov(f); applyFov(); }

  function applyFov() {
    cam.VIEW_W = baseW * fov;
    cam.MIN_VIEW_H = baseH * fov;
    if (lastResize) cam.resize(...lastResize);
    save('fov', fov);
    renderFov();
  }

  // ----------------------------------------------------------------- HUD
  // The game paints its HUD (name, HP, buffs, move slots, arrows) on the main
  // canvas with HUD.draw(ctx, width, height, player, team), in CSS pixels. We
  // scale the context and hand it a proportionally smaller width/height, so
  // everything grows and stays anchored to the same edges. The off-screen
  // arrows place themselves with Camera.scale, which we shrink by the same
  // factor for the duration of the call. The clickable areas (move slots...)
  // are registered from inside draw with Touch.addButton in HUD coordinates
  // and hit-tested against clientX/Y, so we scale those up by the same factor.
  // Touch screens keep the original size.
  const HUD_MIN = 1, HUD_MAX = 2;
  const clampHud = (v) => Math.round(Math.min(HUD_MAX, Math.max(HUD_MIN, +v || 1)) * 10) / 10;
  let hudScale = clampHud(load('hudScale', 1.4));

  function setHudScale(v) { hudScale = clampHud(v); save('hudScale', hudScale); renderHud(); }
  function renderHud() { if (hudLabel) hudLabel.textContent = `HUD ${hudScale.toFixed(1)}x`; }

  function setupHud() {
    const H = NS.HUD;
    const draw = H.draw;
    const T = NS.Touch;
    let btnK = 1;
    if (T && T.addButton) {
      const add = T.addButton;
      T.addButton = function (x, y, w, h, fn, pad = 6) {
        if (btnK === 1) return add.apply(this, arguments);
        return add.call(this, x * btnK, y * btnK, w * btnK, h * btnK, fn, pad * btnK);
      };
    }
    H.draw = function (ctx, w, h, pl) {
      const touch = !!(NS.Touch && NS.Touch.active);
      const k = touch ? 1 : hudScale;
      const C = NS.Camera, cs = C.scale;
      ctx.save();
      if (k !== 1) { ctx.scale(k, k); C.scale = cs / k; }
      btnK = k;
      try {
        const args = Array.prototype.slice.call(arguments);
        args[1] = w / k; args[2] = h / k;
        const out = draw.apply(this, args);
        if (!touch && pl && pl.slots) drawSlotLevels(ctx, w / k, h / k, pl);
        if (pl && pl.buffs) drawBuffTimers(ctx, pl);
        return out;
      } finally {
        btnK = 1;
        C.scale = cs;
        ctx.restore();
      }
    };
  }

  // Fused slots show up to four small icons and no levels. Same layout as
  // the game's slot bar (54 px slots, 9 px apart, 18 px from the bottom, the
  // active one raised 6 px): we add a level badge to every move, gold when it
  // is maxed and a star when it has evolved.
  function drawSlotLevels(ctx, w, h, pl) {
    const S = 54, GAP = 9, ICON = 22;
    const n = Math.max(1, pl.slots.length);
    const x0 = (w - (n * S + GAP * (n - 1))) / 2;
    const y0 = h - S - 18;
    ctx.save();
    ctx.font = '700 10px Pixelify, "Segoe UI", system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const badge = (m, cx, cy) => {
      const max = m.def ? m.def.maxLvl : 5;
      const text = m.evolved ? '★' : String(m.lvl);
      const bw = Math.max(11, ctx.measureText(text).width + 5), bh = 11;
      ctx.fillStyle = 'rgba(8,14,30,.92)';
      ctx.fillRect(cx - bw / 2, cy - bh / 2, bw, bh);
      ctx.fillStyle = m.evolved || m.lvl >= max ? '#ffd23f' : '#ffffff';
      ctx.fillText(text, cx, cy + 0.5);
    };
    for (let i = 0; i < n; i++) {
      const g = pl.slots[i] || [];
      if (!g.length) continue;
      const x = x0 + (S + GAP) * i, y = i === pl.active ? y0 - 6 : y0;
      if (g.length > 1) {
        const pad = (S - 2 * ICON) / 3;
        g.forEach((m, j) => {
          const ix = x + pad + (j % 2) * (ICON + pad), iy = y + pad + Math.floor(j / 2) * (ICON + pad);
          badge(m, ix + ICON - 4, iy + ICON - 4);
        });
      } else {
        badge(g[0], x + S - 8, y + 8);
      }
    }
    ctx.restore();
  }

  // The game shows each active stat buff (Danza Espada, Agilidad...) as a
  // pill under the HP bar, "ATK ×3", but not how long it lasts. Every cast
  // adds a stack and restarts the timer, and when it runs out all stacks go at
  // once. Under each pill we draw a bar that empties with the time left,
  // blinking in the last 2 s. Same layout as the game: pills from
  // 16 px + safe area, 54 px down, 15 px tall, text width + 12 wide, 5 px
  // apart, in the order of player.buffs. measureText is translated by the
  // game in English like its fillText, so the widths match in both languages.
  const BUFF_TAG = { atk: 'ATK', patk: 'ATK', satk: 'AT.E', spd: 'VEL', def: 'DEF', regen: 'REG' };
  const BUFF_COLOR = { atk: '#ff6b4d', patk: '#ff6b4d', satk: '#c47bff', spd: '#7fe0ff', def: '#b0b8c8', regen: '#5fe08a' };
  const buffSeen = new WeakMap(); // buff -> longest time seen

  // Full duration: the buff move's own (it grows with its level), else the
  // longest remaining time seen, which is the duration right after a cast.
  function buffTotal(pl, k, b) {
    for (const g of pl.slots || []) for (const m of g || []) if (m && m.kind === 'buff' && m.stat === k && m.dur > 0) return m.dur;
    const d = Math.max(b.t, buffSeen.get(b) || 0);
    buffSeen.set(b, d);
    return d;
  }

  function drawBuffTimers(ctx, pl) {
    const B = pl.buffs;
    const sa = (NS.Touch && NS.Touch.safeArea && NS.Touch.safeArea()) || {};
    const y = 54 + (sa.top || 0), H = 15;
    const blink = 0.35 + 0.65 * Math.abs(Math.sin(performance.now() / 110));
    let x = 16 + (sa.left || 0);
    ctx.save();
    ctx.font = '800 9px Pixelify,"Segoe UI",system-ui,sans-serif';
    for (const k in B) {
      const b = B[k];
      if (!b || b.n <= 0) continue;
      const w = ctx.measureText(`${BUFF_TAG[k] || k.toUpperCase()} ×${b.n}`).width + 12;
      const total = buffTotal(pl, k, b);
      const f = total > 0 ? Math.min(1, Math.max(0, b.t / total)) : 0;
      const low = b.t < 2;
      ctx.fillStyle = 'rgba(0,0,0,.6)';
      ctx.beginPath(); ctx.roundRect(x, y + H + 2, w, 4, 2); ctx.fill();
      ctx.fillStyle = BUFF_COLOR[k] || '#fff';
      if (low) ctx.globalAlpha = blink;
      ctx.beginPath(); ctx.roundRect(x, y + H + 2, Math.max(2, w * f), 4, 2); ctx.fill();
      if (low) {
        ctx.strokeStyle = BUFF_COLOR[k] || '#fff';
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.roundRect(x, y, w, H, 7); ctx.stroke();
      }
      ctx.globalAlpha = 1;
      x += w + 5;
    }
    ctx.restore();
  }

  // --------------------------------------------------------- chest area
  // Locked chests ('bigchest' props) open after standing 3.5 s within
  // max(46, chest.r + player.r + 24) world units of them (Interact.update),
  // and the timer runs back down when you step out. The game only shows the
  // progress ring once you're inside, so we draw that circle on the ground:
  // right after World.drawLiquid, which paints the ground layer in world
  // coordinates, under every prop and Pokémon.
  let chestArea = load('chestArea', true);

  function setupChestArea() {
    const W = NS.World;
    const drawLiquid = W.drawLiquid;
    W.drawLiquid = function (ctx, view) {
      const out = drawLiquid.apply(this, arguments);
      if (chestArea) try { drawChestAreas(ctx, view); } catch {}
      return out;
    };
  }

  function drawChestAreas(ctx, view) {
    const p = me();
    if (!p || !inRun()) return;
    const t = performance.now() / 1000;
    for (const c of NS.World.visibleProps(view) || []) {
      if (c.type !== 'bigchest') continue;
      const r = Math.max(46, (c.r || 14) + (p.r || 0) + 24);
      const inside = !p.dead && (p.x - c.x) ** 2 + (p.y - c.y) ** 2 < r * r;
      ctx.save();
      ctx.beginPath();
      ctx.arc(c.x, c.y, r, 0, Math.PI * 2);
      ctx.fillStyle = inside ? 'rgba(255,210,63,.18)' : 'rgba(255,210,63,.07)';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.setLineDash([7, 5]);
      ctx.lineDashOffset = -t * 12;
      ctx.strokeStyle = inside ? 'rgba(255,210,63,.95)' : `rgba(255,210,63,${0.45 + 0.15 * Math.sin(t * 3)})`;
      ctx.stroke();
      ctx.restore();
    }
  }
  waitFor(() => NS && NS.World && NS.World.drawLiquid && NS.World.visibleProps, setupChestArea);

  // --------------------------------------------------------- type icons
  // The game draws every move and type icon itself (Icons.canvas(key) for
  // 'move:<id>' and 'type:<type>'): a 16 px pixel-art circle in the type
  // colour with a white glyph and, for moves, a badge of its kind in the
  // bottom-right corner (7x7 px from 9,9, framed in #1b1528). They reach
  // the screen through Icons.html, Icons.url and Icons.draw. We hand out
  // instead the type icons of the recent games, redrawn as SVG by partywhale
  // (github.com/partywhale/pokemon-type-icons, MIT), at 64 px with the
  // game's kind badge copied on top, 4x and still pixel art.
  //
  // Icons licence (TYPE_SVG):
  // MIT License
  //
  // Copyright (c) 2022 James Watkins
  //
  // Permission is hereby granted, free of charge, to any person obtaining a copy
  // of this software and associated documentation files (the "Software"), to deal
  // in the Software without restriction, including without limitation the rights
  // to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  // copies of the Software, and to permit persons to whom the Software is
  // furnished to do so, subject to the following conditions:
  //
  // The above copyright notice and this permission notice shall be included in all
  // copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  // AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  // LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  // OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  // SOFTWARE.
  const TYPE_SVG = {"bug":"<circle fill=\"#9f9f28\" cx=\"128\" cy=\"128\" r=\"128\"/><path fill=\"#fff\" d=\"M57.84,144.71c-.01-17.4,1.6-28.85,6.39-39.68,3.81-8.63,8.14-10.12,15.18-4.54,9.56,7.57,20.13,12.71,32,15.35,6.4,1.43,8.85,5.18,6.73,11.74-7.23,22.39-14.49,44.78-21.4,67.27-2.38,7.73-5.96,7.47-11.48,3.27-19.56-14.89-27.26-35.22-27.42-53.41Z\"/><path fill=\"#fff\" d=\"M198.18,140.28c-.2,22.43-7.79,41.62-25.21,56.25-8.51,7.14-11.15,6.33-14.39-3.8-6.75-21.15-13.17-42.41-20.18-63.48-2.61-7.83-.79-11.92,7.38-13.71,11.17-2.45,21.18-7.45,30.21-14.58,7.71-6.09,11.86-4.82,15.86,4.29,4.91,11.17,6.33,22.98,6.33,35.02Z\"/><path fill=\"#fff\" d=\"M127.91,105.03c-15.42,.42-28.7-4.76-40.56-14.1-6.17-4.85-7.07-9.34-1.07-15.53,23.76-24.54,59.04-24.66,83.13-.34,6.45,6.51,5.42,11.16-1.15,16.22-11.96,9.2-25.27,14.31-40.34,13.75Z\"/><path fill=\"#fff\" d=\"M128.4,179.08c4.03-.22,7.65-.37,11.27-.64,4.75-.35,6.18,2.6,7.01,6.54,.84,3.97-.53,6.29-4.39,7.43-9.41,2.78-18.79,2.72-28.22,.13-4.4-1.21-5.59-3.84-4.63-8.17,.94-4.23,3.05-6.32,7.53-5.92,3.94,.35,7.89,.44,11.44,.63Z\"/><path fill=\"#fff\" d=\"M127.89,170.73c-4.86-.9-12.01,1.45-11.66-7,.31-7.45,5.28-9.23,12.43-9.21,7.21,.02,11.05,3,11.1,9.52,.07,8.37-7.16,5.71-11.86,6.69Z\"/>","dark":"<circle fill=\"#4f4747\" cx=\"128\" cy=\"128\" r=\"128\"/><path fill=\"#fff\" d=\"M74.46,84.24c7.49,7.56,17.75,14.95,27.04,16.93-1.38,2.84-1.88,5.07-2.37,8.23-2.78,17.82-1.19,34.63,12.15,48.3,10.06,10.31,23.45,10.28,33.51-.09,13.29-13.71,14.91-30.51,12.01-48.33-.43-2.62-1.93-9.15-1.88-9.24,.1-.18,0-.08,1-.38,6.48-1.51,18.62-7.99,26.05-15.5,15.36,11.88,23.65,36.91,14.18,56.85-12.94,27.24-43.16,51.76-81.43,43.96-29.15-5.94-49.04-24.49-57.95-53.21-4.14-13.33,1.67-35.98,17.7-47.52Z\"/><path fill=\"#fff\" d=\"M139.92,124.38c-.27,5.3-.79,12.61-6.05,18.45-4.12,4.57-7.96,4.83-11.66-.03-7.43-9.75-7.46-20.89-4.48-32.19,1.96-7.42,2.86-7.9,10.26-7.9,7.41,0,7.97,.58,10.38,7.85,1.28,3.88,1.58,7.78,1.56,13.83Z\"/>","dragon":"<circle fill=\"#576fbc\" cx=\"128\" cy=\"128\" r=\"128\"/><path fill=\"#fff\" d=\"M170.93,124.41c.8,15.21-5.05,28.07-14.96,38.95-4.86,5.34-7.13,10.82-7.01,17.85,.07,4.3-.64,8.63-1.21,12.91-1.48,11.17-7.97,16.55-19.79,16.53-11.81-.02-18.2-5.38-19.75-16.59-.18-1.32-.43-2.65-.42-3.97,.07-12.31-3.37-22.68-11.93-32.43-14.25-16.22-14.56-45.3-2.66-60.49,5.82-7.42,4.65-17.14,7.55-25.58,2.37-6.9,4.02-14.05,6.07-21.06,.48-1.65,1.51-3.06,3.48-3,2.02,.06,2.71,1.6,3.11,3.3,1.8,7.77,4.05,15.47,5.23,23.33,.95,6.31,4.94,5.95,9.39,5.97,4.5,.02,8.42,.25,9.35-6.03,1.11-7.53,3.32-14.9,5.03-22.34,.45-1.96,.74-4.19,3.34-4.19,2.43,0,3.15,1.99,3.71,4,1.88,6.72,3.88,13.4,5.7,20.14,3.01,11.13,4.22,22.74,11.59,32.51,4.31,5.71,3.98,13.22,4.18,20.21Z\"/><path fill=\"#fff\" d=\"M194.2,95.93c16.78,17.37,18.87,64.53-8.22,85.49-5.83-6.35-8.44-14.77-13.52-21.58-.65-.87-.74-2.88-.18-3.82,5.41-9,4.95-20.46,12.96-28.54,7.84-7.92,9.39-18.61,8.97-31.55Z\"/><path fill=\"#576fbc\" d=\"M141.47,153.95c6.61-10.7,12.32-19.93,18.62-30.12,5.76,18.39-.34,28.8-18.62,30.12Z\"/><path fill=\"#fff\" d=\"M61.68,95.93c-16.78,17.37-18.87,64.53,8.22,85.49,5.83-6.35,8.44-14.77,13.52-21.58,.65-.87,.74-2.88,.18-3.82-5.41-9-4.95-20.46-12.96-28.54-7.84-7.92-9.39-18.61-8.97-31.55Z\"/><path fill=\"#576fbc\" d=\"M115.46,153.95c-6.61-10.7-12.32-19.93-18.62-30.12-5.76,18.39,.34,28.8,18.62,30.12Z\"/>","electric":"<circle fill=\"#dfbc28\" cx=\"128\" cy=\"128\" r=\"128\"/><path fill=\"#fff\" d=\"M112.94,205.87c-4.35-1.07-3.09-4.21-2.41-6.43,3.08-10.15,6.21-20.3,9.82-30.28,2.33-6.45,1.96-10.95-4.46-15.2-10.8-7.15-20.8-15.48-31.36-23-6.61-4.71-7.92-10.03-3.8-17.02,11.64-19.74,23.22-39.49,36.68-58.1,5.15-7.12,10.27-8.11,17.65-3.53,11.82,7.34,23.91,14.25,36.04,21.07,7.09,3.99,7.59,8.15,2.06,14.06-8.19,8.74-15.62,18.2-24.02,26.73-5.23,5.31-4.13,8.76,.94,12.93,6.41,5.28,12.52,10.94,18.74,16.46,3.68,3.27,4.04,6.56,.24,10.13-17.7,16.64-35.35,33.33-53.04,49.98-.94,.89-2.12,1.53-3.08,2.21Z\"/>","fairy":"<circle fill=\"#e18ce1\" cx=\"128\" cy=\"128\" r=\"128\"/><path fill=\"#fff\" d=\"M168.54,132.61c3.77,6.74,7.72,12.55,9.17,19.5,2.22,10.62-1.21,14.8-11.95,15.74-7.15,.63-10.23,.58-23.99-6.3-.72,12.68,10.42,26.54,7.56,40.13-.3,1.42-2.11,1.88-3.1,.81-10.72-11.57-11.42-26.96-18.23-40.53-6.59,13.45-7.73,28.65-17.98,40.71-.94,1.1-2.77,.71-3.11-.7-3.31-13.62,7.93-26.82,7.68-39.39-4.82,3.96-16,5.77-22.74,5.34-12.59-.8-15.97-5-13.2-17.17,1.5-6.62,5.97-11.71,8.57-18.3-7.97-5.14-16.04-9.4-21.66-17.39-10.4-14.76-10.88-31.08-9.17-47.77,.67-6.56,6.56-8.82,12.68-9,22.43-.65,42.31,4.56,55.63,24.61q.69,1.04,3.11,5.35,2.46-3.75,3.18-4.86c13.12-20.16,32.89-25.76,55.37-25.1,9.84,.29,13.27,4.35,13.86,14.36,.99,16.72-1.38,32.29-12.39,45.93-5.05,6.25-12.22,8.98-19.28,14.02Z\"/><path fill=\"#e291e2\" d=\"M128.01,97.38c3.43,10.49,11.99,18.83,23.75,18.89-4.1,10.72-12.19,14.1-21.2,14.91-10.89,.98-20.09-2.8-26.74-14.02,11.02-1.56,20.04-8.95,24.18-19.79Z\"/>","fighting":"<circle fill=\"#e49021\" cx=\"128\" cy=\"128\" r=\"128\"/><path fill=\"#fff\" d=\"M187.37,155.46c.55,.18,.95,.71,1.01,1.29,1.74,16.71-.12,19.56-15.05,25.28-18.32,7.01-37.09,12.47-56.28,16.61-6.49,1.4-12.82,1.23-18.55-1.56-9.55-4.66-18.43-10.58-26.79-17.18-2.9-2.29-4.35-5.25-4.45-8.92-.16-5.96,.32-11.94,0-17.9-.29-5.3,1.7-8.26,7.01-8.25,13.98,.02,27.96,0,41.94,.07,2.73,.01,5.69,.39,6.17,3.76,.85,6.07,5.16,6,9.64,6,14.98-.02,29.96-.02,44.94,.04,3.34,.01,6.74-.4,10.4,.77Z\"/><path fill=\"#fff\" d=\"M66.79,97c0-7.65-.17-15.31,.05-22.96,.23-8.25,1.29-9.16,9.29-9.49,12.35-.52,13.55,.62,13.57,13.24,.03,14.31,.11,28.62-.05,42.92-.1,8.6-2.14,10.41-10.71,10.59-9.27,.18-11.82-1.83-12.08-10.34-.24-7.98-.05-15.97-.05-23.96,0,0-.01,0-.02,0Z\"/><path fill=\"#fff\" d=\"M162.9,146.55c-6.65,0-13.31-.04-19.96,.01-6.12,.05-9.28-2.95-9.44-9.04-.09-3.32-.23-6.66,0-9.97,.36-5.39,3.15-8.73,8.81-8.76,13.64-.08,27.28,.01,40.91-.04,4.22-.02,5.58,2.08,6.03,6.1,2.32,20.72,1.48,21.77-19.36,21.77-2.33,0-4.66,0-6.99,0,0-.02,0-.05,0-.07Z\"/><path fill=\"#fff\" d=\"M122.79,98.15c0,7.98,.25,15.96-.07,23.93-.3,7.37-2.74,9.14-11.13,9.21-8.7,.07-11.35-1.5-11.5-8.78-.36-16.61-.09-33.23-.15-49.85-.02-5.98,3.01-8.41,8.72-8.11,1.33,.07,2.66-.04,3.99,0,8.85,.21,9.91,1.08,10.13,9.67,.2,7.97,.04,15.95,.04,23.93,0,0-.02,0-.03,0Z\"/><path fill=\"#fff\" d=\"M189.2,87.77c0,5.64,0,11.27,0,16.91,0,4.05-1.9,6.18-6.11,5.93-.66-.04-1.33,0-1.99,.03q-14.85,.61-14.86-14.08c0-7.3-.1-14.6,.04-21.89,.17-9.07,1.26-10.04,10.57-10.2,1.66-.03,3.32,.07,4.97,.05,4.94-.05,7.33,2.49,7.37,7.32,.04,5.31,0,10.61,0,15.92Z\"/><path fill=\"#fff\" d=\"M156.1,88.09c0,5.33-.1,10.66,.03,15.99,.12,4.68-2.05,6.48-6.64,6.51-19.31,.12-16.06,.62-16.34-14.77-.14-7.66,.11-15.33,.03-22.99-.06-5.9,2.76-8.56,8.59-8.29,2.33,.11,4.66,.06,6.99,.05,5.03-.01,7.23,2.72,7.26,7.5,.03,5.33,0,10.66,0,15.99h.06Z\"/>","fire":"<circle fill=\"#e4613e\" cx=\"128\" cy=\"128\" r=\"128\"/><path fill=\"#fff\" d=\"M101.14,196.71c-18.04-4.97-32.15-33.23-26.12-56.44,2.47-9.5,6.73-18.04,13.15-25.42,5.67-6.52,11.56-12.86,17.44-19.19,16.45-17.72,16.84-21.84,3.67-40.92,16.66-6.33,35.79,6.81,36.26,24.87,.23,8.92-3.12,16.84-6.55,24.78-2.86,6.61-3.94,13.22,1.46,21.46,.78-7.78,.25-13.98,5.16-19.12,5.44-5.7,9.99-7.61,18.26-5.74-8,6.58-6.97,10.9,6.52,29.92,12.34,17.41,15.7,32.35,6.6,48.54-9.75,17.35-30.86,27.88-50.31,24.97,1.32-2.15,5-3.89,7.7-5.48,12.95-7.61,14.91-19.54,4.94-30.71-3.31-3.71-7.06-7.04-10.68-10.47-14.71-13.95-16.33-16.83-20.12-36.25-20.01,10.96-23.87,46.75-7.38,75.23Z\"/>","flying":"<circle fill=\"#74aad0\" cx=\"128\" cy=\"128\" r=\"128\"/><path fill=\"#fff\" d=\"M151.78,148.43c-15.72,18.66-36.72,18.54-56.82,20.49-.88,.09-1.72,.46-2.36,1.09-10.27,10.09-15.84,24.13-28,33.64-.55,.43-1.39,.2-1.63-.45-2.25-6.09-1.57-11.4-.81-16.39,4.26-28.02,11.13-55.4,21.88-81.66,5.83-14.23,15.13-24.51,31.59-27.2,24.36-3.98,47.33-13.03,70.58-20.97,2.96-1.01,6.05-1.96,9.13-.76,.97,.38,1.74,1.18,2.02,2.18,.91,3.25-.92,5.89-2.54,8.68-13.5,23.36-34.25,37.51-58.92,46.81-3.54,1.33-7.9,2.81-10.91,5.61-.32,.3-.08,.86,.35,.88,17.48,.74,32.76-5.7,48.82-9.24,.55-.12,1.04,.45,.84,.98-7.05,17.94-23.79,26.99-39.9,32.15-6.3,2.02-9.35,2.46-20.33,3.46-.37,.03-.41,.49-.11,.57,15.87,4,21.78-.55,36.34-1.55,.83-.06,1.3,1.02,.77,1.66Z\"/>","ghost":"<circle fill=\"#6f4570\" cx=\"128\" cy=\"128\" r=\"128\"/><path fill=\"#fff\" d=\"M181.32,129.18c17.5-2.25,26.94,4.31,29.63,19.92,.35,2.02,.89,4.09-.95,5.51-1.82,1.4-3.97,.9-5.49-.53-3.43-3.21-6.15-2.85-9.23,.65-11.43,13.03-11.49,12.97-25.61,3.67-7.23,9.3-13.4,19.53-22.16,27.76-15.24,14.32-23.93,14.36-39.14-.12-8.5-8.1-14.85-17.81-21.86-27.6-1.34,.61-2.63,.92-3.57,1.67-11.08,8.95-12.51,8.86-20.73-3.02-3.01-4.34-5.61-7.7-10.89-2.9-1.55,1.41-3.7,1.79-5.46,.27-1.77-1.53-1.11-3.56-.73-5.56,2.91-15.53,11.6-21.56,29.88-19.95-1.56-21.61,3.65-40.79,21.04-55.13,10.2-8.4,21.88-12.33,35.08-11.62,30.09,1.6,48.84,26.36,50.2,66.98Z\"/><path fill=\"#785279\" d=\"M97.2,100.05c-.05-3.76,.1-7.72,4.2-9.25,4.1-1.54,6.94,1.39,9.36,4.16,5.03,5.76,7.53,12.61,6.59,20.2-.85,6.86-5.98,8.61-11.33,4.15-5.97-4.98-8.66-11.56-8.82-19.25Z\"/><path fill=\"#785279\" d=\"M158.77,100.6c-.26,7.31-2.96,13.47-8.42,18.46-2.1,1.92-4.32,3.3-7.12,2.5-3.33-.96-4.53-3.86-4.71-6.94-.42-7.24,1.69-13.82,6.43-19.33,2.59-3.02,5.62-6.37,10.14-4.27,3.89,1.81,3.8,5.86,3.69,9.59Z\"/>","grass":"<circle fill=\"#439837\" cx=\"128\" cy=\"128\" r=\"128\"/><path fill=\"#fff\" d=\"M194.3,86.12c2.2-2.13,1.76,4.2,1.52,6.15-4.07,32.61-8.97,65.08-16.15,97.16-1.92,8.61-3.33,9.71-12.1,9.84-9.68,.14-19.35,.06-28.95,.04-1.7,0-2.85-1.73-2.2-3.3,15.94-38.11,37.34-90.03,57.88-109.89Z\"/><path fill=\"#fff\" d=\"M121.47,180.64c-.83-23.74,2.05-37.16,5.01-68.66,.12-1.32,.59-2.57,1.15-3.77,3.53-7.48,17.34-36.24,25.36-46.17,1.68-2.08,5.01-.95,5.18,1.71,.11,1.78,.04,3.44-.03,5.22-.89,20.31-3.29,40.49-6.19,60.6-.56,3.86-2.22,7.68-3.97,11.23-5.73,11.62,1.08-2.28-17.76,34.57-1.19,2.34-2.12,5.3-4.33,6.98-1.8,1.37-4.34,.55-4.42-1.7Z\"/><path fill=\"#fff\" d=\"M116.82,86.12c2.2-2.13,1.76,4.2,1.52,6.15-4.07,32.61-8.97,65.08-16.15,97.16-1.92,8.61-3.33,9.71-12.1,9.84-9.68,.14-19.35,.06-28.95,.04-1.7,0-2.85-1.73-2.2-3.3,15.94-38.11,37.34-90.03,57.88-109.89Z\"/>","ground":"<circle fill=\"#a4733c\" cx=\"128\" cy=\"128\" r=\"128\"/><path fill=\"#fff\" d=\"M126.23,184.84c-2.52-.77-6.4-1.66-10.06-3.12-16.93-6.77-33.8-13.68-50.68-20.59-1.52-.62-2.94-1.54-4.37-2.37-7.42-4.3-7.7-9.21-.2-12.86,20.58-10.01,41.94-18.12,63.61-25.43,2.66-.9,5.15-.6,7.77,.29,21.03,7.14,41.73,15.08,61.78,24.65,.9,.43,1.91,.68,2.71,1.23,4.81,3.35,4.98,8.12-.08,11.12-4.54,2.69-9.52,4.66-14.4,6.73-16.16,6.86-32.34,13.7-49,19.3-1.91,.64-3.72,1.37-7.09,1.04Z\"/><path fill=\"#fff\" d=\"M127.56,209.93c-4.2,0-16.12-4.16-23.83-7.01-14.62-5.41-29.03-11.48-43.23-17.96-.67-.3-3.56-1.99-5.19-2.94-5.04-2.9-5.41-3.74-2.57-9.25,1.9-3.68,2.7-3.31,7.75-.99,16.01,7.32,32.38,13.67,48.71,20.15s21.09,6.87,37.52,.04c15.91-6.61,31.68-13.54,47.8-19.73,4.87-1.87,6.88-3.86,9.14,1.33,1.81,4.15,3.83,5.53-3.76,8.84-16.74,7.31-33.07,15.45-50.36,21.36-7.2,2.46-17.23,6.15-21.98,6.15Z\"/><path fill=\"#fff\" d=\"M93.59,71.19q0,14.24-14.1,14.23c-1.33,0-2.65,.02-3.98-.02-8.78-.28-9.26-.78-9.52-9.97q-.51-18.04,17.68-17.63c9.44,.22,9.76,.54,9.92,10.4,.02,.99,0,1.99,0,2.98Z\"/><path fill=\"#fff\" d=\"M185.3,87.72c-.14,10.17-.34,10.34-11.99,10.25-10-.08-10.24-.37-10.14-12.06,.09-10.18,.35-10.41,11.95-10.24,10.14,.15,10.34,.38,10.18,12.05Z\"/><path fill=\"#fff\" d=\"M119.38,99.54c.04,8.09-1.04,9.17-9.13,9.18-8.19,0-9.46-1.21-9.42-8.99,.04-7.6,.99-8.41,9.78-8.36,8.16,.05,8.74,.59,8.78,8.16Z\"/>","ice":"<circle fill=\"#47c8c8\" cx=\"128\" cy=\"128\" r=\"128\"/><path fill=\"#fbfdfd\" d=\"M110.36,60.61c6.05-5.88,11.4-11.09,17.77-17.29,5.97,6.13,11.17,11.47,17.14,17.59-4.92,5.79-9.31,10.96-14.74,17.36,12.8,7.44,26.4,16.32,40.07,24.27v-23.26h24.01c0,7.81,.09,16.68,.09,25.33-21.7,0-5.65,.26-22.24,.26,0,15.36,.44,31.53,.44,47.51h21.79v24.18h-23.94v-21.88c-13.22,7.56-27.06,15.34-40.38,22.95,5.13,5.9,9.4,10.79,14.9,17.11-5.37,5.66-10.66,11.23-17.36,18.29-5.96-6.39-11.21-12.02-17.12-18.36,4.98-5.7,9.44-10.8,14.84-16.97-13.25-7.61-27-15.35-40.37-23.03v22.22h-24.05v-24.46h22.03c0-15.56-.08-32.89-.08-48.86l-22.05-.08v-24.22h24.22c0,21.72,0,2.88,0,21.24,13.09-7.41,26.69-14.32,40.16-21.95-5.03-5.96-9.38-11.12-15.15-17.95Z\"/><path fill=\"#64cfcf\" d=\"M96.46,140.79v-32.06c12.55-7.16,12.55-6.81,27.27-15.03l6.03,7.93c-22.64,12.82,.71-.29-22.64,12.82v26.34h-10.66Z\"/>","normal":"<circle fill=\"#828282\" cx=\"128\" cy=\"128\" r=\"128\"/><path fill=\"#fff\" d=\"M129.76,204.09c-52.17,.13-86.62-49.01-69.05-96.43,1.58-4.26,2.06-8.18,.3-12.54-4.35-10.76-2.11-20.35,6.4-28.13,8.6-7.86,18.65-8.56,28.73-3.56,4.11,2.04,7.65,1.76,11.48,.67,13.45-3.84,26.89-3.86,40.31-.09,5.01,1.41,9.29,.9,14.31-1.24,9.79-4.16,19.59-3.35,27.74,4.64,8.34,8.17,9.92,17.82,5.48,28.33-1.7,4.02-1.86,7.6-.29,11.52,13.45,33.52-1.47,71.64-33.35,88.74-10.47,5.62-21.72,8.21-32.05,8.08Z\"/><path fill=\"#828282\" d=\"M77.28,133.16c-1.34-26.26,21.93-51.19,50.24-51.09,28.36,.09,50.55,22.02,51.35,50.13,.68,24.05-19.28,50.72-50.39,51.16-27.94,.4-51.07-22.27-51.2-50.2Z\"/>","poison":"<circle fill=\"#9354cb\" cx=\"128\" cy=\"128\" r=\"128\"/><circle fill=\"#fff\" cx=\"159.37\" cy=\"123.2\" r=\"16.8\"/><circle fill=\"#fff\" cx=\"102.45\" cy=\"86.6\" r=\"28.2\"/><path fill=\"#fff\" d=\"M197.45,191.55c2.36-1.5,3.12-3.08,3.28-4.91,.05-.38,.08-.77,.08-1.18,0-.27-.03-.52-.06-.76-.16-2.7-1.26-4.54-8.23-6.81-1.21-.39-2.54-.78-3.97-1.17-7.9-2.37-15.56-3.78-24.24-4.53-3.43-.44-6.99-.84-10.63-1.18-1.71-.52-2.31-1.28-2.72-2.44-.55-2.95-1.65-5.7-3.19-8.15-3.79-6.49-9.84-10.25-17.82-10.82-.49-.04-.98-.07-1.48-.08-.04,0-.08,0-.12,0-.03,0-.05,0-.08,0-.09,0-.18,0-.27,0-.27,0-.53,.01-.8,.02-9.24,.17-16.18,4.64-19.99,12.7-.62,1.22-1.15,2.49-1.55,3.82-.93,2.47-1.59,3.97-3.63,4.86-4.92,.42-9.65,.95-14.1,1.57-4.28,.46-8.51,1.21-12.7,2.17-5.5,1.14-10.17,2.43-13.73,3.8-.53,.19-1.04,.4-1.54,.63-4.26,1.9-4.63,3.67-4.66,5.88-.02,.26-.05,.52-.04,.8,0,.16,.03,.31,.04,.47,.06,2.53,.72,4.56,5.71,6.64,.94,.41,1.93,.76,2.94,1.08,1.65,.55,3.48,1.08,5.48,1.59,8.46,2.29,17.02,3.57,25.62,4.37,10.22,1.13,21.52,1.79,32.87,1.8,0,0,0,0,.01,0,0,0,0,0,0,0,.03,0,.06,0,.09,0,10.47,0,20.99-.59,30.65-1.59,10.15-.84,20.2-2.3,30.08-5.18,.46-.13,.91-.26,1.35-.39,.09-.03,.17-.05,.26-.08,2.29-.71,4.79-1.49,6.76-2.73,.08-.05,.16-.1,.25-.15,.02-.02,.05-.03,.07-.05Z\"/>","psychic":"<circle fill=\"#e96c8c\" cx=\"128\" cy=\"128\" r=\"128\"/><path fill=\"#fff\" d=\"M197.45,99.74c.29,5.25-2.01,9.75-4.39,14.13-5,9.21-4.92,18.19-.37,27.66,10.23,21.3,3.62,33.41-19.59,35.57-11.16,1.04-19.22,5.65-25.41,15.11-11.71,17.9-27.71,17.77-39.56-.25-5.98-9.09-13.76-13.73-24.55-14.79-24.07-2.36-30.54-13.99-20.14-35.92,4.32-9.12,4.22-17.7-.14-26.79-10.21-21.31-3.62-33.41,19.59-35.57,11.15-1.04,19.23-5.65,25.41-15.11,11.49-17.58,27.83-17.94,38.95-.54,7.09,11.09,16.73,15.07,29.13,16.03,13.9,1.08,21.17,8.75,21.06,20.48Z\"/><path fill=\"#e96c8d\" d=\"M174.57,154.66c-20.78,1.82-35.45,9.96-46.37,26.9-11.55-16.67-26-25.21-45.7-26.81,6.99-17.87,8.75-34.96-.85-53,19.9-2.33,34.97-10.36,46.4-26.96,11.3,16.3,25.74,24.84,45.44,26.44-6.94,17.88-8.77,34.96,1.08,53.42Z\"/>","rock":"<circle fill=\"#a9a481\" cx=\"128\" cy=\"128\" r=\"128\"/><path fill=\"#fff\" d=\"M199.67,98.23l-19.62-19.62,3.55,23.38c.03,.19-.2,.31-.34,.17l-29.18-29.18c-.14-.14-.02-.37,.17-.34l23.38,3.55-19.87-19.87s-.09-.06-.14-.06h-59.26c-.05,0-.1,.02-.14,.06l-41.9,41.9s-.06,.09-.06,.14v59.26c0,.05,.02,.1,.06,.14l19.53,19.53-9.71-45.05c-.04-.19,.2-.32,.34-.18l57.77,57.77c.14,.14,.01,.38-.18,.34l-45.05-9.71,19.21,19.21s.09,.06,.14,.06h59.26c.05,0,.1-.02,.14-.06l19.24-19.24-45.14,9.75c-.19,.04-.32-.2-.18-.34l57.76-57.76c.14-.14,.38-.01,.34,.18l-9.75,45.14,19.64-19.64s.06-.09,.06-.14v-59.26c0-.05-.02-.1-.06-.14Z\"/>","steel":"<circle fill=\"#74b0cb\" cx=\"128\" cy=\"128\" r=\"128\"/><path fill=\"#fff\" d=\"M117.24,93.22c2.6,13.41,4.78,24.66,7.26,37.43-22.73,6.49-44.68,12.75-69.68,19.88,9.84-30.35,18.66-57.52,27.59-85.05h89.4c.95,2.01,2.13,4.49,3.84,8.09-19.64,6.61-38.27,12.88-58.41,19.65Z\"/><path fill=\"#fff\" d=\"M200.8,150.53c-14.91,10.77-28.49,20.58-44.8,32.36-7.75-27.52-14.82-52.63-22.38-79.5,16.5-5.26,30.78-9.82,46.8-14.93,6.96,21.21,13.5,41.12,20.38,62.07Z\"/><path fill=\"#fff\" d=\"M143.47,191.59c-5.22,3.98-10.06,7.68-15.77,12.03-19.71-14.37-38.84-28.32-61.19-44.61,22.17-6.41,40.89-11.82,61.12-17.66,5.46,17.32,10.48,33.22,15.85,50.24Z\"/><circle fill=\"#77b2cb\" cx=\"97.05\" cy=\"80.81\" r=\"7.64\"/><circle fill=\"#77b2cb\" cx=\"161.67\" cy=\"116.95\" r=\"10.41\"/>","water":"<circle fill=\"#3099e1\" cx=\"128\" cy=\"128\" r=\"128\"/><path fill=\"#fff\" d=\"M128.35,206.24c-34.24,.13-56.14-32.39-43.8-64.78,4.18-10.98,10.78-20.6,16.8-30.49,9.43-15.5,15.71-32.11,19.91-49.63,.54-2.25,.94-4.58,1.88-6.66,.93-2.07,2.13-4.29,5.02-4.17,2.83,.12,3.84,2.41,4.87,4.44,.74,1.45,1.09,3.12,1.41,4.73,4.46,22.12,13.91,42.06,26.04,60.93,7.77,12.08,14.46,24.58,14.13,39.75-.57,26.48-19.82,45.79-46.27,45.89Z\"/><path fill=\"#3a9de2\" d=\"M129.16,193.51c-13.8-1.05-25.57-4.53-32.92-16.53-1.35-2.2-3.13-5.02-1.71-7.44,1.88-3.21,4.73-.71,7.03,.08,17.88,6.19,35.7,6.17,53.52-.27,2.06-.75,4.33-2.73,6.36-.43,1.92,2.18,.05,4.41-.92,6.39-6.52,13.39-18.86,16.49-31.35,18.19Z\"/>"};
  const ICON_PX = 64;
  let typeIcons = load('typeIcons', true);
  const typeImgs = {};
  const iconCache = new Map(); // key -> { canvas, url, pix }

  // Item sprites of the main games (32 px pixel art from PokéSprite,
  // msikma.github.io/pokesprite; the images are © Nintendo, Creatures and
  // GAME FREAK) for the held items and the level-up stats: Potencia (X
  // Attack), Reflejos (Metronome), Aprendizaje (Exp. Share), Carrera
  // (Bicycle), Coraza (Protective Pads), Vigor (HP Up), Síntesis (Energy
  // Root), Imán (Magnet) and Baya Zidra (Sitrus Berry). Their cards use icons
  // that the menus use too ('book', 'fist'...), so those stats get keys of
  // their own, 'psmod-<stat>', drawn as the game's icon whenever these
  // sprites are off.
  const ITEM_PNG = {"psmod-xp":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABQ0lEQVRYw+1Vuw2DMBRkFFZhhYxBmzKlV6BMSckKlJRZgZI1Xjiks06WA8HOp/GTngS2eHc+7j1XVYkSJTKirmtD/gUA62adzfP1OyRQFMVfARztZ6tEgObSGItoDuPgn9tbazGgbJVYdJpmc+6+kQGw65yNj9E/I0GCRM6qdEhiWcyDqyIKzOeYWlkewccA1eIqK9axj9zUWJUCYaj2EXPypHoalVUV2UisBADe96PfywKH7Hr68BeEJtX30BPZp8caAGBAgqtZvQrijWQVWIzG02J6+j3PqHeSCbDdCK4GDAmoIffmwynp2fPImAE1dSaEqiX1vv5TJUFisdSBRBI8zCkC7GMtRBI6ATXDjkCN2IR8i4D2sbZVCB6bdnyHiskE9MO9PLpDsnyQOsv5DVXMnoiptyhv0J+CxxSsSpQosRNPBzpNvwWvu1wAAAAASUVORK5CYII=","psmod-mag":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA10lEQVRYw+2VMQ6GIAxGPUqvwRUYGbmGV2Fk/MeOroye6/unKjTiYiUx4Us6YfoeWGVZZmZmvhwigq6hYC6M9EtNvS7SA1+JDINz4e5pvAr30Tel17mwjQQRATkB+dythmsJee6xQA2X6sHNBa7gq3MNsP4ENVzWn733EIBSDngtIM3v5sNEQKoWkMbOrUgZSBmHhD4hc4EruJSeCXOBO7hzqx28lvDRg0NoGhIRYtyw7ye8FjD/CemGIiBVCwy5lHoCQ29ELTAMrucjxm08/G4+ZmZmPpU/ubLZMafRC4UAAAAASUVORK5CYII=","psmod-atk":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABFElEQVRYw+2WvQ2DMBCFGcUrsAZjZIWUKVmBkjJl1sgItCldZgWSZ+WhxwklSD5cRH7SCcc4fO/OP9A0VVVVDgohzBrF4eMwrKKYEcLjNC3wpPhYjBSBx/6SQqXVOBR+P51TqGjI1YAuMgCf4y0BLBy/1YCLCULxUIAR166b+7ZN803xHsbiPk1mGcCfAUKoCYBxxX20WRVXA98ytyYwhmBOQWq/10mWAX2ghWrGNKvjs+Bafl63TLAPcI7JznyrAsyW5dfMtfzod4Pb0v/KnCZc9r5CCKcB9Fso264Hz1b2qxX+adPEYQYYCud2pAGeE64G9Fi1cM413wXcLe4vHQXaANS99HtNFP0KsrDin11VVX+tF/3loDmoEh3fAAAAAElFTkSuQmCC","psmod-def":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABWElEQVRYw+2XsQ2DQAxFGYUVWIMyJSUlK1CyAiUlJSVtypSUtBkhKxD9Uz5yLiB8hiiKBJKVo+G9sw/HREmSRL+M6BQ4Bf5OII7jaS2+KkDIcH+46K7jVDW9i7xoXVgk1HCCCSvKykXdtC54HyqhhvtgXOM4TF3fu/v0ks0RIhEM5wUwghIyE4cI4CGosw8nEL+8ZCZCS6HePaHYpQTvLYNagOn1wUy99TCqS4BdEcJMcM17mYVDBPwsUAIg/wASHNoTNt8CNJolCe5agqv69tagNBIqgTSrPyTyvHwDs1FhHZIFdR+ghASsgWVsSag6IdIKAUq4NL/gTTe4tS8wi22UQv1fwLpKEcClgMzInKUjBORbgQciAwRLiblcoiFtlcE0DxDEXUNgCa7pB2a4fxB9uHZIMQnIA0e4dToyl4ASWFvHMfNQKiekPfBdU/GeQfT8LjgFZDwBMKWRJcPe8hQAAAAASUVORK5CYII=","psmod-spd":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABSklEQVRYw+2XzRGCMBCFUxIlUEpKsKwcc/RoSXQQZxmePp8LmgRGDxx2wAQ2X/bnBUMpJfzSwglwAqxN5JzDMAzFLMZY7HevVQFg4XRNBSAwOLR5Hdsd4CUKi2FBjEca2x1gmqY5CpdxLFNKDwA2AABmDagKIMpCBoB7AwKYWXSgvNRUFyGbOVuLwJYdAmDRQET0ma3CbAbw0oGC5NR8KsZmgHn3S841BQzCkeHC7ALQVkMquBUZhiOiQtakhF6FZyfUDJBp91wP1QAqRC6MLA5TCLtW6wC/zPmHPHO4tQYAccvPZ5qFCIKDYtSOYDHi97QgmwD0QOJ7rRPMaWd0A7BzD4DHD4mAthvyinE9srkzumuAheTteKaF9GDCFQBNXeC1IDtUHdAo8e67dcBz6Flc+V7oBvAcfgPRfRaoAvZ8oJ7/C06AvwS4AyD4HAuKbZ+SAAAAAElFTkSuQmCC","luckyegg":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAjUlEQVRYw+2WMQrAIAwAfYqPd3T0Gxmz5gkdu7ZTRERLBZPQkoPMdxW0CcFxnC8TY7zaURfTcdYBJJ2IXqwa8SQXj2jlzCzCPCDlsjfizdH/N2BVDki2ASkXuwD+epOAVr49AJCW5CK3YBQBSPJyDki5VOFIyiP6FM+k4vL+NzwTq+0E/SKiuow4jrObG40di+/hxTMKAAAAAElFTkSuQmCC","leftovers":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA5ElEQVRYw+1WMQ7CMAzsU/Kejhk7duQLfUJXRp7AyDcY+UJHRlajs3qRyYpspOKTTmldqb4kzsXDkEgkvkQpRcCfJV/OgQI4W/KyVqWNuSbfapXXPOtIAYyTLiJs8mUc5TZNHwLwjribCPxQ1pOSInpyZXwFALsIS/ctaBW/L79NCHIL3IsQe37frk0IiRjrIeQYPuWhSclwM+pFhDvh/wqwNUABHEOsGLAztyJIVx+ACTG5FcNnfHcVgDPfHLFbDcR5R7gaEZLAfnk30JoRdzcjNiC9HasVRzUmfVMS0owkEofGG3HTovP6qiqPAAAAAElFTkSuQmCC","quickclaw":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAoElEQVRYw+2UwQ2AMAhFO0rXcA3HcAVXcQTX8OjRa1dRMaGBhqgHgcTwE9Jb34PDTykSifwlOecdxwVclqGOmQQF72Vjoy6BcAaGnK/6JRgcQ8Aw69TrCLyFqwg8wRE8j901nwrAZ/C5CxwFJLgE1jv9DVy1hNj2DVy9/dj2Atyk7bBozOFVoNnevOtd4PT85meXBMzhVMAFTiVSJBJRzAET3JI2RCR/5wAAAABJRU5ErkJggg==","shellbell":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABMUlEQVRYw+2VvQ2DMBCFGYV5WCkjsEJKRmCFlJS0lJSUaS95Rg8O7CTCHKnupBPItvzdv4vCxcXF5QK51bVUVSVlWQa9FEYIQYCnzpjDqPfuIeM4Bv3mccqww2BARAah9M8prDVtG9YRdvynjMBeNlyDAYB2b8+nvg+KPUQCEHxTRmSlQcMJJpCKKOCLc0wHz2totgG8bAvepoBpwBkYkYrCYQNW7+ew7/MPIVgbiDWmglBD72O43sMaokLvOQ+yiw+Xsdi0ATF8iLridO/jgrm95Adcwv8Cb5plJpgMHVY5DdF9r73m6GWtmBjAS2kEPF29j+H44lynCvB0CvSjonueikLj/myAiOns1x5+UuzTe9SA6QvIduSsT+kypq3h+4LUI1gLwX99+/dauLi4ZMoLMW7ROSvC2gcAAAAASUVORK5CYII=","assaultvest":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA2klEQVRYw+1Wyw3DIAzNKKzQY45ce2SEztRRukZnovLhRe6rjShQKZVsyULx9wEPyLaFhIScVVJKlfWXeR9FnqW86f2yNwvCJ3Gc+zUIr1DOud6upVqzFLv4PeBDqyDJGggAeKoBIHeouQbx2PNRTBp4IOBDrORNNbf4IEVbAMQ/vO+9hNQroZU5s2z2XBhbIiMU30vIZ3FgBMASDpwCABfvAQDb9BHU+6mbWQA4ZpqMDECPGhTbOC4ATPMAJ8Fq5tlwApbehvwu6JeQ7/9ljVs/Gz32kJCQv5AXZ1NM+W92GVIAAAAASUVORK5CYII=","amuletcoin":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA7ElEQVRYw+2WsQ2DMBBFGYPSLWVGyBpZI2NkjZQp02YEr5ARKNNedJhDx+VwLGPj5r50okDiv/9tneg6k8m0Q+NpAJom5hpME/PUd0XlnGsHgebgHeDz1ffTHAKAhjTXSwe8BQ5RBQDNnrcB3o+QHp+HQZA5Gk8znlWIqgDwuYdRILQWigEs6QlAQGwBFINY0nvWwpw+1kB5AIJAcxof2qkGsLp8PPkMEEtfBIIWzuribdSvmXOILJAfAJGe1x8DyG4DP06LR0Kk1F8EABeNBJDpUyGyjwEh+ArWzP+d9+7LKCel7qZ/TCaTKVVfv7+PZJ3HKiwAAAAASUVORK5CYII=","psmod-heal":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA9klEQVRYw+2WsQ2DQAxFGeVWSEmZljJlRqBlhJRZJSWrsEJKVoD4JEfOlx1F0b+ksaUvQKD7774PuK7LysoiVyllE/3N+HQZqn4CoaaicTlXYznqeTMINd3W8SlMoBmANb7PxyoLoQnQzXWG16kPAWwSVABrvMzDi6EneUaep0Bgrz0ITEHui6gAXtye1kf/aQDvFlyUhppTWiADRLP2YhdTFQXC679NI4KjtQFbELUDr9X8Nh3aJBAlgrOnLUQZ9BMQNKcB6KKyIDZyNJboad8BhcCZoaGaUl/DKAnP3AI02ZTYFOy7jv1uuhGxfzpPuSHNyvqmdouowMYz8wheAAAAAElFTkSuQmCC","psmod-cd":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAw0lEQVRYw2NgGAWjYBSQARQUFP4jY7pbvubqOzCu3vvsf9ScLfRzBMgixyyv/1HdWWA8aBxAN0eALIFZDsZQy+niAGTf7333Ds6mWyggOwAEBo0DkKOBpo5Ajn8UB9AjFNBTPz4H0MQRg84ByLmALukAOf5BRTDIASCaLqEAthxoIMgyEIbVASAMEwNhmjoA5mtCmCa5AeaA7qPP8GLk2pFmDsDmEGQxmtSO6A7AhunmAEJRAKJpVhISi0cbrKNgFJAKAPh0MZETMb1dAAAAAElFTkSuQmCC","choiceband":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABRUlEQVRYw+2WMQ6DMAxFexTOxMjI2JVjcAXGHoErMDKyMnbMyJryLX1krAgqapAqEcmKAOH//OMEHo973ONfR5ZlUcfl4m3breIyCAhNU4whRBEuy+cSl7hCAARFOWuwU12hGAV4DVHOp0KwalSr+4HOaBfy/OUDodcWAhTHzCVgxQwXACvKytmAnIchLCDWqcMQVlhXymp1I+pl0TkOAbCx9DazAFY8BXEIYEuckbq/5cIh63VSmyR14PC9n7cfXkZTca/vJdON6tb5bRtj04Rlb9tjNrUtKe7iAMSR9F3XcRzD6pCxAbe0uIsDSArxqe8FgCBjUUjgOSCrqlsAXB2QHpjF6YIAVJXc1xAAQLg7gOogagEovAXhdvbLB2Z24VsAF/sthIiyB3aW4JTPL7eaNCBBEk14+r/h1jlw+U/pPe7hOT7sLwOyomHazQAAAABJRU5ErkJggg==","choicescarf":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABW0lEQVRYw+2WPY7CMBSEOUquQLnltpSUlFvSUm5JyRU4AiUtJSVX4AiU23oZiy+MLAcQtldaKZZGgjzF37wfJ5lMxjWu/766rguP1Bw8257DfPcTvo+XKP2XPlfLMJsv2hjRhtPVNoLXhxD1tT/38DSma9VMAL/uGTcXSAAZ0HWJ7BXDSBUDDle5gZO1pN+0Q0aimRoVAK5scv0mJsmgFOPXSiheZMDhDBw9B3663FtChaiITFQpOz0VXHK4GxD8Y3PoDRRnn/bc4YJigDjZ06q3DehGL+lQzwXve34byGpwhs7PuQzoWm7oeAZQjbcMONx7zhn3ocMAZVfvubfIwJDIPp36FF79CYix3NR7z4nJVJN3gLJKp54ZcHjRAD7KPj12lBsVD+Cz7N1ADtwEjgE/915uV/H5H4Lz+vVznwM3g/u7IC03qv71Q989Uwc2AwN/VVXB4xrXX69fWb9hvYtzOz8AAAAASUVORK5CYII=","lifeorb":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAnUlEQVRYw2NgGAWjYBSMAjKAgoLCf2yYbhbf2/INK6apQ5Atfub4DCtGdghNLP+299t/EADRIAuPGp6FY3SHUNURMAcgA2TL0R1CVQfALAcZjB4C/4uLwRg5NKgeCsgOgFkEsxxmKTZH0MQByBaiBz2y2PB3wIBHAbIjaJ4I8TmCLtkQV07AZjHNCqIBL4oHRWU0KKrjUTAKRsGwBAAm0ThrhmI/HgAAAABJRU5ErkJggg==","rockyhelmet":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA4klEQVRYw+1WwQ3DIBBjFNboGqzTVViHEfh2lVTX1MQ6QUvDNa+zZCWR0Nk4JkoIDofDcRIxxo15uXgppTHnfK0JNiDifzWhY9biTHMDOmoYYfGU0ovapEk3ZAAihoGaQxMVyrNwK/u1Z3rZAHYqIppsBs+m5ZQBTfxx30niXEQkAkNmBhAxG9A75ZTwWkxKKUNG0WvxZvRN290rfiojr1kuIQ++5YO1QxbHumUDEMNAHq5N9QyaJfArlxNA+XQCo/tRAqfLyO2vHbFvCZicBnzPe6dghmb/CvrnY5bB4XBM4Am5oGo7XIJpRwAAAABJRU5ErkJggg==","focussash":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA6klEQVRYw+2WwQ2DMAxFGSUrsEaPWaUjsAprdJUeOXaFVKH6kWMZ4iom7cGWfAHJ/+HE30yTh8c/RwghIX8i/rzf9tQCUOBu6G8AIJiWpcouCACkNZ4Wyu8e87wnh+gGyOJIqRgVB0DOV4wlzSB4IUkcz+0Btk9SEUncHKBAbDUEbznvipn40XgdjdlZZ4YY1jBx3onc7iHi3HDoZcOZXyouOV3rTpiJ4yupsGaETSAogKZgNbqrkRdoAbhvUAPrAoDBtBaTubjGYMp0YHlZirc2H9+aOPNLxlFyPPy04MdliP1qd4OHh4cm3rhutZSYmiSwAAAAAElFTkSuQmCC","psmod-rgn":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA9ElEQVRYhe2Wyw2DMBBEKSEluKYcaSfHtMCRdjimBdogGktPGlngS5Y9RF5phUHCb/ZnmKZhw/7NSimHezr42Nfqn3WuniLCwfv2qv6eH1WArilwQXXVvdbAb88CAgTD2yzcLgAoZdC9nqf0gZcAEUSe0oTegB45JUibAtx7IG0MWzFpDXglgBKEZsE36R23CNiWZ3wZesct7tFLRLgAHzki9Amg/mHfA15u4aTYYVrzHHEhGWjHC6hgHmmbekSFCCB6be4N5uXwE9B7IwQOmKgE9MPnbO17/By5pxPQGeCWjr+a96v3wgT0apj+v5cGGzYs275rgfmBijbN2AAAAABJRU5ErkJggg==","psmod-hp":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA9ElEQVRYw+2WsQ2DMBREGYU2I6RkDUZImzHSMgIlK1C6zAopKVPSOjlLH50QBgqfo0j+1smALd/Dxh9XVYkS/xZ1Xfs9yc3bsfX93G8KbTIIDNw8mqi5CX0kEAZwNANZAPYkA+BvYE9S8669LrMQq9EnOYSZj93Fe3cP10dKCsEArLUpP0sOMLhhmQFoDcH36JscwL2cn+Yp1AzAgjHapQDzt6COKQuAle7pgxgqG4CZm7IC8JvzfVYA1Lf+HWTPpAAYlJfAzE3yJcD+xuBb5gwBc2kmRA6w5VhvP2km5IwXS0QyAD4LnvkJSc+GPz2UliihiA+FStOaY/V6yQAAAABJRU5ErkJggg=="};
  let itemIcons = load('itemIcons', true);
  const itemImgs = {};
  const statIcons = {}; // 'psmod-<stat>' -> the game's icon
  const gameKey = (key) => statIcons[key] || key;

  function itemIcon(key) {
    if (!itemIcons || !itemImgs[key]) return null;
    let c = iconCache.get(key);
    if (c) return c;
    const img = itemImgs[key];
    if (!img.complete || !img.naturalWidth) return null;
    // The sprites sit small in the middle of 32 px: crop the empty border so
    // they fill the space the game gives its own icon, keeping them square.
    const src = document.createElement('canvas');
    src.width = img.naturalWidth;
    src.height = img.naturalHeight;
    const sctx = src.getContext('2d');
    sctx.drawImage(img, 0, 0);
    const { data } = sctx.getImageData(0, 0, src.width, src.height);
    let x0 = src.width, y0 = src.height, x1 = -1, y1 = -1;
    for (let y = 0; y < src.height; y++) {
      for (let x = 0; x < src.width; x++) {
        if (!data[(y * src.width + x) * 4 + 3]) continue;
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
      }
    }
    if (x1 < 0) return null;
    const w = x1 - x0 + 1, h = y1 - y0 + 1, side = Math.max(w, h);
    const cv = document.createElement('canvas');
    cv.width = cv.height = side;
    cv.getContext('2d').drawImage(src, x0, y0, w, h, Math.floor((side - w) / 2), Math.floor((side - h) / 2), w, h);
    c = { canvas: cv, url: cv.toDataURL(), pix: true };
    iconCache.set(key, c);
    return c;
  }

  function newIcon(key, orig) {
    if (typeof key !== 'string') return null;
    if (ITEM_PNG[key]) return itemIcon(key);
    if (!typeIcons || !(key.startsWith('move:') || key.startsWith('type:'))) return null;
    let c = iconCache.get(key);
    if (c) return c;
    const m = key.startsWith('move:') && NS.Moves.BY_ID[key.slice(5)];
    const img = typeImgs[key.startsWith('type:') ? key.slice(5) : m ? m.type : 'normal'];
    if (!img || !img.complete || !img.naturalWidth) return null;
    const cv = document.createElement('canvas');
    cv.width = cv.height = ICON_PX;
    const ctx = cv.getContext('2d');
    ctx.drawImage(img, 0, 0, ICON_PX, ICON_PX);
    if (m && orig && orig.width === 16) {
      // The badge's dark frame starts at 9,9; without a badge that pixel is
      // inside the coloured circle. (10,10 can be the glyph's own gold.)
      const px = orig.getContext('2d').getImageData(9, 9, 1, 1).data;
      if (px[0] === 0x1b && px[1] === 0x15 && px[2] === 0x28) {
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(orig, 9, 9, 7, 7, 36, 36, 28, 28);
      }
    }
    c = { canvas: cv, url: cv.toDataURL() };
    iconCache.set(key, c);
    return c;
  }

  function setupTypeIcons() {
    for (const [type, body] of Object.entries(TYPE_SVG)) {
      const img = new Image();
      img.onload = () => iconCache.clear();
      img.src = 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="${ICON_PX}" height="${ICON_PX}">${body}</svg>`);
      typeImgs[type] = img;
    }
    for (const [key, src] of Object.entries(ITEM_PNG)) {
      const img = new Image();
      img.onload = () => iconCache.clear();
      img.src = src;
      itemImgs[key] = img;
    }
    for (const st of NS.LevelUp.STATS) {
      const key = 'psmod-' + st.id;
      if (ITEM_PNG[key]) { statIcons[key] = st.icon; st.icon = key; }
    }
    const I = NS.Icons;
    const { canvas, url, html, draw } = I;
    const mine = (key) => { try { return newIcon(key, key.startsWith('move:') ? canvas.call(I, key) : null); } catch { return null; } };
    I.url = function (key, ...rest) {
      const c = mine(key);
      return c ? c.url : url.call(this, gameKey(key), ...rest);
    };
    I.html = function (key, size = 20, cls = '', ...rest) {
      const c = mine(key);
      return c ? `<img class="${c.pix ? 'pix ' : ''}${cls}" src="${c.url}" width="${size}" height="${size}" alt="" draggable="false">`
        : html.call(this, gameKey(key), size, cls, ...rest);
    };
    I.draw = function (ctx, key, x, y, size, ...rest) {
      const c = mine(key);
      if (!c) return draw.call(this, ctx, gameKey(key), x, y, size, ...rest);
      const smooth = ctx.imageSmoothingEnabled;
      ctx.imageSmoothingEnabled = !c.pix;
      ctx.drawImage(c.canvas, x, y, size, size);
      ctx.imageSmoothingEnabled = smooth;
    };
  }

  waitFor(() => NS && NS.Icons && NS.Icons.canvas && NS.Icons.html && NS.Icons.draw && NS.Moves && NS.LevelUp, setupTypeIcons);

  // ------------------------------------------------------- damage meter
  // Each player's own client already counts `player.dmgDealt` (never shown).
  // Clients with the mod piggyback that number on the state message they send
  // the host ({k:'f'} + psm); the host relays the whole table back the same
  // way. Unknown keys are ignored by the game, so unmodded friends are fine.
  // For mates without the mod the host estimates from the hit events ('h')
  // they send it, which is why the host should be someone with the mod.
  const rows = new Map(); // uid -> { dmg, est, live }
  let runPlayer = null, runId = 0, runTime = 0, lastFrame = 0;

  const me = () => (NS.Coop.active ? NS.Coop.local : NS.Game.player) || null;
  const myDmg = () => { const p = me(); return (p && p.dmgDealt) || 0; };
  const inRun = () => !!me() && NS.Game.state !== 'ui';

  function row(uid) {
    let r = rows.get(uid);
    if (!r) rows.set(uid, (r = { dmg: 0, est: 0, live: false }));
    return r;
  }

  function wireTable() {
    const t = { [NS.Net.uid]: [Math.round(myDmg()), 1] };
    for (const [uid, r] of rows) {
      if (uid !== NS.Net.uid) t[uid] = [Math.round(r.live ? r.dmg : r.est), r.live ? 1 : 0];
    }
    return t;
  }

  function setupMeter() {
    const { Net, Coop } = NS;

    const toHost = Net.toHost;
    Net.toHost = function (m) {
      if (m && m.k === 'f') m.psm = Math.round(myDmg());
      return toHost.apply(this, arguments);
    };
    const send = Net.send;
    Net.send = function (uid, m) {
      if (m && m.k === 'f' && Coop.isHost) m.psm = wireTable();
      return send.apply(this, arguments);
    };

    Net.on((from, m) => {
      if (!m || m.k !== 'f' || !Coop.active) return;
      if (Coop.isHost) {
        const r = row(from);
        if (typeof m.psm === 'number') { r.dmg = m.psm; r.live = true; }
        if (Array.isArray(m.ev)) for (const e of m.ev) if (e && e[0] === 'h') r.est += +e[2] || 0;
      } else if (from === Net.hostUid && m.psm && typeof m.psm === 'object') {
        for (const uid in m.psm) {
          if (uid === Net.uid || !Array.isArray(m.psm[uid])) continue;
          const r = row(uid);
          r.dmg = +m.psm[uid][0] || 0;
          r.live = !!m.psm[uid][1];
        }
      }
    });

    buildPanel();
    buildMap();
    buildToasts();
    buildSummary();
    if (wasDiscarded) toast(tr('El navegador había cerrado la pestaña para ahorrar memoria'), '#ffcb3d', tr('Por eso se ha recargado. Alt + L para ver el registro'));
    waitFor(() => NS.Combat && NS.Projectiles && NS.Enemy && NS.Player && NS.EnemyMgr, setupMoveTracking);
    waitFor(() => NS.Rift && NS.Rift.update && NS.EnemyMgr, setupRiftTracking);
    waitFor(() => NS.HUD && NS.HUD.draw && NS.Camera, setupHud);
  }

  // Run clock for DPS: the game's own run time when it exposes it (stops on
  // pause and level-up screens), else our own clock while state is 'playing'.
  function tickClock() {
    const now = performance.now();
    const dt = lastFrame ? Math.min(0.25, (now - lastFrame) / 1000) : 0;
    lastFrame = now;
    const p = me();
    if (p !== runPlayer) { runPlayer = p; runId++; rows.clear(); runTime = 0; onNewRun(); }
    const t = NS.Game.st && NS.Game.st.time;
    if (typeof t === 'number') runTime = t;
    else if (p && NS.Game.state === 'playing') runTime += dt;
    if (p) { trackXp(p); checkAlerts(p); }
    checkRunEnd();
  }

  function entries() {
    const p = me();
    if (!p) return [];
    const list = [{
      name: (NS.Social && NS.Social.me && NS.Social.me.name) || tr('Tú'),
      color: p.tagColor || '#ffd23f',
      dmg: myDmg(),
      exact: true,
      me: true,
      hp: p.hp, maxHp: p.maxHp, dead: !!p.dead,
    }];
    if (NS.Coop.active) {
      for (const m of NS.Coop.mates) {
        if (!m.connected) continue;
        const r = rows.get(m.uid);
        const known = r && (r.live || NS.Coop.isHost);
        const n = (m.pl && m.pl.net) || {};
        list.push({ name: m.name, color: m.color, dmg: known ? (r.live ? r.dmg : r.est) : null, exact: !!(r && r.live), hp: n.hp, maxHp: n.maxHp, dead: !!n.dead });
      }
    }
    return list.sort((a, b) => (b.dmg ?? -1) - (a.dmg ?? -1));
  }

  // ----------------------------------------------------------------- UI
  const fmt = (n) => {
    if (n == null) return '?';
    if (n >= 1e6) return (n / 1e6).toLocaleString(locale(), { maximumFractionDigits: 2 }) + 'M';
    if (n >= 1e5) return (n / 1e3).toLocaleString(locale(), { maximumFractionDigits: 1 }) + 'k';
    return Math.round(n).toLocaleString(locale());
  };
  const clock = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

  let hudLabel = null;
  let panel = null, body = null, fovLabel = null, timeLabel = null, infoEl = null, alertsBtn = null, buffsEl = null;
  let showBuffs = load('showBuffs', false);
  let showMoves = load('showMoves', false);
  let shown = load('shown', true);

  const CSS = `
#psmod{position:fixed;z-index:99999;width:236px;font:13px/1.25 var(--font,'Pixelify',system-ui,sans-serif);color:#fff;
  background:linear-gradient(#2c519f,#1a3170);border:2px solid #f4f8ff;outline:2px solid #0b1838;border-radius:8px;
  box-shadow:inset 0 0 0 2px #5b83d6,0 4px 0 #0a1430;user-select:none;-webkit-user-select:none}
#psmod.psmod-hidden{display:none}
#psmod .ps-head{display:flex;align-items:center;gap:6px;padding:6px 8px 4px;cursor:move;font-weight:700;letter-spacing:.06em}
#psmod .ps-head b{flex:1;color:#ffd23f}
#psmod .ps-time{font-weight:600;color:#b9cbf0}
#psmod .ps-rows{padding:0 6px 4px}
#psmod .ps-row{position:relative;margin:3px 0;padding:3px 6px;border-radius:4px;background:#0b1838;overflow:hidden}
#psmod .ps-bar{position:absolute;inset:0 auto 0 0;opacity:.35}
#psmod .ps-line{position:relative;display:flex;gap:6px;align-items:baseline}
#psmod .ps-name{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:700}
#psmod .ps-dmg{font-weight:700}
#psmod .ps-sub{position:relative;display:flex;justify-content:space-between;font-size:11px;color:#b9cbf0}
#psmod .ps-empty{padding:6px;font-size:12px;color:#b9cbf0}
#psmod .ps-foot{display:flex;align-items:center;gap:6px;padding:4px 8px 7px;border-top:2px solid #0b1838}
#psmod .ps-foot span{flex:1;font-weight:700}
#psmod .ps-ver{font-size:11px;color:#b9cbf0}
#psmod button{font:inherit;font-weight:700;color:#fff;background:#0b1838;border:2px solid #5b83d6;border-radius:4px;
  min-width:26px;height:24px;cursor:pointer;padding:0 6px}
#psmod button:hover{border-color:#ffd23f}
#psmod .ps-head button{height:20px;min-width:0;padding:0 5px;font-size:11px;letter-spacing:0}
#psmod .ps-info{padding:0 8px 4px;font-size:11.5px;color:#b9cbf0;display:grid;gap:1px}
#psmod .ps-info b{color:#fff}
#psmod .ps-row.me{cursor:pointer}
#psmod .ps-hp{position:relative;height:4px;margin-top:3px;border-radius:2px;background:#26304f;overflow:hidden}
#psmod .ps-hp i{position:absolute;inset:0 auto 0 0;background:#5fe08a}
#psmod .ps-hp.low i{background:#ffcb3d}
#psmod .ps-hp.crit i{background:#ff5f6d}
#psmod .ps-dead{color:#ff5f6d;font-weight:700}
#psmod .ps-moves{position:relative;margin-top:4px;display:grid;gap:2px;font-size:11.5px}
#psmod .ps-mv{display:flex;gap:6px}
#psmod .ps-mv span:first-child{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
#psmod .ps-mv span:last-child{color:#b9cbf0;min-width:32px;text-align:right}
#psmod .ps-hint{position:relative;font-size:10.5px;color:#b9cbf0}
#psmod [hidden]{display:none!important}
#psmod .ps-buffs{padding:4px 8px 6px;border-top:2px solid #0b1838;font-size:11.5px;display:grid;gap:2px;max-height:45vh;overflow:auto}
#psmod .ps-buffs h4{margin:4px 0 1px;font-size:11px;letter-spacing:.06em;color:#ffd23f}
#psmod .ps-buffs .kv{display:flex;gap:6px}
#psmod .ps-buffs .kv span:first-child{flex:1;color:#b9cbf0}
#psmod .ps-buffs .kv b{white-space:nowrap}
`;

  function buildPanel() {
    const style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    panel = document.createElement('div');
    panel.id = 'psmod';
    panel.innerHTML = tr`
      <div class="ps-head"><b>DAÑO</b><span class="ps-time">0:00</span><button class="ps-buffs-btn" title="Mejoras tuyas y del equipo (Alt + J)">Mejoras</button><button class="ps-alerts" title="Avisos con sonido (Alt + B)"></button></div>
      <div class="ps-info"></div>
      <div class="ps-rows"></div>
      <div class="ps-buffs" hidden></div>
      <div class="ps-foot">
        <span>Visión 1.0x</span>
        <button data-f="-1" title="Menos visión (Alt + -)">-</button>
        <button data-f="0" title="Visión normal (Alt + 0)">1x</button>
        <button data-f="1" title="Más visión (Alt + +)">+</button>
      </div>
      <div class="ps-foot ps-hudrow">
        <span>HUD 1.0x</span>
        <button data-h="-1" title="HUD del juego más pequeño">-</button>
        <button data-h="0" title="HUD del juego a tamaño original">1x</button>
        <button data-h="1" title="HUD del juego más grande">+</button>
      </div>
      <div class="ps-foot">
        <span>Controles</span><small class="ps-ver" title="Versión del mod"></small>
        <button data-k="1" title="Cambiar teclas y rueda del ratón (Alt + K)">Cambiar</button>
      </div>
      <div class="ps-foot">
        <span>Movedex</span>
        <button data-d="1" title="Todos los movimientos, quién los aprende y cómo funcionan (Alt + P)">Abrir</button>
      </div>
      <div class="ps-foot">
        <span>Auto mejoras</span>
        <button data-a="on" title="Elegir solo las cartas al subir de nivel"></button>
        <button data-a="edit" title="Orden en que se eligen las cartas (Alt + U)">Ajustar</button>
      </div>`;
    document.body.appendChild(panel);
    body = panel.querySelector('.ps-rows');
    fovLabel = panel.querySelector('.ps-foot span');
    timeLabel = panel.querySelector('.ps-time');
    infoEl = panel.querySelector('.ps-info');
    alertsBtn = panel.querySelector('.ps-alerts');
    alertsBtn.addEventListener('click', () => { setAlertSound(!alertSound); alertsBtn.blur(); });
    renderAlertsBtn();
    buffsEl = panel.querySelector('.ps-buffs');
    panel.querySelector('.ps-buffs-btn').addEventListener('click', (e) => { toggleBuffs(); e.currentTarget.blur(); });
    // Click your own row to see the damage of each of your moves.
    body.addEventListener('click', (e) => {
      if (!e.target.closest('.ps-row.me')) return;
      showMoves = !showMoves;
      save('showMoves', showMoves);
      render();
    });

    hudLabel = panel.querySelector('.ps-hudrow span');
    for (const foot of panel.querySelectorAll('.ps-foot')) {
      foot.addEventListener('click', (e) => {
        const b = e.target.closest('button');
        if (!b) return;
        if (b.dataset.f != null) { const d = +b.dataset.f; setFov(d === 0 ? 1 : fov + d * FOV_STEP); }
        if (b.dataset.h != null) { const d = +b.dataset.h; setHudScale(d === 0 ? 1 : hudScale + d * 0.1); }
        if (b.dataset.k != null) toggleKeys();
        if (b.dataset.d != null) toggleDex();
        if (b.dataset.a === 'on') { auto.on = !auto.on; saveAuto(); }
        if (b.dataset.a === 'edit') showModTab('psmod-set-auto');
        b.blur(); // keep keyboard focus off the button so the game keeps its keys
      });
    }
    renderHud();
    renderAutoBtns();
    panel.querySelector('.ps-ver').textContent = modVersion() ? 'v' + modVersion() : '';
    // Stop clicks reaching the game canvas underneath.
    for (const ev of ['pointerdown', 'mousedown', 'touchstart']) panel.addEventListener(ev, (e) => e.stopPropagation());

    // The game's HUD (name, HP, buffs and the co-op list) sits top-left and
    // grows with the HUD size, so the panel starts below it.
    const oldPos = load('pos', null);
    if (oldPos && oldPos.x === 12 && oldPos.y === 64) save('pos', null);
    makeDraggable(panel, panel.querySelector('.ps-head'), 'pos', () => ({ x: 12, y: Math.round(130 * hudScale) }));
    renderFov();
    const update = () => { tickClock(); render(); };
    setInterval(update, 250);
    update();
  }

  // Drag `el` by `handle`, keep it on screen and remember where it was left.
  // `def` may be a function so it can depend on the window size.
  function makeDraggable(el, handle, key, def) {
    const pos = load(key, null) || (typeof def === 'function' ? def() : def);
    const place = (x, y) => {
      el.style.left = Math.max(0, Math.min(innerWidth - el.offsetWidth, x)) + 'px';
      el.style.top = Math.max(0, Math.min(innerHeight - el.offsetHeight, y)) + 'px';
    };
    // Hidden elements have no size yet, so clamp again once they show up.
    place(pos.x, pos.y);
    const reclamp = () => { if (el.offsetWidth) place(parseFloat(el.style.left) || 0, parseFloat(el.style.top) || 0); };
    new ResizeObserver(reclamp).observe(el);
    addEventListener('resize', reclamp);

    const head = handle;
    head.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button')) return;
      const dx = e.clientX - el.offsetLeft, dy = e.clientY - el.offsetTop;
      head.setPointerCapture(e.pointerId);
      const move = (ev) => place(ev.clientX - dx, ev.clientY - dy);
      const up = () => {
        head.removeEventListener('pointermove', move);
        head.removeEventListener('pointerup', up);
        save(key, { x: el.offsetLeft, y: el.offsetTop });
      };
      head.addEventListener('pointermove', move);
      head.addEventListener('pointerup', up);
    });
  }

  function renderFov() {
    if (fovLabel) fovLabel.textContent = tr`Visión ${fov.toFixed(1)}x`;
  }

  function render() {
    panel.classList.toggle('psmod-hidden', !shown || !inRun());
    if (!shown || !inRun()) return;
    timeLabel.textContent = clock(runTime);
    const list = entries();
    const total = list.reduce((s, e) => s + (e.dmg || 0), 0);
    const top = Math.max(1, ...list.map((e) => e.dmg || 0));
    const secs = Math.max(1, runTime);
    infoEl.innerHTML = infoLines().map((l) => `<div>${l}</div>`).join('');
    infoEl.hidden = !infoEl.innerHTML;
    body.innerHTML = list.map((e) => {
      const pct = total > 0 && e.dmg != null ? Math.round((e.dmg / total) * 100) + '%' : '';
      const dps = e.dmg != null ? fmt(e.dmg / secs) + '/s' : tr('sin mod');
      const approx = e.dmg != null && !e.exact ? '~' : '';
      const ratio = e.maxHp > 0 ? Math.max(0, Math.min(1, e.hp / e.maxHp)) : null;
      const hp = e.dead
        ? `<div class="ps-sub"><span class="ps-dead">${e.me ? tr('Caído') : tr('Caído - ve a revivirlo')}</span></div>`
        : ratio == null ? '' : `<div class="ps-hp${ratio < 0.25 ? ' crit' : ratio < 0.5 ? ' low' : ''}" title="${Math.round(e.hp)} / ${Math.round(e.maxHp)}"><i style="width:${ratio * 100}%"></i></div>`;
      const moves = e.me ? (showMoves ? movesHtml() : tr('<div class="ps-hint">Pulsa para ver el daño por ataque</div>')) : '';
      return `<div class="ps-row${e.me ? ' me' : ''}">
        <div class="ps-bar" style="width:${((e.dmg || 0) / top) * 100}%;background:${esc(e.color)}"></div>
        <div class="ps-line"><span class="ps-name" style="color:${esc(e.color)}">${esc(e.name)}</span><span class="ps-dmg">${approx}${fmt(e.dmg)}</span></div>
        <div class="ps-sub"><span>${dps}</span><span>${pct}</span></div>
        ${hp}${moves}
      </div>`;
    }).join('') || tr('<div class="ps-empty">Sin datos todavía</div>');
    buffsEl.hidden = !showBuffs;
    if (showBuffs) buffsEl.innerHTML = buffsHtml();
  }

  function onNewRun() {
    moveDmg.clear();
    alerted.clear();
    sparkled.clear();
    mateState.clear();
    lastRift = null;
    xpHist = [];
    xpLast = null;
    runEnded = false;
  }

  // ---------------------------------------------------- next rift
  // The game keeps its rift dice private, but the rules are fixed (Rift.update):
  // from 1:15 to 28:00 of run time, with no rift open and no arena, a 30 s timer
  // runs; when it ends, if a boss is alive the roll is skipped, otherwise a rift
  // opens with 20 % x (1 + failed rolls) chance. We wrap Rift.update so our copy
  // of the timer advances with the very same dt in the very same frame, and
  // read each roll's result right after the game makes it. Only the host rolls
  // in co-op; other players run the same timer and reset it when the rift the
  // host opened arrives.
  const RIFT_EVERY = 30, RIFT_FROM = 75, RIFT_CUTOFF = 120;
  let rift = { timer: RIFT_EVERY, fails: 0, open: false };

  function riftWindowEnd() { return ((NS.Judgment && NS.Judgment.AT) || 1800) - RIFT_CUTOFF; }

  function setupRiftTracking() {
    const R = NS.Rift;
    const reset = R.reset;
    R.reset = function () { rift = { timer: RIFT_EVERY, fails: 0, open: false }; return reset.apply(this, arguments); };
    const update = R.update;
    R.update = function (dt, pl, time) {
      if (R.rift && !rift.open) { rift.fails = 0; rift.timer = RIFT_EVERY; } // a mate's host opened one
      let rolled = false;
      if (!R.rift && !R.arena && time > RIFT_FROM && time < riftWindowEnd()) {
        rift.timer -= +dt || 0;
        if (rift.timer <= 0) {
          rift.timer = RIFT_EVERY;
          rolled = !(NS.EnemyMgr.bossAlive && NS.EnemyMgr.bossAlive());
        }
      }
      const out = update.apply(this, arguments);
      if (R.rift && !rift.open) { rift.fails = 0; rift.timer = RIFT_EVERY; }
      else if (rolled && !R.rift) rift.fails = Math.min(4, rift.fails + 1);
      rift.open = !!R.rift;
      return out;
    };
  }

  function riftLine() {
    const R = NS.Rift;
    if (!R || R.rift || R.arena || R.inArena) return null;
    if (runTime >= riftWindowEnd()) return null;
    if (runTime <= RIFT_FROM) return tr`Primera grieta posible en <b>${clock(RIFT_FROM + RIFT_EVERY - runTime)}</b>`;
    if (NS.EnemyMgr.bossAlive && NS.EnemyMgr.bossAlive()) return tr('Grietas en pausa: hay un jefe vivo');
    const chance = Math.min(100, 20 * (1 + rift.fails));
    const sure = rift.timer + RIFT_EVERY * Math.max(0, 4 - rift.fails);
    const sureAt = runTime + sure < riftWindowEnd() ? tr` - segura en <b>${clock(sure)}</b>` : '';
    return tr`Grieta: tirada en <b>${clock(Math.max(0, rift.timer))}</b> (${chance} %)${chance < 100 ? sureAt : ''}`;
  }

  // ---------------------------------------------------- per-move damage
  // Enemy.hurt() doesn't say which move hit, so we track where in the frame we
  // are. The game loop runs Combat.tick (casts; melee, beams, chains and
  // auras hit right after Player.cast), Combat.resolve (projectiles and orbs)
  // and Combat.updateFields (mines, puddles, meteors, turrets). Projectiles get
  // tagged with the move that spawned them; field hits are matched by the
  // move's type colour. Burn and poison ticks are counted apart (solo only:
  // in co-op the host can't tell whose status it was).
  const moveDmg = new Map(); // move id | 'burn' | 'poison' | 'other' -> damage
  let scope = null, curMove = null, curProj = null;
  const BURN_COL = '#ff9a4d', POISON_COL = '#d47cf0';

  function credit(key, n) { moveDmg.set(key, (moveDmg.get(key) || 0) + n); }

  function byColor(color, kinds) {
    const p = me();
    const C = NS.U && NS.U.TYPE_COLOR;
    if (!p || !C) return 'other';
    const hits = p.moves.filter((m) => C[m.type] === color && (!kinds || kinds.includes(m.kind)));
    return hits.length ? hits[0].id : 'other';
  }
  const FIELD_KINDS = ['mine', 'trail', 'meteor', 'turret'];

  function setupMoveTracking() {
    const { Combat, Projectiles, Enemy, Player, EnemyMgr } = NS;
    const around = (obj, name, enter, leave) => {
      const f = obj[name];
      obj[name] = function () {
        enter.apply(this, arguments);
        try { return f.apply(this, arguments); } finally { leave(); }
      };
    };
    around(Combat, 'tick', (dt, pl) => { scope = pl && pl === me() ? 'tick' : null; curMove = null; }, () => { scope = null; curMove = null; });
    around(Combat, 'resolve', () => { scope = 'resolve'; curProj = null; }, () => { scope = null; curProj = null; });
    around(Combat, 'updateFields', () => { scope = 'fields'; }, () => { scope = null; });
    around(EnemyMgr, 'update', () => { scope = 'dot'; }, () => { scope = null; });

    const cast = Player.prototype.cast;
    Player.prototype.cast = function (m) {
      if (scope === 'tick' && this === me()) curMove = m;
      return cast.apply(this, arguments);
    };

    const spawn = Projectiles.spawn;
    Projectiles.spawn = function (o) {
      const mid = scope === 'tick' && curMove ? curMove.id : scope === 'fields' && o ? byColor(o.color, ['turret']) : null;
      if (mid && o) o.__mid = mid;
      const out = spawn.apply(this, arguments);
      if (mid && out && typeof out === 'object') out.__mid = mid;
      return out;
    };

    // While resolving, hand out a view of the projectile list that notes which
    // projectile the loop is looking at.
    const all = Projectiles.all;
    Projectiles.all = function () {
      const arr = all.apply(this, arguments);
      if (scope !== 'resolve' || !Array.isArray(arr)) return arr;
      return new Proxy(arr, {
        get(t, k) {
          if (typeof k === 'string' && /^\d+$/.test(k)) {
            const v = t[k];
            if (v && typeof v === 'object') curProj = v;
            return v;
          }
          const v = Reflect.get(t, k);
          return typeof v === 'function' ? v.bind(t) : v;
        },
      });
    };

    const hurt = Enemy.prototype.hurt;
    Enemy.prototype.hurt = function (dmg, color) {
      if (scope && !this.dead) {
        const n = Math.max(1, Math.round(+dmg || 0));
        if (scope === 'tick') credit(curMove ? curMove.id : byColor(color), n);
        else if (scope === 'resolve') {
          const pr = curProj;
          credit((pr && (pr.__mid || (pr.orb && pr.mid))) || byColor(color), n);
        } else if (scope === 'fields') credit(byColor(color, FIELD_KINDS), n);
        else if (scope === 'dot' && !NS.Coop.active) {
          if (color === BURN_COL) credit('burn', n);
          else if (color === POISON_COL) credit('poison', n);
        }
      }
      return hurt.apply(this, arguments);
    };
  }

  function moveList() {
    const p = me();
    const names = { burn: tr('Quemaduras'), poison: tr('Veneno'), other: tr('Otros') };
    if (p) for (const m of p.moves) names[m.id] = gameText(m.name);
    const total = [...moveDmg.values()].reduce((a, b) => a + b, 0);
    return [...moveDmg.entries()]
      .map(([k, v]) => ({ key: k, name: names[k] || k, dmg: v, pct: total ? v / total : 0 }))
      .sort((a, b) => b.dmg - a.dmg);
  }

  function movesHtml() {
    const list = moveList();
    if (!list.length) return tr('<div class="ps-moves"><div class="ps-hint">Aún no has hecho daño</div></div>');
    return `<div class="ps-moves">${list.map((m) => `<div class="ps-mv"><span>${esc(m.name)}</span><span>${fmt(m.dmg)}</span><span>${Math.round(m.pct * 100)}%</span></div>`).join('')}</div>`;
  }

  // ------------------------------------------------- xp pace and timers
  let xpHist = [], xpLast = null;

  function trackXp(p) {
    if (typeof p.xp !== 'number' || typeof p.level !== 'number') return;
    if (xpLast) {
      let gained = 0;
      if (p.level === xpLast.level) gained = Math.max(0, p.xp - xpLast.xp);
      else if (p.level > xpLast.level) gained = Math.max(0, xpLast.next - xpLast.xp) + p.xp;
      const tot = (xpHist.length ? xpHist[xpHist.length - 1][1] : 0) + gained;
      xpHist.push([runTime, tot]);
      while (xpHist.length > 2 && runTime - xpHist[0][0] > 30) xpHist.shift();
    }
    xpLast = { level: p.level, xp: p.xp, next: p.xpNext };
  }

  function infoLines() {
    const out = [];
    const p = me();
    if (p && typeof p.xpNext === 'number' && xpHist.length > 1) {
      const [t0, x0] = xpHist[0], [t1, x1] = xpHist[xpHist.length - 1];
      const rate = t1 > t0 ? (x1 - x0) / (t1 - t0) : 0;
      const left = Math.max(0, p.xpNext - p.xp);
      if (rate > 0) out.push(tr`Nv. <b>${p.level}</b> - subes en <b>${clock(left / rate)}</b>`);
    }
    const J = NS.Judgment;
    if (J && typeof J.AT === 'number' && !J.active && runTime < J.AT) out.push(tr`Legendarios en <b>${clock(J.AT - runTime)}</b>`);
    const r = NS.Rift && NS.Rift.rift;
    if (r && typeof r.ttl === 'number' && r.ttl > 0) out.push(tr`Grieta abierta: <b>${clock(r.ttl)}</b>`);
    const rl = riftLine();
    if (rl) out.push(rl);
    return out;
  }

  // ------------------------------------------------------------- alerts
  const alerted = new Set();
  const mateState = new Map();
  let lastRift = null;
  let alertSound = load('alertSound', true);
  let toastBox = null;

  function setAlertSound(v) { alertSound = v; save('alertSound', v); renderAlertsBtn(); }
  function renderAlertsBtn() { if (alertsBtn) alertsBtn.textContent = alertSound ? tr('Sonido: sí') : tr('Sonido: no'); }

  function buildToasts() {
    const style = document.createElement('style');
    style.textContent = `
#psmod-toasts{position:fixed;z-index:100000;left:50%;top:72px;transform:translateX(-50%);display:grid;gap:6px;justify-items:center;pointer-events:none;
  font:14px/1.25 var(--font,'Pixelify',system-ui,sans-serif)}
#psmod-toasts div{background:#0b1838;color:#fff;border:2px solid var(--c,#f4f8ff);border-radius:8px;padding:6px 12px;box-shadow:0 3px 0 #0a1430;
  font-weight:700;max-width:min(90vw,420px);text-align:center}
#psmod-toasts small{display:block;font-weight:600;color:#b9cbf0;font-size:12px}
@media (prefers-reduced-motion:no-preference){#psmod-toasts div{animation:psmod-in .18s ease-out}}
@keyframes psmod-in{from{transform:translateY(-8px);opacity:0}to{transform:none;opacity:1}}`;
    document.head.appendChild(style);
    toastBox = document.createElement('div');
    toastBox.id = 'psmod-toasts';
    toastBox.setAttribute('role', 'status');
    document.body.appendChild(toastBox);
  }

  function toast(text, color, sub) {
    if (!toastBox) return;
    const d = document.createElement('div');
    d.style.setProperty('--c', color || '#f4f8ff');
    d.innerHTML = esc(text) + (sub ? `<small>${esc(sub)}</small>` : '');
    toastBox.appendChild(d);
    while (toastBox.children.length > 4) toastBox.firstChild.remove();
    setTimeout(() => d.remove(), 4500);
  }

  function sound(name) {
    if (!alertSound) return;
    if (name === 'sparkle') { sparkle(); return; }
    try { NS.Audio.sfx(name); } catch {}
  }

  // Shiny sound: the one of Pokémon Legends: Arceus (sounds/shiny.ogg; its
  // URL comes from keepalive.js, which can reach chrome.runtime). It replaces
  // the game's 'shiny' sfx when a shiny spawns and for shiny cards in the
  // gacha; the other uses of that sfx (invites, tickets) keep the game's
  // sound. Volume follows the game's effects volume and mute ('ps.audio').
  let sparkleEl = null, sparkleAt = 0;
  const sparkled = new Set(); // shiny enemy ids already announced

  function sparkle() {
    const t0 = performance.now();
    if (t0 - sparkleAt < 1500) return; // spawn sound and our alert, once
    sparkleAt = t0;
    let vol = 0.7;
    try { const a = JSON.parse(localStorage.getItem('ps.audio') || '{}'); if (a.muted) return; if (typeof a.sfx === 'number') vol = a.sfx; } catch {}
    if (vol <= 0) return;
    const url = document.documentElement.dataset.psmodShiny;
    if (!url) return;
    try {
      if (!sparkleEl) sparkleEl = new Audio(url);
      sparkleEl.volume = Math.min(1, vol);
      sparkleEl.currentTime = 0;
      sparkleEl.play().catch(() => {});
    } catch {}
  }

  function setupShinySound() {
    const A = NS.Audio;
    const sfx = A.sfx;
    A.sfx = function (name) {
      if (name === 'shiny') {
        if (NS.UI && NS.UI.isOpen && NS.UI.isOpen('scr-gacha')) { sparkle(); return; }
        const fresh = NS.EnemyMgr && NS.EnemyMgr.all().filter((e) => e.shiny && !e.dead && !sparkled.has(e.id));
        if (fresh && fresh.length) { for (const e of fresh) sparkled.add(e.id); sparkle(); return; }
      }
      return sfx.apply(this, arguments);
    };
  }
  waitFor(() => NS && NS.Audio && NS.Audio.sfx, setupShinySound);

  const ARROWS = ['→', '↘', '↓', '↙', '←', '↖', '↑', '↗'];
  function where(p, x, y) {
    const dx = x - p.x, dy = y - p.y;
    const tiles = Math.round(Math.hypot(dx, dy) / 32);
    const a = ARROWS[(Math.round(Math.atan2(dy, dx) / (Math.PI / 4)) + 8) % 8];
    return tr`${a} a ${tiles} casillas`;
  }

  function checkAlerts(p) {
    if (!inRun()) return;
    // Legendaries of the minute-30 event arrive in a pack: one notice for all.
    let legends = 0;
    for (const e of NS.EnemyMgr.all()) {
      if (e.dead || alerted.has(e.id)) continue;
      let text = null, color = '#f4f8ff', sfx = null;
      if (e.judge || e.legend) { alerted.add(e.id); legends++; continue; }
      // In the golden hour every spawn is golden and the game already shows
      // its own banner: no notice per enemy.
      if (e.golden && !e.shiny && !e.boss && e.behavior !== 'thief' && NS.Events && NS.Events.golden) { alerted.add(e.id); continue; }
      if (e.shiny) { text = tr`¡Shiny! ${e.name}`; color = '#7fe0ff'; sfx = 'sparkle'; sparkled.add(e.id); }
      else if (e.boss) { text = tr`Jefe: ${e.name}`; color = '#ff3048'; sfx = 'legend'; }
      else if (e.golden) { text = tr`Pokémon dorado: ${e.name}`; color = '#ffd23f'; sfx = 'select'; }
      else if (e.behavior === 'thief') { text = tr`¡Ladrón! ${e.name}`; color = '#ffd23f'; sfx = 'select'; }
      if (!text) continue;
      alerted.add(e.id);
      toast(text, color, where(p, e.x, e.y));
      sound(sfx);
    }
    if (legends) { toast(legends > 1 ? tr`¡${legends} legendarios!` : tr('¡Legendario!'), '#c47bff'); sound('legend'); }

    const r = NS.Rift && NS.Rift.rift;
    if (r && r !== lastRift && typeof r.x === 'number') { toast(tr('Se ha abierto una grieta'), '#c47bff', where(p, r.x, r.y)); sound('select'); }
    lastRift = r || null;

    if (NS.Coop.active) {
      for (const m of NS.Coop.mates) {
        if (!m.connected || !m.pl) continue;
        const n = m.pl.net || {};
        const st = n.dead ? 'dead' : n.maxHp > 0 && n.hp / n.maxHp < 0.3 ? 'low' : 'ok';
        const prev = mateState.get(m.uid) || 'ok';
        if (st !== prev) {
          if (st === 'dead') { toast(tr`${m.name} ha caído: ve a revivirlo`, '#ff5f6d', where(p, m.pl.x, m.pl.y)); sound('error'); }
          else if (st === 'low' && prev === 'ok') toast(tr`${m.name} tiene poca vida`, '#ffcb3d', where(p, m.pl.x, m.pl.y));
          mateState.set(m.uid, st);
        }
      }
    }
  }

  // ------------------------------------------------ run summary, history
  // When a run ends (game over, or leaving a run that lasted over a minute) we
  // save a summary in this browser. On the game-over screen a button under
  // the game's own stats opens it (or Alt + H), so it doesn't cover the
  // game's buttons; with sumAuto it opens by itself, as it used to.
  const HISTORY_MAX = 30;
  let runEnded = false, sumEl = null, lastState = null, lastSum = null, overBtn = null;
  let sumAuto = load('sumAuto', false);

  function checkRunEnd() {
    const st = NS.Game.state;
    const was = lastState;
    lastState = st;
    // Leaving the game-over screen takes its summary along.
    if (was === 'over' && st !== 'over' && sumEl && sumEl.dataset.view === 'run') sumEl.hidden = true;
    if (runEnded || !runPlayer) return;
    if (st === 'over' || (st === 'ui' && was && was !== 'ui' && runTime > 60)) {
      runEnded = true;
      const s = buildRunSummary(runPlayer);
      const hist = load('history', []);
      hist.unshift(s);
      save('history', hist.slice(0, HISTORY_MAX));
      if (st === 'over') {
        lastSum = s;
        addOverButton();
        if (sumAuto) showSummary(s);
      }
    }
  }

  function addOverButton() {
    const again = document.getElementById('btn-again');
    if (!again) return;
    if (!overBtn) {
      overBtn = document.createElement('button');
      overBtn.id = 'psmod-sum-btn';
      overBtn.className = 'btn small ghost';
      overBtn.style.cssText = 'display:block;margin:0 auto 10px';
      overBtn.addEventListener('click', () => { overBtn.blur(); toggleHistory(); });
    }
    overBtn.textContent = tr('Resumen del mod (Alt + H)');
    if (overBtn.nextElementSibling !== again) again.before(overBtn);
  }

  function buildRunSummary(p) {
    const players = entries().map((e) => ({ name: e.name, dmg: Math.round(e.dmg || 0), me: !!e.me, exact: e.exact, color: e.color }));
    const moves = moveList().slice(0, 4).map((m) => ({ name: m.name, dmg: Math.round(m.dmg), pct: m.pct }));
    return {
      at: Date.now(),
      mon: (p.mon && p.mon.name) || '?',
      coop: NS.Coop.active ? players.length : 1,
      time: Math.round(runTime),
      level: p.level || 0,
      kills: p.kills || 0,
      dmg: Math.round(p.dmgDealt || 0),
      dps: Math.round((p.dmgDealt || 0) / Math.max(1, runTime)),
      players,
      moves,
    };
  }

  function buildSummary() {
    const style = document.createElement('style');
    style.textContent = `
#psmod-sum{position:fixed;z-index:100001;right:16px;top:64px;width:min(360px,calc(100vw - 32px));max-height:calc(100vh - 96px);overflow:auto;
  font:13px/1.3 var(--font,'Pixelify',system-ui,sans-serif);color:#fff;background:linear-gradient(#2c519f,#1a3170);border:2px solid #f4f8ff;
  outline:2px solid #0b1838;border-radius:8px;box-shadow:inset 0 0 0 2px #5b83d6,0 4px 0 #0a1430;padding:10px 12px;display:grid;gap:10px}
#psmod-sum[hidden]{display:none}
#psmod-sum h3{margin:0;font-size:16px;color:#ffd23f;letter-spacing:.04em}
#psmod-sum .top{display:flex;align-items:center;gap:8px}
#psmod-sum .top h3{flex:1}
#psmod-sum button{font:inherit;font-weight:700;color:#fff;background:#0b1838;border:2px solid #5b83d6;border-radius:4px;height:24px;cursor:pointer;padding:0 8px}
#psmod-sum button:hover{border-color:#ffd23f}
#psmod-sum .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
#psmod-sum .grid div{background:#0b1838;border-radius:4px;padding:5px 7px}
#psmod-sum .grid small{display:block;color:#b9cbf0;font-size:11px}
#psmod-sum .grid b{font-size:15px}
#psmod-sum table{width:100%;border-collapse:collapse;font-size:12px}
#psmod-sum th,#psmod-sum td{text-align:left;padding:3px 4px;border-bottom:1px solid #2c4a8f;white-space:nowrap}
#psmod-sum th{color:#b9cbf0;font-weight:600}
#psmod-sum td.n{text-align:right;font-variant-numeric:tabular-nums}
#psmod-sum .best{color:#ffd23f}
#psmod-sum .sub{color:#b9cbf0;font-size:12px;margin:0}
#psmod-sum .star{display:grid;grid-template-columns:auto 1fr;gap:4px 10px;align-items:center;background:linear-gradient(#3a2a00,#1f1600);
  border:2px solid #ffd23f;border-radius:6px;padding:10px 12px;animation:psmod-glow 1.6s ease-in-out 4}
#psmod-sum .star i{grid-row:span 2;font-style:normal;font-size:34px;line-height:1;animation:psmod-wiggle 1.6s ease-in-out 4}
#psmod-sum .star b{font-size:16px;color:#ffd23f}
#psmod-sum .star span{color:#fff3c4}
#psmod-sum .star .acts{grid-column:1/-1;display:flex;gap:8px;align-items:center;margin-top:6px}
#psmod-sum .star a{flex:1;text-align:center;font-weight:700;font-size:15px;color:#0b1838;background:#ffd23f;border-radius:4px;
  padding:6px 10px;text-decoration:none;box-shadow:0 3px 0 #a07800}
#psmod-sum .star a:hover{filter:brightness(1.1)}
#psmod-sum .star button{background:none;border:none;color:#b9a86a;font-weight:400;text-decoration:underline}
@keyframes psmod-glow{50%{box-shadow:0 0 14px 2px rgba(255,210,63,.65)}}
@keyframes psmod-wiggle{0%,60%,100%{transform:none}70%{transform:rotate(-14deg) scale(1.15)}85%{transform:rotate(14deg) scale(1.15)}}
@media (prefers-reduced-motion:reduce){#psmod-sum .star,#psmod-sum .star i{animation:none}}`;
    document.head.appendChild(style);
    sumEl = document.createElement('div');
    sumEl.id = 'psmod-sum';
    sumEl.hidden = true;
    document.body.appendChild(sumEl);
    for (const ev of ['pointerdown', 'mousedown', 'touchstart']) sumEl.addEventListener(ev, (e) => e.stopPropagation());
    sumEl.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      if (b.dataset.act === 'close') sumEl.hidden = true;
      if (b.dataset.act === 'clear') { save('history', []); showSummary(null); }
      if (b.dataset.act === 'nostar') { save('starAsk', STAR_ASKS); b.closest('.star').remove(); }
    });
    sumEl.addEventListener('click', (e) => {
      const a = e.target.closest('.star a');
      if (a) { save('starAsk', STAR_ASKS); a.closest('.star').remove(); }
    });
  }

  // After a finished run, a small note asking for a star on GitHub. It shows
  // on the next summaries until the player clicks either button, and at
  // most STAR_ASKS times.
  const STAR_ASKS = 3;
  function starNote() {
    const n = load('starAsk', 0);
    if (n >= STAR_ASKS) return '';
    save('starAsk', n + 1);
    return tr`<div class="star"><i>⭐</i><b>¿Te está gustando el mod?</b>
      <span>Dale una estrella en GitHub: es gratis, son dos clics y ayuda a que lo conozca más gente.</span>
      <div class="acts"><a href="https://github.com/${REPO}" target="_blank" rel="noopener">⭐ Dar una estrella</a><button data-act="nostar">No, gracias</button></div></div>`;
  }

  function showSummary(s) {
    if (!sumEl) return;
    const hist = load('history', []);
    const best = hist.reduce((a, h) => (h.dps > (a ? a.dps : -1) ? h : a), null);
    const head = s ? tr`
      <div class="grid">
        <div><small>Tiempo</small><b>${clock(s.time)}</b></div>
        <div><small>Nivel</small><b>${s.level}</b></div>
        <div><small>Derrotados</small><b>${fmt(s.kills)}</b></div>
        <div><small>Daño</small><b>${fmt(s.dmg)}</b></div>
        <div><small>Daño/s</small><b>${fmt(s.dps)}</b></div>
        <div><small>Pokémon</small><b>${esc(s.mon)}</b></div>
      </div>
      ${s.players.length > 1 ? tr`<table><thead><tr><th>Jugador</th><th class="n">Daño</th><th class="n">Daño/s</th></tr></thead><tbody>${
        s.players.map((p) => `<tr><td style="color:${esc(p.color)}">${esc(p.name)}</td><td class="n">${p.exact ? '' : '~'}${fmt(p.dmg)}</td><td class="n">${fmt(p.dmg / Math.max(1, s.time))}</td></tr>`).join('')
      }</tbody></table>` : ''}
      ${s.moves.length ? tr`<table><thead><tr><th>Tus ataques</th><th class="n">Daño</th><th class="n">%</th></tr></thead><tbody>${
        s.moves.map((m) => `<tr><td>${esc(m.name)}</td><td class="n">${fmt(m.dmg)}</td><td class="n">${Math.round(m.pct * 100)}%</td></tr>`).join('')
      }</tbody></table>` : ''}` : '';
    const rowsHtml = hist.slice(0, 12).map((h) => {
      const d = new Date(h.at);
      const date = `${d.getDate()}/${d.getMonth() + 1} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
      return `<tr${h === best ? tr(' class="best" title="Tu mejor daño por segundo"') : ''}><td>${date}</td><td>${esc(h.mon)}${h.coop > 1 ? ` (${h.coop})` : ''}</td><td class="n">${clock(h.time)}</td><td class="n">${h.level}</td><td class="n">${fmt(h.dps)}</td></tr>`;
    }).join('');
    // Once per run, however many times the summary is opened.
    if (s && s.star == null) s.star = starNote();
    sumEl.innerHTML = tr`
      <div class="top"><h3>${s ? tr('Resumen de la partida') : tr('Historial')}</h3><button data-act="close">Cerrar</button></div>
      ${s ? s.star : ''}
      ${head}
      <h3>${s ? tr('Tus últimas partidas') : tr('Tus últimas partidas')}</h3>
      ${rowsHtml ? tr`<table><thead><tr><th>Fecha</th><th>Pokémon</th><th class="n">Tiempo</th><th class="n">Nv.</th><th class="n">Daño/s</th></tr></thead><tbody>${rowsHtml}</tbody></table>
      <p class="sub">En amarillo, tu mejor partida por daño por segundo. Se guardan las últimas ${HISTORY_MAX} en este navegador. Alt + H abre esto cuando quieras.</p>
      <div><button data-act="clear">Borrar historial</button></div>` : tr('<p class="sub">Todavía no hay partidas guardadas. Se guardan al acabar cada partida.</p>')}`;
    sumEl.dataset.view = s ? 'run' : 'sum';
    sumEl.hidden = false;
  }

  // On the game-over screen, the summary of that run; elsewhere, the history.
  function toggleHistory() {
    if (!sumEl) return;
    if (!sumEl.hidden) { sumEl.hidden = true; return; }
    showSummary(NS && NS.Game && NS.Game.state === 'over' ? lastSum : null);
  }

  // ----------------------------------------------------- Repertorio off
  // The "Repertorio" upgrade makes runs start with 2 moves. Upgrades.perks()
  // turns the bought upgrades into run bonuses; with this option on we hand
  // back startMoves = 1, as if it weren't bought. Nothing is refunded and it
  // can be switched back at any time.
  let noRepertorio = load('noRepertorio', false);

  function setupRepertorio() {
    const U = NS.Upgrades;
    const perks = U.perks;
    U.perks = function () {
      const out = perks.apply(this, arguments);
      if (noRepertorio && out && out.startMoves > 1) out.startMoves = 1;
      return out;
    };
    const add = () => {
      const list = document.getElementById('upg-list');
      if (!list || document.getElementById('psmod-norep')) return;
      const label = document.createElement('label');
      label.className = 'note';
      label.style.cssText = 'display:flex;align-items:center;gap:8px;cursor:pointer;font-weight:700;margin:8px 0';
      label.innerHTML = tr('<input type="checkbox" id="psmod-norep" style="width:18px;height:18px;margin:0;cursor:pointer"> Empezar con un solo movimiento aunque tenga Repertorio');
      const box = label.querySelector('input');
      box.checked = noRepertorio;
      box.addEventListener('change', () => { noRepertorio = box.checked; save('noRepertorio', noRepertorio); });
      list.before(label);
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', add);
    else add();
  }

  waitFor(() => NS && NS.Upgrades && NS.Upgrades.perks, setupRepertorio);

  // ---------------------------------------------------------- auto-pick
  // Level-up cards come from LevelUp.offer(player) and go to
  // RunUI.showLevelUp(level, cards, onPick, coop). Each card has a type
  // ('new', 'up', 'evo' or a stat), a key ('new:<move>', 'up:<move>',
  // 'evo:<move>', '<prefix>:<stat>') and apply(). With auto-pick on, we walk
  // the player's priority list and take the first card that matches a rule.
  // Solo: we call onPick ourselves and the screen never shows. Co-op: the
  // screen shows (it's where "waiting for..." goes) and we press the card with
  // RunUI.pick once its anti-misclick guard (0.6 s) is over. With nothing
  // matching, the cards show as usual, or first we spend card rerolls (same
  // count as the game's button: 1 + rerollBonus - rerolls).
  // Every stat card is on the default list, so a level-up always finds
  // something; the order is the usual one for damage builds.
  const AUTO_STATS = ['stat:atk', 'stat:cd', 'stat:xp', 'stat:spd', 'stat:def', 'stat:hp', 'stat:rgn', 'stat:mag'];
  const AUTO_DEF = () => ({ v: 2, on: false, fallback: 'manual', tied: {}, rules: ['evo', 'stat-evo', 'heal-low', 'set', 'up', 'new-fit', ...AUTO_STATS, 'new', 'stat:heal'] });
  const savedAuto = load('autoPick', null);
  let auto = Object.assign(AUTO_DEF(), savedAuto);
  // Lists saved before movesets existed get the moveset rule before 'up'.
  if (savedAuto && !savedAuto.v && !auto.rules.includes('set')) { const i = auto.rules.indexOf('up'); auto.rules.splice(i < 0 ? 0 : i, 0, 'set'); }
  // Lists saved before v2 only had Potencia and Reflejos: the other stats go at the end.
  if (savedAuto && !(savedAuto.v >= 2)) for (const r of AUTO_STATS) if (!auto.rules.includes(r)) auto.rules.push(r);
  auto.v = 2;
  if (!auto.tied || typeof auto.tied !== 'object') auto.tied = {};
  // Moveset of each Pokémon (dex -> move ids, in priority order), picked on
  // its card in the Pokémon screen. With one, only its moves are learnt.
  const movesets = load('movesets', {});
  const movesetOf = (dex) => (Array.isArray(movesets[dex]) ? movesets[dex] : []);
  const saveAuto = () => { save('autoPick', auto); renderModTab(); renderAutoBtns(); };
  const AUTO_GENERAL = [
    ['evo', tr('Evolucionar un ataque')],
    ['stat-evo', tr('Mejora que deja evolucionar un ataque')],
    ['heal-low', tr('Baya Zidra con menos de la mitad de vida')],
    ['set', tr('Moveset de tu Pokémon, en su orden')],
    ['up', tr('Subir de nivel un ataque que ya tienes')],
    ['new-fit', tr('Ataque nuevo que pega bien con tu Pokémon')],
    ['new', tr('Cualquier ataque nuevo')],
  ];
  const isStatCard = (c) => !['new', 'up', 'evo'].includes(c.type);
  const cardId = (c) => String(c.key || '').slice(String(c.key || '').indexOf(':') + 1);

  function autoMatch(rule, c, p) {
    const [k, id] = rule.split(':');
    const cid = cardId(c);
    switch (k) {
      case 'evo': return c.type === 'evo';
      case 'stat-evo': return isStatCard(c) && c.color === '#ffd23f';
      case 'heal-low': return isStatCard(c) && cid === 'heal' && p.hp < p.maxHp * 0.5;
      case 'up': return c.type === 'up';
      case 'new': return c.type === 'new' && inSet(cid, p);
      case 'new-fit': {
        const m = c.type === 'new' && inSet(cid, p) && NS.Moves.BY_ID[cid];
        try { return !!m && NS.Stats.fit(p.mon, m.cat) >= 0.999; } catch { return false; }
      }
      case 'stat': return isStatCard(c) && cid === id;
      case 'move': return !isStatCard(c) && cid === id;
    }
    return false;
  }

  const inSet = (id, p) => { const set = movesetOf(p.mon && p.mon.dex); return !set.length || set.includes(id); };

  function ruleCardIn(r, cards, p) {
    if (r !== 'set') return cards.find((x) => autoMatch(r, x, p)) || null;
    for (const id of movesetOf(p.mon && p.mon.dex)) {
      const c = cards.find((x) => !isStatCard(x) && cardId(x) === id);
      if (c) return c;
    }
    return null;
  }

  // A rule can share its place with the one above (auto.tied[rule]): within
  // such a group the rule taken the fewest times this run wins, so they take
  // turns. Stats count with the game's own statsTaken; the rest, here.
  const autoTaken = new Map();
  let autoTakenFor = null;
  const timesTaken = (r, p) => (r.startsWith('stat:') ? (p.statsTaken || {})[r.slice(5)] || 0 : autoTaken.get(r) || 0);

  function autoGroups() {
    const groups = [];
    for (const r of auto.rules) {
      if (auto.tied[r] && groups.length) groups[groups.length - 1].push(r);
      else groups.push([r]);
    }
    return groups;
  }

  function autoChooseRule(cards, p) {
    for (const g of autoGroups()) {
      let best = null;
      for (const r of g) {
        const c = ruleCardIn(r, cards, p);
        if (c && (!best || timesTaken(r, p) < timesTaken(best.rule, p))) best = { card: c, rule: r };
      }
      if (best) return best;
    }
    return null;
  }

  const autoChoose = (cards, p) => { const b = autoChooseRule(cards, p); return b ? b.card : null; };

  function autoLabel(rule) {
    const [k, id] = rule.split(':');
    const g = AUTO_GENERAL.find(([r]) => r === rule);
    if (g) return g[1];
    if (k === 'stat') {
      const s = NS.LevelUp && NS.LevelUp.STATS.find((x) => x.id === id);
      return s ? gameText(s.title) : id;
    }
    const m = NS.Moves && NS.Moves.BY_ID[id];
    return m ? `${gameText(m.name)} · ${typeName(m.type)}` : id;
  }

  // A rule drawn like the game's level-up cards: the icon on its colour, the
  // name and a tag chip. The longer text goes in the tooltip.
  const AUTO_CARDS = {
    evo: ['star', '#ffd23f', tr('Evolución'), tr('Cualquier ataque')],
    'stat-evo': ['star', '#ffd23f', tr('Mejora que evoluciona'), tr('Mejora')],
    'heal-low': ['psmod-heal', '#5fe08a', 'Baya Zidra', tr('Con menos de media vida')],
    set: ['cards', '#ffd23f', 'Moveset', tr('En su orden')],
    up: ['up', '#8fa3c4', tr('Subir de nivel'), tr('Un ataque que tienes')],
    'new-fit': ['fist', '#8fa3c4', tr('Ataque nuevo'), tr('Que pegue bien')],
    new: ['cards', '#8fa3c4', tr('Ataque nuevo'), tr('Cualquiera')],
  };
  const iconHtml = (name, size) => { try { return NS.Icons.html(name, size); } catch { return ''; } };

  function ruleCard(rule) {
    const [k, id] = rule.split(':');
    let icon = '', color = '#8fa3c4', title = id || rule, tag = '', tip = autoLabel(rule);
    if (AUTO_CARDS[rule]) [icon, color, title, tag] = AUTO_CARDS[rule];
    else if (k === 'stat') {
      const st = NS.LevelUp && NS.LevelUp.STATS.find((x) => x.id === id);
      if (st) { icon = st.icon; title = st.title; tag = tr('Mejora'); tip = gameText(st.desc); }
    } else if (k === 'move') {
      const m = NS.Moves && NS.Moves.BY_ID[id];
      if (m) {
        icon = 'move:' + id;
        color = (NS.U && NS.U.TYPE_COLOR && NS.U.TYPE_COLOR[m.type]) || color;
        title = m.name;
        tag = typeName(m.type) + (m.cat ? ' · ' + catName(m.cat) : '');
        tip = m.desc ? gameText(m.desc) : '';
      }
    } else if (k === 'item') {
      const it = NS.Items && NS.Items.BY[id];
      if (it) { icon = id; color = '#c9a0ff'; title = it.name; tag = tr('Objeto'); tip = gameText(it.desc); }
    }
    return `<span class="psa-card" title="${esc(tip)}"><i style="background:${esc(color)}33">${iconHtml(icon, 20)}</i>`
      + `<span class="psa-t"><b>${esc(gameText(title))}</b><small style="background:${esc(color)}">${esc(tag)}</small></span></span>`;
  }

  let autoNote = null;

  function setupAutoPick() {
    const RunUI = NS.RunUI;
    const show = RunUI.showLevelUp;
    RunUI.showLevelUp = function (level, cards, onPick, coop) {
      if (autoNote) autoNote.textContent = '';
      const p = NS.Game.player || me();
      if (!auto.on || !p || !Array.isArray(cards) || typeof onPick !== 'function') return show.apply(this, arguments);
      if (autoTakenFor !== p) { autoTakenFor = p; autoTaken.clear(); }
      let best = null;
      try {
        best = autoChooseRule(cards, p);
        while (!best && auto.fallback === 'reroll' && 1 + (p.rerollBonus || 0) - (p.rerolls || 0) > 0) {
          p.rerolls = (p.rerolls || 0) + 1;
          cards = NS.LevelUp.offer(p);
          best = autoChooseRule(cards, p);
        }
      } catch (err) { console.warn('[psmod] auto-pick', err); }
      const pick = best && best.card;
      if (best) autoTaken.set(best.rule, (autoTaken.get(best.rule) || 0) + 1);
      if (!pick) {
        const out = show.call(this, level, cards, onPick, coop);
        if (autoNote) autoNote.textContent = tr('Auto mejoras: no ha salido nada de tu lista');
        return out;
      }
      toast(`${tr('Auto:')} ${gameText(String(pick.title).replace(/<[^>]*>/g, ''))}`, pick.color);
      if (!coop) { onPick(pick); return; }
      const i = cards.indexOf(pick);
      const out = show.call(this, level, cards, onPick, coop);
      const t0 = performance.now();
      const press = () => {
        const box = document.getElementById('cards');
        if (!box || box.classList.contains('done') || !NS.UI.isOpen('scr-levelup') || performance.now() - t0 > 5000) return;
        RunUI.pick(i);
        setTimeout(press, 100);
      };
      setTimeout(press, 100);
      return out;
    };

    // A button on the level-up screen that opens the list in Settings.
    const add = () => {
      const reroll = document.getElementById('lvl-reroll');
      if (reroll && !document.getElementById('psmod-auto-lvl')) {
        const wrap = document.createElement('div');
        wrap.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:4px;margin-top:8px';
        wrap.innerHTML = '<button id="psmod-auto-lvl" class="btn small ghost" data-sfx="none"></button><p class="note" style="margin:0"></p>';
        wrap.querySelector('button').addEventListener('click', () => showModTab('psmod-set-auto'));
        autoNote = wrap.querySelector('p');
        reroll.after(wrap);
      }
      renderAutoBtns();
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', add);
    else add();
  }

  waitFor(() => NS && NS.RunUI && NS.RunUI.showLevelUp && NS.RunUI.pick && NS.LevelUp && NS.Moves && NS.UI, setupAutoPick);

  function renderAutoBtns() {
    const b = document.getElementById('psmod-auto-lvl');
    if (b) b.textContent = auto.on ? tr('Auto mejoras: sí') : tr('Auto mejoras: no');
    if (panel) { const p = panel.querySelector('[data-a="on"]'); if (p) p.textContent = auto.on ? tr('Activas') : tr('Apagadas'); }
  }

  // The priority list, as shown in the mod's Settings tab.
  function autoHtml() {
    const opt = (v, label) => `<option value="${esc(v)}">${esc(label)}</option>`;
    const free = (r) => !auto.rules.includes(r);
    const byName = (a, b) => gameText(NS.Moves.BY_ID[a].name).localeCompare(gameText(NS.Moves.BY_ID[b].name), locale());
    const allMoves = NS.Moves.ALL.map((d) => d.id).sort(byName);
    const p = inRun() && me();
    const mine = p && p.mon && NS.Moves.poolFor ? NS.Moves.poolFor(p.mon).sort(byName) : [];
    const group = (label, rules) => (rules.length ? `<optgroup label="${esc(label)}">${rules.map((r) => opt(r, autoLabel(r))).join('')}</optgroup>` : '');
    const addOpts = [
      group(tr('General'), AUTO_GENERAL.map(([r]) => r).filter(free)),
      group(tr('Mejoras'), NS.LevelUp.STATS.map((s) => 'stat:' + s.id).filter(free)),
      group(tr('Ataques de tu Pokémon'), mine.map((id) => 'move:' + id).filter(free)),
      group(tr('Todos los ataques'), allMoves.filter((id) => !mine.includes(id)).map((id) => 'move:' + id).filter(free)),
    ].join('');
    const fb = [['manual', tr('Elijo yo')], ['reroll', tr('Cambiar opciones y, si tampoco, elijo yo')]];
    const n = auto.rules.length;
    return tr`
      <ol class="psa-list">${autoRows()}</ol>
      ${n ? '' : tr('<p class="sub">La lista está vacía: añade algo.</p>')}
      <div class="psa-add"><select data-auto="add" aria-label="Añadir">${addOpts}</select><button class="btn small" data-auto="add">Añadir</button></div>
      <div class="psa-add psa-fb"><span>Si no sale nada de la lista:</span><select data-auto="fallback">${fb.map(([v, l]) => `<option value="${v}"${auto.fallback === v ? ' selected' : ''}>${esc(l)}</option>`).join('')}</select></div>
      <p class="sub">Un ataque concreto vale para aprenderlo, subirlo de nivel o evolucionarlo. Con = una línea comparte puesto con la de arriba y se van turnando. En cooperativo verás las cartas un momento antes de que se elija. Lo que se elige sale en un aviso arriba.</p>
      <div class="psa-add"><button class="btn small" data-auto="reset">Restablecer la lista</button></div>`;
  }

  // One row per rule. The number is its place; a rule tied with the one
  // above shows "=" and shares it.
  function autoRows() {
    const n = auto.rules.length;
    let place = 0;
    return auto.rules.map((r, i) => {
      const tied = i > 0 && !!auto.tied[r];
      if (!tied) place++;
      return `<li class="${tied ? 'tied' : ''}"><em class="psa-n">${tied ? '=' : place}</em>${ruleCard(r)}`
        + (i ? `<button class="btn small psa-tie${tied ? ' on' : ''}" data-auto="tie" data-i="${i}" title="${tr('Misma prioridad que la de arriba: se van turnando')}">=</button>` : '')
        + `<button class="btn small" data-auto="up" data-i="${i}"${i ? '' : ' disabled'}>↑</button><button class="btn small" data-auto="down" data-i="${i}"${i < n - 1 ? '' : ' disabled'}>↓</button><button class="btn small" data-auto="del" data-i="${i}">✕</button></li>`;
    }).join('');
  }

  function autoAction(b) {
    const i = +b.dataset.i;
    const r = auto.rules;
    const k = b.dataset.auto;
    if (k === 'reset') auto = Object.assign(AUTO_DEF(), { on: auto.on });
    else if (k === 'add') {
      const v = document.querySelector('#set-body select[data-auto="add"]').value;
      if (v && !r.includes(v)) r.push(v);
    } else if (k === 'up' && i > 0) [r[i - 1], r[i]] = [r[i], r[i - 1]];
    else if (k === 'down' && i < r.length - 1) [r[i + 1], r[i]] = [r[i], r[i + 1]];
    else if (k === 'del') { delete auto.tied[r[i]]; r.splice(i, 1); }
    else if (k === 'tie' && i > 0) { if (auto.tied[r[i]]) delete auto.tied[r[i]]; else auto.tied[r[i]] = true; }
    else return;
    saveAuto();
  }

  // Styles of the ordered lists (auto-pick, movesets) and the Mod tab rows.
  let psaStyled = false;
  function psaStyle() {
    if (psaStyled) return;
    psaStyled = true;
    const style = document.createElement('style');
    style.textContent = `
.psa-list{margin:0 0 8px;padding:0;list-style:none;display:grid;gap:4px;counter-reset:psa}
.psa-list li{display:flex;align-items:center;gap:4px;min-width:0;padding:4px 5px;border-radius:6px;background:rgba(255,255,255,.06);counter-increment:psa}
.psa-list li::before{content:counter(psa);flex:0 0 auto;color:var(--gold,#ffd23f);font-weight:700;min-width:12px}
.psa-list li:has(.psa-n)::before{content:none}
.psa-n{flex:0 0 auto;min-width:12px;font-style:normal;font-weight:700;color:var(--gold,#ffd23f)}
.psa-list li.tied{margin-top:-3px;border-top-left-radius:0;border-top-right-radius:0;box-shadow:inset 3px 0 0 var(--gold,#ffd23f)}
.psa-list li>.psa-tie.on{border-color:var(--gold,#ffd23f)!important;color:var(--gold,#ffd23f)}
.psa-card{flex:1 1 auto;min-width:0;display:flex;align-items:center;gap:6px}
.psa-card i{flex:0 0 auto;width:28px;height:28px;border-radius:7px;display:grid;place-items:center}
.psa-card i img,.psa-card i svg,.psa-card i canvas{display:block}
.psa-t{display:grid;justify-items:start;gap:1px;min-width:0}
.psa-t b{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.15}
.psa-t small{max-width:100%;overflow:hidden;text-overflow:ellipsis;font-size:11px;font-weight:700;line-height:1.35;color:#10131a;text-shadow:none;padding:0 6px;border-radius:4px;white-space:nowrap}
.psa-list li>.btn.small{flex:0 0 28px!important;width:28px!important;min-width:0!important;height:28px!important;padding:0!important;margin:0!important;font-size:13px;line-height:1}
.psa-add{display:flex;align-items:center;gap:6px;min-width:0;margin:6px 0}
.psa-add>.btn.small{flex:0 0 auto;min-width:0;margin:0}
.psa-add.psa-fb{display:grid;grid-template-columns:minmax(0,1fr);gap:4px}
.psa-fb span{color:var(--muted)}
.psa-add select{flex:1 1 auto;width:auto;min-width:0;font:inherit;color:#fff;background:#0b1838;border:2px solid var(--edge,#5b83d6);border-radius:6px;height:32px}
.psa-step{display:flex;align-items:center;gap:6px}
.psa-step b{min-width:42px;text-align:center}`;
    document.head.appendChild(style);
  }

  // ------------------------------------------------------------- items
  // Picking up an item while holding another opens "Quedarme con / Cambiar
  // a" (RunUI.showItemChoice(cur, next, take)). With a list of favourite
  // items, the one higher on it is taken at once: keep yours if it ranks
  // higher, switch if the new one does. Items off the list still ask.
  const itemPrefs = load('itemPrefs', []);
  const itemRank = (id) => { const i = itemPrefs.indexOf(id); return i < 0 ? Infinity : i; };

  function setupItemPrefs() {
    const RunUI = NS.RunUI;
    const show = RunUI.showItemChoice;
    RunUI.showItemChoice = function (cur, next, take) {
      const a = itemRank(cur), b = itemRank(next);
      if ((a === Infinity && b === Infinity) || typeof take !== 'function') return show.apply(this, arguments);
      const keep = a <= b;
      const name = gameText((NS.Items.BY[keep ? cur : next] || {}).name || '');
      toast(keep ? `${tr('Te quedas con')} ${name}` : `${tr('Cambias a')} ${name}`, '#c9a0ff');
      take(keep ? cur : next);
    };
  }

  waitFor(() => NS && NS.RunUI && NS.RunUI.showItemChoice && NS.Items && NS.Items.BY, setupItemPrefs);

  function itemsHtml() {
    const list = (NS.Items && NS.Items.LIST) || [];
    const rest = list.filter((it) => !itemPrefs.includes(it.id));
    const n = itemPrefs.length;
    return `<ol class="psa-list">${itemPrefs.map((id, i) => `<li>${ruleCard('item:' + id)}
        <button class="btn small" data-item="up" data-i="${i}"${i ? '' : ' disabled'}>↑</button><button class="btn small" data-item="down" data-i="${i}"${i < n - 1 ? '' : ' disabled'}>↓</button><button class="btn small" data-item="del" data-i="${i}">✕</button></li>`).join('')}</ol>
      ${n ? '' : `<p class="sub">${tr('Sin objetos en la lista: el juego te pregunta siempre.')}</p>`}
      ${rest.length ? `<div class="psa-add"><select data-item="pick" aria-label="${tr('Añadir')}">${rest.map((it) => `<option value="${esc(it.id)}">${esc(gameText(it.name))}</option>`).join('')}</select><button class="btn small" data-item="add">${tr('Añadir')}</button></div>` : ''}`;
  }

  function itemAction(b) {
    const i = +b.dataset.i;
    const r = itemPrefs;
    const k = b.dataset.item;
    if (k === 'add') {
      const v = document.querySelector('#set-body select[data-item="pick"]').value;
      if (v && !r.includes(v)) r.push(v);
    } else if (k === 'up' && i > 0) [r[i - 1], r[i]] = [r[i], r[i - 1]];
    else if (k === 'down' && i < r.length - 1) [r[i + 1], r[i]] = [r[i], r[i + 1]];
    else if (k === 'del') r.splice(i, 1);
    else return;
    save('itemPrefs', r);
    renderModTab();
  }

  // ------------------------------------------------------------ movesets
  // Each Pokémon you own can have a moveset: the moves auto-pick goes for,
  // in order (the 'set' rule), and the only new moves it takes. It's picked
  // on the Pokémon's card in the Pokémon screen (#dex-detail) and, during a
  // run, in the Mod tab. The card's move icons (p.move-icons) are drawn from
  // Moves.poolFor(mon), so the n-th icon is the n-th move of the pool;
  // clicking one adds or removes it. The pool includes the TMs it was taught,
  // which the nature panel above lists again in a .move-icons of its own.
  const poolRow = (detail) => detail.querySelector('p.move-icons') || [...detail.querySelectorAll('.move-icons')].pop();
  const learnable =(mon) => [...new Set([NS.startMoveOf ? NS.startMoveOf(mon.dex) : NS.Moves.startFor(mon), ...NS.Moves.poolFor(mon)])]
    .filter((id) => NS.Moves.BY_ID[id]);

  function setMoveset(dex, list) {
    if (list.length) movesets[dex] = list; else delete movesets[dex];
    save('movesets', movesets);
    enhanceDetail();
    renderModTab();
  }

  function movesetHtml(mon) {
    const set = movesetOf(mon.dex);
    const name = (id) => esc(gameText(NS.Moves.BY_ID[id].name));
    const rest = learnable(mon).filter((id) => !set.includes(id));
    return `<div class="psmod-set" data-dex="${mon.dex}">
      <ol class="psa-list">${set.map((id, i) => `<li>${ruleCard('move:' + id)}
        <button class="btn small" data-set="up" data-i="${i}"${i ? '' : ' disabled'}>↑</button><button class="btn small" data-set="down" data-i="${i}"${i < set.length - 1 ? '' : ' disabled'}>↓</button><button class="btn small" data-set="del" data-i="${i}">✕</button></li>`).join('')}</ol>
      ${set.length ? '' : `<p class="sub">${tr('Sin moveset: las auto mejoras pueden coger cualquier ataque.')}</p>`}
      ${rest.length ? `<div class="psa-add"><select data-set="pick" aria-label="${tr('Añadir')}">${rest.map((id) => `<option value="${id}">${name(id)}</option>`).join('')}</select><button class="btn small" data-set="add">${tr('Añadir')}</button></div>` : ''}
    </div>`;
  }

  // The Pokémon on the card: its number sits right above the name.
  function detailMon(detail) {
    const h = detail.querySelector('h3');
    if (!h || !detail.querySelector('.move-icons') || !NS || !NS.DEX) return null;
    const name = h.textContent.trim();
    const n = parseInt(((h.previousElementSibling || {}).textContent || '').replace(/^\D+/, ''), 10);
    const byNo = NS.DEX.find((p) => p.dex === n);
    return byNo && byNo.name === name ? byNo : NS.DEX.find((p) => p.name === name) || byNo || null;
  }

  function enhanceDetail() {
    const detail = document.getElementById('dex-detail');
    if (!detail || !NS || !NS.Moves) return;
    const mon = detailMon(detail);
    const old = detail.querySelector('.psmod-setwrap');
    if (!mon) { if (old) old.remove(); return; }
    const set = movesetOf(mon.dex);
    const row = poolRow(detail);
    const icons = [...row.children];
    const pool = NS.Moves.poolFor(mon);
    if (icons.length === pool.length) icons.forEach((el, i) => {
      const n = set.indexOf(pool[i]) + 1;
      el.classList.add('psmod-mi');
      el.classList.toggle('on', n > 0);
      el.dataset.psmodId = pool[i];
      el.dataset.psmodN = n || '';
    });
    const wrap = old || document.createElement('div');
    wrap.className = 'psmod-setwrap';
    wrap.innerHTML = `<b>${tr('Moveset para las auto mejoras')}</b><small>${tr('Pulsa los iconos de arriba o añádelos aquí. El orden es la prioridad.')}</small>${movesetHtml(mon)}`;
    if (wrap.previousElementSibling !== row) row.after(wrap);
  }

  function setupMovesets() {
    psaStyle();
    const style = document.createElement('style');
    style.textContent = `
#dex-detail .psmod-mi{cursor:pointer;position:relative;border-radius:4px;outline:2px solid transparent}
#dex-detail .psmod-mi:hover{outline-color:rgba(255,210,63,.5)}
#dex-detail .psmod-mi.on{outline-color:var(--gold,#ffd23f)}
#dex-detail .psmod-mi.on::after{content:attr(data-psmod-n);position:absolute;right:-5px;top:-6px;font-size:10px;font-weight:700;line-height:12px;
  color:#0b1838;background:var(--gold,#ffd23f);border-radius:6px;padding:0 3px}
#dex-detail .psmod-setwrap{display:grid;grid-template-columns:minmax(0,1fr);gap:4px;align-self:stretch;width:100%;min-width:0;box-sizing:border-box;margin:4px 0 8px;text-align:left}
#dex-detail .psmod-setwrap>small{color:var(--muted);font-size:11px;white-space:normal;overflow-wrap:anywhere}
#dex-detail .psa-list li{font-size:12px}
#dex-detail .psa-add select{height:28px;font-size:12px}`;
    document.head.appendChild(style);
    const detail = document.getElementById('dex-detail');
    detail.addEventListener('click', (e) => {
      const mi = e.target.closest('.psmod-mi');
      const mon = mi && detailMon(detail);
      if (!mon) return;
      const id = mi.dataset.psmodId;
      const set = movesetOf(mon.dex);
      setMoveset(mon.dex, set.includes(id) ? set.filter((x) => x !== id) : [...set, id]);
    });
    new MutationObserver(enhanceDetail).observe(detail, { childList: true });
    enhanceDetail();
  }

  waitFor(() => NS && NS.Moves && NS.Moves.poolFor && NS.DEX && document.getElementById('dex-detail'), setupMovesets);

  // Buttons of a moveset, wherever it is shown (card or Mod tab).
  document.addEventListener('click', (e) => {
    const b = e.target.closest('.psmod-set button[data-set]');
    if (!b) return;
    const box = b.closest('.psmod-set');
    const dex = +box.dataset.dex;
    const set = movesetOf(dex).slice();
    const i = +b.dataset.i;
    const k = b.dataset.set;
    if (k === 'add') { const v = box.querySelector('select[data-set="pick"]').value; if (v && !set.includes(v)) set.push(v); }
    else if (k === 'up' && i > 0) [set[i - 1], set[i]] = [set[i], set[i - 1]];
    else if (k === 'down' && i < set.length - 1) [set[i + 1], set[i]] = [set[i], set[i + 1]];
    else if (k === 'del') set.splice(i, 1);
    else return;
    setMoveset(dex, set);
  });
  // Keys pressed on its select are not for the game.
  for (const ev of ['keydown', 'keyup']) document.addEventListener(ev, (e) => { if (e.target.closest && e.target.closest('.psmod-set select')) e.stopPropagation(); });

  // --------------------------------------------------------- connection
  // In co-op the game talks over a direct WebRTC link. When that link drops,
  // Net reports the peer as 'failed'/'closed' and Coop throws the player out
  // at once, even though the host's Net retries the link 15 s later. We hold
  // those reports for a grace period and let them through only if the link
  // didn't come back. Players who leave on purpose are already gone from
  // Coop by then, so for them nothing is held.
  // Side effect: enemies that appear while the link is down stay invisible
  // (and harmless) for whoever was disconnected.
  const GRACE_MS = 30000;
  const NETLOG_MAX = 60;

  function netLog(text) {
    const log = load('netlog', []);
    log.unshift({ at: Date.now(), text });
    save('netlog', log.slice(0, NETLOG_MAX));
  }

  function peerName(uid) {
    const C = NS.Coop;
    if (C && NS.Net && uid === NS.Net.hostUid) return tr('el anfitrión');
    const m = C && C.mate && C.mate(uid);
    return (m && m.name) || tr('un jugador');
  }

  function stillInGame(uid) {
    const C = NS.Coop;
    if (!C || !C.active) return false;
    if (!C.isHost) return uid === (NS.Net && NS.Net.hostUid);
    const m = C.mate && C.mate(uid);
    return !!(m && m.connected);
  }

  function patchNet(Net) {
    const onPeer = Net.onPeer;
    Net.onPeer = function (cb) { return onPeer.call(this, graceWrap(cb)); };
  }

  // The deadline counts from the first drop and only a 'direct' link ends the
  // hold early. Each retry of the host goes 'connecting' -> 'failed' again,
  // and that used to restart the wait, so a link that never came back left
  // both players frozen for good (e.g. on the level-up screen, each one
  // "waiting" for the other). Past the deadline the game gets the drop and
  // handles it as it would without the mod; an attempt already under way
  // gets up to GRACE_EXTRA_MS more to finish.
  const GRACE_EXTRA_MS = 10000;

  function graceWrap(cb) {
    const held = new Map(); // uid -> { timer, name, until }
    const release = (uid, self) => {
      const h = held.get(uid);
      if (!h) return;
      const now = NS.Net.mode(uid);
      if (now === 'direct') { clearTimeout(h.timer); held.delete(uid); return; }
      if (now === 'connecting' && Date.now() < h.until) { h.timer = setTimeout(() => release(uid, self), 1000); return; }
      held.delete(uid);
      netLog(tr`No se pudo recuperar la conexión con ${h.name} (${now}).`);
      toast(tr`No se pudo recuperar la conexión con ${h.name}`, '#ff5f6d');
      cb.call(self, uid, now === 'connecting' ? 'failed' : now);
    };
    return function (uid, mode) {
      if (mode === 'direct' && held.has(uid)) {
        clearTimeout(held.get(uid).timer);
        held.delete(uid);
        netLog(tr`Conexión con ${peerName(uid)} recuperada.`);
        toast(tr`Conexión con ${peerName(uid)} recuperada`, '#5fe08a');
        return cb.apply(this, arguments);
      }
      if (held.has(uid)) return; // retries in between: still within the same wait
      if ((mode === 'failed' || mode === 'closed') && stillInGame(uid)) {
        const name = peerName(uid);
        netLog(tr`Conexión con ${name} cortada (${mode}). Esperando a que vuelva.`);
        toast(tr`Se ha cortado la conexión con ${name}`, '#ffcb3d', tr`Reconectando… (hasta ${GRACE_MS / 1000} s)`);
        const self = this;
        held.set(uid, { name, until: Date.now() + GRACE_MS + GRACE_EXTRA_MS, timer: setTimeout(() => release(uid, self), GRACE_MS) });
        return;
      }
      return cb.apply(this, arguments);
    };
  }

  // What the browser did to the tab: these are the usual silent kicks.
  const wasDiscarded = !!document.wasDiscarded;
  if (wasDiscarded) netLog(tr('El navegador había cerrado esta pestaña para ahorrar memoria y la ha recargado.'));
  document.addEventListener('freeze', () => netLog(tr('El navegador ha congelado la pestaña (estaba en segundo plano).')));
  document.addEventListener('resume', () => netLog(tr('La pestaña ha vuelto después de estar congelada.')));
  addEventListener('offline', () => { netLog(tr('Se ha perdido la conexión a internet.')); toast(tr('Sin conexión a internet'), '#ff5f6d'); });
  addEventListener('online', () => netLog(tr('Ha vuelto la conexión a internet.')));

  function toggleNetLog() {
    if (!sumEl) return;
    if (!sumEl.hidden && sumEl.dataset.view === 'log') { sumEl.hidden = true; return; }
    const log = load('netlog', []);
    sumEl.dataset.view = 'log';
    sumEl.innerHTML = tr`
      <div class="top"><h3>Registro de conexión</h3><button data-act="close">Cerrar</button></div>
      ${log.length ? `<table><tbody>${log.slice(0, 30).map((l) => {
        const d = new Date(l.at);
        return `<tr><td>${d.getDate()}/${d.getMonth() + 1} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}</td><td style="white-space:normal">${esc(l.text)}</td></tr>`;
      }).join('')}</tbody></table>` : tr('<p class="sub">No ha pasado nada raro todavía.</p>')}
      <p class="sub">Si os echa de una partida, abrid esto (Alt + L) y mirad la última línea: dice si fue la conexión entre vosotros, internet o el navegador.</p>`;
    sumEl.hidden = false;
  }

  // ------------------------------------------------------------- buffs
  // Your current multipliers, and what's shared in co-op: team XP is the
  // average of everyone's Aprendizaje divided by (1 + 0.6 per extra player),
  // and enemies get +30 % HP and +75 % spawn rate per extra player.
  function toggleBuffs() {
    showBuffs = !showBuffs;
    save('showBuffs', showBuffs);
    render();
  }

  const pctOf = (m) => { const v = Math.round(Math.abs(m - 1) * 100); return v ? `${m >= 1 ? '+' : '-'}${v} %` : '0 %'; };
  const dec = (v, d = 2) => v.toFixed(d).replace('.', locale() === 'es-ES' ? ',' : '.');
  const kv = (k, v) => `<div class="kv"><span>${k}</span><b>${v}</b></div>`;

  function buffsHtml() {
    const p = me();
    if (!p) return '';
    const out = [];
    const taken = p.statsTaken || {};
    const n = (id) => (taken[id] ? ` (${taken[id]})` : '');
    out.push(tr('<h4>TUS MEJORAS</h4>'));
    out.push(kv(tr`Daño${n('atk')}`, `×${dec(p.atkMul || 1)}`));
    out.push(kv(tr`Recarga${n('cd')}`, pctOf(p.cdMul || 1)));
    out.push(kv(tr`Velocidad${n('spd')}`, pctOf(p.spdMul || 1)));
    out.push(kv(tr`Reducción de daño${n('def')}`, `${Math.round((p.reduction || 0) * 100)} %`));
    out.push(kv(tr`Regeneración${n('rgn')}`, tr`${dec(p.regen || 0, 1)} vida/s`));
    out.push(kv(tr('Críticos (×1,5)'), `${Math.round((p.critChance || 0) * 100)} %`));
    out.push(kv(tr`Imán${n('mag')}`, pctOf((p.magnet || 78) / 78)));
    out.push(kv(tr`Experiencia${n('xp')}`, pctOf(p.xpMul || 1)));
    const B = p.buffs || {};
    const BN = { atk: tr('ataque'), patk: tr('ataque físico'), satk: tr('ataque especial'), spd: tr('velocidad'), def: tr('defensa'), regen: tr('regeneración') };
    for (const k of Object.keys(BN)) {
      const b = B[k];
      if (!b || !b.n) continue;
      const val = k === 'regen' ? `+${dec(b.n * b.amount, 1)}/s` : `+${Math.round(b.n * b.amount * 100)} %`;
      out.push(kv(tr`Mejora de ${BN[k]} (${b.n}×)`, `${val}${b.t > 0 ? ` - ${Math.ceil(b.t)} s` : ''}`));
    }
    if (p.item && NS.Items && NS.Items.BY[p.item]) out.push(kv(tr('Objeto'), esc(gameText(NS.Items.BY[p.item].name))));

    const C = NS.Coop;
    if (C && C.active) {
      const mates = C.mates.filter((m) => m.connected);
      const team = [{ name: tr('Tú'), xp: p.xpMul || 1, mag: (p.magnet || 78) / 78 }]
        .concat(mates.map((m) => {
          const net = (m.pl && m.pl.net) || {};
          return { name: m.name, xp: net.xpMul || 1, mag: (net.mag || 78) / 78 };
        }));
      const count = team.length;
      const avg = team.reduce((a, t) => a + t.xp, 0) / count;
      const penalty = 1 + 0.6 * (count - 1);
      out.push(tr('<h4>EQUIPO</h4>'));
      for (const t of team) out.push(kv(esc(t.name), tr`XP ${pctOf(t.xp)} - imán ${pctOf(t.mag)}`));
      out.push(kv(tr('Aprendizaje medio del equipo'), pctOf(avg)));
      out.push(kv(tr`Reparto entre ${count} jugadores`, `÷${dec(penalty, 1)}`));
      out.push(kv(tr('Experiencia que recibís'), `×${dec(avg / penalty)}`));
      out.push(kv(tr('Vida de los enemigos'), pctOf(1 + 0.3 * (count - 1))));
      out.push(kv(tr('Enemigos que salen'), pctOf(1 + 0.75 * (count - 1))));
    }
    return out.join('');
  }

  // ------------------------------------------------------------ minimap
  // Everything is read straight from the game's modules each frame: World for
  // terrain, EnemyMgr / Pickups / Rift / Events for markers, Coop for mates.
  const MAP_PX = 184;
  // World units from centre to edge. The game keeps at most 400 map chunks
  // (512 units each) in memory and throws the oldest away; reading terrain and
  // props too far out made it drop and rebuild chunks nonstop (the old 5/5
  // zoom lagged and reset chests and rocks). 2400 stays near 100 chunks.
  const RANGES = [800, 1200, 1800, 2400];
  let mapRange = load('mapRange', 1200);
  if (!RANGES.includes(mapRange)) mapRange = 1200;
  let mapShown = load('mapShown', true);
  let mapEl = null, mapCtx = null, rangeLabel = null, lastMapDraw = 0;
  let props = [], lastPropScan = 0;

  // Terrain sampling (World.kindAt) costs ~10µs per call, so samples are cached
  // per cell size and filled in a bounded number per frame. The cache is
  // dropped whenever the world changes (new run, biome, arena).
  const terrain = new Map(); // cellSize -> Map(key -> colour | null)
  let terrainSig = '';
  const SAMPLE_BUDGET = 1200;
  const LIQUID = { water: '#3f86d8', lava: '#ff6a2b', ice: '#bfe8ff', poison: '#a35ad8', swamp: '#5e8a4a' };

  const cellFor = (range) => (range <= 1200 ? 32 : 64);

  function terrainColor(x, y) {
    const k = NS.World.kindAt(x, y);
    if (k === 'wall') return '#16241c';
    if (k === 'liquid') return LIQUID[NS.World.liquidKind(x, y)] || '#4fb4ff';
    return null;
  }

  function buildMap() {
    const style = document.createElement('style');
    style.textContent = `
#psmod-map{position:fixed;z-index:99998;width:${MAP_PX + 12}px;font:12px/1.2 var(--font,'Pixelify',system-ui,sans-serif);color:#fff;
  background:linear-gradient(#2c519f,#1a3170);border:2px solid #f4f8ff;outline:2px solid #0b1838;border-radius:8px;
  box-shadow:inset 0 0 0 2px #5b83d6,0 4px 0 #0a1430;user-select:none;-webkit-user-select:none}
#psmod-map.psmod-hidden{display:none}
#psmod-map .ps-head{display:flex;align-items:center;gap:4px;padding:5px 7px 4px;cursor:move;font-weight:700;letter-spacing:.06em}
#psmod-map .ps-head b{flex:1;color:#ffd23f}
#psmod-map .ps-range{font-weight:600;color:#b9cbf0;margin-right:2px}
#psmod-map button{font:inherit;font-weight:700;color:#fff;background:#0b1838;border:2px solid #5b83d6;border-radius:4px;
  min-width:22px;height:20px;cursor:pointer;padding:0 4px;line-height:1}
#psmod-map button:hover{border-color:#ffd23f}
#psmod-map canvas{display:block;margin:0 6px 6px;width:${MAP_PX}px;height:${MAP_PX}px;border-radius:4px;background:#41604f}`;
    document.head.appendChild(style);

    mapEl = document.createElement('div');
    mapEl.id = 'psmod-map';
    mapEl.className = 'psmod-hidden';
    mapEl.innerHTML = tr`
      <div class="ps-head"><b>MAPA</b><span class="ps-range"></span>
        <button data-z="1" title="Ver más lejos (rueda del ratón)">-</button>
        <button data-z="-1" title="Ver más cerca (rueda del ratón)">+</button>
      </div>
      <canvas></canvas>`;
    document.body.appendChild(mapEl);
    rangeLabel = mapEl.querySelector('.ps-range');
    const cv = mapEl.querySelector('canvas');
    const dpr = Math.max(1, Math.min(3, devicePixelRatio || 1));
    cv.width = cv.height = Math.round(MAP_PX * dpr);
    mapCtx = cv.getContext('2d');
    mapCtx.scale(dpr, dpr);

    const zoom = (dir) => {
      const i = Math.max(0, Math.min(RANGES.length - 1, RANGES.indexOf(mapRange) + dir));
      mapRange = RANGES[i];
      save('mapRange', mapRange);
      renderRange();
    };
    mapEl.querySelector('.ps-head').addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      zoom(+b.dataset.z);
      b.blur();
    });
    cv.addEventListener('wheel', (e) => { e.preventDefault(); e.stopPropagation(); zoom(e.deltaY > 0 ? 1 : -1); }, { passive: false });
    for (const ev of ['pointerdown', 'mousedown', 'touchstart']) mapEl.addEventListener(ev, (e) => e.stopPropagation());

    makeDraggable(mapEl, mapEl.querySelector('.ps-head'), 'mapPos', () => ({ x: innerWidth - MAP_PX - 28, y: 64 }));
    renderRange();
    requestAnimationFrame(mapLoop);
  }

  function renderRange() {
    if (rangeLabel) rangeLabel.textContent = `${RANGES.indexOf(mapRange) + 1}/${RANGES.length}`;
  }

  function mapLoop(now) {
    requestAnimationFrame(mapLoop);
    const visible = mapShown && inRun();
    mapEl.classList.toggle('psmod-hidden', !visible);
    if (!visible || now - lastMapDraw < 60) return;
    lastMapDraw = now;
    try { drawMap(); } catch (err) { console.warn('[psmod] minimap', err); }
  }

  function drawMap() {
    const p = me();
    const g = mapCtx;
    const H = MAP_PX / 2;
    const s = H / mapRange;
    const cx = p.x, cy = p.y;
    const toX = (x) => H + (x - cx) * s;
    const toY = (y) => H + (y - cy) * s;
    const inside = (x, y) => Math.abs(x - cx) <= mapRange && Math.abs(y - cy) <= mapRange;
    // Project onto the map border, for markers worth chasing when off-map.
    const edge = (x, y) => {
      const dx = x - cx, dy = y - cy, m = Math.max(Math.abs(dx), Math.abs(dy)) || 1;
      const k = Math.min(1, (mapRange - 6 / s) / m);
      return [H + dx * k * s, H + dy * k * s];
    };

    g.clearRect(0, 0, MAP_PX, MAP_PX);
    g.fillStyle = '#41604f';
    g.fillRect(0, 0, MAP_PX, MAP_PX);

    // Terrain.
    const W = NS.World;
    const sig = `${runId}|${String(W.biome)}|${W.arena ? 1 : 0}`;
    if (sig !== terrainSig) { terrain.clear(); terrainSig = sig; }
    const cell = cellFor(mapRange);
    let cache = terrain.get(cell);
    if (!cache) terrain.set(cell, (cache = new Map()));
    const c0x = Math.floor((cx - mapRange) / cell), c1x = Math.floor((cx + mapRange) / cell);
    const c0y = Math.floor((cy - mapRange) / cell), c1y = Math.floor((cy + mapRange) / cell);
    const px = Math.ceil(cell * s) + 0.5;
    let budget = SAMPLE_BUDGET;
    for (let j = c0y; j <= c1y; j++) {
      for (let i = c0x; i <= c1x; i++) {
        const key = i + ',' + j;
        let col = cache.get(key);
        if (col === undefined) {
          if (budget-- <= 0) continue;
          col = terrainColor(i * cell + cell / 2, j * cell + cell / 2);
          cache.set(key, col);
        }
        if (col) { g.fillStyle = col; g.fillRect(toX(i * cell), toY(j * cell), px, px); }
      }
    }

    // What the camera currently shows.
    const C = NS.Camera;
    g.strokeStyle = '#ffffff';
    g.lineWidth = 1;
    g.strokeRect(toX(C.left()) + 0.5, toY(C.top()) + 0.5, C.w * s, C.h * s);

    const dot = (x, y, r, fill, ring) => {
      g.beginPath();
      g.arc(x, y, r, 0, Math.PI * 2);
      g.fillStyle = fill;
      g.fill();
      if (ring) { g.lineWidth = 1.5; g.strokeStyle = ring; g.stroke(); }
    };

    // Pickups worth walking to (xp gems and coins would just be noise).
    const KIND = NS.Pickups.KIND || {};
    for (const q of NS.Pickups.all()) {
      if (q.kind === 'xp' || q.kind === 'xpBig' || q.kind === 'coin' || !inside(q.x, q.y)) continue;
      const col = (KIND[q.kind] && KIND[q.kind].color) || '#ffd23f';
      const x = toX(q.x), y = toY(q.y);
      g.fillStyle = '#0b1838';
      g.fillRect(x - 3, y - 3, 6, 6);
      g.fillStyle = col;
      g.fillRect(x - 2, y - 2, 4, 4);
    }

    // Chests, big chests and altars. Scanning props is slower than the rest,
    // so the list is refreshed twice a second.
    const now = performance.now();
    if (now - lastPropScan > 500) {
      lastPropScan = now;
      props = [];
      const r = mapRange;
      for (const q of W.propsInCircle(cx, cy, r) || []) if (q.type === 'chest') props.push(q);
      for (const q of (W.specialsNear && W.specialsNear(cx, cy, r)) || []) if (q.type === 'bigchest' || q.type === 'altar') props.push(q);
    }
    for (const q of props) {
      if (q.used || q.open || q.hp <= 0 || !inside(q.x, q.y)) continue;
      const x = toX(q.x), y = toY(q.y);
      if (q.type === 'altar') {
        g.save(); g.translate(x, y); g.rotate(Math.PI / 4);
        g.fillStyle = '#7fe0ff'; g.strokeStyle = '#0b1838'; g.lineWidth = 1.5;
        g.fillRect(-3, -3, 6, 6); g.strokeRect(-3, -3, 6, 6);
        g.restore();
        continue;
      }
      const h = q.type === 'bigchest' ? 4.5 : 3;
      g.fillStyle = '#0b1838';
      g.fillRect(x - h - 1, y - h - 1, 2 * h + 2, 2 * h + 2);
      g.fillStyle = q.type === 'bigchest' ? '#ffd23f' : '#c98a3c';
      g.fillRect(x - h, y - h, 2 * h, 2 * h);
    }

    // Enemies: plain ones as small red dots, special ones bigger and pinned to
    // the border when they are out of range.
    const special = [];
    for (const e of NS.EnemyMgr.all()) {
      if (e.dead) continue;
      if (e.boss || e.legend || e.judge || e.shiny || e.golden || e.behavior === 'thief') { special.push(e); continue; }
      if (!inside(e.x, e.y)) continue;
      g.fillStyle = '#ff5f6d';
      g.fillRect(toX(e.x) - 1, toY(e.y) - 1, 2.5, 2.5);
    }
    const pulse = 5 + 3 * Math.sin(performance.now() / 160);
    for (const e of special) {
      const [x, y] = edge(e.x, e.y);
      if (e.shiny || e.golden) {
        g.beginPath();
        g.arc(x, y, pulse + 3, 0, Math.PI * 2);
        g.lineWidth = 1.5;
        g.strokeStyle = e.shiny ? '#7fe0ff' : '#ffd23f';
        g.stroke();
      }
      if (e.boss || e.legend || e.judge) dot(x, y, 5, e.legend || e.judge ? '#c47bff' : '#ff3048', '#ffffff');
      else if (e.shiny) dot(x, y, 4, '#7fe0ff', '#ffffff');
      else dot(x, y, 3.5, '#ffd23f', '#0b1838');
    }

    // Rift portal and map events (golden thief and similar).
    const rift = NS.Rift.rift;
    if (rift && typeof rift.x === 'number') {
      const [x, y] = edge(rift.x, rift.y);
      g.lineWidth = 2.5;
      g.strokeStyle = '#c47bff';
      g.beginPath(); g.arc(x, y, 5, 0, Math.PI * 2); g.stroke();
    }
    const ev = NS.Events.current;
    if (ev && typeof ev.x === 'number') {
      const [x, y] = edge(ev.x, ev.y);
      g.save(); g.translate(x, y); g.rotate(Math.PI / 4);
      g.fillStyle = '#ffd23f'; g.strokeStyle = '#0b1838'; g.lineWidth = 1.5;
      g.fillRect(-4, -4, 8, 8); g.strokeRect(-4, -4, 8, 8);
      g.restore();
    }

    // Mates, then me on top as an arrow pointing where I'm walking.
    if (NS.Coop.active) {
      for (const m of NS.Coop.players()) {
        if (m === p) continue;
        const [x, y] = edge(m.x, m.y);
        const down = m.dead || (m.net && m.net.dead);
        if (down) {
          g.beginPath();
          g.arc(x, y, pulse + 4, 0, Math.PI * 2);
          g.lineWidth = 2;
          g.strokeStyle = '#ff5f6d';
          g.stroke();
        }
        dot(x, y, 4.5, down ? '#5b6b88' : m.tagColor || '#5fc8ff', '#0b1838');
      }
    }
    const a = typeof p.moveAngle === 'number' ? p.moveAngle : -Math.PI / 2;
    g.save();
    g.translate(H, H);
    g.rotate(a);
    g.beginPath();
    g.moveTo(7, 0); g.lineTo(-5, -5); g.lineTo(-2, 0); g.lineTo(-5, 5); g.closePath();
    g.fillStyle = '#ffffff';
    g.fill();
    g.lineWidth = 1.5;
    g.strokeStyle = p.tagColor || '#ffd23f';
    g.stroke();
    g.restore();
  }

  // ------------------------------------------------------------ gacha
  // Skip: GachaUI awaits Slots.play(canvas, results) before showing the cards;
  // the pull itself is already rolled and saved by then, so resolving early
  // only cuts the slot-machine show. Slots.stop() halts its animation; the
  // abandoned play() then rejects on its own, which we swallow.
  //
  // Pull all: we trigger the game's own x1 pull (so it saves, checks
  // achievements and shows the cards as usual) and, for that one call, make
  // Gacha.pull spend every ticket instead: x10 tickets first, then normal
  // tickets in tens (keeping the "x10 guarantees an epic" rule), then singles.
  //
  // Nacional: one more banner tab. Its pulls go to the first region you
  // haven't completed (Kanto, then Johto...), checked again after every pull,
  // so no ticket goes to a region you already have and tickets left over once
  // everything is complete stay unspent. Tens are pulled as tens only while
  // that region misses at least 10 (they can't complete it early, and the x10
  // keeps its epic); closer to the end it goes one by one. An x10 ticket can't
  // be split, so near the end it's only used when no normal ticket is left.
  let skipGacha = load('skipGacha', false);
  let gachaNat = load('gachaNat', false);
  let pullAllArmed = false, forceSkip = false, revealBudget = null;

  const pullsAvailable = () => {
    const t = (NS.DB && NS.DB.save && NS.DB.save.tickets) || {};
    return (t.t1 || 0) + 10 * (t.t10 || 0);
  };

  // What the gacha can give in a region (the game skips Pokémon without sprite).
  const gachaPool = (gen) => NS.DEX.filter((p) => p.gen === gen && (!NS.SPRITE_META || NS.SPRITE_META[p.dex]));
  function natTarget(sv) {
    const owned = (sv && sv.owned) || {};
    for (const b of NS.Gacha.BANNERS) {
      const missing = gachaPool(b.gen).filter((p) => !owned[p.dex]).length;
      if (missing) return { gen: b.gen, missing };
    }
    return null;
  }

  function setupGacha() {
    const { Slots, Gacha, Audio } = NS;

    const pull = Gacha.pull;
    Gacha.pull = function (save, n, gen, kind) {
      const all = pullAllArmed;
      pullAllArmed = false;
      if (!all && !gachaNat) return pull.apply(this, arguments);
      const t = save.tickets || {};
      const out = [];
      const take = (count, g, k) => { const r = pull.call(this, save, count, g, k); if (r) out.push(...r); return !!r; };
      const t1 = () => t.t1 || 0, t10 = () => t.t10 || 0;
      if (!gachaNat) {
        while (t10() >= 1 && take(10, gen, 't10'));
        while (t1() >= 10 && take(10, gen, 't1'));
        while (t1() >= 1 && take(1, gen, 't1'));
      } else if (all) {
        for (let g; (g = natTarget(save));) {
          const ok = g.missing >= 10
            ? (t10() >= 1 && take(10, g.gen, 't10')) || (t1() >= 10 && take(10, g.gen, 't1')) || (t1() >= 1 && take(1, g.gen, 't1'))
            : (t1() >= 1 && take(1, g.gen, 't1')) || (t10() >= 1 && take(10, g.gen, 't10'));
          if (!ok) break;
        }
      } else {
        const g = natTarget(save);
        if (!g || !Gacha.costOf(save, n, kind)) return null;
        if (kind === 't10' || n === 1 || g.missing >= 10) take(n, g.gen, kind);
        // x10 with normal tickets near the end of a region: ten singles, each
        // one to the region still incomplete.
        else for (let i = 0, h; i < 10 && (h = natTarget(save)) && take(1, h.gen, 't1'); i++);
      }
      return out.length ? out : null;
    };

    // Nacional and everything complete: say so instead of the game's
    // "not enough tickets".
    const natDone = () => {
      if (!gachaNat || natTarget(NS.DB.save)) return false;
      try { NS.UI.toast(tr('Ya tienes todos los Pokémon de todas las regiones')); } catch {}
      return true;
    };
    document.addEventListener('click', (e) => {
      if (e.target.closest('#pull-1, #pull-10, #pull-10b') && natDone()) { e.stopPropagation(); e.preventDefault(); }
    }, true);

    // The game plays a 'reveal' sound per card; with dozens of cards shown at
    // once that is a wall of noise, so only the first one plays.
    const sfx = Audio.sfx;
    Audio.sfx = function (name) {
      if (name === 'reveal' && revealBudget !== null && revealBudget-- <= 0) return;
      return sfx.apply(this, arguments);
    };

    const play = Slots.play;
    Slots.play = function (canvas, results) {
      if (skipGacha || forceSkip) { forceSkip = false; return Promise.resolve(); }
      return new Promise((resolve) => {
        let done = false;
        const btn = skipButton(canvas, () => { Slots.stop(); finish(); });
        function finish() {
          if (done) return;
          done = true;
          btn.remove();
          resolve();
        }
        let run;
        try { run = play.call(this, canvas, results); } catch { run = Promise.resolve(); }
        Promise.resolve(run).then(finish, finish);
      });
    };

    const addToggle = () => {
      const anchor = document.getElementById('gacha-pity');
      if (!anchor || document.getElementById('psmod-skip')) return;
      const label = document.createElement('label');
      label.className = 'note';
      label.style.cssText = 'display:flex;align-items:center;gap:8px;cursor:pointer;font-weight:700';
      label.innerHTML = tr('<input type="checkbox" id="psmod-skip" style="width:18px;height:18px;margin:0;cursor:pointer"> Saltar siempre la animación de la tragaperras');
      const box = label.querySelector('input');
      box.checked = skipGacha;
      box.addEventListener('change', () => { skipGacha = box.checked; save('skipGacha', skipGacha); });
      anchor.after(label);

      const one = document.getElementById('pull-1');
      if (!one || !one.parentElement) return;
      const all = document.createElement('button');
      all.id = 'psmod-pull-all';
      all.className = 'btn grow';
      all.dataset.sfx = 'none';
      one.parentElement.appendChild(all);
      const refresh = () => {
        const n = pullsAvailable();
        all.textContent = tr`Tirar todo · ${n}`;
        all.disabled = n <= 0;
      };
      all.addEventListener('click', () => {
        if (pullsAvailable() <= 0 || typeof one.onclick !== 'function' || natDone()) return;
        pullAllArmed = true;
        forceSkip = true;
        revealBudget = 1;
        // Called directly so it works even when the x1 button is disabled
        // (only x10 tickets left).
        one.onclick();
        // The game pulls and starts Slots.play synchronously inside that call,
        // so anything still armed here means it bailed out early.
        pullAllArmed = false;
        forceSkip = false;
        setTimeout(() => { revealBudget = null; }, 4000);
        all.blur();
      });
      setInterval(() => { if (all.isConnected) refresh(); }, 500);
      refresh();
      addRegions(label);
      waitFor(() => document.querySelector('#gacha-gens .gen-tab'), addNatTab);
    };

    // The banner tabs are the game's: each one's handler sets the (private)
    // chosen region and redraws the banner, marking its own tab. In Nacional
    // we show the banner of the region being pulled (its pity, its odds) and
    // move our mark back onto our tab after every redraw.
    function addNatTab() {
      const gens = document.getElementById('gacha-gens');
      if (!gens || document.getElementById('psmod-gnat')) return;
      const tab = document.createElement('button');
      tab.id = 'psmod-gnat';
      tab.className = 'gen-tab';
      gens.prepend(tab);
      const gameTabs = () => [...gens.querySelectorAll('.gen-tab[data-gen]')];
      let shown = 0, sig = '';

      function sync() {
        const sv = NS.DB && NS.DB.save;
        if (!sv || !tab.isConnected) return;
        const owned = sv.owned || {};
        let have = 0, total = 0;
        for (const b of Gacha.BANNERS) for (const p of gachaPool(b.gen)) { total++; if (owned[p.dex]) have++; }
        const s = have + '/' + total;
        if (s !== sig) { sig = s; tab.innerHTML = tr`<b>Nacional</b><small>${s}</small>`; }
        if (!gachaNat) { shown = 0; tab.classList.remove('on'); return; }
        const g = natTarget(sv);
        const gen = g ? g.gen : Gacha.BANNERS[Gacha.BANNERS.length - 1].gen;
        if (shown !== gen) {
          const t = gameTabs().find((x) => +x.dataset.gen === gen);
          if (t && t.onclick) { t.onclick(); shown = gen; }
        }
        for (const t of gameTabs()) if (t.classList.contains('on')) t.classList.remove('on');
        if (!tab.classList.contains('on')) tab.classList.add('on');
        const title = document.getElementById('banner-title'), desc = document.getElementById('banner-desc');
        const pre = tr('Nacional') + ' · ';
        if (title && !title.textContent.startsWith(pre)) title.textContent = pre + title.textContent;
        const d = g
          ? tr('Cada tirada va a la primera región que aún no tienes completa, así no gastas tickets en regiones terminadas.')
          : tr('Ya tienes todos los Pokémon de todas las regiones');
        if (desc && desc.textContent !== d) desc.textContent = d;
        obs.takeRecords();
      }

      tab.addEventListener('click', () => { gachaNat = true; save('gachaNat', true); shown = 0; sync(); tab.blur(); });
      // Picking a region leaves Nacional (before the game's own handler).
      gens.addEventListener('click', (e) => {
        if (e.target.closest('.gen-tab[data-gen]') && gachaNat) { gachaNat = false; save('gachaNat', false); shown = 0; }
      }, true);
      // The game redraws the banner when the screen opens and after each pull.
      const obs = new MutationObserver(() => { if (gachaNat) sync(); });
      obs.observe(gens, { subtree: true, attributes: true, attributeFilter: ['class'] });
      setInterval(sync, 500);
      sync();
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addToggle);
    else addToggle();
  }

  // What's missing in each banner: owned / total per region, how many are
  // left, pulls until the guaranteed legendary, and the missing names.
  function addRegions(after) {
    const { Gacha, DEX, DB, SPRITE_META } = NS;
    if (!Gacha || !Gacha.BANNERS || !DEX) return;
    const style = document.createElement('style');
    style.textContent = `
#psmod-regions{margin-top:6px}
#psmod-regions summary{cursor:pointer;font-weight:700}
#psmod-regions table{width:100%;border-collapse:collapse;margin-top:6px;font-size:13px}
#psmod-regions th,#psmod-regions td{text-align:left;padding:4px 6px;border-bottom:1px solid rgba(255,255,255,.15)}
#psmod-regions td.n,#psmod-regions th.n{text-align:right;font-variant-numeric:tabular-nums}
#psmod-regions tr.most td{color:#ffd23f}
#psmod-regions button{font:inherit;font-size:12px;font-weight:700;color:inherit;background:none;border:1px solid currentColor;border-radius:4px;padding:1px 6px;cursor:pointer}
#psmod-regions .miss{font-size:12.5px;line-height:1.5;padding:4px 6px 8px}`;
    document.head.appendChild(style);
    const box = document.createElement('details');
    box.id = 'psmod-regions';
    box.className = 'note';
    box.open = load('regionsOpen', false);
    box.addEventListener('toggle', () => save('regionsOpen', box.open));
    after.after(box);
    let openGen = null, lastSig = '';
    box.addEventListener('click', (e) => {
      const b = e.target.closest('button[data-gen]');
      if (!b) return;
      e.preventDefault();
      openGen = openGen === +b.dataset.gen ? null : +b.dataset.gen;
      lastSig = '';
      draw();
    });
    function draw() {
      const sv = DB && DB.save;
      if (!sv || !box.isConnected) return;
      const owned = sv.owned || {}, pity = sv.pity || {};
      const PITY = Gacha.PITY_5 || 70;
      const rows = Gacha.BANNERS.map((b) => {
        const pool = DEX.filter((p) => p.gen === b.gen && (!SPRITE_META || SPRITE_META[p.dex]));
        const missing = pool.filter((p) => !owned[p.dex]);
        return { gen: b.gen, name: gameText(b.name), total: pool.length, have: pool.length - missing.length, missing, left: PITY - (pity[b.gen] || 0) };
      });
      const sig = JSON.stringify(rows.map((r) => [r.have, r.left])) + openGen + box.open;
      if (sig === lastSig) return;
      lastSig = sig;
      const most = rows.reduce((a, r) => (r.missing.length > a.missing.length ? r : a), rows[0]);
      const totalMissing = rows.reduce((n, r) => n + r.missing.length, 0);
      box.innerHTML = tr`<summary>Lo que te falta por región (${totalMissing})</summary>
        <table><thead><tr><th>Región</th><th class="n">Tienes</th><th class="n">Faltan</th><th class="n">Legendaria en</th><th></th></tr></thead><tbody>${
          rows.map((r) => tr`<tr${r === most && r.missing.length ? tr(' class="most" title="El banner donde más te falta"') : ''}>
            <td>${esc(r.name)}</td><td class="n">${r.have}/${r.total}</td><td class="n">${r.missing.length}</td>
            <td class="n">${r.left} tiradas</td>
            <td>${r.missing.length ? `<button type="button" data-gen="${r.gen}">${openGen === r.gen ? tr('Ocultar') : tr('Ver')}</button>` : tr('Completa')}</td></tr>${
            openGen === r.gen ? `<tr><td colspan="5" class="miss">${r.missing.map((p) => `#${p.dex} ${esc(p.name)}`).join(' - ')}</td></tr>` : ''}`).join('')
        }</tbody></table>`;
    }
    setInterval(draw, 1000);
    draw();
  }

  function skipButton(canvas, onSkip) {
    const b = document.createElement('button');
    b.className = 'btn small';
    b.textContent = tr('Saltar animación');
    b.style.cssText = 'display:block;margin:10px auto 0';
    b.addEventListener('click', (e) => { e.stopPropagation(); onSkip(); });
    canvas.after(b);
    return b;
  }

  waitFor(() => NS && NS.Slots && NS.Gacha && NS.Audio && NS.DB, setupGacha);

  // ---------------------------------------------------- PokéPuzzles card
  // The game's pill shape (coins, tickets) at the start of the top bar, in
  // PokéPuzzles' own look: its pixel Poké Ball icon and its wordmark (Archivo
  // 700, "Poké" in ink and "Puzzles" in red, on the site's midnight colours).
  const PP_SITE = 'https://pokepuzzles.net';
  const PP_URL = PP_SITE + '/?utm_source=pokesurvivor-mod&utm_medium=topbar';

  function addPuzzlesCard() {
    const bar = document.getElementById('topbar');
    if (!bar || document.getElementById('psmod-pp')) return;
    const font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Archivo:wght@700&display=swap';
    document.head.appendChild(font);
    const style = document.createElement('style');
    style.textContent = `
#psmod-pp{text-decoration:none;cursor:pointer;background:rgba(9,11,16,.92);text-shadow:none;
  font:700 15px/1 'Archivo',system-ui,sans-serif;letter-spacing:-.02em;color:#F2EBDA;white-space:nowrap}
#psmod-pp img{width:20px;height:20px;image-rendering:pixelated;flex:none}
#psmod-pp b{color:#ff4444;font-weight:700}
#psmod-pp:hover,#psmod-pp:focus-visible{border-color:#ff4444;background:#1C2130}
@media (max-width:760px){#psmod-pp{font-size:13px}#psmod-pp img{width:16px;height:16px}}`;
    document.head.appendChild(style);
    const a = document.createElement('a');
    a.id = 'psmod-pp';
    a.className = 'pill';
    a.href = PP_URL;
    a.target = '_blank';
    a.rel = 'noopener';
    a.title = tr('Puzles diarios de Pokémon, del autor de este mod');
    a.innerHTML = `<img src="${PP_SITE}/icon-192.png" alt=""><span>Poké<b>Puzzles</b></span>`;
    bar.prepend(a);
  }

  // A Movedex pill in the same bar, right after PokéPuzzles, with a tiny
  // Pokédex drawn in CSS (red body, blue lens).
  function addDexPill() {
    const bar = document.getElementById('topbar');
    if (!bar || document.getElementById('psmod-mdx')) return;
    const style = document.createElement('style');
    style.textContent = `
#psmod-mdx{cursor:pointer;color:#fff;background:linear-gradient(#e8333f,#b5121f);border-color:#ff8a92;text-shadow:0 1px 0 #5c0710;white-space:nowrap;font:inherit;font-weight:700}
#psmod-mdx i{flex:none;width:16px;height:18px;border-radius:3px 3px 3px 7px;background:#c8141f;border:2px solid #2a0408;position:relative}
#psmod-mdx i::after{content:'';position:absolute;left:2px;top:2px;width:6px;height:6px;border-radius:50%;background:#4fc3ff;border:1px solid #fff}
#psmod-mdx:hover,#psmod-mdx:focus-visible{filter:brightness(1.12)}
#topbar.psmod-bar1 #psmod-mdx span,#topbar.psmod-bar2 #psmod-mdx{display:none}`;
    document.head.appendChild(style);
    const b = document.createElement('button');
    b.id = 'psmod-mdx';
    b.className = 'pill';
    b.type = 'button';
    b.title = tr('Todos los movimientos, quién los aprende y cómo funcionan (Alt + P)');
    b.innerHTML = '<i></i><span>Movedex</span>';
    b.addEventListener('click', (e) => { e.stopPropagation(); b.blur(); toggleDex(true); });
    const pp = document.getElementById('psmod-pp');
    if (pp) pp.after(b); else bar.prepend(b);
  }

  // The game's bar sits on the right and never wraps: when it runs out of
  // room (a narrow window, or its Save button once you're signed in) it
  // squeezes its own pills and then runs off the left edge. The Movedex pill
  // gives way first: its text goes, then the pill (Alt + P and the Pokémon
  // screen still open it). PokéPuzzles always stays as it is.
  function fitBar() {
    const bar = document.getElementById('topbar');
    if (!bar) return;
    const tight = () => bar.getBoundingClientRect().left < 8 || bar.offsetHeight > 46;
    const fit = () => {
      if (bar.classList.contains('hidden')) return;
      bar.classList.remove('psmod-bar1', 'psmod-bar2');
      if (tight()) bar.classList.add('psmod-bar1');
      if (tight()) bar.classList.add('psmod-bar2');
    };
    new ResizeObserver(fit).observe(bar);
    addEventListener('resize', fit);
  }

  const addBarPills = () => { addPuzzlesCard(); addDexPill(); fitBar(); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addBarPills);
  else addBarPills();

  // ------------------------------------------------------- new version
  // keepalive.js (isolated world) writes the manifest version on <html>.
  // Every 6 h at most we ask GitHub for the latest release and, if it is
  // newer, put a pill in the top bar that links to it. If the request
  // fails nothing is shown: the mod never depends on it.
  const REPO = 'aparmor2/pokesurvivor-mod';
  const modVersion = () => document.documentElement.dataset.psmodVersion || '';
  const newer = (a, b) => {
    const x = a.split('.').map(Number), y = b.split('.').map(Number);
    for (let i = 0; i < 3; i++) if ((x[i] || 0) !== (y[i] || 0)) return (x[i] || 0) > (y[i] || 0);
    return false;
  };

  async function checkUpdate() {
    const mine = modVersion();
    if (!mine) return;
    let info = load('update', null);
    if (!info || Date.now() - info.at > 6 * 3600e3) {
      try {
        const r = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, { headers: { Accept: 'application/vnd.github+json' } });
        if (!r.ok) return;
        const j = await r.json();
        info = { at: Date.now(), tag: String(j.tag_name || '').replace(/^v/, ''), url: j.html_url };
        save('update', info);
      } catch { return; }
    }
    if (!info.tag || !newer(info.tag, mine)) return;
    const bar = document.getElementById('topbar');
    if (!bar || document.getElementById('psmod-upd')) return;
    const style = document.createElement('style');
    style.textContent = `
#psmod-upd{text-decoration:none;cursor:pointer;color:#0b1838;background:#ffd23f;text-shadow:none;white-space:nowrap}
#psmod-upd:hover,#psmod-upd:focus-visible{filter:brightness(1.08)}`;
    document.head.appendChild(style);
    const a = document.createElement('a');
    a.id = 'psmod-upd';
    a.className = 'pill';
    a.href = info.url || `https://github.com/${REPO}/releases/latest`;
    a.target = '_blank';
    a.rel = 'noopener';
    a.title = tr`Tienes la ${mine}. Descarga el zip nuevo, descomprímelo encima de la carpeta del mod y recarga la extensión.`;
    a.textContent = tr`Mod ${info.tag} disponible`;
    bar.prepend(a);
  }

  setTimeout(checkUpdate, 3000);

  // ------------------------------------------------ Pokémon screen: Movedex
  // A tab after the regions (#dex-gens) that opens the Movedex; it's not a
  // view of the grid. The game rebuilds the tabs every time it redraws the
  // screen, so it goes back in each time. (The mod's old "Nacional" tab is
  // gone: the game's own "Todas" shows every region together.)
  function setupDex() {
    const gens = document.getElementById('dex-gens');
    if (!gens) return;
    const mdex = document.createElement('button');
    mdex.id = 'psmod-mdex';
    mdex.className = 'gen-tab';
    mdex.title = tr('Todos los movimientos, quién los aprende y cómo funcionan (Alt + P)');
    mdex.innerHTML = tr('<b>Movedex</b><small>movimientos</small>');
    mdex.addEventListener('click', (e) => { e.stopPropagation(); mdex.blur(); toggleDex(true); });
    const add = () => { if (gens.lastElementChild !== mdex) gens.appendChild(mdex); };
    new MutationObserver(add).observe(gens, { childList: true });
    add();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setupDex);
  else setupDex();

  // ------------------------------------------------------------ movedex
  // A Pokédex of moves (Alt + P, the Movedex tab of the Pokémon screen or the
  // panel's button): every move with its numbers at level 1, level 5 and
  // evolved, which Pokémon learn it and how the effects work. All of it is
  // read from the game (Moves, DEX, Stats, Types), and the numbers at each
  // level come from its own Moves.instance / evolve, so it follows the game's
  // updates. Names and descriptions go through the game's translation.
  let dexEl = null, dexData = null;
  const dx = { q: '', mon: null, lvl: 'base', sel: null, tab: 'moves', type: '', kind: '', cat: '' };

  const KIND = {
    melee: ['Golpe en arco', 'Golpea en abanico delante de ti.'],
    dash: ['Embestida', 'Te lanzas hacia el enemigo dañando todo el recorrido.'],
    buff: ['Mejora', 'No hace daño, sube una estadística.'],
    projectile: ['Proyectil', 'Dispara al enemigo más cercano.'],
    cone: ['Abanico', 'Ráfaga corta de disparos en cono.'],
    orbit: ['Orbitales', 'Gira a tu alrededor y golpea lo que toca.'],
    nova: ['Onda radial', 'Dispara en todas direcciones.'],
    beam: ['Rayo', 'Línea recta que daña todo lo que cruza.'],
    aura: ['Aura', 'Daña continuamente lo que tienes cerca.'],
    chain: ['Cadena', 'Salta de un enemigo a otro.'],
    boomerang: ['Bumerán', 'Va y vuelve golpeando en los dos sentidos.'],
    trail: ['Rastro', 'Deja charcos dañinos por donde pasas.'],
    mine: ['Minas', 'Deja trampas que estallan al pisarlas.'],
    meteor: ['Meteoros', 'Caen del cielo sobre enemigos cercanos.'],
    turret: ['Torreta', 'Deja algo que dispara solo un rato.'],
  };
  const kindName = (k) => tr(KIND[k] ? KIND[k][0] : k);
  const typeName = (t) => gameText((NS.U && NS.U.TYPE_NAME && NS.U.TYPE_NAME[t]) || t);
  const typeColor = (t) => (NS.U && NS.U.TYPE_COLOR && NS.U.TYPE_COLOR[t]) || '#b0a99f';
  const catName = (c) => (c ? gameText((NS.Stats && NS.Stats.NAME && NS.Stats.NAME[c]) || c) : tr('Estado'));
  const num = (v, d = 1) => (Math.round(v * 10 ** d) / 10 ** d).toLocaleString(locale());
  const pct = (v) => Math.round(v * 100) + ' %';

  function dexBuild() {
    const M = NS.Moves;
    const playable = NS.DEX.filter((p) => !NS.SPRITE_META || NS.SPRITE_META[p.dex]);
    const start = new Map(playable.map((p) => [p.dex, NS.startMoveOf ? NS.startMoveOf(p.dex) : M.startFor(p)]));
    const moves = M.ALL.map((d, i) => {
      const max = M.instance(d.id, d.maxLvl);
      const info = M.evoInfo(max);
      let evo = null;
      if (info) {
        const e = M.instance(d.id, d.maxLvl);
        M.evolve(e);
        evo = { name: info.name, need: info.needName, text: info.text, stats: e };
      }
      const pools = Object.keys(M.POOL).filter((t) => M.POOL[t].includes(d.id));
      // Pokémon that can be taught it with a TM from the Kecleon Shop.
      const tm = new Set((NS.TM_MOVES && NS.TM_MOVES[d.id]) || []);
      const price = tm.size && NS.Shop && NS.Shop.tmPrice ? NS.Shop.tmPrice(d.id) : 0;
      return { no: i + 1, id: d.id, d, pools, all: pools.includes('normal'), tm, price, base: M.instance(d.id, 1), max, evo };
    });
    return {
      moves, playable, start,
      byId: new Map(moves.map((m) => [m.id, m])),
      byName: new Map(playable.map((p) => [p.name.toLowerCase(), p])),
    };
  }

  const natural = (m, p) => m.all || p.types.some((t) => m.pools.includes(t)) || dexData.start.get(p.dex) === m.id;
  // TMs are taught for good: once taught, the move is one more of its own.
  const taught = (m, p) => !!(NS.Mons && NS.Mons.taught && NS.Mons.taught(p.dex).includes(m.id));
  const canLearn = (m, p) => natural(m, p) || taught(m, p);
  const viaTm = (m, p) => m.tm.has(p.dex) && !canLearn(m, p);
  // The Pokémon as it plays for you: its nature changes two stats by 10 %.
  const withNature = (p) => (NS.Mons && NS.Mons.monFor && NS.Mons.monFor(p.dex)) || p;
  const monoBonus = (p, type) => (p.types.length === 1 && p.types[0] === type ? 1.2 : 1);

  function statsFor(m, s) {
    const out = [];
    const add = (label, value, unit = '') => out.push([tr(label), value, unit]);
    const k = m.d.kind;
    if (k === 'buff') {
      const f = {
        atk: (v) => tr`+${pct(v)} ataque`, patk: (v) => tr`+${pct(v)} ataque físico`, satk: (v) => tr`+${pct(v)} ataque especial`,
        spd: (v) => tr`+${pct(v)} velocidad`, def: (v) => tr`+${pct(v)} reducción de daño`, regen: (v) => tr`+${num(v)} vida/s`,
      }[s.stat] || ((v) => num(v, 2));
      add('Por acumul.', f(s.amount));
      add('Máx. acumul.', num(s.stacks, 0));
      add('Total', f(s.amount * s.stacks));
      add('Duración', num(s.dur), 's');
      add('Recarga', num(s.cd, 2), 's');
      return out;
    }
    add('Daño', num(s.dmg));
    add({ aura: 'Cada', orbit: 'Repite golpe', trail: 'Charco cada' }[k] || 'Recarga', num(s.cd, 2), 's');
    if (s.count != null) add({ chain: 'Saltos', orbit: 'Orbes', boomerang: 'Bumeranes', mine: 'Minas', meteor: 'Meteoros', turret: 'A la vez', cone: 'Disparos' }[k] || 'Proyectiles', num(s.count, 0));
    if (s.pierce) add('Perforación', num(s.pierce, 0));
    if (s.radius != null) add({ beam: 'Largo', dash: 'Distancia', boomerang: 'Alcance', chain: 'Salto máx.', mine: 'Explosión', melee: 'Alcance' }[k] || 'Radio', num(s.radius, 0));
    if (s.width != null) add('Grosor', num(s.width, 0));
    if (s.arc != null && k === 'melee') add('Arco', s.arc >= 6.28 ? '360°' : Math.round(s.arc * 180 / Math.PI) + '°');
    if (s.arc != null && k === 'cone') add('Apertura', Math.round(s.arc * 180 / Math.PI) + '°');
    if (s.range != null) add('Alcance', num(s.range, 0));
    if (s.rate != null) add('Dispara cada', num(s.rate, 2), 's');
    if (s.dur != null) add('Dura', num(s.dur), 's');
    if (s.life != null && k !== 'cone') add('Vida proy.', num(s.life), 's');
    if (s.speed != null && k !== 'orbit') add('Velocidad proy.', num(s.speed, 0));
    return out;
  }

  function effects(s) {
    const t = [];
    if (s.burn) t.push(['#ff8a4c', tr`Quema ×${s.burn}`]);
    if (s.poison) t.push(['#b45ec4', tr`Envenena ×${s.poison}`]);
    if (s.slow) t.push(['#7fe0e0', tr`Frena ${pct(s.slow)}`]);
    if (s.homing) t.push(['#ff6fa8', tr`Teledirigido ${s.homing}`]);
    if (s.hex) t.push(['#9a8be0', tr`×${num(s.hex)} a enemigos con estado`]);
    if (s.knock) t.push(['#8fa3c4', tr`Empuje ${s.knock}`]);
    return t;
  }

  const DEX_CSS = `
#psmod-dex{position:fixed;inset:0;z-index:100002;display:grid;place-items:center;background:rgba(4,8,20,.55);
  font:13px/1.35 var(--font,'Pixelify',system-ui,sans-serif);color:#10202a}
#psmod-dex[hidden]{display:none}
#psmod-dex *{box-sizing:border-box}
#psmod-dex button,#psmod-dex input,#psmod-dex select{font:inherit}
.dx-shell{width:min(1000px,calc(100vw - 24px));height:min(700px,calc(100vh - 24px));display:grid;grid-template-rows:auto 1fr;
  background:linear-gradient(160deg,#ef3a46,#c8141f 55%,#a50d18);border:3px solid #5c0710;border-radius:20px 20px 14px 14px;
  box-shadow:inset 0 3px 0 rgba(255,255,255,.35),inset 0 -5px 0 rgba(0,0,0,.25),0 8px 0 #4a050c,0 18px 40px rgba(0,0,0,.5);overflow:hidden}
.dx-top{display:flex;align-items:center;gap:10px;padding:12px 16px 10px;border-bottom:3px solid #5c0710;
  background:linear-gradient(#f04450,#d01c28);box-shadow:inset 0 -2px 0 rgba(255,255,255,.18)}
.dx-lens{flex:none;width:54px;height:54px;border-radius:50%;border:4px solid #f4f8ff;outline:3px solid #2a0408;
  background:radial-gradient(circle at 34% 30%,#e6fbff 0 9%,#7fd6ff 14%,#2a8cf0 45%,#0d3f9e 80%);box-shadow:0 0 14px rgba(120,210,255,.65)}
.dx-led{flex:none;width:13px;height:13px;border-radius:50%;border:2px solid #2a0408;align-self:flex-start;margin-top:4px}
.dx-led.r{background:radial-gradient(circle at 35% 30%,#ffd0d0,#ff3b3b 60%)}
.dx-led.y{background:radial-gradient(circle at 35% 30%,#fff6c8,#ffcc1f 60%)}
.dx-led.g{background:radial-gradient(circle at 35% 30%,#d6ffd8,#2fd15a 60%)}
.dx-top h2{margin:0 0 0 6px;font-size:24px;letter-spacing:.08em;color:#fff;text-shadow:0 2px 0 #5c0710}
.dx-top nav{display:flex;gap:6px;margin-left:auto}
.dx-top nav button,.dx-x{color:#fff;background:#2a0408;border:2px solid #ff8a92;border-radius:999px;height:28px;padding:0 12px;cursor:pointer}
.dx-top nav button[aria-pressed="true"]{background:#ffd23f;border-color:#ffd23f;color:#2a0408}
.dx-x{width:30px;padding:0;font-weight:700}
.dx-top button:hover{filter:brightness(1.2)}
.dx-body{display:grid;grid-template-columns:minmax(260px,340px) 1fr;gap:14px;padding:14px;min-height:0}
.dx-bezel{background:#e4e6ee;border:3px solid #5c0710;border-radius:10px 10px 10px 36px;padding:12px;min-height:0;height:100%;
  display:grid;box-shadow:inset 0 2px 0 #fff,inset 0 -3px 0 #a9adbb}
.dx-screen{background:#b8dcae;border:3px solid #33442f;border-radius:6px;padding:10px;display:grid;gap:7px;
  grid-template-rows:auto auto auto auto auto 1fr;min-height:0;box-shadow:inset 0 0 0 2px #d6f0cc,inset 0 3px 8px rgba(0,0,0,.25)}
.dx-screen input,.dx-screen select{width:100%;min-width:0;color:#10202a;background:#e9f6e2;border:2px solid #33442f;border-radius:4px;padding:4px 7px;height:28px}
.dx-screen input:focus,.dx-screen select:focus{outline:2px solid #2a8cf0;outline-offset:1px}
.dx-filters{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:5px}
.dx-filters select{padding:2px 3px;font-size:12px}
.dx-count{font-size:11px;color:#33442f;display:flex;justify-content:space-between}
.dx-list{list-style:none;margin:0;padding:2px;overflow-y:auto;min-height:0;background:#cfe9c5;border:2px solid #33442f;border-radius:4px}
.dx-list li{display:grid;grid-template-columns:30px 22px 1fr auto;gap:6px;align-items:center;padding:3px 6px;border-radius:3px;cursor:pointer}
.dx-list li:hover{background:#b0d4a4}
.dx-list li.on{background:#33442f;color:#e9f6e2}
.dx-list .no{font-size:11px;opacity:.7;font-variant-numeric:tabular-nums}
.dx-list b{font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dx-list li.no-learn{opacity:.38}
.dx-list li>span:last-child{display:flex;gap:4px;align-items:center}
.dx-mt{font-size:10px;font-weight:700;font-style:normal;padding:2px 4px;border-radius:3px;background:#33442f;color:#e9f6e2}
.dx-list li.on .dx-mt{background:#e9f6e2;color:#33442f}
.dx-mon .dx-nat{grid-column:1/-1}
.dx-nat small{color:#33442f}
.dx-ty{display:inline-block;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;padding:2px 6px;border-radius:3px;
  background:var(--c);color:#111;border:1px solid rgba(0,0,0,.35);white-space:nowrap}
.dx-mon[hidden]{display:none}
.dx-mon{display:grid;grid-template-columns:auto 1fr;gap:2px 10px;align-items:center;background:#e9f6e2;border:2px solid #33442f;border-radius:4px;padding:6px 8px;font-size:12px}
.dx-mon canvas{grid-row:span 4;image-rendering:pixelated;width:69px;height:60px;background:radial-gradient(#fff,#cfe9c5 70%);border-radius:4px}
.dx-mon b{font-size:14px}
.dx-mon .best{color:#b31d1d;font-weight:700}
.dx-bezel.dark{border-radius:10px 36px 10px 10px}
.dx-view{background:#0d1b26;color:#e9f2ff;border:3px solid #050b10;border-radius:6px;padding:14px 16px;overflow-y:auto;min-height:0;
  background-image:repeating-linear-gradient(0deg,rgba(255,255,255,.025) 0 1px,transparent 1px 3px);box-shadow:inset 0 0 24px rgba(0,0,0,.6)}
#psmod-dex .dx-view>*+*{margin-top:12px}
.dx-view>.dx-seg{display:flex;width:max-content}
.dx-view h3{margin:0;font-size:24px;line-height:1.05;color:#fff}
.dx-view h4{margin:0 0 4px;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#8fb6ff}
.dx-view p{margin:0}
.dx-head{display:grid;grid-template-columns:auto 1fr;gap:4px 12px;align-items:center}
.dx-head .ico{grid-row:span 2;width:56px;height:56px;display:grid;place-items:center;background:#16324a;border:2px solid var(--c);border-radius:8px}
.dx-head .ico img{image-rendering:pixelated}
.dx-tags{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
.dx-tags small{color:#b9cbf0}
.dx-cat{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;padding:2px 6px;border-radius:3px;border:1px solid #8fa3c4;color:#e9f2ff}
.dx-cat.physical{background:#7a2a1a;border-color:#ff8a4c}.dx-cat.special{background:#2b2a7a;border-color:#9a8bff}
.dx-seg{display:inline-flex;border:2px solid #2c4a8f;border-radius:6px;overflow:hidden;justify-self:start}
.dx-seg button{color:#e9f2ff;background:#0b1838;border:0;padding:5px 12px;cursor:pointer}
.dx-seg button+button{border-left:2px solid #2c4a8f}
.dx-seg button[aria-pressed="true"]{background:#ffd23f;color:#0b1838}
.dx-stats{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:6px;margin:0}
.dx-stats div{background:#16324a;border-radius:5px;padding:5px 8px}
.dx-stats dt{font-size:10px;text-transform:uppercase;letter-spacing:.06em;color:#8fb6ff}
.dx-stats dd{margin:0;font-size:15px;font-weight:700;font-variant-numeric:tabular-nums}
.dx-stats dd small{font-weight:400;color:#b9cbf0;font-size:11px}
.dx-stats .up dd{color:#ffd23f}
.dx-fx{display:flex;flex-wrap:wrap;gap:6px}
.dx-fx span{font-size:12px;padding:3px 8px;border-radius:4px;border:2px solid var(--fx)}
.dx-ups{list-style:none;margin:0;padding:0;display:grid;gap:2px}
.dx-ups li{display:flex;gap:8px}.dx-ups li span:first-child{min-width:42px;color:#8fb6ff}
.dx-evo{border-top:2px dashed #2c4a8f;padding-top:10px}
.dx-evo b{color:#ffd23f;font-size:16px}
.dx-evo .need{background:#16324a;border-radius:3px;padding:1px 6px;font-weight:700}
.dx-note{color:#b9cbf0;font-size:12px}
.dx-learn summary{cursor:pointer}
.dx-names{display:flex;flex-wrap:wrap;gap:3px 10px;margin-top:6px;max-height:180px;overflow-y:auto;font-size:12px}
.dx-names i{font-style:normal;color:#8fa3c4}
.dx-names mark{background:#ffd23f;color:#0b1838;border-radius:3px;padding:0 3px}
.dx-starts{justify-self:start;background:#ffd23f;color:#0b1838;font-weight:700;font-size:11px;text-transform:uppercase;padding:3px 8px;border-radius:4px}
.dx-gl{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:8px}
.dx-gl div{background:#16324a;border-radius:6px;padding:8px 10px}
.dx-gl h5{margin:0 0 3px;font-size:14px;color:#ffd23f}
.dx-gl p{font-size:12.5px}
.dx-view table{width:100%;border-collapse:collapse;font-size:12px}
.dx-view th,.dx-view td{text-align:left;padding:4px 6px;border-bottom:1px solid #2c4a8f;vertical-align:top}
.dx-view th{color:#8fb6ff;font-weight:600}
@media (max-width:720px){.dx-body{grid-template-columns:1fr;grid-template-rows:minmax(0,1fr) minmax(0,1.2fr)}.dx-top nav button{padding:0 8px}.dx-lens{width:40px;height:40px}}`;

  function buildDex() {
    const style = document.createElement('style');
    style.textContent = DEX_CSS;
    document.head.appendChild(style);
    dexEl = document.createElement('div');
    dexEl.id = 'psmod-dex';
    dexEl.hidden = true;
    dexEl.innerHTML = tr`
      <div class="dx-shell" role="dialog" aria-label="Movedex">
        <header class="dx-top">
          <i class="dx-lens"></i><i class="dx-led r"></i><i class="dx-led y"></i><i class="dx-led g"></i>
          <h2>MOVEDEX</h2>
          <nav><button data-tab="moves">Movimientos</button><button data-tab="guide">Cómo funciona</button></nav>
          <button class="dx-x" data-act="close" title="Cerrar (Alt + P)">✕</button>
        </header>
        <div class="dx-body">
          <div class="dx-bezel"><div class="dx-screen">
            <input class="dx-q" type="search" placeholder="Buscar: Lanzallamas, quema…" aria-label="Buscar movimiento">
            <input class="dx-monq" list="psmod-dexmons" placeholder="Tu Pokémon: Pikachu, Gengar…" autocomplete="off" aria-label="Pokémon">
            <datalist id="psmod-dexmons"></datalist>
            <div class="dx-moninfo dx-mon" hidden></div>
            <div class="dx-filters">
              <select data-f="type" aria-label="Tipo"></select>
              <select data-f="cat" aria-label="Categoría"></select>
              <select data-f="kind" aria-label="Forma"></select>
            </div>
            <div class="dx-count"></div>
            <ol class="dx-list"></ol>
          </div></div>
          <div class="dx-bezel dark"><div class="dx-view"></div></div>
        </div>
      </div>`;
    document.body.appendChild(dexEl);

    const $ = (s) => dexEl.querySelector(s);
    const opt = (v, label) => `<option value="${esc(v)}">${esc(label)}</option>`;
    const types = [...new Set(dexData.moves.map((m) => m.d.type))];
    const kinds = [...new Set(dexData.moves.map((m) => m.d.kind))];
    $('[data-f="type"]').innerHTML = opt('', tr('Tipo')) + types.map((t) => opt(t, typeName(t))).join('');
    $('[data-f="kind"]').innerHTML = opt('', tr('Forma')) + kinds.map((k) => opt(k, kindName(k))).join('');
    $('[data-f="cat"]').innerHTML = opt('', tr('Categoría')) + opt('physical', catName('physical')) + opt('special', catName('special')) + opt('none', catName(null));
    $('#psmod-dexmons').innerHTML = dexData.playable.map((p) => `<option value="${esc(p.name)}">#${p.dex}</option>`).join('');

    // Keys typed here are not for the game (it would pause on P, move on WASD...).
    for (const ev of ['keydown', 'keyup', 'keypress']) dexEl.addEventListener(ev, (e) => {
      if (ev === 'keydown') dexKey(e);
      e.stopPropagation();
    });
    for (const ev of ['pointerdown', 'mousedown', 'touchstart', 'wheel']) dexEl.addEventListener(ev, (e) => e.stopPropagation());
    dexEl.addEventListener('click', (e) => {
      if (e.target === dexEl) { toggleDex(false); return; }
      const b = e.target.closest('button, li[data-id]');
      if (!b) return;
      if (b.dataset.act === 'close') toggleDex(false);
      if (b.dataset.tab) { dx.tab = b.dataset.tab; renderDex(); }
      if (b.dataset.lvl) { dx.lvl = b.dataset.lvl; renderView(); }
      if (b.dataset.id) { dx.sel = b.dataset.id; dx.tab = 'moves'; renderDex(); }
      if (b.tagName === 'BUTTON') b.blur();
    });
    $('.dx-q').addEventListener('input', (e) => { dx.q = e.target.value.trim().toLowerCase(); renderDex(); });
    const monq = $('.dx-monq');
    const pickMon = () => {
      const typed = monq.value.trim();
      const p = dexData.byName.get(typed.toLowerCase()) || null;
      if (p === dx.mon || (!p && typed)) return; // unchanged, or still typing
      dx.mon = p;
      renderDex();
    };
    monq.addEventListener('input', pickMon);
    monq.addEventListener('change', pickMon);
    for (const s of dexEl.querySelectorAll('select[data-f]')) s.addEventListener('change', () => { dx[s.dataset.f] = s.value; renderDex(); });
  }

  // Up / down move through the list, like a Pokédex. Esc closes.
  function dexKey(e) {
    if (e.key === 'Escape') { toggleDex(false); return; }
    if (e.altKey || e.ctrlKey || e.metaKey || (typing(e.target) && !e.target.matches('.dx-q'))) return;
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    const list = dexFiltered();
    if (!list.length) return;
    const i = list.findIndex((m) => m.id === dx.sel);
    const next = list[Math.max(0, Math.min(list.length - 1, i + (e.key === 'ArrowDown' ? 1 : -1)))];
    e.preventDefault();
    dx.sel = next.id;
    dx.tab = 'moves';
    renderDex();
    const li = dexEl.querySelector(`.dx-list li[data-id="${next.id}"]`);
    if (li) li.scrollIntoView({ block: 'nearest' });
  }

  function toggleDex(force) {
    if (!NS || !NS.Moves || !NS.DEX) return;
    if (!dexData) { try { dexData = dexBuild(); } catch (err) { console.warn('[psmod] movedex', err); return; } }
    if (!dexEl) buildDex();
    const show = force == null ? dexEl.hidden : force;
    dexEl.hidden = !show;
    if (!show) return;
    // Solo runs pause underneath (the game's own pause screen stays when the
    // Movedex closes); co-op can't pause.
    const G = NS.Game;
    if (G && G.state === 'playing' && !(NS.Coop && NS.Coop.active) && G.togglePause) G.togglePause();
    // During a run, start on your own Pokémon.
    const p = me();
    if (p && p.mon && inRun() && !dx.mon) {
      dx.mon = dexData.playable.find((x) => x.dex === p.mon.dex) || null;
      if (dx.mon) dexEl.querySelector('.dx-monq').value = dx.mon.name;
    }
    renderDex();
    dexEl.querySelector('.dx-q').focus();
  }

  function dexFiltered() {
    const q = dx.q;
    return dexData.moves.filter((m) => {
      const d = m.d;
      if (dx.type && d.type !== dx.type) return false;
      if (dx.kind && d.kind !== dx.kind) return false;
      if (dx.cat && (d.cat || 'none') !== dx.cat) return false;
      if (dx.mon && !canLearn(m, dx.mon) && !viaTm(m, dx.mon)) return false;
      if (!q) return true;
      const hay = [gameText(d.name), m.evo && gameText(m.evo.name), gameText(d.desc), typeName(d.type), kindName(d.kind), catName(d.cat),
        ...effects(m.max).map((e) => e[1]), ...d.ups.map((u) => gameText(u.t))].join(' ').toLowerCase();
      return hay.includes(q);
    });
  }

  function renderDex() {
    if (!dexEl || dexEl.hidden) return;
    for (const b of dexEl.querySelectorAll('[data-tab]')) b.setAttribute('aria-pressed', String(b.dataset.tab === dx.tab));
    const list = dexFiltered();
    if (!list.some((m) => m.id === dx.sel)) dx.sel = list.length ? list[0].id : null;
    const icon = (id) => { try { return NS.Icons.html('move:' + id, 18); } catch { return ''; } };
    dexEl.querySelector('.dx-list').innerHTML = list.map((m) => `<li data-id="${m.id}" class="${m.id === dx.sel ? 'on' : ''}">
      <span class="no">${String(m.no).padStart(3, '0')}</span>${icon(m.id)}<b>${esc(gameText(m.d.name))}</b>
      <span>${dx.mon && viaTm(m, dx.mon) ? `<i class="dx-mt" title="${tr('Lo puede aprender con una MT de la Tienda Kecleon')}">${tr('MT')}</i>` : ''}<i class="dx-ty" style="--c:${typeColor(m.d.type)}">${esc(typeName(m.d.type))}</i></span></li>`).join('')
      || `<li class="no-learn">${tr('Ningún movimiento coincide.')}</li>`;
    dexEl.querySelector('.dx-count').innerHTML = tr`<span>${list.length} de ${dexData.moves.length}</span><span>↑ ↓ para moverte</span>`;
    renderMon();
    renderView();
  }

  function renderMon() {
    const box = dexEl.querySelector('.dx-moninfo');
    const p = dx.mon;
    box.hidden = !p;
    if (!p) return;
    const start = dexData.byId.get(dexData.start.get(p.dex));
    const n = dexData.moves.filter((m) => canLearn(m, p)).length;
    const nTm = dexData.moves.filter((m) => viaTm(m, p)).length;
    const S = NS.Stats;
    const q = withNature(p);
    const atkP = S ? S.fit(q, 'physical') * (q.atk || 1) : 1, atkS = S ? S.fit(q, 'special') * (q.atk || 1) : 1;
    const red = (c) => { const v = Math.round((S ? 1 - S.taken(q, c) : 0) * 100); return (v > 0 ? '-' : v < 0 ? '+' : '') + Math.abs(v) + ' %'; };
    const best = (a, b) => `<span class="${a > b ? 'best' : ''}">×${num(a, 2)}</span>`;
    box.innerHTML = `<span class="spr"></span>
      <b>${esc(p.name)} <small>#${p.dex}</small></b>
      <span>${p.types.map((t) => `<i class="dx-ty" style="--c:${typeColor(t)}">${esc(typeName(t))}</i>`).join(' ')} · ${tr`${n} movimientos`}${nTm ? tr` (+${nTm} con MT)` : ''}</span>
      <span>${tr`Daño físico ${best(atkP, atkS)} · especial ${best(atkS, atkP)}`}</span>
      <span>${tr`Empieza con ${`<b>${esc(start ? gameText(start.d.name) : '-')}</b>`} · recibe físico ${red('physical')}, especial ${red('special')}`}</span>
      ${natureHtml(p)}`;
    try {
      const c = NS.UI.spriteCanvas(p.dex, 92, 80, { scale: 2, shadow: true });
      box.querySelector('.spr').replaceWith(c);
    } catch { box.querySelector('.spr').remove(); }
  }

  // Its nature and ability as the game gives them to you (a Mint or an
  // Ability Capsule from the Kecleon Shop changes them).
  const STAT_LABEL = { hp: 'Vida', pa: 'Ataque', sa: 'At. Esp.', df: 'Defensa', sd: 'Def. Esp.', spd: 'Velocidad' };
  function natureHtml(p) {
    const Mo = NS.Mons;
    if (!Mo || !Mo.natureOf || !Mo.name) return '';
    const nat = Mo.natureOf(p.dex);
    const ab = Mo.abilityOf ? Mo.abilityOf(p.dex) : null;
    const stat = (k) => esc(gameText(STAT_LABEL[k] || k));
    const mods = nat.up ? ` <small>+${stat(nat.up)} −${stat(nat.down)}</small>` : '';
    let abil = '';
    if (ab && ab.id && Mo.abilityName) {
      const fx = NS.AbilityFX && NS.AbilityFX.of ? NS.AbilityFX.of(ab.id, p) : null;
      const tip = fx ? [fx.d, fx.d2].filter(Boolean).map(gameText).join(' ') : '';
      abil = ` · ${esc(gameText('Habilidad'))} <b title="${esc(tip)}">${esc(Mo.abilityName(ab.id))}</b>`;
    }
    return `<span class="dx-nat">${esc(gameText('Naturaleza'))} <b>${esc(Mo.name(nat.n))}</b>${mods}${abil}</span>`;
  }

  function renderView() {
    const view = dexEl.querySelector('.dx-view');
    if (dx.tab === 'guide') { view.innerHTML = guideHtml(); return; }
    const m = dexData.byId.get(dx.sel);
    if (!m) { view.innerHTML = `<p class="dx-note">${tr('Ningún movimiento coincide.')}</p>`; return; }
    const d = m.d;
    const lvl = dx.lvl;
    const s = lvl === 'base' ? m.base : lvl === 'max' ? m.max : (m.evo && m.evo.stats) || m.max;
    const baseStats = statsFor(m, m.base);
    const stats = statsFor(m, s).map(([l, v, u]) => {
      const b = baseStats.find((x) => x[0] === l);
      const up = lvl !== 'base' && (!b || String(b[1]) !== String(v));
      return `<div class="${up ? 'up' : ''}"><dt>${l}</dt><dd>${v}${u ? ` <small>${u}</small>` : ''}</dd></div>`;
    }).join('');
    const fx = effects(s).map(([c, t]) => `<span style="--fx:${c}">${t}</span>`).join('');
    const name = lvl === 'evo' && m.evo ? m.evo.name : d.name;
    const sub = lvl === 'evo' && m.evo ? tr`Evoluciona de ${esc(gameText(d.name))}` : m.evo ? tr`Evoluciona a ${esc(gameText(m.evo.name))}` : tr('No evoluciona');
    const p = dx.mon;
    const S = NS.Stats;
    const q = p && withNature(p);
    const monMul = p && d.cat && S ? tr` · ×${num(S.fit(q, d.cat) * (q.atk || 1) * monoBonus(p, d.type), 2)} con ${esc(p.name)}` : '';
    let ico = '';
    try { ico = NS.Icons.html('move:' + d.id, 40); } catch {}
    const seg = (v, label) => `<button data-lvl="${v}" aria-pressed="${lvl === v}">${tr(label)}</button>`;
    view.innerHTML = `
      ${p && dexData.start.get(p.dex) === d.id ? `<span class="dx-starts">${tr`${esc(p.name)} empieza con este`}</span>` : ''}
      <div class="dx-head" style="--c:${typeColor(d.type)}">
        <span class="ico">${ico}</span>
        <h3>${esc(gameText(name))}</h3>
        <div class="dx-tags"><i class="dx-ty" style="--c:${typeColor(d.type)}">${esc(typeName(d.type))}</i>
          <span class="dx-cat ${d.cat || ''}">${esc(catName(d.cat))}</span>
          <small title="${esc(tr(KIND[d.kind] ? KIND[d.kind][1] : ''))}">${esc(kindName(d.kind))} · Nº ${String(m.no).padStart(3, '0')} · ${sub}${monMul}</small></div>
      </div>
      <p>${esc(gameText(d.desc))}</p>
      <div class="dx-seg" role="group">${seg('base', 'Nivel 1')}${seg('max', 'Nivel 5')}${seg('evo', 'Evolución')}</div>
      ${lvl === 'evo' && !m.evo ? `<p class="dx-note">${tr('No tiene evolución: estos son sus números a nivel 5.')}</p>` : ''}
      <dl class="dx-stats">${stats}</dl>
      ${fx ? `<div class="dx-fx">${fx}</div>` : ''}
      <div><h4>${tr('Mejoras al subir de nivel')}</h4><ol class="dx-ups">${d.ups.map((u, i) => `<li><span>${tr('Nv.')} ${i + 2}</span><span>${esc(gameText(u.t))}</span></li>`).join('')}</ol></div>
      <div class="dx-evo"><h4>${tr('Evolución')}</h4>${m.evo
        ? tr`<b>${esc(gameText(m.evo.name))}</b> - necesita <span class="need">${esc(gameText(m.evo.need))}</span> y el movimiento a nivel 5<br>${esc(gameText(m.evo.text))}`
        : tr('No evoluciona.')}</div>
      ${learnHtml(m)}`;
  }

  function learnHtml(m) {
    const P = dexData.playable, p = dx.mon;
    const tag = (r) => `<span><i>#${r.dex}</i> ${p && r.dex === p.dex ? `<mark>${esc(r.name)}</mark>` : esc(r.name)}</span>`;
    const starts = P.filter((r) => dexData.start.get(r.dex) === m.id);
    const startList = starts.length
      ? `<details class="dx-learn"><summary>${tr`Empiezan la partida con él: <b>${starts.length} Pokémon</b>`}</summary><p class="dx-names">${starts.map(tag).join('')}</p></details>`
      : '';
    if (m.all) return `<p class="dx-note">${tr`Lo puede aprender <b>cualquier Pokémon</b> (los ${P.length}).`}</p>${startList}`;
    const list = P.filter((r) => natural(m, r));
    const types = m.pools.map(typeName).join(', ');
    const tms = P.filter((r) => m.tm.has(r.dex) && !natural(m, r));
    const tmList = tms.length
      ? `<details class="dx-learn"${p && m.tm.has(p.dex) ? ' open' : ''}><summary>${tr`Con MT: <b>${tms.length} Pokémon</b> más`}${m.price ? ` · ${tr`${fmt(m.price)} Pokémonedas en la Tienda Kecleon`}` : ''}</summary><p class="dx-names">${tms.map(tag).join('')}</p></details>`
      : '';
    return `<details class="dx-learn"${p ? ' open' : ''}><summary>${tr`Lo aprenden <b>${list.length} Pokémon</b>: los de tipo ${types}`}</summary><p class="dx-names">${list.map(tag).join('')}</p></details>${tmList}${startList}`;
  }

  function guideHtml() {
    const M = NS.Moves;
    const card = (h, p) => `<div><h5>${tr(h)}</h5><p>${tr(p)}</p></div>`;
    const rows = Object.keys(M.POOL).map((t) => {
      const first = M.startFor({ types: [t] });
      const fm = dexData.byId.get(first);
      const rest = M.POOL[t].filter((id) => id !== first).map((id) => esc(gameText(M.BY_ID[id].name))).join(', ');
      return `<tr><td><i class="dx-ty" style="--c:${typeColor(t)}">${esc(typeName(t))}</i></td><td><b>${esc(fm ? gameText(fm.d.name) : first)}</b></td><td>${rest || '-'}</td></tr>`;
    }).join('');
    return `
      <h3>${tr('Cómo funcionan los efectos')}</h3>
      <div class="dx-gl">
        ${card('Daño', 'Cada golpe hace el daño del movimiento × tu ataque × la eficacia de tipo. Un crítico multiplica por 1,5; la probabilidad viene de objetos y mejoras.')}
        ${card('Físico y especial', 'Los movimientos físicos usan el Ataque de tu Pokémon y los especiales su Ataque Especial. Elige tu Pokémon arriba para ver con cuáles pega más.')}
        ${card('Naturaleza, habilidad y monotipo', 'La naturaleza sube un 10 % una estadística y baja otra; la habilidad tiene su efecto en la partida (se cambian con Mentas y Cápsulas de la Tienda Kecleon). Los Pokémon de un solo tipo pegan un 20 % más con los ataques de su tipo. Los números de tu Pokémon arriba ya lo tienen en cuenta.')}
        ${card('MT', 'Las MT de la Tienda Kecleon enseñan para siempre ataques de fuera de sus tipos, solo a los Pokémon que los aprenden en los juegos. Con tu Pokémon elegido, la lista marca con MT los que puede aprender así.')}
        ${card('Eficacia de tipos', 'Cada tipo del enemigo débil al movimiento multiplica por 1,6, cada uno que lo resiste por 0,6 y uno inmune por 0,3 (nunca es cero). El total queda entre ×0,3 y ×2,4.')}
        ${card('Tu defensa', 'El daño que recibes baja con la Defensa de tu Pokémon si el golpe es físico y con su Defensa Especial si es especial: de un 25 % más a un 22 % menos.')}
        ${card('Quemadura', 'Cada golpe suma 1 acumulación (máximo 8) y la renueva a 3 s. Cada 0,5 s hace 1,6 × acumulaciones × (1 + 0,06 × tu nivel).')}
        ${card('Veneno', 'Suma acumulaciones (máximo 8) y dura 4 s. Cada 0,6 s quita un 1,2 % de la vida máxima × acumulaciones + 1 (algo menos en jefes de más de 60.000 de vida), así que es lo mejor contra jefes.')}
        ${card('Ralentizar', 'Frena al enemigo ese porcentaje durante un rato. Si le llegan dos, se queda el más fuerte, no se suman.')}
        ${card('Perforación', 'Cuántos enemigos extra atraviesa el proyectil antes de desaparecer.')}
        ${card('Teledirigido', 'El proyectil gira hacia el enemigo más cercano. Cuanto más alto el valor, más cerrado gira.')}
        ${card('Empuje', 'Cuánto retrocede el enemigo al recibir el golpe. Útil para que no te rodeen.')}
        ${card('Cadena e Infortunio', 'Los rayos en cadena saltan de enemigo en enemigo y pierden un 15 % de daño en cada salto. Infortunio hace más daño a quien esté quemado, envenenado o frenado.')}
        ${card('Mejoras sin daño', 'Danza Espada, Maquinación, Agilidad, Fortaleza, Danza Dragón y Acua Aro se lanzan solas. Cada vez suman una acumulación y reinician la duración; si se acaba, se pierden todas a la vez. La barrita bajo cada mejora del HUD te dice cuánto le queda.')}
        ${card('Evolución', 'Un movimiento evoluciona cuando está a nivel 5 y además tienes la mejora pasiva que pide (Vigor, Potencia, Carrera, Reflejos, Coraza, Síntesis o Imán).')}
      </div>
      <div><h4>${tr('Movimiento inicial por tipo')}</h4>
      <p class="dx-note">${tr('Con qué movimiento empieza tu Pokémon según su tipo, salvo que tenga uno propio. Al subir de nivel te pueden salir los de sus tipos, los de tipo Normal, que los aprende cualquiera, y los que le hayas enseñado con MT.')}</p></div>
      <table><thead><tr><th>${tr('Tipo')}</th><th>${tr('Empieza con')}</th><th>${tr('Puede aprender además')}</th></tr></thead><tbody>${rows}</tbody></table>`;
  }

  // ----------------------------------------------------------- controls
  // The game reads keys by e.code ('keyw', 'digit1'...) from window keydown /
  // keyup listeners and checks Input.tap() once per frame. We sit in front of
  // them (capture phase): the key chosen for an action is turned into the key
  // the game expects, and the game's own key for an action that was moved
  // elsewhere is silenced. Arrows, Tab, the numpad and Esc keep working as in
  // the game. The wheel and the middle / side mouse buttons over the game can
  // be bound too: they press and release the game's key.
  const ACTIONS = [
    ['up', tr('Arriba'), 'KeyW'],
    ['down', tr('Abajo'), 'KeyS'],
    ['left', tr('Izquierda'), 'KeyA'],
    ['right', tr('Derecha'), 'KeyD'],
    ['prev', tr('Ataque anterior'), 'KeyQ', 'WheelUp'],
    ['next', tr('Ataque siguiente'), 'KeyE', 'WheelDown'],
    ['slot1', tr('Ataque 1 / mejora 1'), 'Digit1'],
    ['slot2', tr('Ataque 2 / mejora 2'), 'Digit2'],
    ['slot3', tr('Ataque 3 / mejora 3'), 'Digit3'],
    ['slot4', tr('Ataque 4'), 'Digit4'],
    ['reroll', tr('Cambiar mejoras'), 'KeyR'],
    ['pause', tr('Pausa'), 'KeyP'],
  ];
  const defBinds = () => Object.fromEntries(ACTIONS.map(([id, , a, b]) => [id, [a, b || null]]));
  let binds = defBinds();
  {
    const saved = load('keys', null);
    if (saved) for (const id in binds) if (Array.isArray(saved[id])) binds[id] = [saved[id][0] || null, saved[id][1] || null];
  }
  let codeMap = new Map(); // physical code -> game code
  let muted = new Set(); // game keys whose action now lives elsewhere

  function rebuildBinds() {
    codeMap = new Map();
    for (const [id, , game] of ACTIONS) for (const c of binds[id]) if (c) codeMap.set(c, game);
    muted = new Set(ACTIONS.map((a) => a[2]).filter((c) => !codeMap.has(c)));
  }
  rebuildBinds();

  function setBind(id, slot, code) {
    const old = binds[id][slot];
    // A key does one thing: whoever had it gets this slot's old key.
    for (const [other] of ACTIONS) {
      const b = binds[other];
      for (let i = 0; i < 2; i++) if (code && b[i] === code && !(other === id && i === slot)) b[i] = other === id ? null : old;
    }
    binds[id][slot] = code;
    save('keys', binds);
    rebuildBinds();
  }

  const KEY_NAMES = {
    WheelUp: tr('Rueda arriba'), WheelDown: tr('Rueda abajo'), Mouse1: tr('Botón central'), Mouse3: tr('Lateral atrás'), Mouse4: tr('Lateral adelante'),
    Space: tr('Espacio'), Enter: tr('Intro'), Backquote: 'º', Minus: "'", Equal: '¡', BracketLeft: '`', BracketRight: '+', Semicolon: 'Ñ',
    Quote: '´', Backslash: 'Ç', IntlBackslash: '<', Comma: ',', Period: '.', Slash: '-', CapsLock: tr('Bloq Mayús'),
    ShiftLeft: tr('Mayús'), ShiftRight: tr('Mayús der.'), ControlLeft: 'Ctrl', ControlRight: tr('Ctrl der.'), AltRight: 'Alt Gr',
    ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→',
  };
  // The symbol keys above are named as on a Spanish keyboard; in English,
  // as on a US one.
  if (locale() === 'en-US') Object.assign(KEY_NAMES, {
    Backquote: '`', Minus: '-', Equal: '=', BracketLeft: '[', BracketRight: ']', Semicolon: ';',
    Quote: "'", Backslash: '\\', IntlBackslash: '\\', Slash: '/', AltRight: 'Right Alt',
  });
  function keyName(c) {
    if (!c) return '—';
    if (KEY_NAMES[c]) return KEY_NAMES[c];
    let m;
    if ((m = /^Key(.)$/.exec(c))) return m[1];
    if ((m = /^Digit(.)$/.exec(c))) return m[1];
    if ((m = /^Numpad(.+)$/.exec(c))) return 'Num ' + m[1];
    return c;
  }

  const typing = (t) => !!(t && t.closest && t.closest('input, textarea, select, [contenteditable]'));
  const onMod = (t) => !!(t && t.closest && t.closest('[id^="psmod"]'));
  const emit = (target, type, code) => (target || document).dispatchEvent(new KeyboardEvent(type, { code, bubbles: true, cancelable: true }));
  const tapKey = (code) => { emit(document, 'keydown', code); emit(document, 'keyup', code); };

  let listening = null; // [action, slot] waiting for a key
  const isListening = () => listening && sumEl && !sumEl.hidden && sumEl.dataset.view === 'keys';
  function captured(code) {
    const [id, slot] = listening;
    listening = null;
    if (code !== undefined) setBind(id, slot, code);
    renderKeys();
  }

  function onKey(e) {
    if (!e.isTrusted) return;
    if (isListening()) {
      e.preventDefault(); e.stopImmediatePropagation();
      if (e.type !== 'keydown' || e.repeat) return;
      if (e.code === 'Escape') captured();
      else if (e.code === 'Backspace' || e.code === 'Delete') captured(null);
      else if (!e.altKey && !e.ctrlKey && !e.metaKey && e.code) captured(e.code);
      return;
    }
    if (e.altKey || e.ctrlKey || e.metaKey || typing(e.target)) return;
    const game = codeMap.get(e.code);
    if (game === e.code) return;
    if (game || muted.has(e.code)) {
      e.preventDefault(); e.stopImmediatePropagation();
      if (game) emit(e.target, e.type, game);
    }
  }
  addEventListener('keydown', onKey, true);
  addEventListener('keyup', onKey, true);

  const MOUSE_BTNS = [1, 3, 4];
  function onMouse(e) {
    if (!e.isTrusted) return;
    if (isListening() && e.type === 'mousedown') {
      if (MOUSE_BTNS.includes(e.button)) { e.preventDefault(); e.stopImmediatePropagation(); captured('Mouse' + e.button); }
      else if (!e.target.closest('[data-bind]')) {
        // Clicked elsewhere: cancel. No re-render, or the button being
        // clicked (Cerrar, Restablecer) would vanish before its click.
        const b = sumEl.querySelector(`[data-bind="${listening[0]}:${listening[1]}"]`);
        if (b) { b.textContent = keyName(binds[listening[0]][listening[1]]); b.style.borderColor = b.style.color = ''; }
        listening = null;
      }
      return;
    }
    const game = MOUSE_BTNS.includes(e.button) && codeMap.get('Mouse' + e.button);
    if (!game) return;
    // Also keeps the side buttons from going back / forward in history.
    e.preventDefault();
    if (e.type === 'auxclick' || onMod(e.target) || typing(e.target)) return;
    e.stopImmediatePropagation(); // the game would take it as holding the mouse
    emit(document, e.type === 'mousedown' ? 'keydown' : 'keyup', game);
  }
  for (const ev of ['mousedown', 'mouseup', 'auxclick']) addEventListener(ev, onMouse, true);

  // One wheel notch is ~100 px; trackpads send many small deltas, so add
  // them up and step at most every 90 ms.
  let wheelAcc = 0, wheelAt = 0, wheelStep = 0;
  addEventListener('wheel', (e) => {
    if (!e.isTrusted || !e.deltaY) return;
    if (isListening()) { e.preventDefault(); e.stopImmediatePropagation(); captured(e.deltaY < 0 ? 'WheelUp' : 'WheelDown'); return; }
    if (!e.target || e.target.tagName !== 'CANVAS' || onMod(e.target)) return;
    if (!codeMap.has('WheelUp') && !codeMap.has('WheelDown')) return;
    e.preventDefault();
    const now = performance.now();
    if (now - wheelAt > 250) wheelAcc = 0;
    wheelAt = now;
    wheelAcc += e.deltaY * (e.deltaMode === 1 ? 33 : e.deltaMode === 2 ? 400 : 1);
    if (Math.abs(wheelAcc) < 50 || now - wheelStep < 90) return;
    const game = codeMap.get(wheelAcc < 0 ? 'WheelUp' : 'WheelDown');
    wheelAcc = 0;
    wheelStep = now;
    if (game) tapKey(game);
  }, { capture: true, passive: false });

  let keysWired = false;
  function toggleKeys() {
    if (!sumEl) return;
    if (!sumEl.hidden && sumEl.dataset.view === 'keys') { sumEl.hidden = true; listening = null; return; }
    if (!keysWired) {
      keysWired = true;
      sumEl.addEventListener('click', (e) => {
        if (sumEl.dataset.view !== 'keys') return;
        const b = e.target.closest('button');
        if (!b) return;
        b.blur();
        if (b.dataset.bind) { const [id, slot] = b.dataset.bind.split(':'); listening = [id, +slot]; renderKeys(); }
        if (b.dataset.act === 'keys-reset') { binds = defBinds(); save('keys', binds); rebuildBinds(); listening = null; renderKeys(); }
      });
    }
    listening = null;
    sumEl.dataset.view = 'keys';
    renderKeys();
    sumEl.hidden = false;
  }

  function renderKeys() {
    if (!sumEl || sumEl.dataset.view !== 'keys') return;
    const btn = (id, i) => {
      const on = listening && listening[0] === id && listening[1] === i;
      return `<button data-bind="${id}:${i}" style="min-width:96px${on ? ';border-color:#ffd23f;color:#ffd23f' : ''}">${on ? tr('Pulsa…') : esc(keyName(binds[id][i]))}</button>`;
    };
    sumEl.innerHTML = tr`
      <div class="top"><h3>Controles</h3><button data-act="close">Cerrar</button></div>
      <table><thead><tr><th>Acción</th><th>Tecla</th><th>Otra</th></tr></thead><tbody>${
        ACTIONS.map(([id, label]) => `<tr><td>${esc(label)}</td><td>${btn(id, 0)}</td><td>${btn(id, 1)}</td></tr>`).join('')
      }</tbody></table>
      <p class="sub">Pulsa un botón y luego la tecla, la rueda del ratón (arriba o abajo) o un botón central o lateral del ratón. Esc cancela, Retroceso deja el hueco vacío. La rueda solo cuenta encima del juego, no de los paneles.</p>
      <p class="sub">Las flechas, Tab, el teclado numérico y Esc siguen funcionando como en el juego. Alt + K abre esto.</p>
      <div><button data-act="keys-reset">Restablecer</button></div>`;
  }

  // ------------------------------------------------------- settings tab
  // A "Mod" tab in the game's Settings with every option that also has a
  // hotkey, and the auto-pick list. The game wires its own tabs once and
  // renders #set-body for the chosen one (by data-t); ours has no data-t, so
  // the game switches it off whenever one of its own tabs is picked, and we
  // only touch #set-body while ours is on.
  let modTab = null;
  const modTabOpen = () => !!modTab && modTab.classList.contains('on') && !!NS && !!NS.SettingsUI && NS.SettingsUI.isOpen;

  function setupSettingsTab() {
    const tabs = document.getElementById('set-tabs');
    const body = document.getElementById('set-body');
    if (!tabs || !body || modTab) return;
    psaStyle();
    modTab = document.createElement('button');
    modTab.className = 'gen-tab';
    modTab.textContent = 'Mod';
    modTab.addEventListener('click', () => showModTab());
    tabs.appendChild(modTab);

    body.addEventListener('click', (e) => {
      if (!modTabOpen()) return;
      const b = e.target.closest('button');
      if (!b) return;
      b.blur();
      if (b.dataset.auto) { autoAction(b); return; }
      if (b.dataset.item) { itemAction(b); return; }
      const [k, d] = String(b.dataset.pm || '').split(':');
      switch (k) {
        case 'shown': shown = !shown; save('shown', shown); if (panel) render(); break;
        case 'buffs': showBuffs = !showBuffs; save('showBuffs', showBuffs); if (panel) render(); break;
        case 'map': mapShown = !mapShown; save('mapShown', mapShown); break;
        case 'sound': setAlertSound(!alertSound); break;
        case 'chest': chestArea = !chestArea; save('chestArea', chestArea); break;
        case 'sumAuto': sumAuto = !sumAuto; save('sumAuto', sumAuto); break;
        case 'types': typeIcons = !typeIcons; save('typeIcons', typeIcons); iconCache.clear(); break;
        case 'items': itemIcons = !itemIcons; save('itemIcons', itemIcons); iconCache.clear(); break;
        case 'fov': setFov(+d === 0 ? 1 : fov + +d * FOV_STEP); break;
        case 'hud': setHudScale(+d === 0 ? 1 : hudScale + +d * 0.1); break;
        case 'auto': auto.on = !auto.on; saveAuto(); return;
        case 'keys': toggleKeys(); return;
        case 'dex': toggleDex(true); return;
        case 'hist': toggleHistory(); return;
        case 'log': toggleNetLog(); return;
        default: return;
      }
      renderModTab();
    });
    body.addEventListener('change', (e) => {
      if (!modTabOpen() || e.target.dataset.auto !== 'fallback') return;
      auto.fallback = e.target.value;
      saveAuto();
    });
    // Keys pressed on the selects are not for the game.
    for (const ev of ['keydown', 'keyup']) body.addEventListener(ev, (e) => { if (modTabOpen() && e.target.tagName === 'SELECT') e.stopPropagation(); });
  }

  // After the game has wired its own tabs, so it leaves ours alone.
  waitFor(() => { const t = document.querySelector('#set-tabs .gen-tab'); return !!(t && t.onclick); }, setupSettingsTab);

  // Opens Settings on the Mod tab, scrolled to `section` if given.
  function showModTab(section) {
    if (!modTab || !NS || !NS.SettingsUI) return;
    if (!NS.SettingsUI.isOpen) NS.SettingsUI.open();
    for (const t of document.querySelectorAll('#set-tabs .gen-tab')) t.classList.toggle('on', t === modTab);
    const body = document.getElementById('set-body');
    body.scrollTop = 0;
    renderModTab();
    const el = section && document.getElementById(section);
    if (el) el.scrollIntoView({ block: 'start' });
  }

  function toggleModTab(section) {
    if (modTabOpen()) NS.SettingsUI.close();
    else showModTab(section);
  }

  // During a run, the moveset of the Pokémon you play with.
  function movesetSection() {
    const p = inRun() && me();
    if (!p || !p.mon || !p.mon.dex || !NS.Moves.poolFor) return `<p class="sub">${tr('El moveset de cada Pokémon se elige en su ficha, en la pantalla Pokémon.')}</p>`;
    return `<h3 class="set-h">${tr`Moveset de ${esc(gameText(p.mon.name))}`}</h3><p class="sub">${tr('Los ataques que buscan las auto mejoras con este Pokémon, en orden. Solo aprende ataques nuevos de aquí.')}</p>` + movesetHtml(p.mon);
  }

  function renderModTab() {
    if (!modTabOpen()) return;
    const body = document.getElementById('set-body');
    const head = (title, id) => `<h3 class="set-h"${id ? ` id="${id}"` : ''}>${title}</h3>`;
    const text = (label, hint) => `<div class="grow"><b>${label}</b><small>${hint}</small></div>`;
    const sw = (k, on, label, hint) => `<div class="set-row">${text(label, hint)}<button class="btn small switch${on ? ' gold' : ''}" data-pm="${k}">${esc(gameText(on ? 'Sí' : 'No'))}</button></div>`;
    const step = (k, value, label, hint) => `<div class="set-row">${text(label, hint)}<div class="psa-step">
      <button class="btn small" data-pm="${k}:-1">-</button><b>${value.toFixed(1)}x</b><button class="btn small" data-pm="${k}:1">+</button><button class="btn small" data-pm="${k}:0">1x</button></div></div>`;
    const open = (k, label, hint) => `<div class="set-row">${text(label, hint)}<button class="btn small" data-pm="${k}">${tr('Abrir')}</button></div>`;
    const top = body.scrollTop;
    body.innerHTML =
      head(tr('Panel del mod')) +
      sw('shown', shown, tr('Panel de daño'), tr('Daño de cada jugador, tiempos y ritmo durante la partida. Alt + M')) +
      sw('buffs', showBuffs, tr('Mejoras en el panel'), tr('Tus multiplicadores y lo que compartís en cooperativo. Alt + J')) +
      sw('map', mapShown, tr('Minimapa'), tr('Terreno, amigos, enemigos, cofres y objetos. Alt + N')) +
      sw('sound', alertSound, tr('Avisos con sonido'), tr('Shiny, jefes, legendarios, grietas y amigos con poca vida. Alt + B')) +
      sw('chest', chestArea, tr('Área de los cofres con candado'), tr('Un círculo en el suelo marca dónde tienes que quedarte para abrirlos.')) +
      sw('sumAuto', sumAuto, tr('Abrir el resumen al acabar la partida'), tr('Si no, se abre con su botón de la pantalla final o con Alt + H.')) +
      head(tr('Cámara y HUD')) +
      step('fov', fov, tr('Visión'), tr('Aleja la cámara para ver más mapa. Alt + + / Alt + - / Alt + 0')) +
      step('hud', hudScale, tr('Tamaño del HUD'), tr('Nombre, vida, mejoras y ataques del juego.')) +
      sw('types', typeIcons, tr('Iconos de tipo de los juegos recientes'), tr('Los de Escarlata y Púrpura en los ataques, en vez de los pixelados del juego.')) +
      sw('items', itemIcons, tr('Iconos de objetos de los juegos'), tr('En los objetos y en las cartas de mejora.')) +
      head(tr('Auto mejoras'), 'psmod-set-auto') +
      sw('auto', auto.on, tr('Elegir las cartas por mí'), tr('Al subir de nivel, el mod coge la carta del primer punto de la lista que haya salido. Alt + U')) +
      autoHtml() +
      movesetSection() +
      head(tr('Objetos preferidos'), 'psmod-set-items') +
      `<p class="sub">${tr('Al coger un objeto llevando otro, te quedas con el que esté más arriba sin que el juego pregunte.')}</p>` +
      itemsHtml() +
      head(tr('Más')) +
      open('keys', tr('Controles'), tr('Teclas, rueda y botones del ratón. Alt + K')) +
      open('dex', 'Movedex', tr('Todos los movimientos, quién los aprende y cómo funcionan. Alt + P')) +
      open('hist', tr('Historial de partidas'), tr('Tus últimas partidas. Alt + H')) +
      open('log', tr('Registro de conexión'), tr('Cortes de conexión en cooperativo. Alt + L'));
    body.scrollTop = top;
  }

  // ------------------------------------------------------------ hotkeys
  addEventListener('keydown', (e) => {
    if (!e.altKey || e.ctrlKey || e.metaKey) return;
    let hit = true;
    switch (e.code) {
      case 'Equal': case 'NumpadAdd': case 'BracketRight': setFov(fov + FOV_STEP); break;
      case 'Minus': case 'NumpadSubtract': case 'Slash': setFov(fov - FOV_STEP); break;
      case 'Digit0': case 'Numpad0': setFov(1); break;
      case 'KeyM': shown = !shown; save('shown', shown); if (panel) render(); break;
      case 'KeyN': mapShown = !mapShown; save('mapShown', mapShown); break;
      case 'KeyH': toggleHistory(); break;
      case 'KeyJ': toggleBuffs(); break;
      case 'KeyL': toggleNetLog(); break;
      case 'KeyK': toggleKeys(); break;
      case 'KeyP': toggleDex(); break;
      case 'KeyU': toggleModTab('psmod-set-auto'); break;
      case 'KeyB': setAlertSound(!alertSound); toast(alertSound ? tr('Avisos con sonido') : tr('Avisos sin sonido')); break;
      default: hit = false;
    }
    if (hit) { e.preventDefault(); e.stopPropagation(); renderModTab(); }
  }, true);
})();
