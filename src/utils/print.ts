/**
 * imprime um menu formatado no console
 * @param title Titulo do menu
 * @param options Opções do menu
 */
export function printMenu(title: string, options: string[]) {
    const header = (texto: string) => `\n==== ${texto} ====`
    const menuTitle = header(title)

    console.log(menuTitle)
    options.forEach(option => console.log(option))
    console.log("=".repeat(menuTitle.length - 1), '\n') // -1 por conta do \n do header
}

/**
 * imprime um Titulo formatado no console
 * @param title Titulo
 */
export function printTittle(title: string) {
    const header = (texto: string) => `\n==== ${texto} ====`
    const menuTitle = header(title)
    console.log(menuTitle)
}