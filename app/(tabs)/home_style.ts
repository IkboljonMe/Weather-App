import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',

    },
    weathericon: {
        width: 50,
        height: 50,
    },
    weatherContainer: {
        flexDirection: 'row', // Aligns items horizontally
        alignItems: 'center', // Centers items vertically
        justifyContent: 'center', // Centers items horizontally
    },

    textStyle: {
        textAlign: 'center',
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'AvenirNext-Regular',
        color: 'white',
    },
    largeText: {
        fontSize: 44,
    },
    smallText: {
        marginTop: 5,
        fontSize: 18,

    },
    mediumText: {
        marginTop: 5,
        fontSize: 22,
        textAlign: "left",
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'AvenirNext-Regular',
        color: 'white',

    },
    moderatetext: {
        fontSize: 25,
        marginTop: 10,
    },
    smallmodText: {
        fontSize: 20,
    },
    imageContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        opacity: 0.8,
    },
    detailsContainer: {
        width: '90%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%',
    },
    forecastContainer: {
        paddingVertical: 20,
        color: 'white',
    },
    forecastwind: {
        marginTop: 5,
    },

    forecastItem: {
        marginHorizontal: 10,
        alignItems: 'center',
        borderRadius: 8,
        width: 210,
        color: 'white',
        // backgroundColor: 'rgba(0,0,0,0.1)',

    },
    mainweather: {
        width: 40,
        height: 40,

    },
    expandedItem: {
        backgroundColor: 'rgba(211, 211, 211, 0.2)', // Darker gray for expanded state
    },
    forecastDate: {
        marginTop: 10,
        fontSize: 18,
        color: 'white',
    },
    forecastTemp: {
        fontSize: 24,
        color: 'white',
    },
    forecastConditions: {
        fontSize: 18,
        color: 'white',
    },
    forecastDetails: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',

    },
    hourlyForecastContainer: {
        paddingVertical: 20,
    },
    hourlyItem: {
        alignItems: 'center',
        marginHorizontal: 10,

    },
    hourlyTime: {
        fontSize: 16,
        color: '#fff',
    },
    hourlyTemp: {
        fontSize: 19,
        color: '#fff',
    },
    hourlyCondition: {
        fontSize: 17,
        color: '#fff',
    },
    hourlyPrecip: {
        fontSize: 14,
        color: '#fff',
    },
    hourlyhumidity: {
        marginTop: 5,
        fontSize: 14,
        color: '#fff',
    },
    additionalDetails: {

    },
    detailText: {
        color: 'white',
        fontSize: 14,
        marginBottom: 8,
    },
});
export default styles