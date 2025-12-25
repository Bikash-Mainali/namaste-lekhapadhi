import NepaliDate from 'nepali-date-converter'

function toNepaliDigits(num: number | string) {
    const nepaliNums = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९']
    return num.toString().replace(/\d/g, d => nepaliNums[parseInt(d)])
}

function getNepalTimeNepali() {
    const now = new Date()
    const nptTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kathmandu' }))
    const hours = nptTime.getHours()
    const minutes = String(nptTime.getMinutes()).padStart(2, '0')
    const seconds = String(nptTime.getSeconds()).padStart(2, '0')

    let period = 'बिहान'
    if (hours >= 12) period = 'दिउँसो'
    if (hours >= 16) period = 'साँझ'
    if (hours >= 19) period = 'बेलुका'

    const hour12 = hours % 12 || 12
    return `${period} ${toNepaliDigits(hour12)}:${toNepaliDigits(minutes)}:${toNepaliDigits(seconds)}`
}

export function getNepaliDateShortcut(): string {
    const date = new NepaliDate()
    const year = date.getYear()
    const month = date.getMonth()
    const day = date.getDate()

    const nepaliWeekdays = ['आइतबार', 'सोमबार', 'मंगलबार', 'बुधबार', 'बिहीबार', 'शुक्रबार', 'शनिबार']
    const nepaliMonths = [
        'बैशाख',
        'जेठ',
        'असार',
        'श्रावण',
        'भाद्र',
        'आश्विन',
        'कार्तिक',
        'मंसिर',
        'पौष',
        'माघ',
        'फाल्गुण',
        'चैत्र',
    ]

    return `${nepaliMonths[month]} ${toNepaliDigits(day)}, ${toNepaliDigits(year)}, ${nepaliWeekdays[date.getDay()]}, ${getNepalTimeNepali()}`
}

export function getEnglishDateShortcut(): string {
    const date = new Date()
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }
    const dateString = date.toLocaleDateString('en-US', options)

    const now = new Date()
    const nptTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kathmandu' }))
    const hours = nptTime.getHours()
    const minutes = String(nptTime.getMinutes()).padStart(2, '0')
    const seconds = String(nptTime.getSeconds()).padStart(2, '0')

    let period = 'AM'
    if (hours >= 12) period = 'PM'

    const hour12 = hours % 12 || 12
    return `${dateString}, ${hour12}:${minutes}:${seconds} ${period}`
}
