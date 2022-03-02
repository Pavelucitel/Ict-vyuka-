basic.showIcon(IconNames.Heart)
loops.everyInterval(500, function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.clearScreen()
    }
})
