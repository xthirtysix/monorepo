export function createClassNames(classes: { [key: string]: boolean }): string {
    let classNames = ''

    for (const [key, value] of Object.entries(classes)) {
        if (value) classNames += key + ' '
    }

    return classNames.trim()
}
