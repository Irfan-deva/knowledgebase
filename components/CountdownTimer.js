import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const CountdownTimer = () => {
  const [timer, setTimer] = useState(10);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let intervalId;

    if (!isPaused) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) {
            return prevTimer - 1;
          } else {
            clearInterval(intervalId);
            return 0;
          }
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  return (
    <View>
      <Text style={styles.timer}>{timer}</Text>
      {isPaused ? (
        <Button title="Resume" onPress={handleResume} />
      ) : (
        <Button title="Pause" onPress={handlePause} />
      )}
    </View>
  );
};

const styles = {
  timer: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
};

export default CountdownTimer;
