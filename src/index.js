// import './css/styles.css';

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.start();
    }

    start() {
        const targetTime = this.targetDate.getTime();

        setInterval(() => {
            const currentTime = Date.now();
            const time = targetTime - currentTime;
            const timeLeft = this.getTimeComponents(time);
            this.updateCountdownTimer(timeLeft);

        }, 1000);
    }

    updateCountdownTimer({ days, hours, mins, secs }) {
        const timerById = document.querySelector(this.selector);
        const daysTimer = timerById.querySelector('span[data-value="days"]');
        const hoursTimer = timerById.querySelector('span[data-value="hours"]');
        const minsTimer = timerById.querySelector('span[data-value="mins"]');
        const secsTimer = timerById.querySelector('span[data-value="secs"]');

        daysTimer.textContent = `${days}`;
        hoursTimer.textContent = `${hours}`;
        minsTimer.textContent = `${mins}`;
        secsTimer.textContent = `${secs}`;
    }

    /*
   * - Принимает время в миллисекундах
   * - Высчитывает сколько в них вмещается дней/часов/минут/секунд
   * - Возвращает обьект со свойствами days, hours, mins, secs
   */

    getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
    }

    /*
   * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
   */

    pad(value) {
    return String(value).padStart(2, '0');
}
}

const countdownTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('January 01, 2021'),
});



// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('January 01, 2021'),
// });

// Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);