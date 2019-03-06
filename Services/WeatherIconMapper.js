const iconMap = {
    '01d': 'md-sunny',
    '01n': 'md-moon',
    '02d': 'md-cloudy',
    '02n': 'md-cloudy',
    '03d': 'md-cloudy',
    '03n': 'md-cloudy',
    '04d': 'md-cloudy',
    '04n': 'md-cloudy',
    '09d': 'md-rainy',
    '09n': 'md-rainy',
    '10d': 'md-rainy',
    '10n': 'md-rainy',
    '11d': 'md-thunderstorm',
    '11n': 'md-thunderstorm',
    '13d': 'md-snow',
    '13n': 'md-snow',
    '50d': 'md-funnel',
    '50n': 'md-funnel',
}

function getWeatherIcon(iconCode) {
    return iconMap[iconCode];
};

export default {
    getWeatherIcon: getWeatherIcon
};