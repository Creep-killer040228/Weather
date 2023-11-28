export function unix(dt, type) {
    const seconds = dt * 1000
    const data = new Date(seconds)
    let result =
        type == 'day' ? data.toLocaleString('ru-Ru', {
            day: 'numeric'
        }) :
        type == 'month' ? data.toLocaleString('ru-Ru', {
            month: 'short'
        }) :
        type == 'weekday' ? data.toLocaleString('ru-Ru', {
            weekday: 'short'
        }) :
        ''
    return result
}