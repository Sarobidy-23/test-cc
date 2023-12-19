import promptSync from 'prompt-sync';
import {displayMenu} from "./menu.js";
const prompt = promptSync();

export const RiceCooker = {
  isRicePresent: false,
  isRiceCooked: false,
  steamingInProgress: false,
  heatingInProgress: false,

  addRice() {
    this.ricePresent = true;
    console.log('Rice has been added.');
  },

  cookRice() {
    if(this.isRiceCooked) {
      console.log("Already cooked");
      return
    }
    if (this.ricePresent) {
      console.log('Cooking rice...');
      this.delaySync(1500);
      this.isRiceCooked = true;
      console.log('The rice has been cooked!');
    }
  },

  steam() {
    if (this.ricePresent && !this.steamingInProgress) {
      console.log('Steaming in progress...');
      this.steamingInProgress = true;
      this.delaySync(1500);
      this.steamingInProgress = false;
      console.log('Steaming completed!');
      return;
    } else if (!this.ricePresent) {
      console.log('Cannot steam. The rice cooker is empty.');
    } else {
      console.log('Steaming is already in progress.');
    }
  },

  keepWarm() {
    if (this.ricePresent && this.riceCooked && !this.heatingInProgress) {
      console.log('The rice is now being kept warm.');
      this.heatingInProgress = true;
    } else if (!this.ricePresent) {
      console.log('Cannot keep warm. The rice cooker is empty.');
    } else if (!this.riceCooked) {
      console.log('Cannot keep warm. The rice is not cooked.');
    } else {
      console.log('Keeping warm is already in progress.');
    }
  },

  removeRice() {
    if (this.ricePresent && (this.riceCooked || this.heatingInProgress)) {
      this.ricePresent = false;
      this.riceCooked = false;
      this.steamingInProgress = false;
      this.heatingInProgress = false;
      console.log('The rice has been removed from the rice cooker.');
      return;
    } 
    console.log('There\'s no rice to remove or it is not cooked yet.');
  },

  delaySync(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {
    }
  },
};


export function simulateRiceCooker() {
  let input;
  const condition = true;

  while (condition) {
    displayMenu();
    input = prompt('Enter your choice: ');
    const choice = parseInt(input);
    switch (choice) {
        case 1:
            riceCooker.addRice();
            break;
        case 2:
            riceCooker.cookRice();
            break;
        case 3:
            riceCooker.steam();
            break;
        case 4:
            riceCooker.keepWarm();
            break;
        case 5:
            riceCooker.removeRice();
            break;
        case 6:
            console.log('Thank you for using the Rice Cooker Simulator. Goodbye!');
            condition = false;
            break
        default:
            console.log("Enter valid number.")
            break;
    }
  }
}

simulateRiceCooker();
