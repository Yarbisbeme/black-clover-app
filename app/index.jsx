import { useRouter } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import { View, Image, Animated, SafeAreaView } from 'react-native';

const RotatingImage = () => {
    const spinValue = useRef(new Animated.Value(0)).current;
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace('/About'); // Redirige después de 3 segundos
        }, 3000);

        const startAnimation = () => {
            Animated.loop(
                Animated.timing(spinValue, {
                    toValue: 1,
                    duration: 3000, // Tiempo en milisegundos (3 segundos por vuelta)
                    useNativeDriver: true, // Usa la GPU para mejor rendimiento
                })
            ).start();
        };

        startAnimation();
        return () => clearTimeout(timer);
    }, []);

    // Interpolar el valor para convertirlo en grados de rotación
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212' }}>
            <Animated.Image
                source={require('@/assets/images/trebo.png')}
                style={{
                    width: 200,
                    height: 200,
                    transform: [{ rotate: spin }],
                }}
                resizeMode="contain"
            />
        </SafeAreaView>
    );
};

export default RotatingImage;
