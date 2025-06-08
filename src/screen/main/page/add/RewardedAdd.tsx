import React, { useEffect, useState, useRef } from 'react';
import { View, Text, BackHandler, Animated, StyleSheet } from 'react-native';
import { RewardedAd, RewardedAdEventType, AdEventType, TestIds } from 'react-native-google-mobile-ads';
import { useNavigation } from '@react-navigation/native';
import { userContext } from '../../../../utils/context/ContextProvider';

const adUnitId = __DEV__
    ? TestIds.REWARDED
    : 'ca-app-pub-6357576702874785/8879607699';

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['food', 'tiffin', 'delivery'],
    serverSideVerificationOptions: {
        userId: 'USER_ID',
    },
});

const RewardedAdScreen = () => {
    const navigation = useNavigation();
    const { setAddCountry } = userContext();

    const [loaded, setLoaded] = useState(false);
    const [rewardEarned, setRewardEarned] = useState(false);
    const [showAd, setShowAd] = useState(true);
    const [adCompleted, setAdCompleted] = useState(false);

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.8)).current;

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            return !adCompleted;
        });

        return () => backHandler.remove();
    }, [adCompleted]);

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 8,
                tension: 40,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const unsubscribeLoaded = rewarded.addAdEventListener(
            RewardedAdEventType.LOADED,
            () => {
                clearTimeout(timeoutId);
                setLoaded(true);
                rewarded.show();
            }
        );

        const unsubscribeEarned = rewarded.addAdEventListener(
            RewardedAdEventType.EARNED_REWARD,
            reward => {
                setRewardEarned(true);
            }
        );

        const unsubscribeClosed = rewarded.addAdEventListener(
            AdEventType.CLOSED,
            () => {
                setAdCompleted(true);
                setShowAd(false);
                setAddCountry(0);
                navigation.goBack();
            }
        );

        rewarded.load();

        // Timeout fallback
        timeoutId = setTimeout(() => {
            if (!loaded) {
                setShowAd(false);
                setAddCountry(0);
                navigation.goBack();
            }
        }, 10000); // 10 seconds

        return () => {
            clearTimeout(timeoutId);
            unsubscribeLoaded();
            unsubscribeEarned();
            unsubscribeClosed();
        };
    }, []);

    if (!showAd) return null;

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.card, {
                opacity: fadeAnim,
                transform: [{ scale: scaleAnim }]
            }]}>
                <Text style={styles.title}>
                    {loaded ? 'Your Reward is Ready!' : 'Preparing Your Reward'}
                </Text>
                <Text style={styles.subtext}>
                    {loaded
                        ? 'Watch a short video to claim your reward'
                        : 'Please wait while we load your special reward...'}
                </Text>
            </Animated.View>

            {rewardEarned && (
                <Animated.View style={[styles.rewardToast, {
                    opacity: fadeAnim,
                    transform: [{ scale: scaleAnim }]
                }]}>
                    <Text style={styles.rewardText}>Reward earned successfully!</Text>
                </Animated.View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: '#222',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    title: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
    },
    subtext: {
        color: '#AAA',
        fontSize: 14,
        marginTop: 10,
        textAlign: 'center',
    },
    rewardToast: {
        position: 'absolute',
        bottom: 40,
        flexDirection: 'row',
        backgroundColor: 'rgba(76, 175, 80, 0.1)',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
        alignItems: 'center',
    },
    rewardText: {
        color: '#4CAF50',
        marginLeft: 10,
        fontWeight: '600',
    },
});

export default RewardedAdScreen;
