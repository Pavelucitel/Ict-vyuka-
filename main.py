def on_forever():
    basic.show_icon(IconNames.HEART)
    if input.button_is_pressed(Button.A):
        pass
basic.forever(on_forever)
