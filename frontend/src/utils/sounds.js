// Sound effects utility
const sounds = {
  click: new Audio('/src/assets/sounds/click.mp3'),
  success: new Audio('/src/assets/sounds/success.mp3'),
  error: new Audio('/src/assets/sounds/error.mp3'),
  warning: new Audio('/src/assets/sounds/warning.mp3'),
  loading: new Audio('/src/assets/sounds/loading.mp3'),
};

// Set volume levels
Object.values(sounds).forEach(sound => {
  sound.volume = 0.3; // 30% volume by default
});

// Play a sound effect
export const playSound = (soundName, options = {}) => {
  const sound = sounds[soundName];
  
  if (!sound) {
    console.warn(`Sound '${soundName}' not found`);
    return;
  }
  
  // Set volume if provided (0-1)
  if (options.volume !== undefined) {
    sound.volume = Math.min(1, Math.max(0, options.volume));
  }
  
  // Stop and rewind the sound if it's already playing
  sound.pause();
  sound.currentTime = 0;
  
  // Play the sound
  const playPromise = sound.play();
  
  // Handle any errors
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      console.error('Error playing sound:', error);
    });
  }
  
  return sound;
};

// Preload all sounds
export const preloadSounds = () => {
  Object.values(sounds).forEach(sound => {
    sound.load();
  });
};

// Sound effect hook for React components
export const useSound = () => {
  return {
    playClick: (options) => playSound('click', options),
    playSuccess: (options) => playSound('success', { volume: 0.4, ...options }),
    playError: (options) => playSound('error', { volume: 0.3, ...options }),
    playWarning: (options) => playSound('warning', { volume: 0.3, ...options }),
    playLoading: (options) => playSound('loading', { volume: 0.2, ...options }),
  };
};

export default sounds;
