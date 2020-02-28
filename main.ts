namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
function buildLevel () {
    if (nextLevel == list.length) {
        game.over(false)
    }
    scene.setTileMap(list[nextLevel])
    for (let value of list) {
        scene.place(value, player1)
    }
    nextLevel += 1
}
scene.onHitTile(SpriteKind.Player, 7, function (sprite) {
    buildLevel()
})
let player1: Sprite = null
let nextLevel = 0
let list: Image[] = []
list = [img`
. . . . . f f f f f f . . . . . 
. . . . f f 1 1 1 1 f f f . . . 
. . . . f 1 1 1 1 1 1 1 f f . . 
. . . . f 1 1 f 1 1 f 1 1 f f . 
. . . . f 1 f 1 1 1 1 f 1 1 f . 
. . . . f 1 f f f f f f 1 1 f . 
. . . . f 1 1 1 1 1 1 1 1 f f . 
. . . . . f f f 1 1 1 1 f f . . 
. . . . . . . f f f f f f . . . 
. . . . . . . . . f . . . . . . 
. . . . . . f f f f f f f f . . 
. . . . . . . . f f . . . . . . 
. . . . . . . . f f . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . . f . . . f f . . . . 
. . . . . f f . . . . f . . . . 
`, img`
. . . . . f f f f f f . . . . . 
. . . . f f 1 1 1 1 f f f . . . 
. . . . f 1 1 1 1 1 1 1 f f . . 
. . . . f 1 1 f 1 1 f 1 1 f f . 
. . . . f 1 f f f f f f 1 1 f . 
. . . . f 1 f 1 1 1 1 f 1 1 f . 
. . . . f 1 1 1 1 1 1 1 1 f f . 
. . . . . f f f 1 1 1 1 f f . . 
. . . . . . . f f f f f f . . . 
. . . . . . . . . f . . . . . . 
. . . . . . f f f f f f f f . . 
. . . . . . . . f f . . . . . . 
. . . . . . . . f f . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . . f . . . f f . . . . 
. . . . . f f . . . . f . . . . 
`, img`
. . . . . f f f f f f . . . . . 
. . . . f f 1 1 1 1 f f f . . . 
. . . . f 1 1 1 1 1 1 1 f f . . 
. . . . f 1 1 f 1 1 f 1 1 f f . 
. . . . f 1 f 9 1 1 9 9 1 1 f . 
. . . . f 1 9 9 f f f 9 1 1 f . 
. . . . f 1 9 1 1 1 1 9 1 f f . 
. . . . . f f f 1 1 1 9 9 f . . 
. . . 2 . 2 . f f f f f f . . . 
. . . 2 2 2 . . . f . . . . . . 
. . . . 7 f f f f f f f f f . . 
. . . . 7 . . . f f . . . . . . 
. . . . 7 . . . f f . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . . f . . . f f . . . . 
. . . . . f f . . . . f . . . . 
`]
scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 f 7 7 7 7 7 7 7 7 f 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 f 7 7 7 7 7 7 7 7 7 7 7 7 f 7 
7 f 7 7 7 7 7 7 7 7 7 7 7 7 f 7 
7 7 f 7 7 7 7 7 7 7 7 7 7 7 f 7 
7 7 f f 7 7 7 7 7 7 7 7 f f 7 7 
7 7 7 f f 7 7 7 7 7 7 f f 7 7 7 
7 7 7 7 7 f f f f f f 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, true)
nextLevel = 0
player1 = sprites.create(img`
. . . . 5 5 5 5 5 5 5 5 5 5 5 . 
. . . 5 5 5 1 5 1 5 1 5 f 5 5 . 
. . . 5 f 1 1 1 1 1 1 1 f f 5 5 
. . . 5 f 1 1 f 1 1 f 1 1 f f 5 
. . . 5 f 1 f 1 1 1 1 f 1 1 f 5 
. . . 5 f 1 f f f f f f 1 1 f 5 
. . . 5 f 1 1 1 1 1 1 1 1 f f 5 
. . . 5 5 f f f 1 1 1 1 f 5 5 5 
. . . 5 5 5 5 f f f f f 5 5 5 . 
. . . . 5 . . 5 5 f 5 5 5 . 5 . 
. . . . . . f f f f f f f f 5 5 
. . . . . . . . f f . . . . . . 
. . . . . . . . f f . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . . f . . . f f . . . . 
. . . . . f f . . . . f . . . . 
`, SpriteKind.Player)
controller.moveSprite(player1, 100, 100)
buildLevel()
