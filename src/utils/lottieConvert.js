import fs from 'fs';
import lottie from 'lottie-web';

const convertLottieToJson = async (lottieFilePath, jsonFilePath) => {
  try {
    const data = await fs.promises.readFile(lottieFilePath, 'utf8');
    const animationData = JSON.parse(data);

    await fs.promises.writeFile(
      jsonFilePath,
      JSON.stringify(animationData, null, 2)
    );
    console.log('Conversion successful!');
  } catch (error) {
    console.error('Error during conversion:', error);
  }
};

// Ganti 'path/to/your/animation.lottie' dan 'path/to/your/animation.json' dengan jalur yang sesuai
const lottieFilePath = 'path/to/your/animation.lottie';
const jsonFilePath = 'path/to/your/animation.json';

convertLottieToJson(lottieFilePath, jsonFilePath);
