import React, { useCallback, useEffect, useImperativeHandle } from "react";
import { Dimensions, StatusBar } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { Line, BottomSheet } from "./styles";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const STATUS_BAR_HEIGHT = StatusBar?.currentHeight || 0;

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + STATUS_BAR_HEIGHT;

type BottomSheetProps = {
  children: React.ReactNode;
};

export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
};

export default React.forwardRef<BottomSheetRefProps, BottomSheetProps>(
  function LastTransactions({ children }, ref) {
    const translateY = useSharedValue(0);
    const active = useSharedValue(false);

    const scrollTo = useCallback((destination: number) => {
      "worklet";
      active.value = destination !== 0;
      translateY.value = withSpring(destination, { damping: 50 });
    }, []);

    const isActive = useCallback(() => {
      return active.value;
    }, []);

    useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
      scrollTo,
      isActive,
    ]);

    const context = useSharedValue({ y: 0 });
    const gesture = Gesture.Pan()
      .onStart(() => {
        context.value = { y: translateY.value };
      })
      .onUpdate((event) => {
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
        translateY.value = Math.min(translateY.value, -SCREEN_HEIGHT / 3);
      })
      .onEnd(() => {
        if (translateY.value > -SCREEN_HEIGHT / 1.5) {
          scrollTo(-SCREEN_HEIGHT / 3);
        } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
          scrollTo(MAX_TRANSLATE_Y);
        }
      });

    useEffect(() => {
      scrollTo(-SCREEN_HEIGHT / 3);
    }, []);

    const rBottomSheetStyle = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        translateY.value,
        [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
        [25, 0],
        Extrapolate.CLAMP
      );
      return {
        borderRadius,
        transform: [{ translateY: translateY.value }],
      };
    });

    return (
      <GestureDetector gesture={gesture}>
        <BottomSheet style={[rBottomSheetStyle]}>
          <Line />
          {children}
        </BottomSheet>
      </GestureDetector>
    );
  }
);
