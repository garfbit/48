let s2 = 0
let s1 = 0
let n1 = 220
let n2 = 284
let i = 1
while (i <= n1 / 2) {
    if (n1 % i == 0) {
        s1 += 1
    }
    i += 1
}
i = 1
while (i <= n2 / 2) {
    if (n2 % i == 0) {
        s2 += 1
    }
    i += 1
}
if (n1 == s2 && n2 == s1) {
    basic.showIcon(IconNames.Happy)
} else {
    basic.showIcon(IconNames.Sad)
}
