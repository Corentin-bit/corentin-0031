function décollageFusée () {
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
}
expressions.décollageFusée()
