export const Images = [
  'https://cdn.pixabay.com/photo/2023/07/21/16/23/cat-8141916_1280.jpg',
  'https://cdn.pixabay.com/photo/2013/12/05/18/27/cheetah-223734_1280.jpg',
  'https://cdn.pixabay.com/photo/2021/09/16/00/47/animal-6628024_1280.jpg',
  'https://cdn.pixabay.com/photo/2021/10/17/12/21/forest-6718121_1280.jpg',
  'https://cdn.pixabay.com/photo/2024/01/08/17/54/wren-8496039_1280.jpg',
  'https://images.unsplash.com/photo-1536146021566-627ce3c4d813?q=100&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1571070201382-a45dd17e17e2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1603966474815-85d21585ffb9?q=80&w=3085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1527720324130-db5f4d6abf8d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export const sentences = [
    "The sun rises slowly",
    "Gentle breeze whispers secrets",
    "Laughter echoes through halls",
    "Stars twinkle in darkness",
    "Raindrops dance on rooftops",
    "Waves crash on shore",
    "Leaves rustle in wind",
    "Birds sing morning songs",
    "Flowers bloom in spring",
    "Snow blankets the ground",
    "Moonlight illuminates the path",
    "Campfire crackles and glows",
    "Thunder rumbles in distance",
    "Rainbow arches across sky",
    "Butterflies flutter by gently",
    "Shadows lengthen at sunset",
    "Fog rolls over hills",
    "Autumn leaves fall softly",
    "Dewdrops glisten on grass",
    "Clock ticks time away",
    "Whispers carry on wind",
    "Footsteps echo in silence",
    "Candlelight flickers in darkness",
    "Pages turn in book",
    "Pencil scratches on paper",
    "Coffee brews in morning",
    "Keyboard clicks rhythmically",
    "Phone buzzes with notification",
    "Dog barks in distance",
    "Cat purrs contentedly",
    "Child laughs with joy",
    "Baby coos and gurgles",
    "Teenager sighs dramatically",
    "Adult ponders life choices",
    "Elder shares wise words",
    "Friends chat over coffee",
    "Lovers walk hand in hand",
    "Family gathers for dinner",
    "Strangers pass on street",
    "Teacher instructs the class",
    "Student raises hand eagerly",
    "Artist paints vibrant scene",
    "Musician strums guitar strings",
    "Chef creates culinary masterpiece",
    "Athlete pushes physical limits",
    "Writer crafts vivid worlds",
    "Dancer moves with grace",
    "Actor delivers powerful performance",
    "Scientist conducts groundbreaking research",
    "Engineer solves complex problems",
    "Doctor heals the sick",
    "Farmer tends the crops",
    "Gardener nurtures delicate flowers",
    "Architect designs stunning buildings",
    "Photographer captures fleeting moments",
    "Singer hits high note",
    "Politician debates current issues",
    "Firefighter battles raging inferno",
    "Police officer maintains public order",
    "Pilot navigates through clouds",
    "Sailor braves stormy seas",
    "Hiker explores mountain trails",
    "Diver plunges into depths",
    "Climber scales steep cliffs",
    "Skier glides down slopes",
    "Surfer rides ocean waves",
    "Cyclist pedals winding roads",
    "Runner crosses finish line",
    "Swimmer cuts through water",
    "Gymnast performs graceful routine",
    "Weightlifter hoists heavy barbell",
    "Archer hits bullseye",
    "Golfer sinks difficult putt",
    "Tennis player serves ace",
    "Basketball player scores three-pointer",
    "Soccer player kicks winning goal",
    "Baseball player hits home run",
    "Hockey player scores hat trick",
    "Volleyball player spikes ball",
    "Cricket player bowls perfect over",
    "Rugby player scores try",
    "Boxer lands knockout punch",
    "Fencer parries opponent's thrust",
    "Skater lands triple axel",
    "Bowler rolls perfect game",
    "Jockey races to victory",
    "Racecar driver takes checkered flag",
    "Chess player declares checkmate",
    "Poker player goes all in",
    "Magician performs mind-bending illusion",
    "Comedian delivers hilarious punchline",
    "Juggler keeps balls airborne",
    "Acrobat defies gravity",
    "Storyteller weaves captivating tale",
    "Poet recites moving verse",
    "Balloon floats on breeze",
    "Fireworks explode in sky",
    "Time flies by quickly"
  ];

export const getReadignTime = (text: string) => {
  const wordsPerMinute = 200;
  const words = text.split(' ').length ?? 0;
  return Math.ceil(words/wordsPerMinute);
}

export const reanimatedAnimations = [
  {
    title: "Smooth Opacity Transitions",
    description: "Implement seamless opacity changes in React Native using Reanimated. Create fade-in and fade-out effects for elements, enhancing the visual appeal of your app's transitions between different states or screens."
  },
  {
    title: "Dynamic Scale Animations",
    description: "Master scaling animations with Reanimated to create interactive UI elements. Learn to smoothly increase or decrease the size of components, perfect for emphasizing user interactions or displaying important information."
  },
  {
    title: "Fluid Gestures Handling",
    description: "Explore Reanimated's powerful gesture handling capabilities in React Native. Implement smooth, responsive animations triggered by user gestures like swipes, pinches, and rotations for an intuitive and engaging app experience."
  },
  {
    title: "Interpolated Color Transitions",
    description: "Dive into color interpolation using Reanimated. Create stunning visual effects by smoothly transitioning between different colors based on user interactions, scroll position, or time-based animations in your React Native app."
  },
  {
    title: "Spring-based Motion Effects",
    description: "Harness the power of spring animations in Reanimated to add natural-looking motion to your React Native components. Learn to fine-tune spring parameters for realistic bouncing and overshooting effects."
  },
  {
    title: "Animated Progress Indicators",
    description: "Craft eye-catching progress indicators using Reanimated in React Native. Implement smooth, circular progress bars, linear loaders, and custom loading animations to keep users engaged during app processes."
  },
  {
    title: "Parallel Animation Composition",
    description: "Master the art of composing multiple animations to run simultaneously with Reanimated. Create complex, multi-layered animations by combining various transformation and style changes for rich visual experiences."
  },
  {
    title: "Keyframe-based Complex Animations",
    description: "Unlock the potential of keyframe animations in Reanimated for React Native. Design intricate, multi-step animations by defining key points and letting Reanimated smoothly interpolate between them for sophisticated motion sequences."
  },
  {
    title: "Animated List Interactions",
    description: "Enhance list interactions in React Native using Reanimated. Implement smooth item removals, insertions, and reordering animations to create dynamic, responsive list views that delight users with fluid transitions."
  },
  {
    title: "Custom Easing Functions",
    description: "Explore custom easing functions in Reanimated to fine-tune animation timing. Learn to create unique motion curves that perfectly match your app's style and improve the perceived performance of UI transitions."
  },
  {
    title: "Animated Layout Transitions",
    description: "Master layout animations with Reanimated in React Native. Smoothly animate changes in component size, position, and arrangement to create fluid transitions between different app states or screen layouts."
  },
  {
    title: "Performance-optimized Scrolling Effects",
    description: "Implement butter-smooth scrolling effects using Reanimated's optimized algorithms. Create parallax scrolling, animated headers, and interactive scroll-based animations without compromising your React Native app's performance."
  },
  {
    title: "Gesture-driven Drawer Animations",
    description: "Craft responsive drawer animations using Reanimated and gesture handlers in React Native. Build smooth, interactive side menus or bottom sheets that respond naturally to user swipes and touches."
  },
  {
    title: "Animated Charts Visualization",
    description: "Bring data to life with animated charts using Reanimated in React Native. Create engaging line graphs, bar charts, and pie charts with smooth transitions and interactive elements for compelling data visualization."
  },
  {
    title: "3D Transform Animations",
    description: "Explore the world of 3D animations using Reanimated in React Native. Implement perspective transforms, rotations, and translations to create depth and immersion in your app's user interface."
  },
  {
    title: "Sequence Animation Chaining",
    description: "Master the art of chaining animations in Reanimated for React Native. Create complex sequences of movements and transitions by precisely timing and linking multiple animations for sophisticated motion design."
  },
  {
    title: "Animated Notification Badges",
    description: "Implement eye-catching notification badges using Reanimated in React Native. Create smooth scaling, color change, and bounce effects to draw user attention to new information or important updates."
  },
  {
    title: "Dynamic Form Animations",
    description: "Enhance form interactions with Reanimated animations in React Native. Implement smooth transitions for form field focus, validation feedback, and error messages to create a more responsive and intuitive user experience."
  },
  {
    title: "Animated Carousel Effects",
    description: "Build engaging image carousels with Reanimated in React Native. Create smooth sliding transitions, parallax effects, and interactive gestures to showcase content in an visually appealing and user-friendly manner."
  },
  {
    title: "Physics-based Animations",
    description: "Dive into physics-based animations using Reanimated in React Native. Simulate real-world motion with gravity, friction, and collision effects to create highly realistic and interactive UI elements in your app."
  }
];

import { Feather, Ionicons, Octicons } from "@expo/vector-icons";
import { Href } from "expo-router";
import { glsl } from "./(tabs)/helpers/shaderLib";
export type Screen = { name: string; route: string, info: string };
export const screens: Screen[] = [
  { name: 'Bottom Tab Animation (Skia)', route: '(tabs)/bottomTabAnimation', info: `This concept focuses on creating a custom bottom tab bar with focus animation using Skia Path for unique shapes.\n\nIt covers integrating navigation with Expo Router, animating tab focus, and leveraging Skia to create custom tab bar shapes.\n\nThis combination of techniques allows developers to create highly customized, visually appealing navigation experiences that enhance user interaction and app aesthetics, going beyond standard tab bar implementations.` },
  { name: 'Pan gesture (Skia)', route: '(tabs)/skiaPanGesture', info: `This advanced concept revisits pan gestures, focusing on their implementation with Skia.\n\nIt explores clipping Skia Paths, animating BlurMask effects, and handling PanGestures within the Skia context.\n\nThis approach demonstrates how slight changes in design implementation can lead to significantly different outcomes, showcasing the flexibility and power of combining Skia with Reanimated for creating sophisticated, performant gesture-based interactions.` },
  { name: 'Magic Button (Skia)', route: '(tabs)/magicButton', info: `The Magic Button concept introduces React Native Skia, opening up new possibilities for advanced animations and interactions.\n\nThis section explores creating a Skia Canvas, applying BlurMask effects, and working with basic shapes like Rect, Circle, and Path.\n\nBy combining Skia with Reanimated and handling Skia Gestures, developers can create highly customized, performant UI elements. This concept bridges the gap between simple animations and complex, custom-rendered components in React Native.` },
  { name: 'Animated Path (Skia)', route: '(tabs)/animatedPath', info: `Understanding Skia Path is crucial for creating custom shapes, graphs, and charts in React Native.\n\nThis concept delves into creating and animating custom paths using Skia and Reanimated. It covers the usePathInterpolation hook for smooth path transitions and explores Skia Effects for enhanced visuals.\n\nThis knowledge is essential for developers looking to create unique, data-driven visualizations or complex animated shapes in their applications.` },
  { name: 'Animatable Text', route: '(tabs)/animatableText', info: `Text animation is a crucial aspect of creating engaging mobile interfaces. This concept focuses on selecting the right approach for performant text animations in React Native.\n\nIt explores two main methods: using Redash for complex text manipulations, and leveraging Animateable Text for simpler, direct animations.\n\nUnderstanding these techniques allows developers to create fluid, efficient text animations that enhance readability and user engagement without compromising app performance.` },
  { name: 'Parallax', route: '(tabs)/paralax', info: `Parallax animations create a sense of depth and movement, enhancing the visual appeal of mobile applications.\n\nThis concept explores the power of combining Reanimated's interpolate function with onScroll callbacks. By listening to scroll offsets and applying interpolation, developers can create smooth, responsive parallax effects.\n\nThis technique adds a layer of sophistication to scrollable content, making the user interface more dynamic and engaging.` },
  { name: 'Spatial Tap Gesture', route: '(tabs)/spatialTapGesture', info: `Tap Gestures, often overlooked due to their simplicity, are powerful tools for creating intuitive user interactions.\n\nThis concept goes beyond basic TouchableOpacity, using Reanimated to create immediate, customized reactions to tap events. The useAnimatedReaction hook, acting as the UI thread's equivalent of useEffect, enables developers to fine-tune responses to user taps.\n\nBy customizing easing curves, apps can achieve more natural and engaging tap animations, elevating the overall user experience.` },
  { name: 'Pan Gestures', route: '(tabs)/panGestures', info: `Pan Gestures are fundamental in mobile interactions, powering scrolling, swiping, and dragging.\n\nThis concept combines react-native-gesture-handler's Pan Gesture with Reanimated to create dynamic, responsive UI elements. By tracking an object's position and leveraging useDerivedValue, developers can create smooth, interactive animations.\n\nThis approach allows for precise control over element movement and color changes, enhancing the user's tactile experience with the app's interface.` },
  { name: 'Bouncing Square', route: '(tabs)/bouncingSqare', info: `Reanimated is a powerful library for creating fluid animations in React Native.\n\nAt its core are SharedValues, which enable high-performance animations by sharing data between JavaScript and native UI threads. The useAnimatedStyle hook leverages these SharedValues to create dynamic styles that efficiently update the UI without full component re-renders. \n\nReanimated also offers essential higher-order functions: withTiming for smooth, time-based animations; withSpring for natural, springy movements; and withRepeat for cyclic effects.\n\nThese tools combined allow developers to create a wide range of animations, from simple transitions to complex gesture-based interactions, significantly enhancing the user experience in mobile applications.` },
  { name: 'Scrollable Percentage', route: '(tabs)/scrollablePercentage', info: `This advanced concept combines scroll offset listening, text percentage animation, and coordination of different animation states.\n\nUsing the useAnimatedScrollHandler hook, developers can create a dynamic percentage indicator that responds to scroll events.\n\nThis technique demonstrates how to synchronize multiple animated elements, creating a cohesive and interactive scrolling experience. It builds upon knowledge from parallax animations and text animations, showcasing the power of combining these concepts for complex UI interactions.` },
  { name: 'Layout Animations', route: '(tabs)/layoutAnimations', info: `Layout animations provide a powerful and efficient way to animate component changes in React Native.\n\nThis concept covers entering and exiting animations, keyframe animations, and layout transitions. By understanding when and how to use these techniques, developers can create smooth, natural-feeling transitions between different UI states.\n\nLayout animations enhance the overall fluidity of the app, making interface changes more intuitive and visually appealing to users.` },
  { name: 'Family Number Input', route: '(tabs)/familyNumberInput', info: `This concept demonstrates the creation of a custom number input component with a grid layout.\n\nIt combines custom tap gestures with entering and exiting animations, as well as layout transitions. This advanced technique showcases how to create complex, interactive UI elements that respond fluidly to user input.\n\nBy integrating various animation types, developers can craft unique, engaging input experiences that stand out in mobile applications.` },
  { name: 'Shared Transitions', route: '(tabs)/sharedTransitions', info: `Shared Transitions create smooth, connected animations between different screens or states in a mobile app. This concept explores setting up shared element transitions between screens and implementing a drag-to-dismiss gesture using Reanimated. It covers integrating Expo BlurView for pervasive blur effects and managing transparent navigation for seamless visual flow. This demonstrates how to create sophisticated, visually cohesive transitions that enhance the perceived continuity and fluidity of the user interface.\n\n\nImportant Note: As of now, this technique is experimental and may be unstable. It is not recommended for use in production environments, as it may lead to unexpected behavior or performance issues. Developers should approach this concept as a learning experience and exercise caution when considering its implementation in live applications.` },
  { name: 'Image Shader Transitions', route: '(tabs)/imageShaderTransitions', info: 'This concept explores creating custom image transitions using Skia ImageShaders in React Native. It demonstrates how to build a simple image transition controlled by a Slider, then advances to implementing more complex GL Transitions using custom shaders.\n\nBy learning to handle shaders in React Native, create custom shaders, and adapt existing GL Transitions, developers can craft unique, eye-catching image transitions.\n\nThis technique opens up possibilities for creating visually stunning effects in mobile applications, enhancing user engagement through smooth, customized image animations.' },
  { name: 'Navigating With Shaders', route: '(tabs)/navigatorShader', info: `This advanced concept combines Expo Router navigation with Skia ImageShaders to create animated transitions between screens. By building a custom Shader Transition provider, developers can seamlessly integrate complex visual effects into app navigation. The tutorial covers using makeImageFromSnapshot from Skia to capture screen content and animate transitions. This technique elevates the user experience by transforming standard navigation into a visually rich journey, demonstrating the powerful capabilities of combining Skia's advanced rendering with React Native's navigation systems.` }
];

export const title = "Re Animations".split('');

export const Palette = {
  text: '#FFFFFF',
  background: '#010002',
  surface: '#1E1C22',
  baseGray05: '#E5E2DC',
  baseGray80: '#30302E',
  background2: '#F1EEE8',
  backgroundNotes: '#f0f0f0',
  surfaceNotes: '#fff',
  primary: '#EB6439',
  textNotes: '#333',
};

export const LIGHT_GRAPH_SCORES = [
  100, 53, 82, 59, 43, 63, 51, 66, 54, 62, 72, 81, 89, 100, 100, 100, 96, 98,
  100, 100, 100, 100, 100, 93, 97, 100, 100,
];
export const STANDARD_GRAPH_SCORES = [
  84, 42, 67, 48, 35, 54, 43, 57, 47, 53, 61, 68, 77, 85, 87, 93, 82, 84, 88,
  87, 95, 91, 90, 77, 82, 87, 92,
];
export const PRO_GRAPH_SCORES = [
  70, 35, 55, 39, 29, 46, 37, 50, 40, 45, 51, 57, 65, 73, 74, 80, 71, 71, 75,
  73, 79, 75, 74, 63, 69, 74, 79,
];

export const AMOUNT_POINTS = STANDARD_GRAPH_SCORES.length;

export const sharedTransitionsImages = [
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV86HduRrGjBFpndk4pdsbvJugG76rN6JEEXfFShWp9S9YWMxHqfhhxYkESyt6rzfI4xxzCGrnMEqwSGCEC6Zw99bL4BHR6TZ67n-IqpgPffT-mzesOUxkjp30x9nC3Zo7y01GQ_hfYETivt6x74t87wq=w1926-h1926-s-no-gm?authuser=2',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV85dP_tn3ccKCJl64DY0ygVcZYgxC26diHC8yU3faQx_u93_72S5qy8zBsj_XL0Fsg0uWRxusHxU87DmGVqZdGeKXFKT5bcuv-QNkk-hJrLNe2_n_SlVoNNGTx0mZEKLKRmkaWx6Pd5Rd-6kHospfg4A=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV844WFh-5PMshgQ_AnXTswgMRN3DOverstORWD2L1AALPdzanOZDyb83HUow16A9F7YBHYzziFhaVC7Oi3VG3X40eG5j2kb7We-bO2ZT7IaaFyoToixmb8XpWHmHj7spcvJIgYTXBucWvmETeYzRsEWi=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV84vxva0M7jmitmTu7SL5UpnrcWzxcvnsbhRF3y36aCEU_pCKa0cvTkKMe1sLj7DroDQde48D3vCwLa73PTQ5y_dhLdjZbln6Q_EJEsSLGApbm8bqZpMDdvjM31m_4LhI4hgHLtw_ZnrmUQ2mCpyk36C=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV876EVjUuHh9ISc6TayB4wRuyXk6lWI14raqXttoGXnAsVDjUKfvTRJqv8ZVv5QriocXTTtKtfQSel6KvJGDJtM2oXV-fTiKMdUT-erhTqJsuS7YaWrzVbMs12K0ac6ebft8CmvvqHaHZzWPmPrjGltT=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV87ASfltHAiXo2C4Aj1mG0iVOtZcQ5ksayo9ukAL6RpeeSHFT9xen0sXwMvs4nH3DA_tvlDadg12Fx6Jp_5klGzwsW30bwRq0xqPdlnXwVVwSw2FPohps9o5oV97Tutf3N8R8_yiygSgFbp0NxIhMeES=w3082-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV8764lwlkZkw0ewFMoWM1dohu3l3AGx4QrB91kkoKrHVakNcTJapt_lvKoZFUDDPu844BzdcizaB897GKWzHFlwLaKsmMbCmleUItlT08htlNweVhioEdvfOE_g2r2EfB8aYGF0gD3RfHFypF01UVL0E=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV87t9noN1XNMqq_hMTUd6u_r9lyv6k2tK1Kqs_InBOMawHst3vdwQOi_0WLGRN7MCjFYPgHT-8qpdN0v_v6lVmLU3obxkuRERJ6a3ajnOrx00eCkMa9xegR83fJ2eTAvNgsdnfR4e85SUCLwa993NsWC=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV85PRKInnbklpvvyMAJ9gqbS8CO5FClh4M89W9AIsJeXFLp6HB8xscoYittNXXy2esRwVyDxdkY1UldEPgtR6mXWUA_nvhJWe9Ip70eM7ku31DaSKUD0cot5-1lJyEBHRugtbcC1oAur7W7hUrMIDDkx=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV87xqD8LVU79InNh2vFRT3W9Cqgu_ZO4k2Cb7qjhMbMMRu-OcSgQgFHoNoqO1JuO27KyFdryqIJFgrhFTS8EDlpFmM2i37SkNK37_9Im9_-5C-KWj8GS6Q8e-Kz3yA2egLsg6A-Xm8Q7c8u_mgBzvqL0=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV87K30cktzqKMkjTcytKHhjwRMnjLynHZnz52rZ7J4IAg0YVWpi8ZU5PCSfsfGcWUFLjaLDwvyyOAwLVHa-LtdjjPGx4C6-OSfuJ_q8PA6LSFWX8m4qqMjSpxzMTwySDWNMqpONQh1GOzZZHF_ygOoAd=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV86FuuO6XJtnYERPo8m2uoJM-VpS4vrdTN-7_J3WyEsyurYPyOgfnw1YgTa8aYRdElPze1oKcDvlqlh9tR85xMRe9PWeEzAnsCkLTS2wy6d9amXiRm-wC-a5YxkQtrXFCe-nYAaw6NSlWlM1L4zNDi8V=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV87qHdJRD0uMXGdfmBY6V-rq1IzErh-DRsbHN52dpc155h9tM6_DpbwtHEokfbbIQGALSenEY3deQGr2Au9kHm0QCesGtou7Ke0M0soA20R9Nmk6tA3sV51gu4RzVqIbX-QfJEa7xCOc_S8mkiDaKJlq=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV84rQ7j9sNdN0xXHUgIVQJdTP1Nk9MZNSwPt8hdRjUI93hodJUplJLK-35bLql1XBy-tv2MqQ8rWpWsDgAldVbxfEnh6dTzO0LDo887Tfxb5FPt-ysPwwQO_vhJU6JT4QADdLX6u0XRN29o4KDxUtVJ1=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV8772eQ2bJrJRoU3LDbIELiGq3RaOwT6kabIvFgOhWHPdnYXWtU9Suq2jKOmZjGZWTtzhpWtmHyWjBD0H6Glp1cUzrcMf6QDZ-YbwkSTzF7TRrWkLcrWA2q6-6FvC7DhEa5JWpMtBzH01kozCnA2x8PN=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV84gGPoc6eI4-fWMboQz1hOotDF_L4LwHdI5VfQYYz4PotxJjKiaMxSzCUatnCBZzFRq3P-M3XDV9cIoH1T4x35GLPqqweaYGHeqdrYIDF2aXzCWsd2yn3m8dB4k0u7CUj8QSuHK5fslPSLWnCGsFnoJ=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV843zkkBBWVYHJ012KKXdHIUstQbTvt_MmWLEGAVZGN-sCYoX2XAsCZt1_bi1dpvRfho1B0zhGtpgnf1yKrRowPNVnktgJKRScQmrJoUG63bwngJ6DunHvSS_Shg6GmYwR5QrRbTFEtLWCX4CCzQUEFK=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV87YBM8FVGJWlycEDJDm6FMcHjjlZOMLLnG5_g_WEs5TvEUX8u_l7oMofz9h1_2xEVYxb9yBqE5W1LEmUR3DZPRMZ8P6AzswSSvoWnEYfG6i_Tl9qZx65oK1zlh2MgFDkIWb0EA511pzv34ADaGSXKau=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV87CzRXL_eKbUAD9yHRL8-zcHDl1sSyz6FgQiLqcZOjO2q81SL5vJPyYcDuX8Gn8HvMMKnfikXhTx-YypoTkSMaCUXhIsperndb5iEd8lQzOsuhHNMeUC4hNLh8dfnfuZ8ZUtVkBFvpl9WHmTGACEFTT=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV8708SjtRqbwovfT5TSsDgsp7mtn9NSb1QexzwyFFj8Ak2wCr7TjGoZ59DPs8RL5okXWu79cNGka513ausv8CGr5WoxpTnNU3k8rO-6tM1cuTeBJo0f7y_WsVJkRADZCIl_X4YSv3iCvYXMsTOC5g8xl=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV87IGqAJ6DcuslNNVDlKQRYX-rUSfWXscDCFJ6HmxIFnxb_zC7gWjM1Y9dXWi7xiNUnp9X_PBsU-Q6dFjDArrp1WWP-ZUR00VdBrCb95iYsp2NlFQfJroomDcHQ9CeLQvsLvC-LRFmt4Z_CN9NmFuI-e=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV87w2UVeDlQk5XOHDrlwxHgU0Pj8u7Tq0cZP7yXOdflStXsqTOPilmFxBl4GSGOCdv8d80XvpLxpW_XOuONU8Lih200dAWJhFxca7zzljUnyzL1o1Hqb8SRNvbUBFP8zfVwlyrb5J2MJlUV23czXfdYj=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV87sdOofMhfoORBhedL6UXPcEFwa0xNk21FKTZN_CwkbiN1Q4k3nVB_lDLXuFgZZ1WCCLjFL_LDESdjJgWd9scPiDtLB1evUgP8e0_vGLtBbG8-Kx--Y3PL3Sf254OskgaLeOIeWQHEnBqGgJeVY1Y-I=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV87jGY93BihSXGgQz4v04cVFWcbdBd_vamtep0ZEyN5XYdFxbNkgvfSahtYtfva05Z1BNexw-iaovjdj27PWmyHCoCsFPMNUsS86OXjIOgzWjZX26BCiH_p0bqGCTfGiZKjG8hhz65xte1JWkDnX5WYd=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV84_4KXq0-MXnWXW9TmpmejUEoqd8eCp1tqJ3EqiNFjEQTTDl5Pt2MgDar_MYbDqMSDmPAHixnWoBZilyrWhZlArL5OcEXxgC1LEk51Xey3ciH7Z_lkdu59PUTQg1P0okmzMPWow81pTRHsFn51X8A8t=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV86ppsTvGldfGEFFdDG6nmEgFkIZFcByIjF33u7Kli-KnY0Re6c5djrii6O24EQeCc_-qPfE4OPx2z79X74OWazjgKmyWQuBnxluw3WS9UC6_SyRWUO-QiDzD4l9pYo9SCiSIzaZFxRoLoccDh1cXCJU=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV86seWSa3yvH0Bs4Sk_k3aYWE9LMsRFl8Cgvvj8qxZy7OQnzmtsUJMBhJQnN7JjagGArORBo8lWVmZdOBzu6WCqnGzp4b2SKn8uXT_MJauZrnTOCb_jNSbewwGsNMTc3GntJQLnFssWD6vJsq8ykco1Y=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV86-Dp0Uimw0YMzBPWnJVuLX4XtywIxVUKDOc7lANPr-ykqXwZHMC1wTSbPAeF5-IWbNM39q-4Mn8nk2gKlpv75bmLRuU-t7wiyrDzAq2u4q6mC7-owtwYg1shHaoMYgnwj0nGKJRZLRAu_-itKpn15k=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV87aN5az_oteUODFHMfqKt42WTbkGIyPl91koQVQo7eSd75138bQFBJCtofqQnZbXrDkpaPSBOCwpZMdxWzTN_li58Bm9qzXnG17KCVrkd8hxb8_nImzBJRghhX5oPlW2LDvCCsDhg9UiX80ivNyHMoi=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV85GyaA2JcLj1ylAjYrG1rTYC9m4_C_DOveOCouBQOyXJL2OqP_Z_og23pF6GhAOZEbmtfsfVXNZCdqyRgvqlw2Uz-vsZASgxU-hxv_JZlSwzPXYVVd2Cc_laPVRr1ZQz6bQnLe7fNxe1v-RqNWFMzC3=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV86f3-f7UCf6zESlLCz9QZJQuxCxYAIniTIrNx3KCKaoC-Nefcsew8X5XyrsmrHxotus7AT-knGnWsSFmSVVhOywgNAm111Le9GhKqqdI_OzKHhuucaelXmNl16_Xnn0KUw5F5DCKwJ82V1NvRapdGmB=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV87mmz8D-3V9GeCa0OlFzpHgC6CxaqgJCN_18fEKbFUwR-ZVR4IoOIRSQBwwA4vCMo2d_Efnr-Of_nruus56yF5r9qGhVliytlv-3qgsgwMgn1zZS4y-8nS4ufn3EkGDoqZwHsrobHKTGOCx-7EZ07kn=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV84CtbX0b_MiTE-SQni6pW3fZs2BNLPeyMVd6cTKy0rR79hiMUa_hTSeKhvWx3PyddBgc931OU7vs8l1fXQTBjFKXO-XsALeyFKVDoqQaiOOxCNK-yzHa6Ka9VjrEZrrheiIQkL98Fzf0fGobov--235=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV85zqP7AQV4gg5CXCUnXVT6DkU1GcV9MAQHOZ8pLbCwW2Ws3TCaKHpKFPPLqiOlhZEF_vAro4Ae-ythwejZ8fRibSx8hQmHzIQ9Au55Zr96rBB6h4zfvIdykC9CU3YwJDvG8c8NZRrVe7YYd9hhcTGD5=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV86bh-WPvKNWsmH816_vLH4ZyCgDOPj8LLrEdKkeZrCprLH6MYGLafFJOhv_W8VAAWH-jJswkC0Acykv5dLXfCzvMIyQD0cl0Ce0FpRVKQNOOGaRS6_XlQp3XeFCRsMMiQTIAO4RzynYVAUBOeLsIKxr=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV856NKM_SzjZjzCLNUC2rJO_F66lteSLPiQun-vjxFKYd_mxtzex168zKf1hvIyzRtYPy6gY4dcTcGbTIxNV5kD8Kf7F9K8RRJThQqfWElLYZsX_O3zqLRrEP74KYTFQoFBZ9GxDKvQe9aoNJk14FSi3=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV86qFkiLZhauXWv7linPUGMTJ0LodH-dB7PmUgDX6tsADSfFse6ZgIbYrOsfI6bvxdZU-hLsHL3EYhewTFDgq5Dm0yD6mlNypfDSGGRqLVsrg-YtprnhuEy7wbnKQYAoe7DsQ53TFtKbeFNc_7tSIpmV=w1926-h1926-s-no-gm?authuser=0',
  },
  {
    url: 'https://lh3.googleusercontent.com/pw/ABLVV87lHdLLfjo2jIU5-zArzf2FOfoNTkDNitPbWVOdFY8vRBFAGa82GfWUjZ1O4nXq_uJ-T8sw2-UlGbXaAsG1gFYSuUBktxsDE9ZBj2DCE_xPvlBVpaxsTfte80yH2amCLALF12Zv_C1JmmpEJCHyK8ma=w1926-h1926-s-no-gm?authuser=0',
  },
];

export const tabsScreenNames = {
  Home: 'Home',
  Bookmark: 'Bookmark',
  Add: 'Add',
  Profile: 'Profile',
  Settings: 'Settings',
} as const;

export const getIconByScreenName = (screenName: keyof typeof tabsScreenNames) => {
  switch (screenName) {
    case tabsScreenNames.Home:
      return <Octicons name="home" size={24} color="white" />;
    case tabsScreenNames.Bookmark:
      return <Feather name="bookmark" size={24} color="white" />;
    case tabsScreenNames.Add:
      return <Ionicons name="add-circle-outline" size={24} color="white" />;
    case tabsScreenNames.Profile:
      return <Octicons name="person" size={24} color="white" />;
    case tabsScreenNames.Settings:
      return <Ionicons name="settings-sharp" size={24} color="white" />;
  }
};
// Shader From https://gl-transitions.com/
export const butterflyShader = glsl`
  // Author: mandubian
  // License: MIT
  float amplitude = 1.0;
  float waves = 10.0;
  float colorSeparation = 0.8;
  float PI = 3.14159265358979323846264;
  float compute(vec2 p, float progress, vec2 center) {
  vec2 o = p*sin(progress * amplitude)-center;
  // horizontal vector
  vec2 h = vec2(1., 0.);
  // butterfly polar function (don't ask me why this one :))
  float theta = acos(dot(o, h)) * waves;
  return (exp(cos(theta)) - 2.*cos(4.*theta) + pow(sin((2.*theta - PI) / 24.), 5.)) / 10.;
  }
  vec4 transition(vec2 uv) {
    vec2 p = uv.xy / vec2(1.0).xy;
    float inv = 1. - progress;
    vec2 dir = p - vec2(.5);
    float dist = length(dir);
    float disp = compute(p, progress, vec2(0.5, 0.5)) ;
    vec4 texTo = getToColor(p + inv*disp);
    vec4 texFrom = vec4(
    getFromColor(p + progress*disp*(1.0 - colorSeparation)).r,
    getFromColor(p + progress*disp).g,
    getFromColor(p + progress*disp*(1.0 + colorSeparation)).b,
    1.0);
    return texTo*progress + texFrom*inv;
  }
`;

export const directionalWarpShader = glsl`
  // Author: pschroen
  // License: MIT

  vec2 direction = vec2(-1.0, 1.0);

  const float smoothness = 0.5;
  const vec2 center = vec2(0.5, 0.5);

  vec4 transition (vec2 uv) {
    vec2 v = normalize(direction);
    v /= abs(v.x) + abs(v.y);
    float d = v.x * center.x + v.y * center.y;
    float m = 1.0 - smoothstep(-smoothness, 0.0, v.x * uv.x + v.y * uv.y - (d - 0.5 + progress * (1.0 + smoothness)));
    return mix(getFromColor((uv - 0.5) * (1.0 - m) + 0.5), getToColor((uv - 0.5) * m + 0.5), m);
  }
`;

export const fadeGrayScale = glsl`
  // Author: gre
  // License: MIT

  float intensity = 0.3; // if 0.0, the image directly turn grayscale, if 0.9, the grayscale transition phase is very important
  
  vec3 grayscale (vec3 color) {
    return vec3(0.2126*color.r + 0.7152*color.g + 0.0722*color.b);
  }
  
  vec4 transition (vec2 uv) {
    vec4 fc = getFromColor(uv);
    vec4 tc = getToColor(uv);
    return mix(
      mix(vec4(grayscale(fc.rgb), 1.0), fc, smoothstep(1.0-intensity, 0.0, progress)),
      mix(vec4(grayscale(tc.rgb), 1.0), tc, smoothstep(    intensity, 1.0, progress)),
      progress);
  }
`

export const Notes = [
  "Remember to buy groceries on the way back home from work. Don't forget the milk and eggs.",
  'Research new investment opportunities in the tech sector. Look into emerging startups and trends.',
  'Practice guitar chords for at least 30 minutes every day. Focus on mastering barre chords.',
  'Draft outline for upcoming presentation on climate change. Incorporate recent data and case studies.',
  'Plan weekend getaway with friends. Consider options for hiking or beach destinations.',
  'Schedule dentist appointment for annual check-up. Call to confirm insurance coverage beforehand.',
  "Start reading 'The Great Gatsby' for book club meeting next month. Take notes on themes and characters.",
  'Review Spanish vocabulary flashcards for upcoming language proficiency test. Focus on verbs and conjugations.',
  'Attend networking event next Thursday. Prepare elevator pitch and bring plenty of business cards.',
  'Begin home renovation project by researching contractors and obtaining quotes. Focus on kitchen upgrades.',
  'Volunteer at local animal shelter this weekend. Sign up for morning shift to help with feeding and cleaning.',
  'Set SMART goals for personal fitness. Aim to run a half marathon by the end of the year.',
  'Experiment with new recipes for meal prep. Incorporate more plant-based options for a healthier diet.',
  'Update resume with recent achievements and skills. Tailor it for specific job applications.',
  'Plan monthly budget and track expenses using spreadsheet or budgeting app. Allocate funds for savings and investments.',
  'Start learning basic coding skills online. Explore HTML, CSS, and JavaScript tutorials.',
  'Organize closet and donate unused clothing items to charity. Declutter and create more space.',
  'Research mindfulness and meditation techniques for stress relief. Practice deep breathing exercises daily.',
  'Sign up for photography class to improve skills. Explore different techniques and compositions.',
  'Create a gratitude journal to reflect on positive moments each day. Write down three things to be grateful for.',
].map((note, index) => ({
  id: index.toString(),
  title: note,
}));