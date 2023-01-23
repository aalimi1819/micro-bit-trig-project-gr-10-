input.onButtonPressed(Button.A, function () {
    steps_away += 1
    basic.showNumber(steps_away)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    music.playMelody("F G F A F B F C5 ", 160)
    answer = steps_away * Math.tan(angle) + eyelevel
    basic.showString("Height:")
    basic.showNumber(answer)
})
input.onButtonPressed(Button.B, function () {
    angle = input.rotation(Rotation.Pitch)
    basic.showIcon(IconNames.Happy)
    music.setVolume(162)
    music.playMelody("C5 G A G A B C5 - ", 145)
    basic.clearScreen()
    basic.showString("Angle:")
    basic.showNumber(angle)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    eyelevel = 1.5
    steps_away = answer
    angle = answer
})
let angle = 0
let answer = 0
let steps_away = 0
let eyelevel = 0
basic.showIcon(IconNames.Heart)
eyelevel = 1.5
steps_away = answer
angle = answer
basic.showString("x")
basic.clearScreen()
