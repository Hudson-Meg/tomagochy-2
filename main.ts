input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        . # # # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        . # # # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    frenship += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        # . # # .
        . . . . .
        . . . # .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # # . #
        . . . . .
        . # . . .
        . . # # #
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        # . # # .
        . . . . .
        . . . # .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # # . #
        . . . . .
        . # . . .
        . . # # #
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    frenship += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . # # # .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . # #
        . # . # .
        . # # # .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # #
        . # # # .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # # # #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # # # .
        # . . # #
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # # # .
        # . # . #
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    hunger += 1
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
    frenship += -1
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    sleep = 1
    basic.clearScreen()
    basic.showString("ZZz")
    basic.showLeds(`
        . . . . .
        # # . # #
        . # # # .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
    frenship += -1
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
let sleep = 0
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
let poop = 5
let frenship = 5
let hunger = 5
let exersize = 5
sleep = 1
loops.everyInterval(60000, function () {
    if (randint(1, 20) == 1) {
        sleep = 0
    }
})
loops.everyInterval(60000, function () {
    poop += -1
    hunger += -1
    frenship += -1
    exersize += -1
})
basic.forever(function () {
    while (sleep == 0) {
        basic.showString("ZZ")
    }
})
basic.forever(function () {
    if (hunger == 20) {
        for (let index = 0; index < 9999999999; index++) {
            basic.showString("your pet was too fat and died")
        }
    }
    if (hunger == 15) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
    }
    if (frenship == 0) {
        for (let index = 0; index < 1000000; index++) {
            basic.showString("your pet left")
        }
    }
    if (hunger == 0) {
        for (let index = 0; index < 1000000; index++) {
            basic.showString("your pet died")
        }
    }
    if (exersize == 0) {
        for (let index = 0; index < 1000000; index++) {
            basic.showString("your pet was too fat and died")
        }
    }
    if (poop == 0) {
        if (randint(0, 1) == 1) {
            poop = 5
        }
        if (randint(0, 1) == 0) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # # # # #
                . . . . .
                `)
            basic.pause(60000)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . # # # .
                # # # # #
                `)
            basic.showLeds(`
                # . . . .
                . . . . #
                . . # . .
                . # # # .
                # # # # #
                `)
            poop = 5
        }
    }
})
