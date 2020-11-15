input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
    if (input.lightLevel() < 100) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (input.lightLevel() < 180) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("")
    serial.writeNumber(input.lightLevel())
    serial.writeLine("")
})
basic.showLeds(`
    # . # . #
    . # # # .
    . # # # .
    . # # # .
    . . # . .
    `)
basic.pause(100)
basic.showString("Horta Pedagógica")
