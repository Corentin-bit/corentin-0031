/**
* Blocs permettant d'afficher des expressions
*/
//% weight=100 color=#033fff icon="\uf118″
namespace expressions {
    //% block
    export function décollageFusée(): void {
// début du code copié
 {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            # . # . #
            `)
        basic.pause(500)
        basic.showLeds(`
            . # # # .
            . # # # .
            # # # # #
            # . # . #
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . # # # .
            # # # # #
            # . # . #
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            # # # # #
            # . # . #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            # . # . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
    // fin du code copié
}
    }
}