input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        pacMan.scrollImage(2, 200)
    }
    basic.clearScreen()
})
let pacMan: Image = null
pacMan = images.createBigImage(`
    . . . . . . . # # .
    . . . . . . # # # #
    # . # . # . . # # #
    . . . . . . # # # #
    . . . . . . . # # .
    `)
